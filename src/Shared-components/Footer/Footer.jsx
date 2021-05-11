import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../../Styled-components/Button";

const FooterMainDiv = styled.div`
  background: #ffffff;
  height: 42vh;
  bottom: 0;
  width: 100%;

  > div:nth-child(1) {
    display: flex;
    padding-top: 2%;
  }

  > div:nth-child(2) {
    height: 15%;
    padding-top: 15px;
    color: #fff;
    font-size: 13px;
    background: black;
    justify-content: center;

    > div * {
      margin: 0 1%;
    }
  }

  @media all and (max-width: 480px), all and ( max-width: 768px ), all and ( max-width: 1024px ) {
    > div:nth-child(1) {
      height: auto;
      display: block;
      padding-top: 2%;
    }

    > div:nth-child(2) {
      height: 15%;
      padding-top: 15px;
      color: #fff;
      font-size: 10px;
      background: black;
      justify-content: center;

      > div * {
        margin: 0 1%;
      }
    }
  }
`;

const DonateDiv = styled.div`
  padding: 20px;
  margin: 0 4%;
  background: white;

  > div:nth-child(1) {
    p {
      ::first-letter {
        text-decoration: underline;
      }
    }
  }

  > div:nth-child(2) {
    width: 100%;
    text-align: center;
    * {
      margin: 6% 0;

      > div {
        display: flex;
        flex-direction: row;

        > div:nth-child(1) {
          width: 1.5em;
          height: 1.5em;
          margin: 8% 2%;
          padding: 10px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        > div:nth-child(2) {
          margin-left: 1em;
          color: #5d5d5d;
          font-family: AvenirLTPro-Medium;
        }
      }
    }
  }

  @media all and (max-width: 480px), all and ( max-width: 768px ), all and ( max-width: 1024px ) {
    padding: 20px;
    margin: 0 4%;
    background: white;

    > div:nth-child(2) {
      width: 100%;
      text-align: center;
      * {
        margin: 0.5%;
        justify-content: center;
        > div {
          display: flex;
          flex-direction: row;

          > div:nth-child(1) {
            width: 1.5em;
            height: 1.5em;
            margin: 1%;
            padding: 10px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          > div:nth-child(2) {
            margin-left: 1em;
            color: #5d5d5d;
            font-family: AvenirLTPro-Medium;
          }
        }
      }
    }
  }
`;

const FundraiseDiv = styled.div`
  flex: 1;
  padding: 20px;

  > div:nth-child(1) {
    button {
      background: #9c3353;
      border-radius: 50px;
      font-size: 19px;
      padding: 25px 30px;
    }
  }

  > div:nth-child(2) {
    font-size: 14px;
    margin: 8% 0;
    color: #9c3353;

    * {
      margin: 1% 2%;
    }
  }

  > div:nth-child(3) {
    margin: 1% 19%;
    padding: 18px;
    background: #f7f7f7;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > div:nth-child(1) {
      flex: 0.5;
      font-size: 12px;
      font-weight: 500;
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: row;

      * {
        margin: 0 2%;
      }

      > * div {
        height: 1em;
        width: 1em;
        padding: 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

  @media all and ( max-width: 1024px ){
    padding: 0;

    > div:nth-child(2) {
      margin: 2% 0;
    }

    > div:nth-child(3) {
      align-items: center;
    }
  }

  @media all and ( min-width: 1025px ) {
    > div:nth-child(2) {
      font-size: 10px;
    }
    > div:nth-child(3) {
      align-items: center;
      margin: 2% 0;
    }
  }

  @media all and ( min-width: 1200px ) {
    > div:nth-child(2) {
      font-size: 14px;
    }
    > div:nth-child(3) {
      margin: 1% 19%;
    }
  }
`;

