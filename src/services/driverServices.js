import axios from "axios"

export const getDriverslistfromAPI = async() => {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/api/driver/list`)
    } catch (error) {
        return error
    }
}

export const addDriver = async(requestObject) => {
    try{
        return await axios.post(`${process.env.REACT_APP_API_URL}/api/driver/add`,requestObject)
    }catch(error){
        return error
    }
}

export const getIndividualDriver = async(driverId) => {
    try{
        if(driverId){
            return await axios.get(`${process.env.REACT_APP_API_URL}/api/driver/list?driverid=${driverId}`)
        }else{
            return await axios.get(`${process.env.REACT_APP_API_URL}/api/driver/list`)
        }
    }catch(error){
        console.log(error)
    }
}

export const deleteDriver = async(driverId) => {
    try{
        return await axios.delete(`${process.env.REACT_APP_API_URL}/api/driver/delete?driverid=${driverId}`)
    }catch(error){
        console.log(error)
    }
}

export const editDriver = async(driverId,requestObject) => {
    try{
        return await axios.put(`${process.env.REACT_APP_API_URL}/api/driver/edit?driverid=${driverId}`,requestObject)
    }catch(error){
        return error
    }
}



export const getDriverList = async() => {
    try{
        return await axios.get(`${process.env.REACT_APP_API_URL}/api/driver/list`)
    }catch(error){
        return error
    }
}