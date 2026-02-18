// GET /api/v1/winnsen/callback/senderName
// Called by Winnsen to retrieve the sender/recipient display name for a waybill.
// Returns: { Status, Data: [{ recipientName }], Message }
const { successResponse, checkKey } = require("../../../_utils");

module.exports = (req, res) => {
  if (!checkKey(req, res)) return;

  const { waybillno } = req.query;
  console.log("[senderName]", { waybillno });

  // Stub: return a placeholder name. In production this would look up the customer.
  res.status(200).json(successResponse([{ recipientName: "LocQar Customer" }]));
};
