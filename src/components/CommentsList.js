import React from 'react'
import Comment from './Comment'
import '../styles/comments-list.css'

const CommentsList = ({comments, featureID}) => {
  return (
    <div>
      {comments.map((comment) => {
        return comment.replies ? (
          <div>
            <Comment comment={comment} commentID={comment.id} featureID={featureID} />
            <div className="replies">
              {comment.replies.map(reply => {
                return (
                  <div>
                    <Comment
                      comment={reply}
                      replies={comment.replies}
                      commentID={comment.id}
                      featureID={featureID}
                    />
                  </div>
                );
              })}
            </div>
            <div ></div>
          </div>
        ) : (
          <div className='comment'>
            <Comment comment={comment} commentID={comment.id} featureID={featureID} />
            <div></div>
          </div>
        );
      })}
    </div>
  )
}

export default CommentsList