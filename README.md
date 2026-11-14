# VELORA — Luxury Outerwear & Women's Fashion E-Commerce Atelier
### University Student Presentation & Technical Defense Documentation

> **Specialization:** Designer Jackets for Girls & Women  
> **Brand Identity:** High-fashion, elegant minimalism, black/white/beige/mocha color palette, artisanal tailoring.  
> **Technology Stack:** React 18, Tailwind CSS, Lucide Vector Icons, LocalStorage Data Persistence, Babel Standalone.

---

## 1. Quick Start Guide (How to Run)

This project has been engineered to be **100% portable** with zero command-line setup or complex dependencies required:

### Option A: Direct Browser Launch (Easiest)
1. Navigate to the project folder:
   ```
   C:\Users\Urban Tech\.gemini\antigravity\scratch\velora-fashion\
   ```
2. Double-click **`index.html`** or open it in **Google Chrome** or **Microsoft Edge**.
3. All React components, Tailwind styling, images, and mock data will render instantly.

### Option B: Local Development HTTP Server
1. Double-click **`start-server.bat`** (or execute `.\server.ps1` in PowerShell).
2. It launches an automated local HTTP server on `http://localhost:3000/index.html` and opens your default browser.

---

## 2. Project Architecture & File Structure

```
velora-fashion/
├── index.html          # Self-contained master entry point (bundled for offline & online execution)
├── app.js              # Core React components, state management, pages, and interactive drawers
├── products.js         # Complete catalog dataset (16 jackets, categories, reviews, collections, FAQs)
├── server.ps1          # Lightweight zero-dependency PowerShell HTTP server script
├── start-server.bat    # 1-click launcher for Windows
├── vendor/             # Local offline copies of runtime libraries
│   ├── react.min.js
│   ├── react-dom.min.js
│   ├── babel.min.js
│   └── tailwind.js
└── README.md           # Project documentation & presentation guide
```

---

## 3. Brand Identity & Design System

* **Color Palette:**
  * **Midnight Charcoal / Onyx Black (`#111111`, `#1A1817`):** Represents timeless Parisian haute couture and authority.
  * **Alabaster & Silk Cream (`#FAF7F2`, `#F4EFEA`):** Provides a warm, luxury editorial backdrop avoiding harsh clinical whites.
  * **Sandstone & Desert Beige (`#E8DFD5`, `#D4C3B3`):** Neutral luxury tones evoking artisanal leather and camel wool.
  * **Burnished Caramel & Warm Mocha (`#D4A373`, `#8C6D53`, `#5B4033`):** Rich accents highlighting buttons, tags, badges, and interactive elements.
