import React from 'react'
import '../styles/reply-box.css'

const ReplyBox = ({ show, reply, setReply, postReply }) => {
  
  function handleChange(e) {
    setReply(e.target.value)
  }

  return (
    show && (
      <>
        <div className='reply-box'>
          <div className="reply-box-container">
          <textarea name="post-details" className='reply-box-textarea' placeholder="Any additional details..." id="post-details" rows="1" onChange={handleChange} value={reply}></textarea> 
          </div>
        </div>
        <button className="reply-submit-btn" onClick={postReply}>
        Post Reply
      </button>
      </>
    )
  );
}


export default ReplyBox