import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding:0;
    margin: 0;
    box-sizing: border-box;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
body {
    font-family: var(--font-family);
}
button {
    font-family: var(--font-family);
    outline: none;
    border: none;
}
:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
}
.skip-link {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 9999;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--color-white-100);
    color: var(--color-black-100);
    transform: translateY(-160%);
}
.skip-link:focus {
    transform: translateY(0);
}
:root {
  /* =========================
     COLORS
  ========================= */

  /* Black */
  --color-badge: #3e545d;
  --color-black-100: #172023;
  --color-black-50: #8b8f91;
  --color-black-20: #a2a6a7;
  --color-black-10: #1720231a;
  --color-black-5: #f3f4f4;

  /* White */
  --color-white-100: #ffffff;
  --color-white-80: rgba(255, 255, 255, 0.8);
  --color-white-40: rgba(255, 255, 255, 0.4);
  --color-white-10: rgba(255, 255, 255, 0.1);

  /* Primary */
  --color-primary: #07be8a;


  /* =========================
     FONT FAMILY
  ========================= */

  --font-family : "Bricolage Grotesque", sans-serif;
  /* =========================
     FONT WEIGHTS
  ========================= */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;


  /* =========================
     BODY TYPOGRAPHY
  ========================= */

  /* Extra Large */
  --text-xl-size: 96px;
  --text-xl-line-height: 1.4;
  --text-xl-letter-spacing: -0.1px;
  --text-xl-weight: var(--font-weight-regular);

  /* Large */
  --text-lg-size: 20px;
  --text-lg-line-height: 1.4;
  --text-lg-letter-spacing: -0.1px;
  --text-lg-weight: var(--font-weight-medium);

  /* Medium */
  --text-md-size: 18px;
  --text-md-line-height: 1.4;
  --text-md-letter-spacing: -0.1px;

  /* Regular */
  --text-base-size: 16px;
  --text-base-line-height: 1.4;
  --text-base-letter-spacing: -0.1px;
  --text-base-weight: var(--font-weight-regular);

  /* Small */
  --text-sm-size: 14px;
  --text-sm-line-height: 1.4;
  --text-sm-letter-spacing: -0.1px;
  --text-sm-weight: var(--font-weight-semibold);


  /* =========================
     HEADINGS
  ========================= */

  /* Heading 1 */
  --heading-1-size: 96px;
  --heading-1-line-height: 1.2;
  --heading-1-letter-spacing: -0.02em;
  --heading-1-weight: var(--font-weight-semibold);

  /* Heading 2 */
  --heading-2-size: 52px;
  --heading-2-line-height: 1.2;
  --heading-2-letter-spacing: -0.02em;
  --heading-2-weight: var(--font-weight-semibold);

  /* Heading 3 */
  --heading-3-size: 40px;
  --heading-3-line-height: 1.2;
  --heading-3-letter-spacing: -0.02em;
  --heading-3-weight: var(--font-weight-semibold);

  /* Heading 4 */
  --heading-4-size: 32px;
  --heading-4-line-height: 1.2;
  --heading-4-letter-spacing: -0.02em;
  --heading-4-weight: var(--font-weight-semibold);

  /* Heading 5 */
  --heading-5-size: 24px;
  --heading-5-line-height: 1.2;
  --heading-5-letter-spacing: -0.02em;
  --heading-5-weight: var(--font-weight-semibold);

  /* Heading 6 */
  --heading-6-size: 20px;
  --heading-6-line-height: 1.2;
  --heading-6-letter-spacing: -0.02em;
  --heading-6-weight: var(--font-weight-semibold);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
a {
color : black;
}
`;
