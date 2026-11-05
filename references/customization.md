# Customization Guide

This guide explains how to quickly adapt this template to any dental clinic, cosmetic dentistry studio, orthodontics practice, or medical wellness brand.

---

## 1. Updating Clinic Brand & Contact Info

- **Clinic Name & Nav**: Open `src/components/Header.jsx` and replace:
  - Brand name: `"LUMINA"` with your clinic name.
  - Action button: `"Reserve Consultation"` with your preferred CTA (e.g. `"Book Online"`).
- **Footer Contact Info**: Open `src/components/Footer.jsx` and update:
  - Phone number, address, opening hours, emergency line.

---

## 2. Customizing Services & Treatments

Open `src/components/OurServices.jsx`:
- Edit service titles, descriptions, and icons.
- Add or remove service items by adjusting the cards array.

---

## 3. Customizing Doctor Profiles

Open `src/components/OurDoctors.jsx`:
- Replace doctor names, medical credentials, and roles.
- Replace doctor headshot images with custom clinic photography (recommended aspect ratio: 4:5 or 1:1 square).

---

## 4. Customizing the Before & After Slider

Open `src/components/BeforeAfter.jsx`:
- Replace the image URLs:
  - `before.png`: Image showing the patient's teeth before treatment.
  - `after.png`: Image showing the patient's teeth after treatment.
- Ensure both images have the identical aspect ratio and alignment for seamless split sliding.

---

## 5. Customizing Pricing Tiers

Open `src/components/Pricing.jsx`:
- Update package names, pricing figures, and included service checklists.
- Set popular badge indicators on featured tiers.

---

## 6. Color Scheme & Typography

- Primary Teal: `#0F766E` (Tailwind `teal-700`)
- Accent Mint: `#F0FDFA` (Tailwind `teal-50`)
- Font Families:
  - Headings: `Instrument Serif` (Google Fonts)
  - Body: `Inter Tight` / `Geist` (Google Fonts)
  - Defined in `tailwind.config.js` and loaded in `index.html`.
