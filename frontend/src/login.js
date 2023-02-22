import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Login () {


    const navigate = useNavigate()

    const [user, setUser] = useState({
       
        email:"",
        password:"",
        
     })

    const handle = e => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name]: value
        }) 
    }

    const login = () =>   {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            navigate('/')
        } )

    }

    

    return(

        <div className=''>
            <div className="grid mx-auto justify-center mt-16 border-2 border-black w-[60vh] ">
            Email:<input type="text" className="w-80 p-2 m-2 border-2 border-black" name="email" value={user.email} onChange={handle} ></input>
            Password:<input type="password" className="w-80 p-2 m-2 border-2 border-black" name="password" onChange={handle} value={user.password}></input>

            <button className="m-2 border-2 border-zinc-900 w-20 ml-28 " onClick={login}>Login</button>

            </div>


        </div>
    )
}

export default Login;