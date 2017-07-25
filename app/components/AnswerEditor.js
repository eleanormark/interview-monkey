import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);
    this.convertStrToHTML = this.convertStrToHTML.bind(this)
  }
  convertStrToHTML(str) {
    var temp = document.createElement('div');
    temp.innerHTML = str;
    console("==========================")
    console.log(str);
    return temp.firstChild;
  }
  render() {
    return (
      <div>
        {this.convertStrToHTML(this.props.info.answer)}  
      </div>
    );
  }
}

export default AnswerEditor;