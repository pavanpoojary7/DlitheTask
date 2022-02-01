import axios from 'axios'

const url ="http://localhost:8081/bootcampPOC/toll"
const oneAtTime =async(param)=>{
    const tmp =await axios.get(`${url}/listing`) 
    return tmp
}

export{oneAtTime}  