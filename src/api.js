import axios from "axios";
const request=axios.create({
    baseURL:" https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyDoLSHrj5PspCAYGAwaJsVmi3X5MMtuEc4'
    },
})
export default request