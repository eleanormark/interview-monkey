import React from "react";
import QuestionListItem from "./QuestionListItem";
import { Modal, Button } from "react-bootstrap";

const QuestionList = props => {
  const questionListItems = props.objs.map((obj, index) => {
    return (
      <QuestionListItem
        key={obj._id}
        info={obj}
        index={index}
        addInfo={props.addInfo}
        onDeleteList={props.onListDelete}
        onEditList={props.onListEdit}
        onGenerateUUID={props.onUUIDGenerate}
      />
    );
  });

  return (
    <div>
      <div className="table-top font-23"> Interview Question Lists</div>
      <table className="table table-hover" id="question-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>#Quest</th>
            <th>Date</th>
            <th>Unique Link</th>
            <th>Remove</th>
            <th>View/Edit</th>
          </tr>
        </thead>
        <tbody>
          {questionListItems}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;
