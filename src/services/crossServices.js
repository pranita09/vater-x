import axios from "axios"

export const assignCab = async(driverId,requestObject) => {
    try{
         await axios.put(`${process.env.REACT_APP_API_URL}/api/driver/edit?driverid=${driverId}`,requestObject)
         await axios.put(`${process.env.REACT_APP_API_URL}/api/cab/edit?cabid=${requestObject.assigned_cab}`,{
            assigned_driver:driverId
         })
    }catch(error){
        return error
    }
}
export const removeCab = async(driverId,cabId) => {
    console.log(driverId,cabId)
    try{
         await axios.put(`${process.env.REACT_APP_API_URL}/api/driver/edit?driverid=${driverId}`,{assigned_cab:null})
         await axios.put(`${process.env.REACT_APP_API_URL}/api/cab/edit?cabid=${cabId}`,{
            assigned_driver:null
        })
        return "works"
    }catch(error){
        return error
    }
}