import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';

const Answer = (data) => {
    
    return (
        <AceEditor
            mode="javascript"
            theme="chrome"
            value= {data.info.answer}
            name={"snippet_id_" + data.index}
            editorProps={{$blockScrolling: true}}
            width = '100%'
            height = '200px'
            readOnly = {true}
            highlightActiveLine= {false}
        />
            
    )
};

export default Answer;