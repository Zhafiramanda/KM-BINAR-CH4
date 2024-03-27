const { Customer } = require("../models");

const createCustomer = async (req, res) => {
    const { name, age, email, city } = req.body;

    try {
        const newCustomer = await Customer.create({
            name,
            email,
            age,
            city,
        });
        res.status(200).json({
            status: "success",
            data: {
                newCustomer,
            },
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: "error",
            message: "An error occurred while creating the customer.",
        });
    }
};

module.exports = { createCustomer };
