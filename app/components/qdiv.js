import React from 'react';

const qdiv = (data) => {
    console.log("============== in qdiv ==============")
    console.log(data);
    return (
        <div>#{data.index + 1}  {data.info.answer}</div>
    )
};

export default qdiv;