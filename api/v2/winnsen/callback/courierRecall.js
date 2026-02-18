// GET /api/v1/winnsen/callback/courierRecall
// Called by Winnsen when a courier recalls an uncollected parcel from the locker.
const { successResponse, checkKey } = require("../../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, pickupuser, pickuptime } = req.query;
  console.log("[courierRecall]", { waybillno, terminalsn, doorno, pickupuser, pickuptime });

  res.status(200).json(successResponse());
};
