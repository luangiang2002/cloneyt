import * as Types from '../actionType'
import request from '../../api'

export const getPopularVideo=()=>async (dispatch,getState)=>{
    try {
        dispatch({
            type:Types.HOME_VIDEOS_REQUEST,
        })
       const {data}= await request("/videos",{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'US',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
            }
        })
        dispatch({
            type:Types.HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:'All'
            }
        })
    } catch (error) {
            console.log(error.message);
            dispatch({
                type:Types.HOME_VIDEOS_FAIL,
                payload:error.message
            })
    }
}

export const getVideoByCategory=(keyword)=>async (dispatch,getState)=>{
    try {
        dispatch({
            type:Types.HOME_VIDEOS_REQUEST,
        })
       const {data}= await request("/search",{
            params:{
                part:'snippet',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
                q:keyword,
                type:'video'
            }
        })
        dispatch({
            type:Types.HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword
            }
        })
    } catch (error) {
            console.log(error.message);
            dispatch({
                type:Types.HOME_VIDEOS_FAIL,
                payload:error.message
            })
    }
}

export const getVideoId=(id)=>async dispatch=>{
    try {
        dispatch({
            type:Types.SELECTED_VIDEOS_REQUEST,
        })
        const {data}=await request('/videos',{
            params:{
                part:'snippet,statistics',
                id:id
            }
        })
        dispatch({
            type:Types.SELECTED_VIDEO_SUCCESS,
            payload:data.items[0]
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type:Types.SELECTED_VIDEOS_FAIL,
            payload:error.message
        })
    }
}