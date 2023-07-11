import React, { useEffect } from 'react'
import './videoMetaDta.scss'
import moment from 'moment'

import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoretext from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { chackSubscripttionStatus, getChannelDetails } from '../../redux/action/chanel.action'
const VideoMetaDta = ({ videos: { snippet, statistics }, videoId }) => {
  // console.log(videos,videoId);
  const { channelId, channelTitle, description, title, publishedAt } = snippet
  const { viewCount, likeCount, dislikeCount } = statistics
  const { snippet: channelSnippet, statistics: channelStatistics } = useSelector(state => state.channelDetail.channel)
  const subscriptionStatus=useSelector(state=>state.channelDetail.subscriptionStatus)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(chackSubscripttionStatus(channelId))
  }, [dispatch, channelId])
  return (
    <div className="VideoMetaDta py-2">
      <div className="viVideoMetaDta_top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between alain-ites-center py-1">
          <span>
            {numeral(viewCount).format('0.a')} Views  *
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} />{numeral(likeCount).format('0.a')}
            </span>
            <span className='mr-3'> <MdThumbDown size={26} />{numeral(dislikeCount).format('0.a')}</span>
          </div>
        </div>

      </div>
      <div className="VideoMetaDta_channel d-flex justify-content-between alain-items-center my-2 py-3">
        <div className="d-flex">
          <img src={channelSnippet?.thumbnails?.default?.url}
            alt="avatar" className='rounder-circle mr-3' />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(channelStatistics?.subscriberCount).format('0.a')} Subscribers </span>
          </div>
          <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-gray'}`}>
           {subscriptionStatus?'Subscribed':'Subscriber'}
          </button>
        </div>
      </div>
      <div className="VideoMetaDta_description d-flex justify-content-between alain-items-center my-2 py-3">
        <ShowMoretext
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoretext>
      </div>
    </div>

  )
}

export default VideoMetaDta