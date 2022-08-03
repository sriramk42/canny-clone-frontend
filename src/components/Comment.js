import React, { useContext, useState } from 'react'
import '../styles/comment.css'
import ReplyBox from './ReplyBox'
import { FeatureReqContext } from '../context/FeatureReqContext'
import { UserContext } from '../context/UserContext'

const Comment = ({ comment, commentID, featureID, replies }) => {
  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext);
  const [currentUser] = useContext(UserContext);
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState('');

  let commentsReplies = comment.replies || [];
  if (replies) {
    commentsReplies = replies;
  }

  const postReply = () => {
    updateFeatureReqs(
      featureReqs.map((featureReq) => {
        return featureReq.id === parseInt(featureID)
          ? {
              ...featureReq,
              comments: featureReq.comments.map((commentInLoop) => {
                return commentInLoop.id === commentID
                  ? {
                      ...commentInLoop,
                      replies: [
                        ...commentsReplies,
                        { content: reply, replyingTo: comment.user.username, user: currentUser },
                      ],
                    }
                  : commentInLoop;
              }),
            }
          : featureReq;
      })
    );

    setShowReply(false);
  };

  return (
    <div className="comment">
      <div className="comment-top-container">
        <div className="comment-top-container-left">
          <div className="user-avatar-container">
            <div className="user-avatar">
              <div className="avatar-container">
                <img
                  src={`${comment.user.image.split('.')[1]}.jpg`}
                  alt={`Photograph of ${comment.user.name}`}
                />
              </div>
            </div>
          </div>
          <div className="user-info">
            <span className="user-info-name">{comment.user.name}</span>
          </div>
        </div>
      </div>
      <div className="comment-bottom-container">
        <div className="comment-body">
          {comment.replyingTo && <span>@{comment.replyingTo} </span>}    
          {comment.content} 
        </div>

        <div className="comment-menu">
          <div className="comment-menu-menu">
            <div className="menu-link">
              <div className="reply" onClick={() => setShowReply(!showReply)}>Reply</div>
            </div>
          </div>
        </div>

        <ReplyBox show={showReply} reply={reply} setReply={setReply} postReply={postReply} />
      </div>
    </div>
  );
}

export default Comment