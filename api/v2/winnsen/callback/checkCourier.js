// GET /api/v1/winnsen/callback/checkCourier
// Called by Winnsen to verify a courier before they can operate on the locker.
// Returns: { Status, Data: [{ Name }], Message }
const { successResponse, checkKey } = require("../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { type, account, password, card } = req.query;
  console.log("[checkCourier]", { type, account, card });
  // Password intentionally not logged

  // Stub: accept any credentials and return a placeholder name.
  res.status(200).json(successResponse([{ Name: "LocQar Courier" }]));
};
