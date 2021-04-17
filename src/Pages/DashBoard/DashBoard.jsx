import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar } from '../../Shared-components/Navbar';
import styled from "styled-components";
import { DonationCardCompo } from '../../Shared-components/DonationCard/DonationCardCompo';
import { DonationCardDetails } from '../../Shared-components/DonationCard/DonationCardDetails';
import ScrollToTopButton from '../../Shared-components/ScrollToTopButton/ScrollToTopButton';
import StyledButton from '../../Styled-components/Button';

const DashBoardMainDiv = styled.div`
    /* background: red; */
    margin: 2% 10%;

    > div:nth-child(1) {
        text-align: left;
        letter-spacing: 0.3px;

        > h1 {
        font-size: 38px;
            > strong {
                color: #9c3353;
            }
        }

    }
`
const RaiseCampaign = styled.div`
    position: absolute;
    top: 150px;
    right: 300px;
    * > button {
        border-radius: 50px;
        color: #fff;
        background: #9c3353;

        :hover {
            color: #fff;
            background: #9c3353;
        }
    }
`

const NoCampaigns = styled.div`
    > div {
        background: #9c3353;
        border-radius: 10px;
        height: 30vh;
        color: #fff;
        margin: 5% 0;

        > div > h2 {
            font-size: 25px;
            padding-top: 2%;
        }

        > div:nth-child(2) {
            margin: 3% 0;
            * > button {
                border-radius: 50px;
                color: #9c3353;

                :hover {
                    box-shadow: 0px 0px 5px #e6e6e6;
                }
            }
        }
    }
`
const Campaigns = styled.div`
    
    > div > div {
        margin: 3% 0 0;
    }
`

export const DashBoard = () => {
    const { activeUser, isAuth } = useSelector( state => state.auth );
    
    if( !isAuth ) {
        return <Redirect to="/users/sign-in" />
    }

    console.log(activeUser);
    return (
        <div>
            <Navbar />
            <ScrollToTopButton showBelow={1000} />
            {
                activeUser.campaigns.length > 0 && 
                <RaiseCampaign>
                    <Link to="/createfundraiser">
                        <StyledButton text="Raise Campagin" />
                    </Link>
                </RaiseCampaign>
            }
            <DashBoardMainDiv>
                <div>
                    <h1>Welcome,  <strong> {activeUser.fullname} </strong></h1>
                    <h2>Email: <strong> {activeUser.email} </strong> </h2>
                    <h4>Total campaigns raised: <strong> {activeUser.campaigns.length} </strong> </h4>
                </div>
                {
                    activeUser.campaigns.length === 0 ? 
                    <NoCampaigns>
                        <div>
                            <div>
                                <h2>No campagins raised by you till now</h2>
                            </div>
                            <div>
                                <Link to="/createfundraiser">    
                                    <StyledButton text="Raise Campagin" />
                                </Link>
                            </div>
                        </div>
                    </NoCampaigns>
                    : 
                    <Campaigns>
                        <div>
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
                        </div>
                    </Campaigns>
                }
            </DashBoardMainDiv>
        </div>
    )
}
