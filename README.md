# AllStunts Inc. Rigging Inventory

A browser-based inventory and inspection register for stunt rigging equipment.

## Included

- Branded SVG header/logo
- Searchable asset register
- Asset creation, editing and deletion
- Check-in/check-out workflow and movement history
- Inspection due/overdue dashboard
- Projects and kit allocation
- Google Sheets CSV sync
- CSV import/export
- Offline local storage
- Responsive desktop/tablet/mobile layout

## Run locally

Open `index.html` in a browser, or serve the folder with a simple local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Put it online

Upload every file in this folder to a GitHub repository and enable GitHub Pages from the repository root.

## Connect Google Sheets

### Fastest method: publish as CSV

1. In Google Sheets choose **File → Share → Publish to web**.
2. Select the inventory sheet/tab and choose **Comma-separated values (.csv)**.
3. Paste the generated URL into **Google Sheets sync** inside the app.

Publishing makes that sheet accessible to anyone with the URL. Do not use this method for information that must stay private.

### Private production method

Use a Google Apps Script web app or a small authenticated backend. The frontend is ready to consume a CSV/JSON endpoint, but authentication and write-back should be added server-side rather than placing credentials in browser code.

## Expected headings

The CSV importer recognises the headings used in the supplied master register:

- ASSET ID (Barcode/SN)
- CATERGORY or CATEGORY
- EQUIPMENT
- MANUFACTURER
- COMPANY TAG / MARKING
- SWL / WLL
- ENTERED SERVICE
- INSPECTION INTERVAL
- LAST INSPECTION
- INSPECTED BY
- NEXT INSPECTION
- CURRENT STATUS

## Important

This version saves operational changes in the browser. Google Sheets synchronisation currently refreshes the app from the sheet; it does not write edits back to Google Sheets. Bidirectional write-back requires Google OAuth or a secured Apps Script/backend endpoint.
