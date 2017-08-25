import React from "react";
import UniqueLink from "./UniqueLink";

const QuestionListItem = obj => {
  return (
    <tr>
      <td>
        {obj.index + 1}
      </td>
      <td>
        {obj.info.title}
      </td>
      <td>
        {obj.info.category}
      </td>
      <td>
        {obj.info.questions.length}
      </td>
      <td>
        {obj.info.date.substring(0, 10)}
      </td>
      <td>
        <UniqueLink obj={obj} />
      </td>
      <td>
        <button
          onClick={() => obj.onDeleteList(obj.info._id)}
          type="button"
          className="btn btn-info btn-sm btn-outline"
        >
          <span className="glyphicon glyphicon-trash" />
        </button>
      </td>
      <td>
        <button
          onClick={() => obj.onEditList(obj.info)}
          type="button"
          className="btn btn-info btn-sm btn-outline"
        >
          <span className="glyphicon glyphicon-pencil" />
        </button>
      </td>
    </tr>
  );
};

export default QuestionListItem;
