import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    this.setState({value: newValue})
    var editor = this.refs.ace.editor
  }
  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="chrome"
          ref="ace"
          value= {this.state.value}
          onChange={this.onChange}
          name={"snippet_id_" + this.props.index }
          editorProps={{$blockScrolling: true}}
          width = '100%'
          height = '200px'
        />
        <div id={"id_answer_"+ this.props.index} data-snippet = {this.state.value} ></div>
      </div>
    );
  }
}


export default Editor;