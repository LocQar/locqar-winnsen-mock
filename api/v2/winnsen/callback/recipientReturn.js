// GET /api/v1/winnsen/callback/recipientReturn
// Called by Winnsen after a recipient returns a parcel to the locker.
const { successResponse, checkKey } = require("../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno, terminalsn, doorno, dropoffuser, dropofftime } = req.query;
  console.log("[recipientReturn]", { waybillno, terminalsn, doorno, dropoffuser, dropofftime });

  res.status(200).json(successResponse());
};
