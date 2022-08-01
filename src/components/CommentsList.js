import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments, featureID}) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id}/>
      ))}
    </div>
  )
}

export default CommentsList