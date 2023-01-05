import React, { useState } from 'react'
import styled from 'styled-components'
// import Employees from '../Data/Data'

export default function Home() {
    const [eData,setEdata]=useState(Employees)


//     const filterData = (process)=>{
//         const fData = Employees.filter((e)=>{
//             return e.process === process;
//         }) ;
//         setEdata(fData)
//         if(process === "All"){
//             setEdata(Employees);
//         }
//  }






  return (

    <Hom>




    <Filter>
        <button onClick={()=>filterData("All")}>All</button>
        <button onClick={()=>filterData("Devlopers")}>Devlopers</button>
        <button onClick={()=>filterData("Banking")}>Banking</button>
        <button onClick={()=>filterData("Design")}>Design</button>


    </Filter>





    <Main>





        {eData.map((e)=>{
            return(
                <Div key={e.id}>
                    {/* <p>Id:-{e.id}</p> */}
                    <h4><b>Name:-</b>{e.name}</h4>
                    <p>Process:-{e.process}</p>
                    <p>Exprience:-{e.experience}</p>

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
min-width: 300px;

padding: 10px;
/* min-height: 400px; */
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;





`

const Main = styled.div`
margin-top: 50px;
width: 50%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`