const MilInfo = styled.div`
  flex: 1.8;
  background: #f7f7f7;
  padding: 20px;
  margin: 0 0 0.8% 4%;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 3px;
  display: flex;
  flex-direction: row;

  > div:nth-child(1) {
    margin: 0 18% 0 5%;
    padding: 0 20px;

    > div:nth-child(1) {
      text-align: left;
      > div {
        border-bottom: 1px solid black;
        width: 9px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      text-align: left;
      color: #9c3353;
      font-size: 14px;

      * {
        margin: 7% 0;
      }
    }
  }

  > div:nth-child(2) {
    flex: 1;

    > div:nth-child(1) {
      > div:nth-child(1) {
        text-align: left;
        > div {
          border-bottom: 1px solid black;
          width: 9px;
        }
      }

      > div:nth-child(2) {
        text-align: left;
        margin-top: 2%;
        color: #6c6c6c;
        font-size: 14px;
      }
    }

    > div:nth-child(2) {
      margin-top: 5%;
      font-size: 12px;
      font-weight: 500;

      > div:nth-child(1) {
        text-align: left;
        > div {
          border-bottom: 1px solid black;
          width: 9px;
        }
      }

      > div:nth-child(2) {
        display: flex;
        flex-direction: row;

        div {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        > div:nth-child(1) {
          width: 4em;
          height: 1.5em;
          margin: 3% 0;
        }
        > div:nth-child(2) {
          width: 3em;
          height: 1.5em;
          margin: 3% 1%;
        }
        > div:nth-child(3) {
          width: 3.8em;
          padding: 1.4em;
          height: 1.5em;
          margin: 0.8% 1%;
        }
        > div:nth-child(4) {
          width: 4em;
          height: 3em;
          border-radius: 2px;
          margin: 1% 1%;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterMainDiv>
      <div>
        <DonateDiv>
          <div>
            <p>Donte towards</p>
          </div>
          <div>
            <Link>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${"../../../CategoryIcons/medical_icon.png"})`,
                  }}
                ></div>
                <div>Medical</div>
              </div>
            </Link>
            <Link>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${"../../../CategoryIcons/education_icon.png"})`,
                  }}
                ></div>
                <div>Education</div>
              </div>
            </Link>
            <Link>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${"../../../CategoryIcons/memorial_icon.png"})`,
                  }}
                ></div>
                <div>Memorial</div>
              </div>
            </Link>
          </div>
        </DonateDiv>
        <FundraiseDiv>
          <div>
            <Link to="/createfundraiser">
              <StyledButton text="Start a fundraiser" />
            </Link>
          </div>
          <div>
            <Link>Princing</Link>
            <Link>Milaap Reviews</Link>
            <Link>FAQs & tips</Link>
          </div>
          <div>
            <div>Find us on</div>
            <div>
              <Link>
                <div
                  style={{
                    backgroundImage: `url(${"../../../SocialMedia/fb_icon.png"})`,
                  }}
                ></div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundImage: `url(${"../../../SocialMedia/twitter_icon.png"})`,
                  }}
                ></div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundImage: `url(${"../../../SocialMedia/linkedin_icon.png"})`,
                  }}
                ></div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundImage: `url(${"../../../SocialMedia/insta_icon.png"})`,
                  }}
                ></div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundImage: `url(${"../../../SocialMedia/youtube_icon.png"})`,
                  }}
                ></div>
              </Link>
            </div>
          </div>
        </FundraiseDiv>
        <MilInfo>
          <div>
            <div>
              <span>Milaap</span>
              <div></div>
            </div>
            <div>
              <Link>About us</Link>
              <Link>Press & Media</Link>
              <Link>Team</Link>
              <Link>Careers</Link>
              <Link>Contact</Link>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Indian office address</span>
                <div></div>
              </div>
              <div>
                <p>Milaap Social Ventures India Pvt. Ltd.</p>
                <p>ClayWorks Create - building,11th KM Create</p>
                <p>Campus,Arakere Bannerghatta Rd,</p>
                <p>Bangalore, Karnataka, India 560076</p>
              </div>
            </div>
            <div>
              <div>
                <span>Supported by</span>
                <div></div>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${"https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png"})`,
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${"https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png"})`,
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${"https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png"})`,
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${"https://e7.pngegg.com/pngimages/711/297/png-clipart-logo-american-express-payment-computer-icons-brand-american-express-blue-text-thumbnail.png"})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </MilInfo>
      </div>
      <div>
        <div>
          <Link>Security & Privacy</Link>
          <Link>Condition of use</Link>
          <span>&#169; 2010 - 2021 milaap.org. All rithts reserved.</span>
        </div>
      </div>
    </FooterMainDiv>
  );
};

export default Footer;
