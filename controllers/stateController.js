const State = require('../models/State');

// Create a new State
exports.create = async (req, res) => {
    try {
        const state = await State.create({
            statename: req.body.statename
        });
        res.status(201).json(state);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all States
exports.findAll = async (req, res) => {
    try {
        const states = await State.findAll();
        res.status(200).json(states);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific State by ID
exports.findOne = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.stateid);
        if (state) {
            res.status(200).json(state);
        } else {
            res.status(404).json({ message: 'State not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a State
exports.update = async (req, res) => {
    try {
        const updated = await State.update(
            { statename: req.body.statename },
            { where: { stateid: req.params.stateid } }
        );
        if (updated[0]) {
            res.status(200).json({ message: 'State updated successfully' });
        } else {
            res.status(404).json({ message: 'State not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a State
exports.delete = async (req, res) => {
    try {
        const deleted = await State.destroy({
            where: { stateid: req.params.stateid }
        });
        if (deleted) {
            res.status(204).json({ message: 'State deleted' });
        } else {
            res.status(404).json({ message: 'State not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
