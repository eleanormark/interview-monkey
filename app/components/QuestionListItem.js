import React from 'react';

const QuestionListItem = (obj) => {

  console.log("================================== in question List item")
  console.log(obj);
  return (
    <tr>
      <td>{obj.index + 1}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.category}</td>
      <td>{obj.info.questions.length}</td>
      <td>{obj.info.date.substring(0,10)}</td>
      <td>{obj.info.url}</td>
      <td>
        <button onClick={() => obj.onDeleteList(obj.info._id)} type="button" className="btn btn-info btn-sm">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
      <td>
        <button onClick={() => obj.onEditList(obj.info)} type="button" className="btn btn-info btn-sm">
          <span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>
    </tr>
  )
};

export default QuestionListItem;