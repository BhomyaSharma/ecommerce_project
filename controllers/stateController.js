const State = require('../models/State');

exports.create = async (req, res) => {
  try {
    const { state_name } = req.body;
    if (!state_name) {
      return res.status(400).json({ error: 'state_name is required' });
    }
    const newState = await State.create({ state_name });
    res.status(201).json({ message: 'State created successfully', data: newState });
  } catch (error) {
    console.error('Error creating state:', error.message);
    res.status(500).json({ error: 'Failed to create state', details: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).json({ message: 'States retrieved successfully', data: states });
  } catch (error) {
    console.error('Error fetching states:', error.message);
    res.status(500).json({ error: 'Failed to retrieve states', details: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const state = await State.findByPk(req.params.stateid);
    if (!state) {
      return res.status(404).json({ error: 'State not found' });
    }
    res.status(200).json({ message: 'State retrieved successfully', data: state });
  } catch (error) {
    console.error('Error fetching state:', error.message);
    res.status(500).json({ error: 'Failed to retrieve state', details: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { state_name } = req.body;
    if (!state_name) {
      return res.status(400).json({ error: 'state_name is required' });
    }
    const [updatedCount] = await State.update(
      { state_name },
      { where: { state_id: req.params.stateid } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'State not found' });
    }
    const updatedState = await State.findByPk(req.params.stateid);
    res.status(200).json({ message: 'State updated successfully', data: updatedState });
  } catch (error) {
    console.error('Error updating state:', error.message);
    res.status(500).json({ error: 'Failed to update state', details: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedCount = await State.destroy({ where: { state_id: req.params.stateid } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'State not found' });
    }
    res.status(200).json({ message: 'State deleted successfully' });
  } catch (error) {
    console.error('Error deleting state:', error.message);
    res.status(500).json({ error: 'Failed to delete state', details: error.message });
  }
};
