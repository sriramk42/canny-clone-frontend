import React, {useContext, useState} from 'react'
import { FeatureReqContext } from '../context/FeatureReqContext';

const FeedbackForm = () => {
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackTitleError, setFeedbackTitleError] = useState('');
  const [feedbackDetail, setFeedbackDetail] = useState('');
  const [feedbackDetailError, setFeedbackDetailError] = useState('');

  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext)

  const validateEmpty = (value) => {
    return !value || value.length < 1;
  };

  const handleTitleChange = (e) => {
    setFeedbackTitle(e.target.value)
    setFeedbackTitleError('')
  }

  const handleDetailsChange = (e) => {
    setFeedbackDetail(e.target.value)
    setFeedbackDetailError('')
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (validateEmpty(feedbackTitle)) {
      return setFeedbackTitleError("Oops! You forgot to enter a post title");
    }
    if (validateEmpty(feedbackDetail)) {
      return setFeedbackDetailError("Oops! You forgot to enter the post details");
    }

    updateFeatureReqs([
      ...featureReqs,
      {
        id: featureReqs[featureReqs.length - 1].id + 1,
        title: feedbackTitle,
        description: feedbackDetail,
        upvotes: 0,
        upvoted: false,
        comments: []
      }
    ])
  }


  return (
    <div>
      <form>
        <label htmlFor="">INPUT</label>
        <input type="text" id="post-input" placeholder="Short, descriptive title" onChange={handleTitleChange} value={feedbackTitle}/>

        <label htmlFor="post-details">DETAILS</label>
        <textarea name="post-details" id="post-details" cols="30" rows="10" onChange={handleDetailsChange} value={feedbackDetail}></textarea> 

        <button onClick={(e) => onSubmitHandler(e)}>CREATE POST</button>
        {feedbackTitleError && <p>{feedbackTitleError}</p>}
        {feedbackDetailError && <p>{feedbackDetailError}</p>}
      </form>
    </div>
  )
}

export default FeedbackForm