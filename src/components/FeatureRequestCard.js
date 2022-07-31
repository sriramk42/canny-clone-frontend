import React from 'react';
import CommentsCount from './CommentsCount';
import UpvoteBtn from './UpvoteBtn';

export default function FeatureRequestCard({ featureReq }) {
  return (
    <div>
      <UpvoteBtn featureReq={featureReq}/>
      <h3>{featureReq.title}</h3>
      <p className='body'>{featureReq.description}</p>
      <CommentsCount count={featureReq.comments.length}/>
    </div>
  );
}
