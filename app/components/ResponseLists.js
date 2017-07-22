import React from 'react';
import QuestionListItem from './QuestionListItem';

const QuestionList = () => {
  return (
    <div>
      <h3 className="page-header">Interviewee Responses</h3>
      <table className="table" id="response-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Sent Date</th>
            <th>Replied Date</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
              
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;