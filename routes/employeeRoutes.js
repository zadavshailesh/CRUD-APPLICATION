const express = require('express');
const employeeRouter = express.Router();
const employeeController = require('../controllers/employeeController');

employeeRouter.post('/employee', employeeController.insert);
employeeRouter.get('/employees',employeeController.read);
employeeRouter.get('/employees/:id',employeeController.readById);
employeeRouter.put("/employee/:id",employeeController.update);
employeeRouter.delete("/employee/:id",employeeController.deleteEmployee);

module.exports = employeeRouter;
