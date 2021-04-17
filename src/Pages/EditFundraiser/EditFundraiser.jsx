import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addCampaign,
  updateCampaign,
  upload,
} from "../../Redux/campaignApi/actions";
import { Navbar } from "../../Shared-components/Navbar";
import StyledButton from "../../Styled-components/Button";
import styled from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";
import { fetchFundraiserData } from "../../Redux/specificFundraiser/actions";
import { Textarea } from "@chakra-ui/textarea";

const DonateMainDiv = styled.div`
  background: linear-gradient(90deg, #a33555, #5f2747);
  height: auto;
  display: flex;

  > div {
    width: 40%;
    margin-left: 5%;
    text-align: left;
    color: brown;
    font-weight: 600;
    font-size: 20px;
    background: #fff;
    padding: 40px;
    border-radius: 20px;

    > div {
      margin-top: 1%;

      label {
        font-size: 18px;
        color: #912c4a;
      }

      input {
        font-size: 17px;
        color: #212121;
        border-bottom: #e6e6e6;
      }
    }

    > div:nth-child(7) {
      margin-top: 1em;

      input[type="file"] {
        width: 200px;
        margin-left: 1em;
        font-size: 12px;

        ::-webkit-file-upload-button {
          background: #fff;
          border: 1px solid #912c4a;
          border-radius: 40px;
          font-size: 17px;
          padding: 2px 10px;
          outline: none;
          cursor: pointer;
          color: #912c4a;
        }
      }
    }

    h2 {
      color: #212121;
      text-align: center;
      font-size: 30px;
      margin: 20px;
    }

    select {
      color: #212121;
      cursor: pointer;
    }

    option {
      color: #212121;
    }

    button {
      margin-left: 33%;
      padding: 10px 20px;
      border-radius: 50px;
      background: #912c4a;

      :hover {
        background: #912c4a;
      }
    }
  }

  @media all and (max-width: 500px) {
    > div {
      width: 90%;

      > div {
        margin-top: 0%;

        label {
          font-size: 14px;
          color: #912c4a;
        }

        input {
          font-size: 14px;
          color: #212121;
          border-bottom: #e6e6e6;
        }
      }

      > div:nth-child(7) {
        margin-top: 1em;

        input[type="file"] {
          width: 170px;
          margin-left: 0.5em;
          font-size: 12px;

          ::-webkit-file-upload-button {
            background: #fff;
            border: 1px solid #912c4a;
            border-radius: 40px;
            font-size: 14px;
            padding: 0px 5px;
            outline: none;
            cursor: pointer;
            color: #912c4a;
          }
        }
      }

      h2 {
        font-size: 20px;
      }

      select {
        color: #212121;
        cursor: pointer;
      }

      option {
        color: #212121;
      }

      button {
        margin-left: 20%;
        padding: 10px 20px;
        border-radius: 50px;
        background: #912c4a;

        :hover {
          background: #912c4a;
        }
      }
    }
  }
`;

