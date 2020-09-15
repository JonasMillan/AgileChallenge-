const effectiveDate = () => {
  let today = new Date();
  return today.toISOString();
};

const validateType = (type) => type === "credit" || type === "debit";

const validateAmount = (amount) => typeof amount === "number";

module.exports = {
  effectiveDate,
  validateType,
  validateAmount,
};
