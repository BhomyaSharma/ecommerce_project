const CountryState = require('../models/countryState');

exports.getAll = async (req, res) => {
  try {
    const states = await CountryState.getAll();
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const state = await CountryState.getById(req.params.id);
    if (!state) return res.status(404).json({ message: "Not found" });
    res.json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { country_id, state_id } = req.body;
    const newEntry = await CountryState.create({ country_id, state_id });
    res.json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { country_id, state_id } = req.body;
    const result = await CountryState.update(req.params.id, { country_id, state_id });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await CountryState.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
