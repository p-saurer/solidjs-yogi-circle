import { Header } from "./Header";
import { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      displayName: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
