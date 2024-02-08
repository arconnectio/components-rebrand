import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChevronDownIcon, ChevronRightIcon, SearchIcon } from "@iconicicons/react";

import { InputV2 } from "./index";
import { ComponentProps } from "react";

export default {
  title: "InputV2",
  component: InputV2
} as ComponentMeta<typeof InputV2>;

const Template: ComponentStory<typeof InputV2> = (args) => {
  const IconComponent = inputIcon(args);

  return (
    <InputV2 type="text" {...args} icon={IconComponent} />
  );
};

const defaultArgs: ComponentProps<typeof InputV2> = {
  fullWidth: false,
  small: false,
  dropdown: false,
  general: false,
  popup: false,
  search: false,
  status: "default",
  placeholder: "Select an option",
};

const inputIcon = ({ 
    dropdown, 
    popup, 
    search 
  }: {
    dropdown?: boolean;
    popup?: boolean;
    search?: boolean;
  }) => {
  if (dropdown) return <ChevronDownIcon />;
  if (popup) return <ChevronRightIcon />;
  if (search) return <SearchIcon />;
  return null;
}

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
  dropdown: false,
  popup: false,
  search: false
};
