import * as Types from '../actionType'
import request from '../../api'

export const getChannelDetails = (id) => async dispatch => {
    try {
        dispatch({
            type: Types.CHANNEL_DETAILS_REQUEST,
        })
        const { data } = await request("/channels", {
            params: {
                part: 'snippet,contentDetails,statistics',
                id

            }
        })
        dispatch({
            type: Types.CHANNEL_DETAILS_SUCCESS,
            payload:data.items[0]
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: Types.CHANNEL_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const chackSubscripttionStatus = (id) => async (dispatch,getState) => {
    try {
       
        const { data } = await request("/subscriptions", {
            params: {
                part: 'snippet',
                channelId:id,
                mine:true
            },
            headers:{
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })
        dispatch({
            type: Types.SET_SUBSCRIPTION_STATUS,
            payload:data.items.length!==0
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
       
    }
}