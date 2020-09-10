const { effectiveDate } = require("../commons/util");
const { verifyAmount, addRecord } = require("../repository");

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

module.exports = {
  verifyAccountMoney,
  registerTransaction,
};
