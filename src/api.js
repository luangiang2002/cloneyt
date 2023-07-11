import axios from "axios";
const request=axios.create({
    baseURL:" https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyCrNPbKFADEWzEEP3YjlxVEZ9s4FRHmNIM'
    },
})
export default request