import React from 'react';

const QuestionListItem = (obj) => {

  let copyToClipboard = (e) => {
     // find target element
    
    let  t = e.target;
    let  c = t.dataset.copytarget;
    let inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {
      // select text
      inp.select();
      try {
        // copy text
        document.execCommand('copy');
        inp.blur();
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }

    }
  }

  return (
    <tr>
      <td>{obj.index + 1}</td>
      <td>{obj.info.title}</td>
      <td>{obj.info.category}</td>
      <td>{obj.info.questions.length}</td>
      <td>{obj.info.date.substring(0,10)}</td>
      <td>
        <input type="text" id={"copyLink_" + obj.index}  value={obj.info.url}  size="40"/>
        <button data-copytarget={"#" + "copyLink_" + obj.index} onClick={copyToClipboard} type="button" className="btn btn-info btn-sm btn-outline">
          <span className="glyphicon glyphicon-copy"></span>
        </button> 
      </td>
      <td>
        <button onClick={() => obj.onDeleteList(obj.info._id)} type="button" className="btn btn-info btn-sm btn-outline">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
      <td>
        <button onClick={() => obj.onEditList(obj.info)} type="button" className="btn btn-info btn-sm btn-outline">
          <span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>
    </tr>
  )
};

export default QuestionListItem;