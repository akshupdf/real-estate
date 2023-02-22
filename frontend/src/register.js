import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'


function Register () {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
       name:"",
       email:"",
       password:""
    })


    const handle = e => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name]: value
        }) 
    }

    const register = () => {
        const {name, email, password} = user
        if(name && email && password ){     

        axios.post("http://localhost:5000/register", user)
        .then(res => {
            
            alert("Thank You, please Login")
            navigate('/login')
        })

    }else{
        alert("invalid input")
    }}



    return (
        <div>
            <div className=" grid mx-auto justify-center mt-16 border-2 border-black w-[60vh]">
Name:<input type="text" onChange={handle} name="name" value={user.name} className="w-80 p-1 m-2 border-2 border-black"></input>
Email id:<input type="text" name="email" onChange={handle} value={user.email} className="w-80 p-1 m-2 border-2 border-black"></input>
password: <input type="password" name="password" onChange={handle} value={user.password} className="w-80 p-1 m-2 border-2 border-black"></input>


<button  className="m-2 border-2 ml-28 border-zinc-900 w-20" onClick={register} >Register</button>
</div>

        </div>
    )
}

export default Register;