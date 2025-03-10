const Country = require('../models/Country');

exports.create = async (req, res) => {
  try {
    const { country_name } = req.body;
    if (!country_name) {
      return res.status(400).json({ error: 'Country name is required' });
    }
    // Check if the country already exists
    const existingCountry = await Country.findOne({ where: { country_name } });
    if (existingCountry) {
      return res.status(409).json({ error: 'Country already exists' });
    }
    // Create new country
    const newCountry = await Country.create({ country_name });
    res.status(201).json({ message: 'Country added successfully', country_id: newCountry.country_id });
  } catch (error) {
    console.error('Error creating country:', error.message);
    res.status(500).json({ error: 'Failed to add country', details: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    res.status(500).json({ error: 'Failed to retrieve countries', details: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json(country);
  } catch (error) {
    console.error('Error fetching country:', error.message);
    res.status(500).json({ error: 'Failed to retrieve country', details: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { country_name } = req.body;
    if (!country_name) {
      return res.status(400).json({ error: 'Country name is required' });
    }
    const [affectedRows] = await Country.update({ country_name }, { where: { country_id: id } });
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json({ message: 'Country updated successfully' });
  } catch (error) {
    console.error('Error updating country:', error.message);
    res.status(500).json({ error: 'Failed to update country', details: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Country.destroy({ where: { country_id: id } });
    if (deleted === 0) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json({ message: 'Country deleted successfully' });
  } catch (error) {
    console.error('Error deleting country:', error.message);
    res.status(500).json({ error: 'Failed to delete country', details: error.message });
  }
};
