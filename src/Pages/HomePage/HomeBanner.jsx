import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import StyledButton from '../../Styled-components/Button';

const BannerSection = styled.section`
    width: 100%;
    background-image: url("https://images.milaap.org/milaap/image/upload/v1597899996/production/entity_details/milaap_page/524/banner-image-sample2_1597899995.png?format=jpg");
    background-position: right 0 top -122px;
    height: auto;
    background-repeat: no-repeat;

    @media all and ( max-width: 500px ) {
        margin-top: -1em;
    }
`

const UrgentNeed = styled.div`
    height: 10vh;
    padding: 28px 0;
    position: relative;

    > * > div {
        box-shadow: 0px 0px 5px #dacacf;
        background: #fff;
        margin: 0 28.5%;
        font-size: 20px;
        font-weight: 500;
        color: #5d5d5d;
        padding: 10px 25px;
        border-radius: 7px;
        display: flex;
        justify-content: space-around;
    }
    > * > div > div:nth-child(2) {
        font-size: 18px;
        padding-top: 1px;
        padding-left: 1px;
        margin-top: 6px;
        color: #fff;
        background: #9c3353;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        vertical-align: middle;
        position: relative;

        > strong {
            position: absolute;
            top: -4px;
            left: 5px;
        }
    }
    
    @media all and (max-width: 500px) {
        display: none;
    }
`

const Title = styled.div`
    margin: 2.2% 10.5% 0;
    text-align: left;
    padding: 0 22px;

    > div:nth-child(1) { 
        h1 {
            color: #212121;
            font-size: 41px;
            margin-bottom: 0;
            margin-top: 15px;
            font-weight: 500;
        }
        h2 {
            color: #6c6c6c;
            font-size: 22px;
            margin-top: 0;
            margin-bottom: 15px;
            font-weight: 500;
            letter-spacing: 1px;
            word-spacing: 2.5px;
        }
    }

    > div:nth-child(2) > h2 {
        width: 500px;
        line-height: 110%;
        font-size: 20px;
        font-weight: 400;
        color: #212121;
        margin-top: 32px;
    }

    > div:nth-child(3) button {
        font-size: 21px;
        margin-top: 15px;
        font-weight: 400;
        background-color: #9c3353;
        border-radius: 50px;
        padding: 25px 25px;
        letter-spacing: 0.25px;
    }

    > div:nth-child(4) {
        display: flex;
        margin-top: 85px;

        > div {
            padding: 5px 30px 5px 0;

            > div:nth-child(1) {
                color: #691a47;
                font-size: 20px;
                font-weight: 500;
            }

            > div:nth-child(2) {
                color: #5d5d5d;
                font-size: 20px;
                font-weight: 500;
            }
        }

        > div:nth-child(2) {
            padding: 5px 30px;
            border-left: 1px solid pink;
        }
        > div:nth-child(3) {
            padding: 5px 30px;
            border-left: 1px solid pink;
        }
    }

    > div:nth-child(5) {
        display: flex;
        height: 8.8vh;
        margin: 7.5% 6.2% 4% 0;
        border-radius: 5px;
        border-radius: 0 8px 8px 0;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
        background-image: linear-gradient(270deg,#fff,rgba(247,230,234,.67058));
        color: #212121;
        position: relative;

        > div:nth-child(1) {
            margin-left: 0.1%;
            border: 3.5px solid #691a47;
            border-radius: 50px;
            background: #691a47;
        }

        > div:nth-child(2) {
            display: flex;
            flex: 1;
            margin-top: 13px;
            margin-left: 28%;

            > div:nth-child(1) {
                width: 53px;
                height: 50px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            > span:nth-child(2) {
                padding-top: 6px;
                font-size: 20px;
                font-weight: 500;
                margin: 0 1.5%;
                letter-spacing: 0.15px;
                word-spacing: 0.2px;
            }

            img {
                width: 70px;
                height: 50px;
                margin: -0.8em 7% 0;
                opacity: 0.6;
            }

            > span:nth-child(4) {
                font-weight: 700;
                line-height: 10px;
                opacity: .43;
                font-size: 50px;
                color: #691a47;
                position: absolute;
                right: 27px;
                padding-left: 5px;
                top: 25px;
            }
        }
    }

    @media all and ( max-width: 500px ) {
        > div:nth-child(1) {
            h2 {
                font-size: 15px;
                color: #000;
            }
        }

        > div:nth-child(2) h2 {
            width: 300px;
            line-height: 110%;
            font-size: 14px;
            font-weight: 400;
            color: #212121;
            color: #fff;
            margin-top: 32px;
        }
        
        > div:nth-child(3) button {
            font-size: 18px;
            margin-top: 25px;
            font-weight: 400;
            background-color: #9c3353;
            border-radius: 50px;
            padding: 25px 25px;
            letter-spacing: 0.25px;
        }
        
        > div:nth-child(4) {
            display: flex;
            flex-direction: column;
            margin-top: 75px;

            > div {
                padding: 5px 20px;
                border-left: 1px solid pink;

                > div:nth-child(1) {
                    color: #691a47;
                    font-size: 16px;
                    font-weight: 500;
                }

                > div:nth-child(2) {
                    color: #212121;
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            > div:nth-child(2) {
                padding: 5px 20px;
                border-left: 1px solid pink;
            }
            > div:nth-child(3) {
                padding: 5px 20px;
                border-left: 1px solid pink;
            }
        }
        
        > div:nth-child(5) {
            height: 8vh;

            > div:nth-child(2) {
                display: flex;
                flex: 1;
                margin-left: 2%;

                > div:nth-child(1) {
                    width: 45px;
                    height: 30px;
                    margin-top: 2%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                > span:nth-child(2) {
                    font-size: 11px;
                    font-weight: 500;
                    margin-left: 3%;
                }

                img {
                    margin: -0.8em 0 0;
                    opacity: 0.6;
                }

                > span:nth-child(4) {
                    font-weight: 700;
                    opacity: .43;
                    font-size: 30px;
                    color: #691a47;
                    position: absolute;
                    right: 10px;
                    padding-left: 5px;
                    top: 25px;
                }
            }
        }
    }

    

`

export const HomeBanner = () => {
    return (
        <BannerSection>
            <UrgentNeed>
                <Link>
                    <div>
                        <div>Vedika Wont't Make It To Her 1st Birthday Without Your Help!</div>    
                        <div><strong>{">"}</strong></div>
                    </div>
                </Link>
            </UrgentNeed>
            <Title>
                <div>
                    <h1>Milaap</h1>
                    <h2>Free Crowdfunding for India</h2>
                </div>
                <div>
                    <h2>Raise funds online for medical emergencies and social causes</h2>
                </div>
                <div>
                    <StyledButton text="Start a fundraiser - it's FREE" />
                </div>
                <div>
                    <div>
                        <div>400,000 +</div>
                        <div> Fundraisers</div>
                    </div>
                    <div>
                        <div>Rs. 1200 Crores + </div>
                        <div>Raised</div>
                    </div>
                    <div>
                        <div>5 Million +</div>
                        <div>Donations</div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/1077/1077221.svg?token=exp=1618382755~hmac=af028797f90b486f82a25a1b9d5fddcf"})`}}></div>
                        <span>Our crowdfunding platform charges NO fees</span>
                        <img src="https://assets.milaap.org/assets/home/diamond-9ce851717cc50c7de40ec2977af60e21c799ad40001782db3fa136582b0e4ff5.png" alt=""/>
                        <span>0%</span>
                    </div>
                </div>
            </Title>
        </BannerSection>
    )
}