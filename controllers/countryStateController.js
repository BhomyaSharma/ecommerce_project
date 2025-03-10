const CountryState = require('../models/CountryState');

exports.getAll = async (req, res) => {
  try {
    const mappings = await CountryState.findAll();
    res.status(200).json(mappings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const mapping = await CountryState.findByPk(req.params.id);
    if (!mapping) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(mapping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { country_id, state_id } = req.body;
    if (!country_id || !state_id) {
      return res.status(400).json({ error: 'Both country_id and state_id are required' });
    }
    const newEntry = await CountryState.create({ country_id, state_id });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { country_id, state_id } = req.body;
    if (!country_id || !state_id) {
      return res.status(400).json({ error: 'Both country_id and state_id are required' });
    }
    const [updatedCount] = await CountryState.update(
      { country_id, state_id },
      { where: { id: req.params.id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedCount = await CountryState.destroy({ where: { id: req.params.id } });
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
