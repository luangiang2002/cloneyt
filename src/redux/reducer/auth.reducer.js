import * as Types from "../actionType";

const initialState = {
    accessToken: sessionStorage.getItem('yt-access-token') ? sessionStorage.getItem('yt-user') : null,
    user: sessionStorage.getItem('yt-access-token') ? JSON.parse(sessionStorage.getItem('yt-user')) : null,
    loading: false,

}
export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case Types.LOGIN_REQUEST:

            return {
                ...prevState,
                loading: true
            }
        case Types.LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false
            }
        case Types.LOGIN_FAIL:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }
        case Types.LOAD_PROFILE:
            return {
                ...prevState,
                user: payload
            }
        case Types.LOG_OUT:
            return (
                {
                    ...prevState,
                    accessToken: null,
                    user:null,
                    
                }
            )

        default:
            return prevState
    }
}