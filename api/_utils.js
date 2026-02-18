const WINNSEN_KEY = process.env.WINNSEN_KEY;

/**
 * Build a success WinnsenResponse with optional data array entries.
 * @param {object[]} dataEntries - objects to push into the Data array
 */
function successResponse(dataEntries = []) {
  return {
    Status: "Success",
    Data: dataEntries,
    Message: "",
  };
}

function failResponse(message = "") {
  return {
    Status: "FAILED",
    Data: [],
    Message: message,
  };
}

/**
 * Validate the APIKey query param. Returns true if valid (or if WINNSEN_KEY is not set, skips check).
 */
function validateKey(apiKey) {
  if (!WINNSEN_KEY) return true; // allow through if env var not configured (dev fallback)
  return apiKey && apiKey.toLowerCase() === WINNSEN_KEY.toLowerCase();
}

/**
 * Middleware-style key check. Writes 403 + FAILED response and returns false if invalid.
 */
function checkKey(req, res) {
  const apiKey = req.query?.APIKey;
  if (!validateKey(apiKey)) {
    res.status(403).json(failResponse("Unauthorized"));
    return false;
  }
  return true;
}

module.exports = { successResponse, failResponse, checkKey };
