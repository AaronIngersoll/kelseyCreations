
import axios from 'axios';
const KEY = 'AIzaSyCSwNci0V2Nze4POGLpIQCtIxUyD34i8qs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/auth/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})


