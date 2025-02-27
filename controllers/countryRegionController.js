const CountryRegion = require('../models/CountryRegion');

// Create a new country-region entry
exports.create = async (req, res) => {
    try {
        const countryRegion = await CountryRegion.create({
            countryid: req.body.countryid,
            regionid: req.body.regionid
        });
        res.status(201).json(countryRegion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all country-region entries
exports.findAll = async (req, res) => {
    try {
        const countryRegions = await CountryRegion.findAll();
        res.status(200).json(countryRegions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific country-region entry
exports.findOne = async (req, res) => {
    try {
        const countryRegion = await CountryRegion.findByPk(req.params.regionid);
        if (countryRegion) {
            res.status(200).json(countryRegion);
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.update = async (req, res) => {
    try {
        const updated = await CountryRegion.update(
            { countryid: req.body.countryid },  // Only update countryid
            { where: { regionid: req.params.regionid } }
        );
        if (updated[0]) {
            res.status(200).json({ message: 'Entry updated successfully' });
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a country-region entry
exports.delete = async (req, res) => {
    try {
        const deleted = await CountryRegion.destroy({
            where: { regionid: req.params.regionid }
        });
        if (deleted) {
            res.status(204).json({ message: 'Entry deleted' });
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
