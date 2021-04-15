import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Shared-components/Navbar'
import styled from "styled-components";
import Footer from '../../Shared-components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import StyledButton from '../../Styled-components/Button';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchFundraiserData } from '../../Redux/specificFundraiser/actions';

const DonateMainDiv = styled.div`
    width: 40vw;
    margin: 0 16%;
    padding: 0 20px;
    position: relative;

    > div:nth-child(2) {
        width: 25vw;
        height: 70vh;
        position: fixed;
        z-index: 1;
        right: 17vw;
        top: 9vh;
        bottom: unset;
        background-color: #f7f7f7;
        box-shadow: -7px 0px 20px #e7bbc9;
    }
`

const PaymentDiv = styled.div`

    > div:nth-child(1) {
        padding: 0 24px;
    }

    > div > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;

        > div:nth-child(1) {
            display: flex;
     
            > div:nth-child(1) {
                width: 1.3em;
                height: 1.3em;
                margin-right: 0.8em;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > div:nth-child(2) {
                font-size: 18px;
                color: #212121;
                font-weight: 500;
            }
        }

        > div:nth-child(2) {
            font-size: 16px;
            font-weight: 500;
            padding-right: 8px;
            text-decoration: underline;
            color: #691a47;
        }
    }

    > div > div:nth-child(2) {
        display: flex;
        margin-top: 5px;

        > div:nth-child(2) {
            text-align: left;
            padding: 10px;
            margin-left: 5px;

            h3 {
                font-size: 14px;
                color: #5d5d5d;
                font-weight: 500;
            }

            h1 {

                span:nth-child(1) {
                    font-size: 18px;
                    color: #9c3353;
                    font-weight: 500;
                    letter-spacing: 0.4px;
                }

                span:nth-child(2) {
                    color: #5d5d5d;
                    letter-spacing: 0.35px;
                }
            }
        }
    }

    > div > div:nth-child(3) {
        button {
            width: 320px;
            font-size: 18.5px;
            font-weight: 400;
            letter-spacing: 0.4px;
            padding: 23px 22px 26px;
            border-radius: 50px;
            background: #9c3353;
        }
    }

    > div > div:nth-child(4) {
        padding-top: 8px;
        h2 {
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.3px;
            color: #5d5d5d;
        }
    }

    > div > div:nth-child(5) {
        display: flex;
        position: relative;
        margin-top: 15px;

        > div:nth-child(1), div:nth-child(3) {
            width: 70px;
            margin: 0 20px;
            line-height: 0;
            border-bottom: 1px solid #e9cad3;
            position: absolute;
        }

        > div:nth-child(1) {
            left: 0;
            top: 120%;
        }

        > div:nth-child(3) {
            right: 0;
            top: 120%;
        }

        > div:nth-child(2) {
            flex: 1;
            padding-top: 10px;
            line-height: 0;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.3px;

            span:nth-child(1) {
                margin-right: 4px;
                color: #5d5d5d;
            }
            span:nth-child(2) {
                color: #9c3353;
            }
        }
    }

    > div > div:nth-child(6) {
        height: 25vh;
        margin-top: 15px;
        display: flex;
        position: relative;
        justify-content: center;

        > div:nth-child(1) {
            width: 170px;
            margin: 15px 0;
            border: 1px solid #5d5d5d40;

            > div {
                width: 100%;
                height: 100%;
                padding: 10px;

                > div {
                    width: 100%;
                    height: 100%;
                    opacity: 0.3;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }
        }
        > div:nth-child(2) {
            position: absolute;
            top: 33%;

            button {
                width: 285px;
                padding: 25px 20px;
                font-size: 18px;
                font-weight: 400;
                letter-spacing: 0.4px;
                background: #fff;
                border: 1px solid #9c3353;
                color: #912c4a;
                border-radius: 50px;
            }
        }
    }

    > div:nth-child(2) {
        width: 100%;
        height: 20%;
        margin-top: 1%;
        background: #fff;

        > div:nth-child(1) {
            justify-content: center;
            font-size: 14px;
            font-weight: 500;
            padding: 15px 0; 
            color: #5d5d5d;
        }

        > div:nth-child(2) {
            justify-content: center;
            display: flex;
            line-height: 0;
            margin: 0;

            > div {
                width: 37px;
                height: 37px;
                border-radius: 50%;
                line-height: 0;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > div:nth-child(1) {
                border: 4px solid orange;
            }

            > div:nth-child(2) {
                margin: 0 3%;
                border: 4px solid #c9c9f7;
            }

            > div:nth-child(3) {
                margin: 0 3% 0 0;
                border: 4px solid #61d3f8;
            }

            > div:nth-child(4) {
                border: 4px solid #ad52f380;
            }
        }
    }

    @media all and ( max-width: 500px ) {
        display: none;
    }
    
`

const BeneficiaryDiv = styled.div`
    
    > div:nth-child(1) {
        background: #a0a0a030;
        padding: 10px 0;
        font-size: 14px;
        color: #212121;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

`

const BeneficiaryTitle = styled.div`
    text-align: left;
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 0.4px;
    word-spacing: 0.5px;
    margin-top: 22px;
`

