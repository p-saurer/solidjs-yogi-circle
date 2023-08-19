import { Button } from "./Button";
import { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    label: "Button",
  },
};

export const OutlineButton: Story = {
  args: {
    isOutline: true,
    label: "Button",
  },
};
