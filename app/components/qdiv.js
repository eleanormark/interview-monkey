import React from 'react';

const qdiv = (data) => {
    console.log("============== in qdiv ==============")
    console.log(data);
    return (
        <div>
            <p><strong>#{data.index + 1}  {data.info.answer}</strong></p>
        </div>
    )
};

export default qdiv;