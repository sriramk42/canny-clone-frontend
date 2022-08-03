import React, { useContext, useState } from 'react'
import '../styles/add-comment.css'
import { UserContext } from '../context/UserContext';

const AddComment = ({maxLength, featureReqs, updateFeatureReqs, featureID}) => {

  const [comment, setComment] = useState('');
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const addComment = (comment) => {
    updateFeatureReqs(
      featureReqs.map(featureReq => 
        featureReq.id === parseInt(featureID)
          ? {
            ...featureReq,
            comments: [
              ...featureReq.comments,
              {
                id: featureReq.comments[featureReq.comments.length - 1].id + 1,
                content: comment,
                user: currentUser
              }
            ]
          }
          : featureReq
      )
    )

    setComment('')
  }


  return (
    <>
      <div className="composer-form">
        <div className="auto-resize-textarea">
          <textarea
              type='text'
              rows='1'
              className='add-comment-textarea'
              maxLength={maxLength}
              placeholder='Leave a comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />        
        </div>
      </div>
      <button className="add-comment-button" onClick={() => addComment(comment)}>SUBMIT</button>   
    </>  
  )
}

export default AddComment