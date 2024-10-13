import axios from "axios";

const api=axios.create({
      baseURL:"https://jsonplaceholder.typicode.com",
});


// get user method 

export const UserData=()=>{
      return api.get("/users")
};