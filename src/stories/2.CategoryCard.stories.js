import React from 'react';

import { CategoryCard } from '../Styled-components/CategoryCard';

export default {
  title: 'Example/2.CategoryCard',
  component: CategoryCard,
 
};

const Template = (args) => <CategoryCard {...args} />;

export const ExampleCard = Template.bind({});
ExampleCard.args = {
   text: 'All',
    onClick:() => {},
    img:"https://www.shareicon.net/data/512x512/2015/08/22/89164_all_512x512.png",
    style: {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}
};


