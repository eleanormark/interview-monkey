import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button } from "react-bootstrap";

class UniqueLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.obj.info.url, copied: false };
  }

  render() {
    return (
      <div>
        <input value={this.state.value} />

        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <Button type="button" className="btn btn-info btn-sm btn-outline">
            <span className="glyphicon glyphicon-copy" />
          </Button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default UniqueLink;
