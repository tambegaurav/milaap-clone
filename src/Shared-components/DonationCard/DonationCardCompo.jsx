import React from 'react';
import styled from "styled-components";

const CardComponentMainDiv = styled.div`
    margin: 0 14%;
    display: flex;
    flex-wrap: wrap;
`

export const DonationCardCompo = ({children}) => {
    return (
        <CardComponentMainDiv>
            {children}
        </CardComponentMainDiv>
    )
}
// Format to be used.
/**
 * 
      <DonationCardCompo>
        <DonationCardDetails 
          label="Vedika Won't Make It To Her 1st Birthday Without Your Help!"
          imageUrl= "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1615285571/production/images/campaign/260723/WhatsApp_Image_2021-03-09_at_1.51.04_PM_hyotzn_1615285576.jpg"
          amount= "40,550,730"
          creater= "sourabh"
          description= "Receive tax benefits by donating to this cause"
          percentage= "40"
        />
        <DonationCardDetails 
        label="Help My Cousin Anuraag Khaund Recover From Leukemia"
        imageUrl= "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1618148823/production/images/campaign/268504/New_Project_1_uv7obl_1618148828.jpg"
        amount= "1,418,693"
        creater= "Nilanjana Das"
        percentage= "95"
      />
      <DonationCardDetails 
        label="10-Year-Old Anant Needs Your Support to Save His Father's Life!"
        imageUrl= "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1618207758/production/images/campaign/273714/FB_IMG_1618201582247_yrzfl7_1618208259.jpg"
        amount= "40,550,730"
        creater= "Shweta Bharti"
        description= "For every &#8377;100 you donate, Milaap will contribute &#8377;5 on your behalf."
        percentage= "48"
      />
      </DonationCardCompo>
 */
