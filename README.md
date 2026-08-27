# DJ Karni Kripa — Premium Booking Website

This version keeps the existing website, photos, music, packages, UPI payment, booking form and contacts, and adds:

- Live two-month availability calendar
- Available / Booked / Pending / Past states
- Past dates are frozen and disabled
- Calendar automatically rolls forward with the current date
- Firebase-backed admin panel for changing date status
- Instagram and YouTube buttons

## Important: connect the admin panel
A real shared admin panel cannot safely use only HTML/localStorage. This package uses Firebase Authentication + Realtime Database.

1. Create a Firebase project.
2. Enable **Authentication → Email/Password**.
3. Create one admin user under Authentication.
4. Create **Realtime Database**.
5. Copy the Firebase Web App configuration into `firebase-config.js`.
6. Add database rules so public users can read `availability`, but only authenticated admins can write it. Do not put a Firebase service-account/private key in this website.
7. Open `admin.html`, sign in, and change dates. The public calendar will update automatically.

The public site works without Firebase too; in that case it shows dates as Available by default and tells you that the live admin database is not connected.
