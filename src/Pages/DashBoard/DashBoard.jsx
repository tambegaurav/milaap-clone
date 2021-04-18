import React, { useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../Shared-components/Navbar";
import styled from "styled-components";
import { DonationCardCompo } from "../../Shared-components/DonationCard/DonationCardCompo";
import { DonationCardDetails } from "../../Shared-components/DonationCard/DonationCardDetails";
import ScrollToTopButton from "../../Shared-components/ScrollToTopButton/ScrollToTopButton";
import StyledButton from "../../Styled-components/Button";
import { filterFundraisers } from "../../Redux/userCampagins/action";
import Loader from "../../Styled-components/Loader";

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
`;
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
`;

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
`;
const Campaigns = styled.div`
  > div > div {
    margin: 3% 0 0;
  }
`;

export const DashBoard = () => {
  const { activeUser, isAuth } = useSelector((state) => state.auth);
  const { userCampagin, isLoading, isError } = useSelector(
    (state) => state.userCampaginData
  );
  console.log("from dash", userCampagin);
  console.log("from actve", activeUser);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterFundraisers(activeUser));
  }, [activeUser]);

  if (!isAuth) {
    return <Redirect to="/users/sign-in" />;
  }

  return (
    <div>
      <Navbar />
      <ScrollToTopButton showBelow={1000} />
      {activeUser.campaigns.length > 0 && (
        <RaiseCampaign>
          <Link to="/createfundraiser">
            <StyledButton text="Raise Campaign" />
          </Link>
        </RaiseCampaign>
      )}
      <DashBoardMainDiv>
        <div>
          <h1>
            Welcome, <strong> {activeUser.fullname} </strong>
          </h1>
          <h2>
            Email: <strong> {activeUser.email} </strong>{" "}
          </h2>
          <h4>
            Total campaigns raised:{" "}
            <strong> {activeUser.campaigns.length} </strong>{" "}
          </h4>
        </div>
        {activeUser.campaigns.length === 0 ? (
          <NoCampaigns>
            <div>
              <div>
                <h2>No campaigns raised by you till now</h2>
              </div>
              <div>
                <Link to="/createfundraiser">
                  <StyledButton text="Raise Campaign" />
                </Link>
              </div>
            </div>
          </NoCampaigns>
        ) : (
          <Campaigns>
            <div>
              <DonationCardCompo>
                {isLoading ? (
                  <Loader />
                ) : (
                  userCampagin.map((item) => {
                    return (
                      <>
                        <DonationCardDetails
                          id={item.id}
                          label={item.title}
                          imageUrl={item.image}
                          amount={item.supporters.reduce((ac, v) => {
                            return ac + v.amount;
                          }, 0)}
                          creater={item.createdBy}
                          percentage={
                            (item.supporters.reduce((ac, v) => {
                              return ac + v.amount;
                            }, 0) /
                              item.target) *
                            100
                          }
                          onClick={() =>
                            history.push("/editfundraiser/" + item.id)
                          }
                          key={item.id}
                        />
                      </>
                    );
                  })
                )}
              </DonationCardCompo>
            </div>
          </Campaigns>
        )}
      </DashBoardMainDiv>
    </div>
  );
};
