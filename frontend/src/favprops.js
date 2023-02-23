import { useContext } from "react";
import PropContext from "./context/Prop/PropContext";
import Favitem from "./favitem";


export function Favprop () {
  const {propItems} = useContext(PropContext)

  return(
    <>
    <div className='w-[60vh] h-[60vh] border-2 border-black bg-white text-black overflow-auto'>

      <div>
        {
          propItems.map(item =>{

          return (
            <Favitem key={item._id} item={item}/>

          )
            
          })
        }
      </div>

    </div>
    </>
  )
}