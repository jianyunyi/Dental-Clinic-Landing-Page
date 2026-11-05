---
name: dental-clinic-landing-page
description: >-
  Use this skill whenever the user asks to clone, replicate, scaffold, or generate
  a modern dental clinic, healthcare, medical, or oral wellness landing page based on
  the Dental / Jiro Build template, complete with 10 interactive sections, Framer Motion
  animations, an interactive before/after teeth whitening split slider, doctor profiles,
  pricing cards, and responsive layouts.
---

# Dental Clinic Landing Page (Dental 1:1 Template Skill)

This skill provides a complete, production-ready design system and generator for creating high-converting, modern dental clinic and healthcare wellness landing pages identical to the **Dental** template from Jiro Build.

## Capabilities

- **1:1 Template Replica**: Instantly scaffold a complete Vite + React 18 + Tailwind CSS + Framer Motion project with all 10 core healthcare sections.
- **Interactive Experience & Micro-animations**:
  1. **Header & Navigation**: Fixed responsive navbar with smooth backdrop blur, mobile drawer, high-converting "Book an Appointment" CTA, and hero banner with patient proof ratings (4.9/5 stars from 1,200+ patients).
  2. **About Us Section**: Gentle clinical ethos, certified specialist badges, and patient satisfaction statistics.
  3. **Our Services**: Grid of clinical offerings (Cosmetic Dentistry, Orthodontics, Dental Implants, Teeth Whitening, Pediatric & Preventive Care) with subtle hover elevations and iconography.
  4. **Why Choose Us**: 4 distinct patient benefit cards highlighting gentle sedation options, cutting-edge 3D digital imaging, transparent pricing, and flexible appointments.
  5. **Our Doctors & Specialists**: High-resolution doctor team cards featuring portraits, medical credentials, dental board certifications, and specialties.
  6. **Interactive Before & After Teeth Whitening Slider**: Real-time comparison split slider with touch & mouse pointer drag physics, dynamic SVG separator, and responsive scale canvas.
  7. **Transparent Pricing Packages**: Clean tiered dental care packages (Essential Checkup, Smile Makeover, Restorative Implant) with benefit checklists and booking CTAs.
  8. **Patient Testimonials & Reviews**: Verified patient review cards with star ratings and heartfelt quotes.
  9. **Interactive FAQ Accordion**: Smooth height spring animation for common dental questions (insurance coverage, pain-free anesthesia, emergency visits).
  10. **Clinical Footer**: Comprehensive clinic hours, emergency phone numbers, address, and legal links.

---

## Quick Scaffolding Workflow

When the user requests to replicate or create a dental/healthcare website using this skill:

### Step 1: Run the Scaffold Script
Execute the scaffold helper to generate a clean project directory:

```bash
node "<skill-directory>/scripts/scaffold.js" "<target-directory>" --name "<project-name>"
```

*Example:*
```bash
node "C:\Users\asus\.gemini\config\skills\dental-clinic-landing-page\scripts\scaffold.js" "C:\Users\asus\.gemini\antigravity\scratch\my-dental-clinic" --name "my-dental-clinic"
```

### Step 2: Install Dependencies
Navigate into the newly scaffolded directory and install dependencies:

```bash
cd "<target-directory>"
pnpm install
```
*(On Windows, run `pnpm install` with bypass sandbox permissions if necessary).*

### Step 3: Run or Build
- **Development preview**: `pnpm run dev` (starts Vite on `http://localhost:3000`)
- **Production build**: `pnpm run build` (outputs optimized bundle to `dist/`)
- **Direct Double-Click Preview**: Open `standalone.html` directly in any web browser without needing any active web server.
- **One-click Desktop Launcher**: Run `start-site.bat` directly on Windows.

---

## Customization Procedures

To customize the website for a specific clinic, dentist, or health practice:

1. **Clinic Branding & Contact Info**:
   - In `src/components/Header.jsx`: Edit clinic name, phone number, and appointment booking link.
   - In `src/components/Footer.jsx`: Update clinic address, working hours, and emergency hotline.
2. **Interactive Before & After Images**:
   - In `src/components/BeforeAfter.jsx`: Replace `https://cdn.jiro.build/Dentis/Image/before.png` and `after.png` with custom clinical photos.
3. **Doctors & Staff**:
   - In `src/components/OurDoctors.jsx`: Update names, qualifications, doctor photos, and specialties.
4. **Services & Pricing**:
   - In `src/components/OurServices.jsx`: Adjust dental services and descriptions.
   - In `src/components/Pricing.jsx`: Update treatment package costs and included features.
5. **Theme Colors & Typography**:
   - Primary palette: Teal `#0F766E` and Mint `#F0FDFA` / `#CCFBF1`.
   - Fonts: `Instrument Serif` for headings and `Inter Tight` / `Geist` for body copy.
