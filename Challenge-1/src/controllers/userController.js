import { data } from "../data/data.js"

export const getAllUser = (req, res) => {
    return res.status(200).json({data : data})
}


export const getSingleUserById = (req, res) => {
    const id = req.params.id;
    console.log({id}, "req");


    // const user = data.filter((user) => user.id === Number(id))

    // console.log(user);
    
    
    // if(user.length != 0){
    //     return res.status(200).json({user : user[0]});
    // }else {
    //     return res.status(404).json({message : "User not found"})
    // }

    const user = data.find((user) => user.id === Number(id));

    if(!user){
        return res.status(400).json({message : "User Not found"})
    }

    return res.status(200).json({data : user})

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

    return res.status(201).json({message : data}); // status not 200 -- 201 if new resource created
}


export const updateUserDetails  = (req, res) => {
    
    const id = req.params.id;


    for(let i = 0; i < data.length; i++){
        if(data[i].id === Number(id)){
           data[i] = {
            ...data[i], 
            ...req.body,
            id : data[i].id
           }

           return res.status(200).json({ success: true, data: data[i] });
        }
    }


    return res.status(404).json({message : "User not found"})
}


export const deleteUserById = (req, res) => {
    const id = req.params.id;

    const index = data.findIndex((user) => user.id === Number(id));

    if(index != -1){
        data.splice(index, 1);
        return res.status(200).json({message : data});
    }else return res.status(404).json({message : "Not Deleted"})
}