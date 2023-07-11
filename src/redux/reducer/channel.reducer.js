import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS } from "../actionType"

const initialState =
{
    channel:{},
    loading:true,
    subscriptionStatus:false
}

export const channelDetail = (state = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case CHANNEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CHANNEL_DETAILS_SUCCESS:
            return {
                ...state,
                channel:payload,
                loading: false,
            }
        case CHANNEL_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                channel:null,
                error: payload
            }
        case SET_SUBSCRIPTION_STATUS:
            return{
                ...state,
                subscriptionStatus:payload
                
            }

        default:
            return state;
    }
}