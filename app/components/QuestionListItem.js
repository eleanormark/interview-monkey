import React from 'react';

const QuestionListItem = (obj) => {

  console.log("================================== in question List item")
  console.log(obj);
  return (
    <tr>
      <td>{obj.info.id}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.title}</td>
      <td>
        <button onClick={() => obj.onDeleteList("testing123")} type="button" className="btn btn-info btn-sm">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
      <td>
        <button onClick={() => obj.onEditList("test")} type="button" className="btn btn-info btn-sm">
          <span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>
    </tr>
  )
};

export default QuestionListItem;