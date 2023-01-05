import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Employees from '../Data/Data'

export default function Home() {
    const [eData,setEdata]=useState([])
    const [input,setInput]=useState("")


    const data= async()=>{

        

        await axios({
            method:"GET",
            url:"https://hub.dummyapis.com/employee?noofRecords=40&idStarts=1001",
        })
        .then((res)=>{
            if(input !== ""){
                const fild = eData.filter((e)=>{
                    return e.firstName.toLowerCase() === input.toLowerCase();
                })
                
                setEdata(fild);
    
            }else{
                setEdata(res.data)
            }
    
            
           
        })
     
        

    }

    const search =()=>{
        data()

    }











useEffect(()=>{
    data()

},[]);

  return (

    <Hom>




    <Filter>

        <input type="text"  onChange={(e)=>{setInput(e.target.value)}} placeholder="Search By Your First Name" />
        <button onClick={search}>Search</button>



        {/* <button onClick={()=>filterData("All")}>All</button>
        <button onClick={()=>filterData("Devlopers")}>Devlopers</button>
        <button onClick={()=>filterData("Banking")}>Banking</button>
        <button onClick={()=>filterData("Design")}>Design</button> */}


    </Filter>





    <Main>





        {eData.map((e)=>{
            return(
                <Div key={e.id}>
                    <div>

                    <img src={e.imageUrl} alt="" />
                    </div>
                    <div>

                    <h4><b>Name:-</b>{e.firstName} {e.lastName}</h4>
                    <p>DOB:-{e.dob}</p>
                    <p>ContactNumber:- <b>{e.contactNumber}</b></p>
                    <p>Email:- <b>{e.email}</b></p>
                    </div>

                </Div>

            )
        })}
        
        
      
    </Main>

    </Hom>
  )
}



const Hom = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;




`
const Filter = styled.div`
width: 100%;
display: flex;
justify-content: center;

button{

    padding: 5px;
    margin: 10px;
}



`
const Div = styled.div`
margin: 15px;
min-width: 30%;


padding: 10px;
/* min-height: 400px; */
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
display: flex;
align-items: center;
justify-content: flex-start;

div{
    padding: 10px;
    /* width: 40%; */
}






`

const Main = styled.div`
margin-top: 50px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`
