## Packages
framer-motion | Smooth animations for marketing pages and UI interactions
lucide-react | Beautiful icons for the interface (already in base, confirming need)
clsx | Utility for constructing className strings conditionally
tailwind-merge | Utility to merge tailwind classes properly

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  sans: ["var(--font-sans)"],
  display: ["var(--font-display)"],
}
Authentication uses cookie-based sessions (credentials: "include").
Images are static assets or Unsplash URLs.
