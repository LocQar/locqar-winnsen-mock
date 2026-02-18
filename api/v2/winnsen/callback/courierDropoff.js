// POST /api/v1/winnsen/callback/courierDropoff
// Called by Winnsen after a courier drops off a parcel at the locker.
const { successResponse, checkKey } = require("../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, dropoffuser, dropofftime, pickupcode } = req.query;
  console.log("[courierDropoff]", { waybillno, terminalsn, doorno, dropoffuser, dropofftime, pickupcode });

  res.status(200).json(successResponse());
};
