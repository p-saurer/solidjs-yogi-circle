import { TextField } from "./TextField";
import { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Components/Inputs/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john.doe@company.com",
  },
};
