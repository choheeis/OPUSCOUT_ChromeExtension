import axios from 'axios';

const config = axios.create({
    baseURL : 'http://13.124.1.55:3000', 
    headers : {"Content-type": "application/json; charset=UTF-8",
                "Accept" : "*/*"
                }
})

export default config;