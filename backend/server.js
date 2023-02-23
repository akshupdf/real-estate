const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/realestate"
const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())
const {v4 : uuidv4} = require('uuid')


const userId = uuidv4()

const data = require("./estate.json");



mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


const objSchema = new mongoose.Schema({
    _id : String,
    bathroomsTotalInteger : String,
    bedroomsTotal : String,
    buildingAreaTotal : String,
    price : String,
    address : String,
    
})

const myObj = mongoose.model("properties", objSchema)

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const User =  mongoose.model("users",userSchema)

app.post("/login",(req,res)=>{

    const { email, password} = req.body

    User.findOne({ email: email}, (err, user)=>{

        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user,
                   
            })
                
            } else {
                res.send({ message: "Password didn't match"})
            } 
        } else {
            res.send({message: "User not registered"})
        }
    }) 

})

app.post("/register", (req, res) => {
    const {name, email, password} = req.body
    User.findOne({email:email}, (err, user) => {
     if(user){
        res.send({message: 'User already registered'})

     } else {

        const user = new User ({
            name,
            email,
            password
        })
        user.save(err =>{
            if(err) {
                res.send(err)
            }
            else{
                res.send({message: "successfully registered, please login now"})
            }
        })
     }}
)})

app.post("/get" , (req,res)=>{

    
  const result =  myObj.find({} , ((err,data)=>{
        res.send(data)
        console.log(data)
    }));

   

   
    })




app.post("/add", () =>{


    data.forEach(data=>{



        const obj = new myObj({
        _id : userId,
        bathroomsTotalInteger : data.bathroomsTotalInteger,
        bedroomsTotal : data.bedroomsTotal,
        buildingAreaTotal : data.buildingAreaTotal,
        price : data.price,
        address : data.address,
        
    
        })

        

        obj.save( (err)=>{
            if (!err) {
                console.log("data inserted");

               throw 'Break';

            }
          

        },[])
    
    
    })
}

)




app.listen(5000, function(){
    console.log("App is running on Port 5000");
});
