import React from 'react';

const ResponseListItem = (data) => {
    console.log("============== in ResponseListItem===============")
    console.log(data);
    return (
        <tr>
            <td>{data.res2.intervieweeFullName}</td>
            <td>{data.res2.intervieweePosition}</td>
            <td>{data.res1.title}</td>
            <td>{data.res1.category}</td>
            <td>{data.res2.date.substring(0,10)}</td>
            <td>
                <button type="button" className="btn btn-info btn-sm">
                <span className="glyphicon glyphicon-trash"></span>
                </button>
            </td>
            <td>
                <button type="button" className="btn btn-info btn-sm">
                <span className="glyphicon glyphicon-pencil"></span>
                </button>
            </td>
        </tr>
    )
};

export default ResponseListItem;