// GET /api/v1/winnsen/callback/recipientPickup
// Called by Winnsen after the recipient picks up a parcel from the locker.
const { successResponse, checkKey } = require("../../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, pickupuser, pickuptime, income } = req.query;
  console.log("[recipientPickup]", { waybillno, terminalsn, doorno, pickupuser, pickuptime, income });

  res.status(200).json(successResponse());
};
