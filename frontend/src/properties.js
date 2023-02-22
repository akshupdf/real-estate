import { useContext, useEffect, useState } from 'react';
import data from '../src/estate.json'
import PropContext from "./context/Prop/PropContext"


function Properties (product) {

    const { addToProp  } = useContext(PropContext);

    // const [data, setData] = useState("")

    // useEffect(() => {
    //     setData(data)
    // }, [data])




    return (
        <div className='w-[40vh] h-[50vh] p-2 m-2'>

            {
                data && data.map(data=>{

                    return(

                        
                            
                            <div className='w-[50vh] h-[60vh] border-2 border-black  p-2 m-4' data={product}  key={data.id}>
                            <img className='w-[40vh] h-[40vh]' alt=""></img>
                        <h1>{data.address}</h1>
                        <h1>{data.price}</h1>
                        <div>
                        <button className='border-2 border-black m-2' onClick={()=> addToProp(data)}>Like</button>
                        <button className='border-2 border-black m-2'>Unlike</button>
                        </div>
                        </div>
                        

                    )

                    
                })
            }
        </div>
    )
} 

export default Properties;