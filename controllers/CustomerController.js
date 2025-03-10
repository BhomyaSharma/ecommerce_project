const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    if (!customers || customers.length === 0) {
      return res.status(404).json({ error: "No customers found" });
    }
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error fetching customer:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: 'first_name, last_name, email, and password are required' });
    }
    // Optionally, check for duplicates here if needed
    const newCustomer = await Customer.create({
      first_name,
      last_name,
      email,
      password,
      phone: phone || null
    });
    res.status(201).json({ message: 'Customer created successfully', customer_id: newCustomer.customer_id });
  } catch (error) {
    console.error('Error creating customer:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password, phone } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: 'first_name, last_name, email, and password are required' });
    }
    const [updatedCount] = await Customer.update(
      { first_name, last_name, email, password, phone },
      { where: { customer_id: id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await Customer.destroy({ where: { customer_id: id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error.message);
    res.status(500).json({ error: error.message });
  }
};
