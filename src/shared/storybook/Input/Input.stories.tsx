import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input,
    args: {
        placeholder: 'Send message',
        rounded: false,
        error: '',
        label: '',
        withImage: false,
        isPrimary: true,
        placeholderCentered: false,
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
