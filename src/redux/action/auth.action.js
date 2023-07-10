
import { auth, providerGoogle } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";
export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const res = await signInWithPopup(auth, providerGoogle)
        console.log(res);
        // const accessToken=res.credential.accessToken
        const accessToken = res.user.accessToken
        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL,
        }
        sessionStorage.setItem('yt-access-token', accessToken)
        sessionStorage.setItem('yt-user', JSON.stringify(profile))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,

        })
        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }

}

export const log_out=()=>async dispatch=>{
    await auth.signOut()
    dispatch({
        type:LOG_OUT,
    })
    sessionStorage.removeItem('yt-access-token')
    sessionStorage.removeItem('yt-user')
    
}