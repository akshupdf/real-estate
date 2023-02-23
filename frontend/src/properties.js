import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropContext from "./context/Prop/PropContext"


function Properties (product) {

    const { addToProp  } = useContext(PropContext);

    const [data, setData] = useState("")


    useEffect(() => {
        setData(data)
    }, [data])


    const getData = () =>{
        axios.post("http://localhost:5000/get").then(res =>{
            setData(res.data)
            console.log(data)
        })
    }
 
    useEffect(() => {
        getData();
    }, []);




    return (
        <div className='w-[40vh] h-[50vh] p-2 m-2 '>

            {
             data && data.map(data=>{

                    return(

                        
                            
                            <div className='w-[50vh] h-[70vh] border-2 border-black  p-4  m-4' data={product}  key={data._id}>
                            <img className='w-[40vh] h-[40vh]' alt=""></img>
                        <h1>Address : {data.address}</h1>
                        <h1>bathroomsTotalInteger = {data.bathroomsTotalInteger}</h1>
                        <h1>bedroomsTotal = {data.bedroomsTotal}</h1>
                        <h1>buildingAreaTotal = {data.buildingAreaTotal}</h1>

                        <h1>Price : {data.price}</h1>
                        <div>
                        <button className='border-2 border-black m-2' onClick={()=> addToProp(data)}>Like</button>
                       
                        </div>
                        </div>
                        

                    )

                    
                })
            }
        </div>
    )
} 

export default Properties;