import React, { useState } from 'react'
import { Navbar } from '../../Shared-components/Navbar'
import styled from "styled-components";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import StyledButton from '../../Styled-components/Button';
import Footer from '../../Shared-components/Footer/Footer';
import { Link } from 'react-router-dom';

const PricingIntro = styled.div`
    background: linear-gradient(158deg,#9c3353,#5f2747);
    margin: 0 2%;
    height: 35vh;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    > div:nth-child(1) {
        padding-top: 45px;

        h1 {
            font-size: 39px;
            letter-spacing: 0.25px;
            color: #ffd6e2;
        }

        h3 {
            font-size: 21px;
            color: #fff;
        }
    }

    > div:nth-child(2) {
        margin: 3.55% 3% 0;
        height: 11.5vh;
        position: relative;

        > div:nth-child(1) {
            height: 11.5vh;
            margin: 0 30.5%;
            background: linear-gradient(180deg ,#fff,#fff,#fff,#fff0f5);
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
        }

        button {
            background: #9c3353;
            color: #fff;
            border-radius: 50px;
            font-size: 15px;
            letter-spacing: 0.4px;
            padding: 0px 30px;
            margin-top: 30px;

            :hover {
                background: #9c3353;
            }
        }

        > div:nth-child(2) {
            position: absolute;
            height: 11.5vh;
            width: 35vw;
            top: 0vh;
            box-shadow: 0px 0px 30px #d1c6ca;
            margin: 0 30.5%;
            z-index: -10;
            background: #000;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
        }

        > div:nth-child(3) {
            height: 6vh;
            width: 6vh;
            position: absolute;
            top: 8vh;
            z-index: -4;
            left: 43vw;
            border-radius: 50%;
            background: #fff0f5;
            box-shadow: 0px 0px 20px #d1c6ca;
        }
    }
`

const GoalEstimatorTitle = styled.div`
    margin: 4% 3% 3%;

    h2 {
        font-size: 18px;
    }
    P {
        font-size: 12px;
        margin: 0.5% 0;
        letter-spacing: 0.4px;
        word-spacing: 0.3px;
        color: #848484;
    }
`

const SliderDiv = styled.div`
    margin: 2% 24% 1%;  

    > div {
        h3 {
            font-size: 14px;
            margin-bottom: 15px;
        }

        > div {
            background: #fff;
            padding: 20px;
            border: 1px solid black;
            display: flex;

            > div:nth-child(1) {
                flex: 1;
                padding: 10px 20px;
            }
            > div:nth-child(2) {
                display: flex;
                padding: 5px 0;
                > div {
                    margin: 2px;
                }
                select {
                    border-bottom: 1px solid black;
                    outline: none;
                }
                input {
                    border-bottom: 1px solid black;
                    outline: none;
                }
            }
        }
    }

    > div:nth-child(2) {
        margin-top: 60px;

        p {
            font-size: 10px;
            font-weight: 500;
            color: #848484;
            padding: 5px 25px 0 0;
        }

        input {
            width: 26px;
            text-align: center;
        }
    }
`

const EstimateGoal = styled.div`
    margin:0 0 3.5%;
    button {
        background: #9c3353;
        color: #fff;
        border-radius: 50px;
        font-size: 14px;
        letter-spacing: 0.5px;
        word-spacing: 0.4px;
        padding: 25px 95px;
        margin-top: 30px;

        :hover {
            background: #9c3353;
        }
    }
`

const EstimateInfo = styled.div`
    background: red;
    margin: 0 2.5%;
    border-radius: 4px;
    height: 33vh;
    display: flex;

    > div:nth-child(1) {
        flex: 0.7;
        position: relative;
        border-radius: 4px;
        background: #212121;

        > div:nth-child(1) {
            color: #fff;
            padding-top: 100px;
            h3 {    
                font-size: 14px;
            }
            h1 {
                font-size: 35px;
            }
        }

        > div:nth-child(2) {
            width: 261.5px;
            height: 82px;
            position: absolute;
            top: 34.2%;
            left: 84.5%;
            -webkit-transform: rotate(180deg);
            transform: rotate(90deg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    > div:nth-child(2) {
        flex: 1;
        background: #5f2747;
        border-radius: 4px;
        color: #fff;

        h2 {
            margin: 2% 0;
        }

        > div:nth-child(2) {
            display: flex;
            justify-content: space-evenly;
            margin: 0 14%;
            > div {
                flex: 1;
                text-align: right;

                p {
                    margin: 10% 0;
                    font-size: 14px;
                }
            }

            > div:nth-child(1) {
                p {
                    margin: 12.5% 0;
                    color: #e6c3d7;
                }
            }

            > div:nth-child(2) {
                padding-right: 120px;
                P {
                    font-size: 19px;
                }
            }
        }
    }
`

