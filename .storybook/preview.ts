import { withThemeByDataAttribute } from "@storybook/addon-styling";
import "tailwindcss/tailwind.css";
import "../src/styles/index.css";

export const parameters = {
  backgrounds: {
    default: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      "🌞 Light": "light",
      "🌛 Dark": "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
