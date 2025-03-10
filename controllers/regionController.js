const Region = require('../models/Region');

exports.create = async (req, res) => {
  try {
    const { region_name } = req.body;
    if (!region_name) {
      return res.status(400).json({ error: 'region_name is required' });
    }
    const newRegion = await Region.create({ region_name });
    res.status(201).json(newRegion);
  } catch (error) {
    console.error('Error creating region:', error.message);
    res.status(500).json({ error: 'Failed to add region', details: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).json(regions);
  } catch (error) {
    console.error('Error fetching regions:', error.message);
    res.status(500).json({ error: 'Failed to retrieve regions', details: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) {
      return res.status(404).json({ message: 'Region not found' });
    }
    res.status(200).json(region);
  } catch (error) {
    console.error('Error fetching region:', error.message);
    res.status(500).json({ error: 'Failed to retrieve region', details: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { region_name } = req.body;
    if (!region_name) {
      return res.status(400).json({ error: 'region_name is required' });
    }
    const [updatedCount] = await Region.update(
      { region_name },
      { where: { region_id: req.params.id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: 'Region not found' });
    }
    const updatedRegion = await Region.findByPk(req.params.id);
    res.status(200).json(updatedRegion);
  } catch (error) {
    console.error('Error updating region:', error.message);
    res.status(500).json({ error: 'Failed to update region', details: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedCount = await Region.destroy({ where: { region_id: req.params.id } });
    if (deletedCount === 0) {
      return res.status(404).json({ message: 'Region not found' });
    }
    res.status(204).json({ message: 'Region deleted successfully' });
  } catch (error) {
    console.error('Error deleting region:', error.message);
    res.status(500).json({ error: 'Failed to delete region', details: error.message });
  }
};
