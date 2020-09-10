const effectiveDate = () => {
  let today = new Date();
  return today.toISOString();
};

module.exports = {
  effectiveDate,
};
