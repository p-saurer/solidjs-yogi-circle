import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const LoggedIn = {
  args: {
    user: {
      displayName: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
