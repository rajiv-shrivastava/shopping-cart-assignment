import axios from 'axios';

const AUTH_TOKEN = 'demo';


const makeHeaders = () => {
 if(AUTH_TOKEN !== null 
 	 && AUTH_TOKEN !== undefined 
 	 && AUTH_TOKEN.length > 0){
   return {
   	 'Authorization': "bearer " + AUTH_TOKEN
     }
  }
  else {
    return {}
  }
}

let config = {
  	headers: makeHeaders(),
  	withCredentials: false,
    crossdomain: true,
  	baseURL: 'http://localhost:5000/',
}

export default axios.create(config);