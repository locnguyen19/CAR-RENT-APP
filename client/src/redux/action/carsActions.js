import { message } from 'antd';
import axios from 'axios';







// GET ALL AVAIBLE CARS FROM THE DATABASE
export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}


// ADD A NEW CAR TO THE DATABASE
export const addCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/cars/addcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('A new car was added successfully')
         setTimeout(() => {
            window.location.href='/'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}




//EDIT AN AVAIBLE CAR FROM THE DATABASE
export const editCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/cars/editcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Car details updated successfully')
         setTimeout(() => {
            window.location.href='/'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}



// DELETE AN AVAIBLE CAR FROM THE DATABASE
export const deleteCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/cars/deletecar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Car deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}