const BeneficiaryImage = styled.div`
    width: 100%;
    height: 55vh;
    margin-top: 18px;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const FundraisedStats = styled.div`
    display: flex;
    margin-top: 17px;
    
    > div:nth-child(2) {
        text-align: left;
        padding: 10px;
        margin-left: 4px;
        margin-top: 6px;

        h3 {
            font-size: 14px;
            color: #5d5d5d;
            font-weight: 500;
        }

        h1 {

            span:nth-child(1) {
                font-size: 18px;
                color: #9c3353;
                font-weight: 500;
                letter-spacing: 0.4px;
            }

            span:nth-child(2) {
                color: #5d5d5d;
                letter-spacing: 0.35px;
            }
        }
    }

    > div:nth-child(3) {
        flex: 1;
        position: relative;

        * {
            width: 170px;
            padding: 2px 5px;
            border-radius: 50px;
            font-size: 17px;
            font-weight: 500;
            letter-spacing: 0.4px;
            padding: 8px 20px;
            bottom: 0;
            right: 2px;
            position: absolute;
            text-decoration: underline;
            background: #f3f3f3;
            color: #691a47;
        }
    }
`

const ShareInfo = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    color: #fff;

    > div {
        flex: 1;
        padding: 8px 10px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        cursor: pointer;

        > div:nth-child(1) {
            width: 23px;
            height: 23px;
            margin: 5px 5px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        > div:nth-child(2) {
            margin: 2px 10px;
            font-size: 19px;
            font-weight: 500;
        }
    }

    > div:nth-child(1) {
        margin-right: 10px;
        background: #25d366;
    }

    > div:nth-child(2) {
        margin-left: 10px;
        background: #3b5998;
    }
`

const BeneficiaryName = styled.div`
    display: flex;
    margin: 25px 0;

    > div {
        flex: 1;
        height: 10vh;
        border: 1px solid #b9b7b770;
        border-radius: 3px;
        padding: 15px;
        display: flex;

        > div:nth-child(1) {
            width: 50px;
            height: 50px;
            font-weight: 500;
            border-radius: 50px;
            padding: 13px 10px;
            background: #cc668535;
            color: #9c3353;   
        }

        > div:nth-child(2) {
            margin-left: 10px;
            margin-top: 5px;
            text-align: left;

            h4 {
                font-size: 12px;
                color: #5d5d5d;
                letter-spacing: 0.1px;
            }
        }
    }

    > div:nth-child(1) {
        margin-right: 12px;
    }

    > div:nth-child(2) {
        margin-left: 12px;
    }

`

const BeneficiaryStory = styled.div`
    width: 100%;
    text-align: left;

    > div {
        display: flex;

        > div {
            /* flex: 1; */
        }
        > div:nth-child(1) button {
            
            width: 285px;
            padding: 25px 20px;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 0.4px;
            background: #fff;
            border: 1px solid #9c3353;
            border-right: none;
            color: #912c4a;
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            box-shadow: none;

            :hover {
                background: #912c4a;
                color: #fff; 
            }

        }

        > div:nth-child(2) button {
            
            width: 285px;
            padding: 25px 20px;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 0.4px;
            background: #fff;
            border: 1px solid #9c3353;
            border-left: none;
            color: #912c4a;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 25px;
            border-top-right-radius: 25px;
            box-shadow: none;

            :hover {
                background: #912c4a;
                color: #fff; 
            }
        }
    }

    p {
        margin-top: 15px;
        padding-top: 8px;
    }
`

const SupportFundraiser = styled.div`
    margin: 50px 0;
    padding: 20px 0 10px;
    border-radius: 2px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px 0px 10px #d6d5d5;

    h2 {
        font-size: 16px;
    }

    button {
        width: 300px;
        font-size: 18px;
        font-weight: 400;
        margin: 20px 0;
        letter-spacing: 0.4px;
        padding: 23px 22px 26px;
        border-radius: 50px;
        background: #9c3353;

        :hover {
            background: #9c3353;
            color: #fff;
        }
    }
`

