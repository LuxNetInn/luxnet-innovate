/**
 * Umami analytics loader.
 *
 * Umami is injected dynamically and ONLY when both env vars are present, so a
 * missing/incomplete config can never leave a broken <script> in production
 * (the previous static placeholder rendered as `src="%VITE_ANALYTICS_ENDPOINT%/umami"`).
 *
 * Configure in Netlify (or a local .env):
 *   VITE_ANALYTICS_SRC=https://your-umami-domain/script.js
 *   VITE_ANALYTICS_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export function initAnalytics(): void {
  const src = import.meta.env.VITE_ANALYTICS_SRC;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!src || !websiteId) {
    // Analytics not configured — silently skip. No broken script, no build warning.
    return;
  }

  if (document.querySelector(`script[data-umami-src]`)) {
    return; // Already injected.
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  script.setAttribute("data-website-id", websiteId);
  script.setAttribute("data-umami-src", "");
  document.head.appendChild(script);
}
