const CountryRegion = require('../models/CountryRegion');

exports.create = async (req, res) => {
  try {
    const { country_id, region_id } = req.body;
    if (!country_id || !region_id) {
      return res.status(400).json({ error: 'country_id and region_id are required' });
    }
    const newEntry = await CountryRegion.create({ country_id, region_id });
    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error creating country-region mapping:', error.message);
    res.status(500).json({ error: 'Failed to create country-region entry', details: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const entries = await CountryRegion.findAll();
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching country-region entries:', error.message);
    res.status(500).json({ error: 'Failed to retrieve country-region entries', details: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { region_id } = req.params;
    const entries = await CountryRegion.findAll({ where: { region_id } });
    if (!entries || entries.length === 0) {
      return res.status(404).json({ message: 'Entries not found' });
    }
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching country-region entry:', error.message);
    res.status(500).json({ error: 'Failed to retrieve entry', details: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { country_id, region_id } = req.body;
    if (!country_id || !region_id) {
      return res.status(400).json({ error: 'country_id and region_id are required' });
    }
    const [affectedRows] = await CountryRegion.update(
      { country_id, region_id },
      { where: { id } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Mapping updated successfully' });
  } catch (error) {
    console.error('Error updating country-region mapping:', error.message);
    res.status(500).json({ error: 'Failed to update entry', details: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CountryRegion.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Mapping deleted successfully' });
  } catch (error) {
    console.error('Error deleting country-region mapping:', error.message);
    res.status(500).json({ error: 'Failed to delete entry', details: error.message });
  }
};