export const FundraiserDonate = () => {
    const [storyUpdate, setStoryUpdate] = useState(false);
    
    const handleSwitchStoryUpdate = () => {
        setStoryUpdate( !storyUpdate )
    }

    const { id } = useParams();

    const dispatch = useDispatch();
    const { fundraiserData, raisedAmount } = useSelector( state => state.fundraiser, shallowEqual )

    useEffect(() => {
        dispatch( fetchFundraiserData({id}) )
    }, [dispatch, id])
    
    return (
        <div>
            {
                fundraiserData && 
                <div>
                    <Navbar />
                    <DonateMainDiv>
                        <BeneficiaryDiv>
                            <div>
                                <h3>Milaap will not charge any fee on your donation to this campaign.</h3>
                            </div>
                            <BeneficiaryTitle>
                                <h1>{fundraiserData.title}</h1> {/** This takes title */}
                            </BeneficiaryTitle>
                            <BeneficiaryImage style={{backgroundImage: `url(${fundraiserData.image})`}}></BeneficiaryImage> {/** This takes image */}
                            <FundraisedStats>        
                                <CircularProgress value={ ((raisedAmount/fundraiserData.target)*100).toFixed(1) } color="#37d123" size="74px">
                                    <CircularProgressLabel fontSize="15px" fontWeight="500">{ ((raisedAmount/fundraiserData.target)*100).toFixed(1) }%</CircularProgressLabel>
                                </CircularProgress>
                                <div>
                                    <h3>Raised</h3>
                                    <h1> <span>Rs.{raisedAmount}{/** This takes amount raised till now */}</span> <span> of Rs.{fundraiserData.target}{/** This takes target amount */}</span> </h1>
                                </div>
                                <div>
                                    <Link>
                                        {fundraiserData.supporters.length} supporters { /** This takes length of supporters aaray */ }
                                    </Link>
                                </div>
                            </FundraisedStats>
                            <ShareInfo>
                                <div>
                                    <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/campaign/whatsapp-de7eea5e99374fa76f0ef336de81e6009c552c0e0fd4310da10d76ff52ea8693.svg"})`}}></div>
                                    <div>Share</div>
                                </div>
                                <div>
                                    <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/campaign/facebook-e95d42ee18fd2198d8052f9b73e846cf2811d7c566c64bc6957422917e271f7b.svg"})`}}></div>
                                    <div>Share</div>
                                </div>
                            </ShareInfo>
                            <BeneficiaryName>
                                <div>
                                    <div>{"ND"}</div>{/** This will take first char of name */}
                                    <div>
                                        <h4>Created by</h4>
                                        <h1>{fundraiserData.createdBy}</h1> { /** This takes createdBy */ }
                                    </div>
                                </div>
                                <div>
                                    <div>{"AK"}</div>{/** This will take first char of name */}
                                    <div>
                                        <h4>This fundraiser will benefit</h4>
                                        <h1>{fundraiserData.createdFor}</h1> { /** This takes createdFor */ }
                                    </div>
                                </div>
                            </BeneficiaryName>
                            <BeneficiaryStory>
                                <div>
                                    <div>
                                        <StyledButton text="Story" onClick={handleSwitchStoryUpdate} style={ storyUpdate ? {} : {background: "#912c4a", color: "#fff"}} />
                                    </div>
                                    <div>
                                        <StyledButton text={`Updates(${fundraiserData.updates.length})`} onClick={handleSwitchStoryUpdate} style={ storyUpdate ? {background: "#912c4a", color: "#fff"} : {}} />
                                    </div>
                                </div>
                                {
                                    storyUpdate ? 
                                    <p>
                                        {fundraiserData.description}
                                    </p> 
                                    : 
                                    <p>{fundraiserData.updates[0].description}</p>
                                }
                                {/** This will take discription */}
                            </BeneficiaryStory>
                            <SupportFundraiser>
                                <div>
                                    <h2>Create a support fundraiser page and raise donations from your friends to</h2>
                                    <h2>help {fundraiserData.createdFor}{/** This takes createdFor */}</h2>
                                </div>
                                <div>
                                    <StyledButton text="Create a support fundraiser" />
                                </div>
                            </SupportFundraiser>
                        </BeneficiaryDiv>
                        <PaymentDiv>
                            <div>
                                <div>
                                    <div>
                                        <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/donate-icon-7cabb309d2c7a586a914c0a23abe52032aa0ce01115fb54e07c6148ab2cf8c6a.svg"})`}}></div>
                                        <div>Donate</div>
                                    </div>
                                    <div>
                                        <Link>
                                            {fundraiserData.supporters.length} supporters
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <CircularProgress value={ ((raisedAmount/fundraiserData.target)*100).toFixed(1) } color="#37d123" size="73px">
                                        <CircularProgressLabel fontSize="15px" fontWeight="500">{ ((raisedAmount/fundraiserData.target)*100).toFixed(1) }%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div>
                                        <h3>Raised</h3>
                                        <h1> <span>Rs.{raisedAmount}</span> <span> of Rs.{fundraiserData.target}</span> </h1>
                                    </div>
                                </div>
                                <div>
                                    <StyledButton text="Donate now" />    
                                </div>  
                                <div>
                                    <h2>Card, Netbanking, Cheque pickups</h2>
                                </div>
                                <div>
                                    <div></div>
                                    <div>
                                        <span>Or</span>
                                        <span>Donate using</span>
                                    </div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/qr_code-4663c94becb62937467a2d00e761e207e3a7af3490f0b73577fa0a1392fbda0f.jpg"})`}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <StyledButton text="Generate QR" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Scan & donate with any app</h3>
                                </div>
                                <div>
                                    <div style={{backgroundImage: `url(${"https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png"})`}}></div>
                                    <div style={{backgroundImage: `url(${"https://cdn.iconscout.com/icon/free/png-256/google-pay-2038779-1721670.png"})`}}></div>
                                    <div style={{backgroundImage: `url(${"https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png"})`}}></div>
                                    <div style={{backgroundImage: `url(${"https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png"})`}}></div>
                                </div>
                            </div>
                        </PaymentDiv>
                    </DonateMainDiv>        
                    <Footer />
                </div>
            }
        </div>
    )
}
