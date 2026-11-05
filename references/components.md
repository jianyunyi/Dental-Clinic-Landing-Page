# Component Architecture & Framer Motion Animation Reference

The **Dental Clinic Landing Page (Dental)** template is crafted with **React 18**, **Tailwind CSS**, and **Framer Motion 11**. It contains 10 interactive medical healthcare sections with fluid layout transitions, touch & mouse drag interactions, and spring physics.

---

## 1. Header & Hero (`Header.jsx`)
- **Responsive Navigation Bar**:
  - Sticky backdrop blur with `#F0FDFA` subtle tint and border separation.
  - Mobile full-screen drawer menu with animated hamburger toggle.
  - Prominent "Reserve Consultation" primary action button with hover glow and spring scale.
- **Hero Presentation**:
  - Main headline with Instrument Serif display typography.
  - Social proof ratings badge (★ 4.98 / 5.0 Rating • 12,000+ Transformed Smiles) with overlapping patient avatar cluster.
  - Hero image showcase with subtle hover parallax and rounded border styling.

---

## 2. About Us (`AboutUs.jsx`)
- **Clinic Philosophy**:
  - Modern, gentle care statement emphasizing tranquil spa-like environment.
- **Statistical Metric Counters**:
  - "18+ Years of Medical Mastery"
  - "99.8% Patient Approval Rate"
  - "14 Board-Certified Ivy League Specialists"
  - "24/7 Dedicated Concierge & Emergency Access"

---

## 3. Our Services (`OurServices.jsx`)
- **6 Core Healthcare Offerings**:
  1. *Preventive Oral Wellness & Airflow Biofilm Therapy*
  2. *Porcelain Veneers & Digital Smile Architecture*
  3. *Clear Aligner Orthodontics (Invisalign Diamond Provider)*
  4. *3D Computer-Guided Single-Day Ceramic Implants*
  5. *Biological Laser Periodontal Therapy*
  6. *Gentle Sleep Dentistry & Twilight Conscious Sedation*
- **Card Micro-interactions**:
  - Hover elevation with smooth box-shadow transition.
  - High-precision clinical dental SVG icons.

---

## 4. Why Choose Us (`WhyChooseUs.jsx`)
- **Core Value Pillars**:
  - **Zero-Anxiety Comfort**: Computer-assisted painless local anesthesia (The Wand®).
  - **Ivy League Specialists**: Multi-disciplinary board-certified clinician team.
  - **Ultra-Low Radiation 3D CBCT**: Sub-millimeter digital surgical accuracy.
  - **Transparent Concierge Memberships**: Direct insurance billing, zero hidden fees.
- **Visual Presentation**:
  - Asymmetrical grid with contrasting clinical teal cards and patient portrait badges.

---

## 5. Our Doctors (`OurDoctors.jsx`)
- **Specialist Profiles**:
  - **Dr. Elena Vance, DDS** — Clinical Director & Aesthetic Smile Architect
  - **Dr. Marcus Chen, DMD, MD** — Chief Oral & Maxillofacial Surgeon
  - **Dr. Sophia Laurent, BDS, MSc** — Lead Orthodontist & Clear Aligner Specialist
  - **Dr. Julian Hayes, DDS** — Microscopic Restorative & Endodontic Specialist
- **Card Interaction**:
  - Hover zoom on doctor portraits, badge popups, and direct booking links.

---

## 6. Interactive Before & After Slider (`BeforeAfter.jsx`)
- **Core Mechanics**:
  - Real-time comparison split slider with touch and mouse drag event listeners.
  - Dynamic `clipPath: inset(0 ${100 - sliderPos}% 0 0)` image clipping mask.
  - Responsive coordinate recalculation based on a 1600px desktop canvas and mobile auto-scaler.
  - Drag handle with dual chevrons, animated pulse states, and threshold boundary clamping (`Math.max(0, Math.min(100, ...))`).

---

## 7. Transparent Pricing Packages (`Pricing.jsx`)
- **Tiered Packages**:
  1. **Essential Preventive Suite ($169)**: Annual comprehensive exam, low-dose digital X-rays, airflow clean, oral cancer screening.
  2. **Lumina Signature Laser Whitening ($699)**: In-office cold laser whitening, remineralizing treatment, custom take-home trays.
  3. **Architectural Smile Makeover ($2,800+)**: 3D digital smile simulation, ultra-thin porcelain veneers, lifetime warranty.
- **Feature Lists**:
  - Checkmark bullet points and CTA button with package selection state.

---

## 8. Patient Testimonials (`Testimonial.jsx`)
- **Verified Review Cards**:
  - 5-star ratings, patient quotes, treatment tags (e.g. "Porcelain Veneers", "Clear Aligners", "Full Smile Rehab").
  - Authentic patient avatars and credentials.

---

## 9. Frequently Asked Questions (`FAQ.jsx`)
- **Accordion Animation**:
  - Smooth height interpolation via `framer-motion` `AnimatePresence`.
  - Icon rotation from `+` to `−`.
  - Clear, reassuring medical answers addressing anxiety, sedation, insurance, and longevity.

---

## 10. Footer (`Footer.jsx`)
- Clinic operating hours, emergency 24/7 hotline, address, interactive navigation links, and copyright notices.
