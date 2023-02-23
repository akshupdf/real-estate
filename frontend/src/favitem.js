import { useContext } from "react";
import PropContext from "./context/Prop/PropContext";


function Favitem ({item}) {

    const {removeItem} = useContext(PropContext)

    return(
        <div>
            <h1>Liked properties</h1>
            <li className='w-[60vh] h-[12vh] flex border-2 border-black'>
                <img className="w-20" alt=""></img>
                <div className="flex">
                   
                 <h1> Address :  {item.address} </h1>
                   <h1>price: {item.price}</h1> 
                </div>

                <button className='m-4 border-2 border-black rounded-lg w-20 h-8' onClick={() => removeItem(item.id)}>
        Unlike
      </button>
            </li>

        </div>
    )
}

export default Favitem;