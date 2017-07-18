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
      <td>
        <div className="form-group">
        <button onClick={() => obj.onGenerateUUID("test")} type="button" className="btn btn-info btn-sm">
          <span className="glyphicon glyphicon-random"></span>
        </button>
        &nbsp; 
        <input id= {obj.info.id + "-UUID" } />
        &nbsp; 
        <button type="button" className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-copy"></span>
        </button>
        </div>
      </td>

  </tr>
    
  )
};
export default QuestionListItem;