export function EditFundraiser() {
  const initial = {
    createdBy: "",
    createdFor: "",
    title: "",
    description: "",
    category: "",
    target: "",
    image: "",
    supporters: [],
    updates: [],
  };

  const { isAuth, activeUser } = useSelector((state) => state.auth);

  const [data, setData] = useState(initial);
  const {
    createdBy,
    createdFor,
    title,
    description,
    category,
    target,
    image,
    supporters,
    updates,
  } = data;
  const [img, setImg] = useState(null);
  const id = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.campaign,
    shallowEqual
  );
  const dispatch = useDispatch();
  const { fundraiserData } = useSelector(
    (state) => state.fundraiser,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchFundraiserData(id));
    setData({
      ...data,
      ...fundraiserData,
    });
  }, [data]);

  const handleSubmit = () => {
    upload(img).then((res) => {
      console.log(res.data.link);
      dispatch(
        updateCampaign({
          ...data,
          target: Number(target),
          image: res.data.link,
          activeUser,
          campaignId: id,
        })
      );
    });
  };

  return (
    <>
      {!isAuth && <Redirect to="/users/sign-in" />}
      <Navbar />
      <DonateMainDiv>
        <div>
          <div>
            <label> Campaign Creator name: </label>
            <Input
              isInvalid
              errorBorderColor="red.700"
              size="xm"
              variant="flushed"
              type="text"
              name="createdBy"
              value={createdBy}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              Campaign creating for:
              <Input
                size="xm"
                isInvalid
                errorBorderColor="red.700"
                variant="flushed"
                type="text"
                name="createdFor"
                value={createdFor}
                onChange={handleChange}
              />
            </label>
          </div>
          <h2>Campaign Details</h2>
          <div>
            <label>
              Title:
              <Input
                size="xm"
                isInvalid
                errorBorderColor="red.700"
                variant="flushed"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <Input
                size="xm"
                isInvalid
                errorBorderColor="red.700"
                variant="flushed"
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Target amount:
              <Input
                size="xm"
                isInvalid
                errorBorderColor="red.700"
                variant="flushed"
                type="number"
                name="target"
                value={target}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Uploaded imageUrl:{" "}
              <span
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => window.open(image, "_blank")}
              >
                {image}
              </span>
            </label>
            <br />
            <label>
              Upload image:
              <Input
                type="file"
                variant="flushed"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </label>
          </div>
          <div>
            <label>
              Category:
              <Select
                size="xm"
                isInvalid
                errorBorderColor="red.700"
                variant="flushed"
                name="category"
                onChange={handleChange}
                value={category}
              >
                <option>Select one</option>
                <option value="medical">Medical</option>
                <option value="animals">Animal</option>
                <option value="education">Education</option>
                <option value="memorial">Memorial</option>
              </Select>
              <br />
            </label>
          </div>
          <StyledButton
            onClick={handleSubmit}
            isLoading={isLoading}
            text="Update campaign"
          />
        </div>
        <div>
          Updates
          <hr />
          <div>
            <label>
              Put new update:
              <Textarea
                size="xm"
                variant="flushed"
                type="text"
                placeholder="Write new update here"
                style={{ backgroundColor: "red", paddingLeft: "10px" }}
              />
              <StyledButton
                style={{ width: "100%", margin: "auto" }}
                text="Post"
                onClick=""
              />
            </label>
          </div>
          <div>
            {updates?.map((el) => {
              return (
                <div
                  style={{
                    overflowY: "scroll",
                    height: "150px",
                  }}
                >
                  Heyyyy Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Est libero alias illo animi ab. Corrupti esse
                  reprehenderit rerum quaerat rem nemo tenetur ad id
                  voluptatibus sunt fuga, at maxime laudantium! Heyyyy Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Est libero
                  alias illo animi ab. Corrupti esse reprehenderit rerum quaerat
                  rem nemo tenetur ad id voluptatibus sunt fuga, at maxime
                  laudantium! Heyyyy Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Est libero alias illo animi ab. Corrupti
                  esse reprehenderit rerum quaerat rem nemo tenetur ad id
                  voluptatibus sunt fuga, at maxime laudantium! Heyyyy Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Est libero
                  alias illo animi ab. Corrupti esse reprehenderit rerum quaerat
                  rem nemo tenetur ad id voluptatibus sunt fuga, at maxime
                  laudantium! Heyyyy Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Est libero alias illo animi ab. Corrupti
                  esse reprehenderit rerum quaerat rem nemo tenetur ad id
                  voluptatibus sunt fuga, at maxime laudantium! Heyyyy Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Est libero
                  alias illo animi ab. Corrupti esse reprehenderit rerum quaerat
                  rem nemo tenetur ad id voluptatibus sunt fuga, at maxime
                  laudantium!
                </div>
              );
            })}
          </div>
        </div>
      </DonateMainDiv>
    </>
  );
}