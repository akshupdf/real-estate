import {  useContext } from "react";
import PropContext from "./context/Prop/PropContext";



function Favproperties ({item}) {

    const {removeItem} = useContext(PropContext);
    const {propItems} = useContext(PropContext);


    return (
        <div>

<li className='w-[60vh] h-[12vh] flex border-2 border-black'>
        {
        propItems &&  propItems.map(item=>{

            return (
                <div item={item} key={item.id}>
                <img  alt='' className="w-[10vh] h-[9vh] p-2"/>
      <div className="p-4">
       {item.price}${item.address}
      </div>
      <button className='m-4 border-2 border-black rounded-lg w-20 h-8' onClick={() => removeItem(item._id)}>
        Remove
      </button>
      </div> )
    

            })
        }
      </li>
        </div>
    )
}

export default Favproperties;