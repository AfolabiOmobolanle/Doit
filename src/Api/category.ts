import axios, {isCancel, AxiosError} from 'axios';
import { API_BASE_URL } from '../../env';



const baseURL = API_BASE_URL;
export const getCategory = async () =>{

    try
    {
        console.log('bola',baseURL)
         axios.get(`${baseURL}/categories`,{timeout:10000})
     .then(response => {
        console.log(response.data)
  
     })
     .catch(error =>{
        console.log(error)
       }
       )
    }catch(error){
        throw error;
    }
}

// export const addCategory = async () =>{

//     try
//     {
//         console.log('bola',baseURL)
//          axios.post(`${baseURL}/categories`,{timeout:10000})
//      .then(response => {
//         console.log(response.data)
  
//      })
//      .catch(error =>{
//         console.log(error)
//        }
//        )
//     }catch(error){
//         throw error;
//     }
// }

   