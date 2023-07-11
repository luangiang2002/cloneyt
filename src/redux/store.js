import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducer/auth.reducer'
import { homeVideoReducer, selectVideoReducer } from './reducer/video.reducer'
import { channelDetail } from './reducer/channel.reducer'
const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos:homeVideoReducer,
    selectedVideo:selectVideoReducer,
    channelDetail:channelDetail,
})
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)
    ))

export default store;