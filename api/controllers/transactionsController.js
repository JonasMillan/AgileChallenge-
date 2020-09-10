const { UpdateUserAmount } = require("../repository");

const postTransaction = async (req, res) => {
  const { transaction } = req;
  const { userId, amount } = transaction;
  UpdateUserAmount(userId, amount);
  res.status(200).send({ ...transaction });
};

module.exports = {
  postTransaction,
};
