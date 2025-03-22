import express from 'express';
import Customer from '../models/customer.model.js';

const router = express.Router();

// Route to create a new customer
router.post('/register', async (req, res) => {
    try {
        const { customerID, first_name, last_name, email } = req.body;

        // Check if the customer already exists
        const existingCustomer = await Customer.findOne({ customerID });
        if (existingCustomer) {
            return res.status(400).json({ message: "Customer already exists" });
        }

        // Create new customer
        const newCustomer = new Customer({
            customerID,
            first_name,
            last_name,
            email
        });

        await newCustomer.save();
        res.status(201).json({ message: "Customer registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
