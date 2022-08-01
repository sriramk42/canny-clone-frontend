import React, { useState } from 'react'

const AddComment = ({maxLength, featureReqs, updateFeatureReqs, featureID}) => {

  const [comment, setComment] = useState('');
  
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
              }
            ]
          }
          : featureReq
      )
    )

    setComment('')
  }


  return (
    <div>
      <textarea
          type='text'
          className={``}
          maxLength={maxLength}
          placeholder='Leave a comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      <button onClick={() => addComment(comment)}></button>
    </div>
  )
}

export default AddComment