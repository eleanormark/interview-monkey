import React from 'react';

const ResponseListItem = (obj) => {
  return (
    <tr>
      <td>{obj.info.intervieweeFullName}</td>
      <td>{obj.info.intervieweePosition}</td>
      <td>{obj.info.questions.title}</td>
      <td>{obj.info.date.substring(0,10)}</td>
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

export default ResponseListItem;