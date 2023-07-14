import axios from "axios"

export const addCab = async(requestObject) => {
    try{
        return await axios.post(`${process.env.REACT_APP_API_URL}/api/cab/add`,requestObject)
    }catch(error){
        return error
    }
}

export const getIndividualCab = async(cabId) => {
    try{
        if(cabId){
            return await axios.get(`${process.env.REACT_APP_API_URL}/api/cab/list?cabid=${cabId}`)
        }else{
            return await axios.get(`${process.env.REACT_APP_API_URL}/api/cab/list`)
        }
    }catch(error){
        console.log(error)
    }
}

export const deleteCab = async(cabId) => {
    try{
        return await axios.delete(`${process.env.REACT_APP_API_URL}/api/cab/delete?cabid=${cabId}`)
    }catch(error){
        console.log(error)
    }
}

export const editCab = async(cabId,requestObject) => {
    
    try{
        return await axios.put(`${process.env.REACT_APP_API_URL}/api/cab/edit?cabid=${cabId}`,requestObject)
    }catch(error){
        return error
    }
}

export const assignDriver = async(cabId,requestObject,driverId) => {
    try{
         await axios.put(`${process.env.REACT_APP_API_URL}/api/cab/edit?cabid=${cabId}`,requestObject)
         await axios.put(`${process.env.REACT_APP_API_URL}/api/driver/edit?driverid=${driverId}`,requestObject)
    }catch(error){
        return error
    }
}

export const getCabList = async() => {
    try{
        return await axios.get(`${process.env.REACT_APP_API_URL}/api/cab/list`)
    }catch(error){
        return error
    }
}