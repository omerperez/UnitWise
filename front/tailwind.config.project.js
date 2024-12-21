const colors = {
  untitled: {
    background: "#FBFBFB",
  },
  "untitled-primary": {
    100: "#F4EBFF",
    500: "#9E77ED",
  },
  "untitled-error": {
    50: "#FDF1F2",
    100: "#FEE4E2",
    200: "#FECDD3",
    300: "#FDA29B",
    500: "#F04438",
    700: "#9F1239",
  },
  "untitled-gray": {
    100: "#EAECF0",
    200: "#DCDFE466",
    300: "#D0D5DD",
    600: "#475467",
    900: "#F4F5F9",
  },
  "skeleton-gray": {
    100: "#eaecf0",
  },
  "untitled-orange": {
    300: "#FFF7ED",
    400: "#FED7AA",
    500: "#F59E0B",
    700: "#78350F",
  },
  "untitled-green": {
    300: "#ECFDF5",
    400: "#A7F3D0",
    500: "#6EE7B7",
    600: "#D3F8E9",
    700: "#064E3B",
    800: "#065F46",
  },
  "untitled-purple": {
    100: "#c8cdf1",
    200: "#E0E7FF",
    300: "#0216C9",
    700: "#A5B4FC",
  },
  "untitled-blue": {
    100: "#E3E9FC",
    500: "#C7D2FA",
    900: "#FAFCFE",
  },
  "untitled-white": {
    100: "#DDDFE4",
  },
  primary: {
    50: "#E7ECFD",
    100: "#A8B8F7",
    200: "#7A8DE9",
    300: "#5063DB",
    400: "#293BCE",
    450: "#0018ED",
    500: "#0216C9",
    600: "#020B9C",
    700: "#010478",
    800: "#000053",
    900: "#02002E",
  },
  gray: {
    50: "#F7F8F9",
    100: "#F1F2F4",
    150: "#F3F4F6",
    200: "#DCDFE4",
    300: "#B3B9C4",
    400: "#8590A2",
    500: "#758195",
    550: "#636C7D",
    600: "#44546F",
    700: "#2C3E5D",
    800: "#172B4D",
    900: "#091E42",
  },
  blue: {
    50: "#FAFCFF",
    100: "#F0F5FF",
    200: "#D6E4FF",
    300: "#ADC6FF",
    400: "#88A8FF",
    500: "#597EF7",
    600: "#2F54EB",
    700: "#10239E",
    750: "#0018ED",
    800: "#061178",
    900: "#030852",
  },
  yellow: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
  green: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  neutral: {
    50: "#F6F5F8",
    100: "#F0F0F5",
    200: "#D3D4DD",
    300: "#AAAAB9",
    400: "#9494A8",
    500: "#7A7B8E",
    600: "#515162",
    700: "#33343E",
    800: "#1C1C21",
    900: "#0C0C0D",
  },
  surface: {
    secondary: "#FFFFFF",
  },
};

colors["severity"] = {
  100: "#10B981",
  300: "#F59E0B",
  500: "#EA580C",
  700: "#FBBF24",
  900: "#E11D48",
};

colors["interactive-primary"] = {
  default: "#FFFFFF",
  hover: colors.primary[50],
  focus: "#E7ECFD",
  selected: colors.blue[100],
  active: colors.primary[700],
  disabled: colors.gray[100],
};

colors["status"] = {
  open: "#2DD4BF",
  sent: "#7DD3FC",
  validating: "#F59E0B",
  validated: "#D946EF",
  in_progress: "#7C3AED",
  resolved: "#2F54EB",
  dismiss: "#44546F",
};

colors["navigation"] = {
  "top-bg-hover": "#33343E",
  "side-arrow-icon": "#344054",
  "side-arrow-stroke": "#D9DDE4",
  "top-icon-active": "#528BFF",
  "icon-active": "#2970FF",
  "side-bg-hover": "#F5F5F6",
  "side-bg-selected": "#F5F8FF",
  "top-bg-avatar-selected": "#3E4784",
};

colors["text"] = {
  primary: "#1F242F",
  tertiary: "#70707B",
};

colors["tooltip"] = {
  "bg-default": "#0D121C",
};

colors["tab"] = {
  "text-default": "#475467",
  "text-active": "#182230",
  "text-disabled": "#A0A0AB",
  "bg-active-button": "#FFFFFF",
  "page-background": "#F4F5F9",
};

