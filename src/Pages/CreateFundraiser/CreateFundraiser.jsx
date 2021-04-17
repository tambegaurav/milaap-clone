import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import React, {  useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addCampaign, upload } from "../../Redux/campaignApi/actions";
import { Navbar } from "../../Shared-components/Navbar";
import StyledButton from "../../Styled-components/Button";

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
        <div style={{    
            background: "linear-gradient(90deg,#a33555,#5f2747)",
            padding:"50px"
            
        }}>
            
            <div style={{
                width:"40%",
                margin:"auto",
                textAlign:"left",
                color:"brown",
                fontWeight:"600",
                fontSize:"20px",
                background:"white",
                padding:"40px",
                borderRadius:"20px"

                
            }}>
                <label>
                    Campaign creator name:
                    <Input  isInvalid
                    errorBorderColor="red.700"
                    size="xm" variant="flushed"
                    type="text" name="createdBy" 
                    value={createdBy} 
                    onChange={handleChange}/>
                </label><br/>
                <label>
                Campaign creating for:
                    <Input size="xm" isInvalid
                    errorBorderColor="red.700" variant="flushed" type="text" name="createdFor" value={createdFor} onChange={handleChange}/>
                </label><br/>
                <h2 style={{textAlign:"center",fontSize:"30px",margin:"20px"}}>Campaign Details</h2>
               
                <label>
                Title:
                    <Input size="xm" isInvalid
                    errorBorderColor="red.700" variant="flushed" type="text" name="title" value={title} onChange={handleChange}/>
                </label><br/>
                <label>
                Description:
                    <Input size="xm" isInvalid
                    errorBorderColor="red.700" variant="flushed" type="text" name="description" value={description} onChange={handleChange}/>
                </label><br/>
                <label>
                Target amount:
                    <Input size="xm" isInvalid
                    errorBorderColor="red.700" variant="flushed" type="number" name="target" value={target} onChange={handleChange}/>
                </label><br/>

              
               <label>
                   Upload image:
                <Input type="file" errorBorderColor="red.700" isInvalid variant="flushed" onChange={e => setImg(e.target.files[0])}/>
               </label>


   <br/>



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
                <StyledButton style={{background:"brown"}} onClick={handleSubmit} text="Start a campaign"/>
            </div>

        </div>
        </>
    )
}