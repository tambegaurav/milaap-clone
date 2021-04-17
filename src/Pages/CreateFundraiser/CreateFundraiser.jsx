import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import React, {  useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addCampaign, upload } from "../../Redux/campaignApi/actions";
import { Navbar } from "../../Shared-components/Navbar";
import StyledButton from "../../Styled-components/Button";
import styled from "styled-components";

const DonateMainDiv = styled.div`
    background: linear-gradient(90deg,#a33555,#5f2747);
    height: 91vh;
    padding-top: 10px;

    > div {
        width:40%;
        margin:auto;
        text-align: left;
        color:brown;
        font-weight: 600;
        font-size: 20px;
        background:#fff;
        padding:40px;
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

            input[type = file] {
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
            text-align:center; 
            font-size:30px; 
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

    @media all and ( max-width: 500px ) {
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

                input[type = file] {
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
`


export function CreateFundraiser(){

const initial={
    createdBy:"",
    createdFor:"",
    title:"",
    description:"",
    category:"",
    target:"",
    image:"",
    supporters:[],
    updates:[]

}


 const [data,setData]=useState(initial)
const {createdBy,createdFor,title,description,category,target,image,supporters,updates}=data;
const [img,setImg] = useState(null);

const handleChange=(e)=>{
   const {name,value}=e.target;
   setData({
       ...data,
       [name]:value
   })
}
const {isLoading,isError,isSuccess}=useSelector(state=>state.campaign,shallowEqual)
const dispatch=useDispatch()

const handleSubmit=()=>{
upload(img).then(res => {
    console.log(res.data.link)
    dispatch(addCampaign({...data,target:Number(target), image: res.data.link}))

})
       
}

    return(
        <>
        <Navbar/>
        <DonateMainDiv>
            
            <div>
                <div>
                    <label> Campaign Creator name: </label>    
                    <Input  isInvalid
                        errorBorderColor="red.700"
                        size="xm" variant="flushed"
                        type="text" name="createdBy" 
                        value={createdBy} 
                        onChange={handleChange}/>
                </div>
                <div>
                    <label>
                    Campaign creating for:
                        <Input size="xm" isInvalid
                        errorBorderColor="red.700" variant="flushed" type="text" name="createdFor" value={createdFor} onChange={handleChange}/>
                    </label>
                </div>
                <h2>Campaign Details</h2>
                <div>
                    <label>
                    Title:
                        <Input size="xm" isInvalid
                        errorBorderColor="red.700" variant="flushed" type="text" name="title" value={title} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                    Description:
                        <Input size="xm" isInvalid
                        errorBorderColor="red.700" variant="flushed" type="text" name="description" value={description} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                    Target amount:
                        <Input size="xm" isInvalid
                        errorBorderColor="red.700" variant="flushed" type="number" name="target" value={target} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                    Upload image:
                    <Input type="file" variant="flushed" onChange={e => setImg(e.target.files[0])}/>
                    </label>
                </div>
                <div>
                    <label>
                    Category:
                        <Select size="xm" isInvalid
                        errorBorderColor="red.700" variant="flushed" name="category" onChange={handleChange} value={category}>
                            <option>Select one</option>
                            <option value="medical">Medical</option>
                            <option value="animals">Animal</option>
                            <option value="education">Education</option>
                            <option value="memorial">Memorial</option>
                        </Select><br/>
                    </label>
                </div>
                <StyledButton onClick={handleSubmit} text="Start a campaign"/>
            </div>

        </DonateMainDiv>
        </>
    )
}