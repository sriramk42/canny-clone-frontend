import React from 'react';
import CommentsCount from './CommentsCount';
import UpvoteBtn from './UpvoteBtn';

export default function FeatureRequestCard({ featureReq }) {
  return (
    <div>
      <UpvoteBtn />
      <CommentsCount count={featureReq.comments.length}/>
    </div>
  );
}
