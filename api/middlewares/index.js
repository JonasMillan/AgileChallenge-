const { effectiveDate } = require("../commons/util");
const { verifyAmount, addRecord } = require("../repository");
const { validateType, validateAmount } = require("../commons/util");

const verifyAccountMoney = (req, res, next) => {
  const { amount } = req.body;
  const { id } = req.params;
  const message = verifyAmount(id, amount);
  message ? res.status(403).send({ message }) : next();
};

const registerTransaction = (req, _, next) => {
  const { amount, type } = req.body;
  const { id } = req.params;
  const transaction = {
    userId: id,
    amount,
    type,
    effectiveDate: effectiveDate(),
  };
  req.transaction = transaction;
  addRecord(transaction);
  next();
};

const validatePost = (req, res, next) => {
  const { amount, type } = req.body;
  const typeValid = validateType(type);
  const amountValid = validateAmount(amount);
  let message;
  if (!typeValid) {
    message = { message: "Card type not allowed." };
  } else if (!amountValid) {
    message = { message: "Amount can't be a string value." };
  }
  message ? res.status(400).send(message) : next();
};

module.exports = {
  verifyAccountMoney,
  registerTransaction,
  validatePost,
};
