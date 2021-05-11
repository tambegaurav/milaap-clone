import React from 'react';
import { CurrencyContextProvider } from '../Context/CurrencyContextProvider/CurrencyContextProvider';
import { DonationCardDetails } from '../Shared-components/DonationCard/DonationCardDetails';
import styled  from 'styled-components';

const StyledWrapper = styled.div`
h1{
    font-size: 18px
}
`


export default {
  title: 'Example/3.Donation Card',
  component: DonationCardDetails,
};

const Template = (args) => <CurrencyContextProvider> <StyledWrapper>  <DonationCardDetails {...args} /></StyledWrapper></CurrencyContextProvider> ;



export const ExampleCard = Template.bind({});
ExampleCard.args = {
    label: 'Help Father And His 20-Year Old Son, Father-Kidney Transplant, Son- Bone Marrow Transplant. Please Save The Family',
  imageUrl: 'https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
  amount: 10000,
  creater: 'Gaurav',
  id: 5,
  onClick: () => {},
  percentage: 50,
  currencyToggle: true,
//   style: {width: '450px'}
};


