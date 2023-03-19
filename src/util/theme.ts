export const initializeTheme = (): void => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.setAttribute("data-mode", "dark");
  } else {
    document.documentElement.removeAttribute("data-mode");
  }
};

export const chooseTheme = (theme: "light" | "dark" = "light"): void => {
  localStorage.theme = theme;
};

export const resetTheme = (): void => localStorage.removeItem("theme");
