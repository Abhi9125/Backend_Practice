import { data } from "../data/data.js"

export const getAllUser = (req, res) => {
    return res.status(200).json({data : data})
}


export const getSingleUserById = (req, res) => {
    const id = req.params.id;
    console.log({id}, "req");


    const user = data.filter((user) => user.id === Number(id))

    console.log(user);
    
    
    if(user.length != 0){
        return res.status(200).json({user : user[0]});
    }else {
        return res.status(404).json({message : "User not found"})
    }

}


export const createNewUser = (req, res) => {
    const {name, email, age, city} = req.body;
    const length = data[data.length-1].id + 1;

    data.push({
        id : length,
        name, 
        email, 
        age, 
        city
    });

    return res.status(200).json({message : data});
}


export const updateUserDetails  = (req, res) => {
    const {name , age } = req.body;
    
    const id = req.params.id;


    for(let i = 0; i < data.length; i++){
        if(data[i].id === Number(id)){
            data[i].name = name;
            data[i].age = age

            res.status(200).json({message : data});
        }
    }


    res.status(400).json({message : "User not found"})
}


export const deleteUserById = (req, res) => {
    const id = req.params.id;

    const deletedUserArr = data.filter((user) => user.id != Number(id))
    
    
    if(deletedUserArr.length === data.length){
        res.status(400).json({message : "User not deleted"});
    }else res.status(200).json({message : deletedUserArr});
}