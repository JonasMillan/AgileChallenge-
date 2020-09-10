"use strict";

const express = require("express");
const api = express.Router();
const userController = require("../controllers/userController");
const transactionsController = require("../controllers/transactionsController");

/* Middlewares */
const { verifyAccountMoney, registerTransaction } = require("../middlewares");

/* USER ROUTES */
api.get("/users/:id", userController.getUserInfo);
api.get("/users/:id/transactions", userController.getAllTransactions);

/* TRANSACTIONS ROUTES */
api.post(
  "/users/:id/debit",
  verifyAccountMoney,
  registerTransaction,
  transactionsController.postTransaction
);

/* END ROUTES */

module.exports = api;
