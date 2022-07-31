import React from 'react';
import CommentsCount from './CommentsCount';
import UpvoteBtn from './UpvoteBtn';
import '../styles/feature-request-card.css'

export default function FeatureRequestCard({ featureReq }) {
  return (
    <div className="feature-req-card">
      <UpvoteBtn className="feature-votes" featureReq={featureReq}/>
      <h3>{featureReq.title}</h3>
      <p className='body'>{featureReq.description}</p>
      <CommentsCount count={featureReq.comments.length}/>
    </div>
  );
}
