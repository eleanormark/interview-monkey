import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';


const   convertStrToHTML =(str) => {

  }

const qdiv = (data) => {
    console.log("============== in qdiv ==============")
    console.log(data.info.answer);
    
    return (
        <div>
             <div dangerouslySetInnerHTML={{__html: data.info.answer}} />
        </div>
    )
};

export default qdiv;