import React from 'react';

import StyledButton from '../Styled-components/Button';

export default {
  title: 'Example/1.MilaapButton',
  component: StyledButton,
 
};

const Template = (args) => <StyledButton {...args} />;

export const JumboButton = Template.bind({});
JumboButton.args = {
  text: 'Jumbo button',
  onClick: () => {},
  disabled : false,
  isLoading: false,
  style: {width: '450px', height: '55px', fontSize: '32px'}
};

export const LongButton = Template.bind({});
LongButton.args = {
  text: 'Long Button',
  onClick: () => {},
  disabled : false,
  isLoading: false,
  style: {width: '400px', height: '40px', fontSize: '28px'}
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  text: 'Example',
  onClick: () => {},
  disabled : false,
  isLoading: false,
  style: {width: '150px', height: '35px', fontSize: '18px'}
};

