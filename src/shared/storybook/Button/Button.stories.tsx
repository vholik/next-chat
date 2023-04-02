import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import GoogleIcon from '../assets/google-icon.svg';
import AttachmentIcon from '../assets/attachment-icon.svg';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Sign in with google',
    variant: 'secondary',
    imageUrl: GoogleIcon,
    imageHeight: 24,
    imageWidth: 24,
    imageAlt: 'Google icon',
};

export const Icon = Template.bind({});

Icon.args = {
    variant: 'icon',
    imageUrl: AttachmentIcon,
    imageHeight: 24,
    imageWidth: 24,
    imageAlt: 'Google icon',
    transparentBg: true,
};
