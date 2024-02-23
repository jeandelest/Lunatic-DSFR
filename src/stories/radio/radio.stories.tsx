import type { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { Radio } from "Radio";

const stories = {
    title: "Components/Radio",
    component: Radio,
    argTypes: defaultArgTypes,
} as Meta<typeof Radio>;

export default stories;

const Template: StoryFn<typeof Radio> = args => <Radio {...args} />;

export const Success = Template.bind({});

Success.args = {
    id: "SuccessMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: false,
    value: "1",
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            errorMessage: "What else would Spongebob live in?",
        },
    ],
    options: [
        {
            value: "1",
            description: "Spongebob lives in a pineapple",
            label: "Yes",
        },
        {
            value: "2",
            description: "Spongebob does not live in a pineapple",
            label: "No",
        },
    ],
};

export const Error = Template.bind({});

Error.args = {
    id: "ErrorMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: false,
    value: "2",
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            errorMessage: "What else would Spongebob live in?",
        },
    ],
    options: [
        {
            value: "1",
            description: "Spongebob lives in a pineapple",
            label: "Yes",
        },
        {
            value: "2",
            description: "Spongebob does not live in a pineapple",
            label: "No",
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    id: "DisabledMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: true,
    value: "2",
    options: [
        {
            value: "1",
            description: "Spongebob lives in a pineapple",
            label: "Yes",
        },
        {
            value: "2",
            description: "Spongebob does not live in a pineapple",
            label: "No",
        },
    ],
};