const PricingFAQ = styled.div`
    padding: 5% 10%;
    margin: 2% 0;
    box-shadow: 0px 0px 10px;

    > div {
        margin-bottom: 10px;

        h1 {
            text-align: left;
            font-size: 18px;
            padding-bottom: 20px;
        }

        span {
            text-decoration: underline;
        }
    }
`

const TextDiv = styled.div`
    color: #939393;
    font-size: 12px;
`

const initState = {
    value: 100000,
    percentage: 70,
    currency: "INR"
}

export const Pricing = () => {
    const [query, setQuery ] = useState( initState )
    const [estimate, setEstimate] = useState( false )

    const handleChange = (e) => {
        const { name, value } = e.target
        setQuery({...query, [name]: value})
    }
    
    return (
        <div style={{backgroundColor: "", height: "100%"}}>
            <Navbar />
            <div>
                <PricingIntro>
                    <div>
                        <h1>Free Fundraising For All</h1>
                        <h3>​0% platform fees for funds raised on Milaap</h3>
                    </div>
                    <div>
                        <div>
                            <Link to="/createfundraiser">
                                <StyledButton text="Start a fundraiser - it's FREE" />
                            </Link>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </PricingIntro>
                <GoalEstimatorTitle>
                    <h2>Fundraiser Goal Estimator</h2>
                    <p>Check detailed breakup & plan how much you would like to raise</p>
                </GoalEstimatorTitle>
                <SliderDiv>
                    <div>
                        <h3>I want to raise about</h3>
                        <div>
                            <div>
                                <Slider value={query.value} min={10000} max={10000000} colorScheme="#e6e6e6" defaultValue={100000} onChange={(value) => setQuery({...query, value: value})}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb boxSize={6} background="#9c3353"/>
                                </Slider>
                            </div>
                            <div>
                                <div>
                                    <select value={query.currency} name="currency" onChange={handleChange} >
                                        <option value="INR">&#8377; INR</option>
                                        <option value="USD">$ USD</option>
                                    </select>
                                </div>
                                <div>
                                    <input value={query.value} name="value" min="10000" max="10000000" onChange={handleChange} type="number"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>& I believe, INR contributions might total to</h3>
                        <div>
                            <div>
                                <Slider value={query.percentage} min={0} max={100} colorScheme="#e6e6e6" defaultValue={70} onChange={(value) => setQuery({...query, percentage: value})}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb boxSize={6} background="#9c3353"/>
                                </Slider>
                            </div>
                            <div>
                                <div>
                                    <input value={query.percentage} name="percentage" onChange={handleChange} type="number"/>
                                </div>
                                <div>
                                    <p>% of all funds raised</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderDiv>
                <EstimateGoal>
                    <StyledButton onClick={() => setEstimate(!estimate)} text={estimate ? "Close Estimation" : "Estimate goal"} />
                </EstimateGoal>
                {
                    estimate && 
                    <EstimateInfo>
                        <div>
                            <div>
                                <h3>Consider setting a goal amount of approx.</h3>
                                <h1> 
                                    <span>{query.currency === "INR" ? <span>&#8377;</span> : "$"}</span>
                                    <span>
                                        {query.currency === "INR" ? 
                                        ( (query.value + ( ((query.value)*(query.percentage/100))*0.0332 )).toFixed(2) ) 
                                        : 
                                        Math.round(10000/70)}
                                    </span> 
                                </h1>
                            </div>
                            <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/pricing/goal-estimator-mobile-bg-3a800ad3b8d9a5a2f6505ea54ff231275cbfc0b395254aa837e3a822262d9d81.png"})`}}></div>
                        </div>
                        <div>
                            <div>
                                <h2>Detailed breakup</h2>
                            </div>
                            <div>
                                <div>
                                    <p>Want to raise (<span>{query.currency === "INR" ? <span>&#8377;</span> : "$"}</span>) :</p>
                                    <p>Milaap platform fee (<span>{query.currency === "INR" ? <span>&#8377;</span> : "$"}</span>) :</p>
                                    <p>Payment Gateway charges (<span>{query.currency === "INR" ? <span>&#8377;</span> : "$"}</span>) :</p>
                                </div>
                                <div>
                                    <p>{query.value}</p>
                                    <p>0</p>
                                    <p>{ ( ((query.value)*(query.percentage/100))*0.0332 ).toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                    </EstimateInfo>
                }
                <PricingFAQ>
                    <div>
                        <h1> <span>R</span>elated FAQs</h1>
                    </div>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                What are payment gateway charges?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>                                
                                    Whenever you purchase (eg book tickets) or make an online payment, it needs to be securely processed and verified by a third party payment processor.  
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    These processors include Banks (for netbanking, IMPS, NEFT, RTGS transactions), Visa, Mastercard, AMEX, Rupay etc (for credit and debit card transactions),  Paytm, UPI apps and other payment wallets who charge a small fee for this service (‘payment gateway charges’).  These charges on crowdfunding websites are unavoidable.  
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    This is NOT Milaap fees. These fees go directly to the payment processor and help us keep Milaap a safe place to donate.
                                </TextDiv>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                How much do payment gateways charge for their service?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>
                                    Payment gateways charge their fees as a % of donation amount made. It varies based on the mode of payment and service provider.
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    <p>For donations made in Indian Rupees (INR)</p>
                                    <p>UPI apps - 0.60%</p>
                                    <p>Paytm - 1.77%</p>
                                    <p>Debit/Credit cards - 2.18%</p>
                                    <p>Netbanking - 2.36%</p>
                                    <p>Amazon Pay - 2.71%</p>
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    <p>For donations made in US Dollars using a card issued in the USA (USD): 2.9% + 30cents per donation</p>
                                    <p>For donations made in other foreign currencies or in USD using a card issued outside the USA: 3.9% + 30cents per donation</p>
                                </TextDiv>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                Are there any charges to withdraw funds?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>
                                    Similar to donations, Milaap works with many remittance providers to transfer funds (UPI, IMPS, NEFT, RTGS, International Wire transfers) swiftly and securely.  While these providers charge a fee for their service, currently Milaap is covering for this without passing it to the campaign organizers. This means NO charges to withdraw funds.
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    Please use the fundraiser estimator above to find out the exact breakup of funds raised and received.
                                </TextDiv>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                How does Milaap sustain itself?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>
                                    You might be wondering, “What percentage does Milaap take?“ or “Does Milaap make any money?”  We have a 0% platform fee.  We rely on the generosity of our users to power the platform.
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    10 years into our journey, we are taking the belief in our community to the next level. With this 0% platform fee, we are incredibly grateful for the voluntary tips from our users to help with the costs associated with paying our dedicated employees, providing our best-in-class customer service, trust & safety protections, and social fundraising technology.
                                </TextDiv>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                Is the free fundraising applicable for organizations and not-for-profits?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>
                                    Yes, Milaap charges NO platform fees for individuals, NGOs and organizations alike. In fact, organizations with 80G tax-exempt status also have the option to either issue tax-exemption receipts from Milaap's dashboard or issue it separately. Receipts to donors from Milaap's dashboard can be issued, at a click of a button. This feature is FREE to use and entails NO FEES.
                                </TextDiv>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                Does Milaap help in outreach of campaigns?
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                <TextDiv>
                                    Over 95% of Milaap’s campaigns which have raised money do it for FREE using our best-in-class social fundraising technology and round-the-clock assistance and support from our relationship managers.
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    In certain scenarios, where the beneficiaries come from a disadvantaged backgrounds with no digital literacy, exhausted most of their finances with no other sources available and require funds very urgently; Milaap may consider them on a case-by-case basis for outreach on social media and digital promotion platforms after verification and a signed request letter from the beneficiary. This is subject to availability of our team members, and situations where we beleive promotions can achieve something significant for the cause.
                                </TextDiv>
                                <br />
                                <TextDiv>
                                    Similar to payment gateway costs where it's paid to payment processor, outreach costs are paid towards social media and digital promotion platforms. To ensure that donor money goes primarily to the intended purpose, we cap the outreach costs to not more than 15% of funds raised.
                                </TextDiv>
                                <br />
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                </PricingFAQ>
            </div>
            <Footer />
        </div>
    )
}
