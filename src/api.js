import axios from "axios";
const request=axios.create({
    baseURL:" https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyBCjKB86LsJnvONY5WHWx-O4jfuQtdazoQ'
    },
})
export default request