import React from 'react';

const InterviewQAItem= (obj) => {
  return (
    <div>
        <p><strong>{obj.question}</strong></p>
        <div className="form-group">
            <textarea rows="4"
                type="text"
                className="form-control"
                id={"textarea_"+ obj.qaID}
                required
                name="input-answer"
                placeholder="Enter Answer."
            > 
            </textarea>
         </div>
    </div>
  );

};
export default InterviewQAItem;