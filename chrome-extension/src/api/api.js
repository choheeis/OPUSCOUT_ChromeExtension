import opusServer from './opusServer.js';

export const loginAPI = async (id, passwd, dispatch) => {
    const body = {
        "id" : id,
        "password" : passwd
    }
    console.log(body)
    try {
        const response = await opusServer.post('/login', body)
        console.log('응답성공')
        console.log(response.data)
        
        dispatch({
            type: 'UPDATE_LOGIN_INFO',
            value: response.data,
            id,
            passwd
        })

        return response.data
    } catch (error) {
        console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config); 
    }
}