// GET /api/v1/winnsen/callback/checkParcel
// Called by Winnsen to verify a parcel waybill before operations.
// Returns: { Status, Data: [{ Phone }], Message }  — or Fail status if parcel is not ready.
// Note: this endpoint does NOT require an APIKey per the original implementation.
const { successResponse } = require("../../../_utils");

module.exports = (req, res) => {
  const { waybillno } = req.query;
  console.log("[checkParcel]", { waybillno });

  // Stub: always treat the parcel as valid and return a placeholder phone number.
  res.status(200).json(successResponse([{ Phone: "0200000000" }]));
};
