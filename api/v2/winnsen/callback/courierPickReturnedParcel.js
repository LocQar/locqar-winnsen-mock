// GET /api/v1/winnsen/callback/courierPickReturnedParcel
// Called by Winnsen after a courier picks up a recipient-returned parcel from the locker.
const { successResponse, checkKey } = require("../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, pickupuser, pickuptime } = req.query;
  console.log("[courierPickReturnedParcel]", { waybillno, terminalsn, doorno, pickupuser, pickuptime });

  res.status(200).json(successResponse());
};
