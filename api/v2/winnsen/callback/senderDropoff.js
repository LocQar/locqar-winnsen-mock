// GET /api/v1/winnsen/callback/senderDropoff
// Called by Winnsen after a sender drops off a parcel at the locker.
const { successResponse, checkKey } = require("../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, dropoffuser, dropofftime } = req.query;
  console.log("[senderDropoff]", { waybillno, terminalsn, doorno, dropoffuser, dropofftime });

  res.status(200).json(successResponse());
};
