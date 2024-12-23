import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "Atoms/Icon",
    component: Icon,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
        name: { control: "text", defaultValue: "download" },
        className: {
            control: "text",
            defaultValue: "w-10 h-10 text-textColor",
        },
    },
    args: {
        name: "download",
        className: "w-10 h-10 text-textColor",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComponent: Story = {};
