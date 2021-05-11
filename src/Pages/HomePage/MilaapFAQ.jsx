import React, { useState } from 'react'
import styled from "styled-components";

const FAQMainDiv = styled.div`
    margin: 2% 12%;

    > div:nth-child(1) {
        margin: 4em 0;
        h1 {
            font-size: 33px;
            color: #212121;
            border-bottom: 1px solid #5d5d5d;
        }

        P {
            font-weight: 500;
            font-size: 25px;
            color: #5d5d5d;
            margin: 4% 0;
        }
    }

    > div:nth-child(2) {
        display: flex;
    }

    @media all and ( max-width: 480px ), all and ( max-width: 768px ) {
        margin-bottom: -10em;

        > div:nth-child(1) {
            margin: 1em 0;
            
            h1 {
                font-size: 22px;
                font-weight: 500;
            }

            p {
                font-size: 12px;
            }
        }

        > div:nth-child(2) {
            flex-direction: column;
            margin: -8% 4% 16em;
        }
    }
    
`

const FAQVideoLink  = styled.div`

    flex: 0.8;
    margin: 10px;
    padding: 80px 0%;

    > div:nth-child(1) {
        ${props => props.children[0].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #d6afbb` : null};
    }

    > div:nth-child(2) {
        ${props => props.children[1].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #c2b1b6` : null};
        margin-top: 50px;
    }

    > div:nth-child(3) {
        ${props => props.children[2].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #d6afbb` : null};
        margin-top: 50px;
    }

    > div {
        display: flex;
        flex-direction: row;
        padding: 12px 10px;
        margin: 20px 0;
        border-radius: 10px;
        cursor: pointer;
        
        > div:nth-child(1) {
            width: 50px;
            height: 50px;
            margin: 2% 3%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        > div:nth-child(2) {
            flex: 1;
            padding: 0 5px 0 15px;
            text-align: left;

            h1 {
                font-size: 20px;
                font-weight: 400;
                color: #9c3353;
            }

            p {
                color: #5d5d5d;
                font-size: 16px;
            }
        }
    }
    
    @media all and ( max-width: 480px ), all and ( max-width: 768px ) {
        margin: 0;
        
        > div {
            display: flex;
            flex-direction: row;
            padding: 0px 10px;
            margin: -10% 0;
            border-radius: 10px;
            cursor: pointer;
            
            > div:nth-child(1) {
                width: 25px;
                height: 25px;
                margin: 2% 3%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > div:nth-child(2) {
                flex: 1;
                padding: 0 5px 0 15px;
                text-align: left;

                h1 {
                    font-size: 20px;
                    font-weight: 400;
                    color: #9c3353;
                }

                p {
                    display: none;
                }
            }
        }
    }

    @media all and ( min-width: 769px ) {
        margin: 0;
        
        > div {
            display: flex;
            flex-direction: row;
            padding: 12px 10px;
            margin: 0px 0;
            border-radius: 10px;
            cursor: pointer;
            
            > div:nth-child(1) {
                width: 50px;
                height: 50px;
                margin: 2% 3%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > div:nth-child(2) {
                flex: 1;
                padding: 0 5px 0 15px;
                text-align: left;

                h1 {
                    font-size: 20px;
                    font-weight: 400;
                    color: #9c3353;
                }

                p {
                    color: #5d5d5d;
                    font-size: 14px;
                }
            }
        }
    }
    
    @media all and ( min-width: 1200px ) {        
        flex: 0.8;
        margin: 10px;
        padding: 80px 0%;

        > div:nth-child(1) {
            ${props => props.children[0].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #d6afbb` : null};
        }

        > div:nth-child(2) {
            ${props => props.children[1].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #c2b1b6` : null};
            margin-top: 50px;
        }

        > div:nth-child(3) {
            ${props => props.children[2].props.activeEl === 1 ? `box-shadow: 0px 0px 8px #d6afbb` : null};
            margin-top: 50px;
        }

        > div {
            display: flex;
            flex-direction: row;
            padding: 12px 10px;
            margin: 20px 0;
            border-radius: 10px;
            cursor: pointer;
            
            > div:nth-child(1) {
                width: 50px;
                height: 50px;
                margin: 2% 3%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > div:nth-child(2) {
                flex: 1;
                padding: 0 5px 0 15px;
                text-align: left;

                h1 {
                    font-size: 20px;
                    font-weight: 400;
                    color: #9c3353;
                }

                p {
                    color: #5d5d5d;
                    font-size: 16px;
                }
            }
        }
    }

`

const FAQVideo = styled.div`
    height: 100%;
    margin: 0 0 0 10%;
    transition: all 0.3s ease-in;

    > div {
        border-radius: 48px;
        box-shadow: 0px 0px 25px #f5d1dc;
    }
    > div > div:nth-child(1) {
        height: 6vh;
        transition: all 0.3s ease-out;
    }

    > div >  div:nth-child(2) {
        height: 510px;
    }

    > div > div:nth-child(2) video {
        width: 310px;
        padding: 15px;
        background: #fff;
        transition: all 0.3s ease-out;
    }

    > div > div:nth-child(3) {
        height: 10vh;
        border-top: none;
        position: relative;
        transition: all 0.3s ease-out;

        > div {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 1px solid black;
            position: absolute;
            left: 41%;
            top: 25%;
        }
    }

    @media all and ( max-width: 480px ), all and ( max-width: 768px ) {
        height: auto;
        margin: 0 0 0 10%;
        transition: all 0.3s ease-in;

        > div {
            border-radius: 48px;
            box-shadow: 0px 0px 25px #f5d1dc;
        }
        > div > div:nth-child(1) {
            height: 6vh;
            transition: all 0.3s ease-out;
        }

        > div >  div:nth-child(2) {
            height: auto;
        }

        > div > div:nth-child(2) video {
            width: 100%;
            height: 100%;
            padding: 15px;
            background: transparent;
            transition: all 0.3s ease-out;
        }

        > div > div:nth-child(3) {
            height: 10vh;
            border-top: none;
            position: relative;
            transition: all 0.3s ease-out;

            > div {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid black;
                position: absolute;
                left: 43%;
                top: 22%;
            }
        }
    }
`

const initState = {
    one: 1,
    two: 0,
    three: 0
}

export const MilaapFAQ = () => {
    const [activeElement, setActiveElement] = useState(initState);

    return (
        <FAQMainDiv>
            <div>
                <div>
                    <h1>A friend in your hour of need</h1>
                </div>
                <div>
                    <p>Medical treatments are expensive. They can exhaust your insurance and savings. With Milaap, you <br /> receive timely help to pay medical bills. Here’s how:</p>
                </div>
            </div>
            <div>
                <FAQVideoLink>
                    <div onClick={() => setActiveElement({...activeElement, one: 1, two: 0, three: 0 })} activeEl={activeElement.one}>
                        <div style={{backgroundImage: `url(${"https://cimages.milaap.org/milaap/image/upload/v1550729226/production/images/tutorial/tutorial/17/Group_1813_1550729226.png"})`}}></div>
                        <div>
                            <h1>Setup a fundraiser</h1>
                            <p>Fill in a few details about yourself, and who you are fundraising for. It takes less than 5 minutes.</p>
                        </div>
                    </div>
                    <div onClick={() => setActiveElement({...activeElement, one: 0, two: 1, three: 0 })} activeEl={activeElement.two}>
                        <div style={{backgroundImage: `url(${"https://cimages.milaap.org/milaap/image/upload/v1550729301/production/images/tutorial/tutorial/18/Group_1810_1550729300.png"})`}}></div>
                        <div>
                            <h1>Start crowdfunding</h1>
                            <p>Receive donations from friends, family and even strangers across the world.</p>
                        </div>
                    </div>
                    <div onClick={() => setActiveElement({...activeElement, one: 0, two: 0, three: 1 })} activeEl={activeElement.three}>
                        <div style={{backgroundImage: `url(${"https://cimages.milaap.org/milaap/image/upload/v1551765882/production/images/tutorial/tutorial/19/group_1814_1551765881.png"})`}}></div>
                        <div>
                            <h1>Withdraw funds</h1>
                            <p>Transfer funds to the hospital or to your bank account, whenever you need.</p>
                        </div>
                    </div>
                </FAQVideoLink>
                <FAQVideo>
                    <div>
                        <div></div>
                        {
                            activeElement.one === 1 ?
                            <div>
                                <video autoPlay loop muted playsInline dynamic-slide-video status src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/video/upload/v1550146729/assets/videos/loan_how_it_works/fund_gif.mp4">
                                    <source src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/video/upload/v1550146729/assets/videos/loan_how_it_works/fund_gif.mp4" type="video/mp4" />
                                    <p>Your user agent does not support the HTML5 Video element.</p>
                                </video>
                            </div> 
                            : activeElement.two === 1 ?
                            <div>
                                <video autoPlay loop muted playsInline dynamic-slide-video status src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/video/upload/v1550146536/assets/videos/loan_how_it_works/fundraising_gif.mp4">
                                    <source src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/video/upload/v1550146536/assets/videos/loan_how_it_works/fundraising_gif.mp4" type="video/mp4" />
                                    <p>Your user agent does not support the HTML5 Video element.</p>
                                </video>
                            </div>
                            : activeElement.three === 1 ?
                            <div>
                                <video autoPlay loop muted playsInline dynamic-slide-video status src="https://res.cloudinary.com/milaap/video/upload/v1551761116/assets/videos/loan_how_it_works/withdraw_1.mp4">
                                    <source src="https://res.cloudinary.com/milaap/video/upload/v1551761116/assets/videos/loan_how_it_works/withdraw_1.mp4" type="video/mp4" />
                                    <p>Your user agent does not support the HTML5 Video element.</p>
                                </video>
                            </div> : null
                        }
                        <div>
                            <div></div>
                        </div>
                    </div>
                </FAQVideo>
            </div>
        </FAQMainDiv>
    )
}
