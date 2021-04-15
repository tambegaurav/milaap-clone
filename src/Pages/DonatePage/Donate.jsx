import React, { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getCards } from "../../Redux/categoryApi/actions"
import { DonationCardCompo } from "../../Shared-components/DonationCard/DonationCardCompo"
import { DonationCardDetails } from "../../Shared-components/DonationCard/DonationCardDetails"
import Footer from "../../Shared-components/Footer/Footer"
import { Navbar } from "../../Shared-components/Navbar"
import LayoutContainer from "../../Styled-components/LayoutContainer"
import { RefineSearchBtn } from "./RefineSearchBtn"
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from "@chakra-ui/react"


export function Donate(){
   const [filters,setFilters]=useState("")
   const [value,setValue]=useState("all")
  //  const [desc,setDesc]=useState(true)
   

   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
  
    const {cards,isLoading,isError}=useSelector(state=>state.cards,shallowEqual)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getCards(filters))
    },[filters]) 
  //  if(desc){
  //    cards.sort((a,b)=>{
  //      return b.target-a.target;
  //    })
  //  }

    return(
        <div>
            <Navbar/>           
            <LayoutContainer>
               <RefineSearchBtn ref={btnRef}  onClick={onOpen} text="Refine Search" />

               <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter and Sort</DrawerHeader>

            <DrawerBody> 
              <div>Filter</div>
              <hr/>
              <RadioGroup onChange={setValue} value={value}>
      <Stack direction="column">
         <Radio value="all">All</Radio>
        <Radio value="animals">Animals</Radio>
        <Radio value="memorial">Memorials</Radio>
      </Stack>
    </RadioGroup>

    {/* <RadioGroup onChange={()=>setDesc(!desc)} value={desc}>
      <Stack direction="column">
         <Radio value="true">Ascending</Radio>
        <Radio value="false">Descending</Radio> 
      </Stack>
    </RadioGroup> */}
    
      
     

        
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={()=>{setFilters(value)
              
              }} colorScheme="blue">Submit</Button>
              
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
            </LayoutContainer>

            <LayoutContainer>
            <DonationCardCompo>
        {cards.map((item) => (
          <DonationCardDetails
            label={item.title}
            imageUrl={item.image}
            amount={item.target}
            creater={item.createdBy}
            percentage={(
              (item.supporters.reduce((ac, v) => {
                return ac + v.amount;
              }, 0) /
                item.target) *
              100
            ).toFixed(1)}
          ></DonationCardDetails>
        ))}
      </DonationCardCompo>
            </LayoutContainer>
              
            <Footer/>
        </div>
    )
}