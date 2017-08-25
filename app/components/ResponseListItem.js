import React from "react";

const ResponseListItem = data => {
  return (
    <tr>
      <td>
        {data.res2.intervieweeFullName}
      </td>
      <td>
        {data.res2.intervieweePosition}
      </td>
      <td>
        {data.res1.title}
      </td>
      <td>
        {data.res1.category}
      </td>
      <td>
        {data.res2.date.substring(0, 10)}
      </td>
      <td>
        {data.res2.status}
      </td>
      <td>
        <button
          onClick={() => data.onRemoveResponse(data.res1._id, data.res2._id)}
          type="button"
          className="btn btn-info btn-outline btn-sm"
        >
          <span className="glyphicon glyphicon-trash" />
        </button>
      </td>
      <td>
        <button
          onClick={() => data.onViewAnswers(data.res1, data.res2)}
          type="button"
          className="btn btn-info btn-outline btn-sm"
        >
          <span className="glyphicon glyphicon-eye-open" />
        </button>
      </td>
    </tr>
  );
};

export default ResponseListItem;
