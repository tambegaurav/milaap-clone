import React from 'react';
import { CarouselCard } from '../Styled-components/CarouselCard';


export default {
  title: 'Example/4.Carousal Card',
  component: CarouselCard,
 
};

const Template = (args) =>  <CarouselCard {...args} />  ;



export const ReviewCard = Template.bind({});
ReviewCard.args = {
    img: 'https://insidenet.es/wp-content/uploads/2018/03/aaron-profile-rounded.png',
     name: 'David',
     review: 'This entry, like several others we are publishing, aims to help support students participating in our Fifth Annual Student Review Contest. Each spotlights both a Times review and a review written by a teenage winner of one of our previous review contests.',

};