* **Typography:**
  * **Editorial Headings:** *Cormorant Garamond* / *Playfair Display* (classic high-fashion serifs seen in Vogue, Harper's Bazaar).
  * **User Interface & Body:** *Plus Jakarta Sans* / *Inter* (crisp, modern, high-legibility sans-serif with tracked uppercase labels).
* **Photography & Assets:**
  * High-resolution fashion editorial photography of women wearing tailored leather, vintage denim, alpine down shearling, and cropped silhouettes.

---

## 4. Key Pages & Features Checklist

| # | Page / Feature | Implemented Functionality |
|---|---|---|
| **1** | **Home Page** | Announcement ticker, brand logo, luxury nav bar, hero banner ("Discover Your Style"), 4 value propositions, 4 curated collections preview, Editor's Featured jackets, New Arrivals vs Best Sellers tabs, Atelier editorial story, client review quotes, 10% discount newsletter subscription, luxury footer. |
| **2** | **Shop Catalog** | 16 designer jackets across 5 categories: Denim, Leather, Winter, Cropped, and Casual Jackets. Live instant search, category tabs & sidebar filters, price slider ($150-$600), in-stock toggle, sorting (Featured, Newest, Price Low-High, Price High-Low, Rating), and reset filters. |
| **3** | **Product Details** | 4-thumbnail interactive photo gallery with main image preview, star rating and reviews count, size selector (XS, S, M, L, XL), interactive Size Guide modal, color swatches with active state, quantity selector, "Add to Shopping Bag", "Buy Now with 1-Click", Wishlist toggle, specifications accordions, interactive "Write a Review" form, and curated related jackets. |
| **4** | **Shopping Bag** | Slide-over Cart Drawer AND dedicated Cart View. Add/remove items, quantity adjust (+/-), subtotal calculation, free shipping progress meter ($150 threshold), working promo code system (`VELORA10` for 10% off, `VIP20` for 20% off), tax calculation, and persistent storage via `localStorage`. |
| **5** | **Checkout & Confirmation** | Multi-step form with customer contact details, delivery address, shipping method, and 4 payment options (Credit Card with card inputs, Apple Pay, PayPal, Cash on Delivery). Live form validation with error indicators. Place order processing state followed by a complete Order Confirmation receipt with generated Order ID (e.g., `#VEL-849201`). |
| **6** | **About Us** | Brand genesis, Paris atelier heritage, mission and vision statements, "Why Choose VELORA?", ethical sourcing pledge (LWG Gold leathers, GOTS organic selvedge, RDS down), and craftsmanship statistics. |
| **7** | **Contact Concierge** | Full contact form with live validation and success alert, direct atelier address (Paris), phone number, email concierge, social links, and an interactive FAQ accordion. |
| **8** | **Additional Features** | Wishlist slide-over drawer (with "Move All to Bag"), Client Sign In / Register modal with prefilled demo credentials, instant search modal, quick view popup, and back-to-top floating button. |

---

## 5. Technical Highlights for University Presentation Defense

When presenting this project to your professor or committee, you can highlight these four key engineering aspects:

### 1. State Management & Data Flow
* Utilizes React hooks (`useState`, `useEffect`, `useMemo`, `useRef`) for predictable single-directional data flow.
* Centralized financial calculations (subtotal, discounts, shipping, taxes, grand total) are wrapped in `useMemo` hooks to prevent unnecessary recalculations during re-renders.

### 2. Client-Side Persistence (`localStorage`)
* Both `cart` and `wishlist` state automatically sync with the browser's `localStorage`.
* When refreshing the page or navigating between routes, user selections, selected sizes, and quantities remain intact.

### 3. Declarative Component Breakdown
* High degree of component reusability:
  * `<ProductCard />` handles hover overlays, thumbnail previews, wishlist status, and badges across Home, Shop, and Related Products sections.
  * `<Icon />` provides a zero-dependency vector icon dictionary with SVG rendering, ensuring no broken font icons or missing CDN assets.
  * Modals (`<AuthModal />`, `<SizeGuideModal />`, `<QuickViewModal />`) are decoupled and controlled via state flags.

### 4. Form Validation & UX Defensive Design
* The checkout and contact forms validate required inputs (email pattern, phone number, address, and card details) before dispatching submissions.
* Clear visual error messages appear beneath erroneous inputs to guide users.

---

## 6. University Presentation Q&A Cheat Sheet

* **Q1: Why did you choose React for this e-commerce project?**
  * *Answer:* React's component-based architecture allows modularity and rapid state synchronization. Features like the cart count badge in the header, the slide-over cart drawer, and the checkout summary all subscribe to the same central cart state, ensuring instantaneous visual consistency without manual DOM manipulation.

* **Q2: How is responsiveness handled?**
  * *Answer:* Using Tailwind CSS responsive breakpoints (`sm:`, `md:`, `lg:`), the layout adapts from multi-column desktop grids (4 columns) to mobile single-column layouts with a dedicated slide-in navigation drawer for smartphones and tablets.

* **Q3: How does the pricing and promo code logic work?**
  * *Answer:* The subtotal is calculated by reducing through the active cart items. When the user inputs valid voucher codes like `VELORA10`, an active discount object calculates a 10% reduction, dynamically adjusting sales tax (8%) and unlocking free express shipping when the net subtotal exceeds $150.

---
*Created for VELORA Haute Outerwear — All Rights Reserved.*
