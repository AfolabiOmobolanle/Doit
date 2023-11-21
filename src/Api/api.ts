import axios, {isCancel, AxiosError} from 'axios';
import { API_BASE_URL } from '../../env';



const baseURL = API_BASE_URL;


    export const getTodos = async () =>{

        try
        {
            console.log('bola',baseURL)
             axios.get(`${baseURL}/todos`,{timeout:10000})
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
    };

    export const getTodoByOwnerId =  (id: string) =>{

        try
        {
            console.log('owner details',baseURL)
             axios.get(`${baseURL}/todos/${id}`,{timeout:10000})
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
    };






    // export const addTodos = async () =>{

    //     try
    //     {
    //         console.log('bola',baseURL)
    //          axios.post(`${baseURL}/todos`,{timeout:10000})
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
    // };


    // export const deleteTodos = async () =>{

    //     try
    //     {
    //         console.log('bola',baseURL)
    //          axios.delete(`${baseURL}/todos`,{timeout:10000})
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
    // };

    // export const updateTodo = async () =>{

    //     try
    //     {
    //         console.log('bola',baseURL)
    //          axios.put(`${baseURL}/todos`,{timeout:10000})
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
    // };