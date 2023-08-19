import { describe, expect, it } from "vitest";
import { render } from "@solidjs/testing-library";
import { Header } from "./Header";
import { mockFirebaseUsers } from "../../../tests/__mocks__/firebase-users";
import "@testing-library/jest-dom/extend-expect";

describe("<Header />", () => {
  it("renders", () => {
    const { container, unmount } = render(() => <Header />);

    expect(container).toBeInTheDocument();

    unmount();
  });

  describe("when logged out", () => {
    it("renders sign-in button but no logout button", () => {
      const { queryByText, unmount } = render(() => <Header />);
      const signInButtonElement = queryByText("Sign in");
      const signOutButtonElement = queryByText("Logout");

      expect(signInButtonElement).toBeInTheDocument();
      expect(signOutButtonElement).toBeNull();

      unmount();
    });
  });

  describe("when logged in", () => {
    it("renders logout button but no sign-in button", () => {
      const { unmount, queryByText } = render(() => <Header user={mockFirebaseUsers[0]} />);
      const signInButtonElement = queryByText("Sign in");
      const signOutButtonElement = queryByText("Logout");

      expect(signInButtonElement).toBeNull();
      expect(signOutButtonElement).toBeInTheDocument();

      unmount();
    });

    it("renders welcome message", () => {
      const { unmount, container } = render(() => <Header user={mockFirebaseUsers[0]} />);

      expect(container).toHaveTextContent("Welcome, Jane Doe");

      unmount();
    });
  });
});
