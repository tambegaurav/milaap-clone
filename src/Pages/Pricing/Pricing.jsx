import React, { useState } from 'react'
import { Navbar } from '../../Shared-components/Navbar'
import styled from "styled-components";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import StyledButton from '../../Styled-components/Button';
import Footer from '../../Shared-components/Footer/Footer';

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
        margin: 3.5% 3% 0;
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
    background: red;
    margin: 2% 20%;
`

export const Pricing = () => {
    const [value, setValue] = useState(100000)

    const handleChange = (value) => {
        setValue( value )
    }
    
    return (
        <div style={{backgroundColor: "#f8f8f8", height: "100%"}}>
            <Navbar />
            <div>
                <PricingIntro>
                    <div>
                        <h1>Free Fundraising For All</h1>
                        <h3>​0% platform fees for funds raised on Milaap</h3>
                    </div>
                    <div>
                        <div>
                            <StyledButton text="Start a fundraiser - it's FREE" />
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
                                <Slider value={value} min={10000} max={10000000} colorScheme="#e6e6e6" defaultValue={100000} onChange={(value) => setValue(value)}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb background="#9c3353"/>
                                </Slider>
                            </div>
                            <div>
                                <input value={value} name="val" onChange={(e) => setValue(e.target.value)} type="number"/>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    
                </SliderDiv>
            </div>
            <div>
                {value}
            </div>
            <Footer />
        </div>
    )
}
