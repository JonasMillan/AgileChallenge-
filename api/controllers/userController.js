const { Transactions } = require("../models");
const { showUser } = require("../repository");

const getAllTransactions = (req, res) => {
  const { id } = req.params;
  const UserTransactions = [];
  Transactions.forEach(
    (transaction) =>
      transaction.userId === id && UserTransactions.push(transaction)
  );
  res.status(200).send({ UserTransactions });
};

const getUserInfo = (req, res) => {
  const { id } = req.params;
  const UserAcount = showUser(id);
  if (UserAcount) {
    res.status(200).send({ UserAcount });
  } else {
    res.status(404).send({ messsage: "User not found" });
  }
};

module.exports = {
  getAllTransactions,
  getUserInfo,
};
