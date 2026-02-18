# LocQar – Winnsen Callback Mock

Stub server for Winnsen locker callback integration testing.  
All endpoints accept the same query parameters as the production Spring controller and return well-formed `WinnsenResponse` JSON. No business logic (no DB writes, no customer lookups).

API docs (Swagger UI) are available at: `your-app.vercel.app/docs.html`

## Response shape

```json
{
  "Status": "Success",
  "Data": [],
  "Message": ""
}
```

Endpoints that need to return data (`senderName`, `checkCourier`, `checkParcel`) include the relevant object inside the `Data` array.

---

## Endpoints

| Method | Path | Required params |
|--------|------|-----------------|
| GET | `/api/v2/winnsen/callback/courierDropoff` | `waybillno`, `terminalsn`, `doorno`, `dropofftime`, `pickupcode`, `APIKey` |
| GET | `/api/v2/winnsen/callback/recipientPickup` | `waybillno`, `terminalsn`, `doorno`, `pickuptime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/courierRecall` | `waybillno`, `terminalsn`, `doorno`, `pickuptime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/senderDropoff` | `waybillno`, `terminalsn`, `doorno`, `dropofftime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/courierPickup` | `waybillno`, `terminalsn`, `doorno`, `pickuptime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/recipientReturn` | `waybillno`, `terminalsn`, `doorno`, `dropofftime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/courierPickReturnedParcel` | `waybillno`, `terminalsn`, `doorno`, `pickuptime`, `APIKey` |
| GET | `/api/v2/winnsen/callback/senderName` | `waybillno`, `APIKey` |
| GET | `/api/v2/winnsen/callback/checkCourier` | `type`, `account`, `password`, `APIKey` |
| GET | `/api/v2/winnsen/callback/checkParcel` | `waybillno` *(no APIKey required)* |

Optional params (`dropoffuser`, `pickupuser`, `income`, `card`) are accepted but ignored.

---

## Deploy to Vercel

### 1. Install Vercel CLI (if needed)
```bash
npm i -g vercel
```

### 2. Deploy
```bash
cd locqar-winnsen-mock
vercel --prod
```

### 3. Set the API key environment variable
In the Vercel dashboard → Project → Settings → Environment Variables, add:

| Name | Value |
|------|-------|
| `WINNSEN_KEY` | *(the shared secret Winnsen uses in the `APIKey` param)* |

Then redeploy (or trigger a redeploy from the dashboard) to pick up the variable.

> If `WINNSEN_KEY` is not set, the key check is skipped — useful for initial smoke testing.
