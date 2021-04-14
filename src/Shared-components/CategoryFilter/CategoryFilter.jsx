import React, { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getCards } from "../../Redux/categoryApi/actions"
import { DonationCardCompo } from "../DonationCard/DonationCardCompo"
import { DonationCardDetails } from "../DonationCard/DonationCardDetails"

export function CategoryFilter(){
    const [filters,setFilters]=useState("")

 const dispatch=useDispatch()
 const {cards,isLoading,isError}=useSelector(state=>state.cards,shallowEqual)

 useEffect(()=>{
   dispatch(getCards(filters))
 },[filters])

 // console.log(cards)


 const handleButton=(str)=>{
     setFilters(str)
 }
 cards.map(item=>{
     console.log(item.supporters.reduce((acc,a)=>{
         
        return acc+a.amount},0))
 })
    

    return(
        <div>
              <h1>category</h1>
              <button onClick={()=>handleButton("animals")}>Animal</button>
              <button onClick={()=>handleButton("memorial")}>memorial</button>
              <select onChange={(e)=>setFilters(e.target.value)}>
                  <option value="medical">Medical</option>
                  <option value="emergencies">Emergencies</option>
                  <option value="sports">Sports</option>
                  <option value="memorial">Memorial</option>
              </select>
              <DonationCardCompo>
                  {
                      cards.map(item=><DonationCardDetails
                         label={item.title}
                         imageUrl={item.image}
                         amount={item.target}
                         creater={item.createdBy}
                         
                         percentage={
                            ((item.supporters.reduce((ac,v)=>{return ac+v.amount},0)/item.target)*100).toFixed(1)
                         }
                      ></DonationCardDetails>)
                  }
                 </DonationCardCompo>
              
        </div>
    )
}