const keyframes = {
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  "fade-in-left": {
    "0%": { opacity: "0", transform: "translateX(-20px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
  "fade-in-right": {
    "0%": { opacity: "0", transform: "translateX(20px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
};

const animation = {
  "fade-in": "500ms fade-in ease-out",
  "fade-in-left": "fade-in-left 400ms ease-out",
  "fade-in-right": "fade-in-right 400ms ease-out",
};

colors["border"] = {
  invert: "#FFFFFF",
  minimal: colors.gray[100],
  subtle: colors.gray[200],
  moderate: colors.gray[300],
  info: colors.blue[300],
  error: colors.rose[300],
  success: colors.green[300],
  warning: colors.yellow[300],
};

const boxShadow = {
  sm: "0px 2px 12px 0px rgba(9, 30, 66, 0.07)",
  lg: "0px 1px 3px 0px rgba(9, 30, 66, 0.10), 0px 4px 4px 0px rgba(9, 30, 66, 0.06)",
  sysShadowSm: "0px 4px 12px 0px rgba(39, 41, 55, 0.08)",
};

const zIndex = {
  "side-nav": "30",
  modal: "40",
};

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
        "text-highlight": "#D1E0FF",
        page: colors.gray[150],
      },
      keyframes,
      animation,
      boxShadow,
      zIndex,
    },
    typography: (theme) => ({
      "headline-1": {
        css: {
          fontSize: theme("fontSize.4xl")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2.5rem",
          letterSpacing: "0",
        },
      },
      "headline-2": {
        css: {
          fontSize: theme("fontSize.3xl")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2.25rem",
          letterSpacing: "0",
        },
      },
      "headline-3": {
        css: {
          fontSize: theme("fontSize.2xl")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2rem",
          letterSpacing: "0",
        },
      },
      "headline-3-accented": {
        css: {
          fontSize: theme("fontSize.2xl")[0],
          fontWeight: theme("fontWeight.extrabold"),
          lineHeight: "2rem",
          letterSpacing: "0",
        },
      },
      "subtitle-1-accented": {
        css: {
          fontSize: theme("fontSize.lg")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.75rem",
          letterSpacing: "0",
        },
      },
      "subtitle-1": {
        css: {
          fontSize: theme("fontSize.lg")[0],
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "1.75rem",
          letterSpacing: "0",
        },
      },
      "body-1-accented": {
        css: {
          fontSize: theme("fontSize.base")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.5rem",
          letterSpacing: "0",
        },
      },
      "body-1": {
        css: {
          fontSize: theme("fontSize.base")[0],
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "1.5rem",
          letterSpacing: "0",
        },
      },
      "body-2-accented": {
        css: {
          fontSize: theme("fontSize.sm")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.25rem",
          letterSpacing: "0",
        },
      },
      "body-2": {
        css: {
          fontSize: theme("fontSize.sm")[0],
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "1.25rem",
          letterSpacing: "0",
        },
      },
      caption: {
        css: {
          fontSize: theme("fontSize.xs")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1rem",
          letterSpacing: "0",
        },
      },
      "overline-accented": {
        css: {
          fontSize: theme("fontSize.xs")[0],
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "1rem",
          letterSpacing: "0",
        },
      },
      overline: {
        css: {
          fontSize: theme("fontSize.xs")[0],
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "1rem",
          letterSpacing: "0",
        },
      },
      boxShadow: {
        "md-blue": "0px 0px 12px 0px rgba(2, 22, 201, 0.30);",
      },
      h2: {
        css: {
          fontSize: theme("fontSize.lg")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2.25rem",
          letterSpacing: "0",
        },
      },
      h3: {
        css: {
          fontSize: theme("fontSize.lg")[0],
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2rem",
          letterSpacing: "0",
        },
      },
      "h3-accented": {
        css: {
          fontSize: theme("fontSize.lg")[0],
          fontWeight: theme("fontWeight.extrabold"),
          lineHeight: "2rem",
          letterSpacing: "0",
        },
      },
    }),
    screens: {
      xxs: "50px",
      lg: "1024px",
      xl: "1920px",
      "2xl": "2560px",
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography")({
      className: "text",
    }),
  ],
  colors,
};
