import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Legacy local backup files are not application routes/components.
    "app/page+++.tsx",
    "app/layout----.tsx",
    "components/Hero+++.tsx",
    "components/Navbar++++.tsx",
    "components/ContactForm---.tsx",
    "components/LanguageProvider---.tsx",
    "components/Results---.tsx",
  ]),
]);

export default eslintConfig;
