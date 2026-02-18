// GET /api/v1/winnsen/callback/courierPickup
// Called by Winnsen after a courier picks up a sender-dropped parcel from the locker.
const { successResponse, checkKey } = require("../../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, pickupuser, pickuptime } = req.query;
  console.log("[courierPickup]", { waybillno, terminalsn, doorno, pickupuser, pickuptime });

  res.status(200).json(successResponse());
};
