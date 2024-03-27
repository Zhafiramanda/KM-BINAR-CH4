const router = require("express").Router();

const Customer = require("./customerRouter");

router.use("/api/v1/customer", Customer);

module.exports = router;
