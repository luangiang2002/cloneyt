import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType";

const initialState =
{
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'

}

export const homeVideoReducer = (state = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:
                    state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}
export const selectVideoReducer = (
    state = {
        loading: true,
        video: null
    },
    action
) => {
    const { payload, type } = action
    switch (type) {
        case SELECTED_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                video:payload
            }
        case SELECTED_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                video:null,
                error:payload,
            }

        default:
            return state
    }
}
