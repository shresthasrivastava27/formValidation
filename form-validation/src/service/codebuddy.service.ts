import axios from 'axios';

export const uploadFormData = async (formData) => {
    const res = await axios({
        method: 'POST',
        baseURL: "https://codebuddy.review/",
        url: `submit`,
        data: {
            ...formData,
        },
    });

    return res.data || {};
};


export const fetchPostData = async() =>{
    const res = await axios({
        method: 'get',
        baseURL: "https://jsonplaceholder.typicode.com/todos/",
        url: '1',
      });
    
      return res.data || {};
} 

