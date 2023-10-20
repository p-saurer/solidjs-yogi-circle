/// <reference types="vitest" />

import "@testing-library/jest-dom"; // this can probably be removed once switching to @testing-library/jest-dom 6.0.0
import "@testing-library/jest-dom/extend-expect";
import { afterEach } from "vitest";
import { cleanup } from "@solidjs/testing-library";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
