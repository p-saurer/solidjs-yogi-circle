import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "tailwindcss/tailwind.css";
import "../src/styles/index.css";

export const parameters = {
  backgrounds: {
    default: "light", // TODO once docs consider light/dark mode depending on switch, disable background switch
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
      "☀️ Light": "light",
      "🌒 Dark": "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
