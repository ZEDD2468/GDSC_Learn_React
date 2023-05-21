import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  const [feedbacks, setFeedbacks] = useState(feedback);

  const handleDelete = (id) => {
    console.log(id);
    setFeedbacks((prevFeedbacks) => {
      return prevFeedbacks.filter((item) => item.id !== id);
    });
  };

    if  (!feedbacks || feedbacks.length === 0) {
        return <p>No feedback yet</p>;
      }

  return (
    <div className='feedback-list'>
      {feedbacks.map((item)=> (
       <FeedbackItem 
         key={item.id} 
         item={item}
         isDelete={() => handleDelete(item.id)}
       />
      ))}      
    </div>
  );
}

export default FeedbackList
