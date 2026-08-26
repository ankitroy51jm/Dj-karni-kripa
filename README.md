# DJ Karni Kripa Website

Premium static website for GitHub Pages.

## GitHub Pages upload
1. Upload **all files and the `assets` folder** into the repository root.
2. Keep these paths exactly as they are:
   - `assets/owner-devendra-singh.png`
   - `assets/dj-setup.jpg`
   - `assets/payment-qr.jpg`
3. GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
4. Wait for the Pages build to finish, then refresh the live site.

## Important
GitHub Pages is case-sensitive. Do not rename the `assets` folder or image files unless you also update the HTML paths.

The booking calendar currently saves bookings in the same browser/device using local storage. It is not a shared database.

IMPORTANT: Upload the entire `assets` folder to GitHub, not just index.html.
The owner photo is now a real JPEG (`owner-devendra-singh.jpg`) to avoid MIME/extension problems on GitHub Pages.
