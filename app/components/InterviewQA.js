import React from 'react';

class InterviewQA extends React.Component {

  constructor() {
        super();

  this.state = { 
    fullname: "",
    position: "",
    email: ""
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSetFullName = this.handleSetFullName.bind(this);
  this.handleSetPosition = this.handleSetPosition.bind(this);
  this.handleSetEmail = this.handleSetEmail.bind(this);
}
  handleSubmit() {
    console.log("handleSubmit");
  }

  handleSetFullName(event) {
     this.setState({ fullname: event.target.value });
  }

  handleSetPosition(event) {
     this.setState({ position: event.target.value });
  }

  handleSetEmail(event) {
     this.setState({ email: event.target.value });
  }


  render() {
    return(
      <div className="container">
        <h1>Interview Questions</h1>
        <form className="" onSubmit={this.handleSubmit}>
          {this.props.match.params.uuid}
          {console.log(this.props.match.params.uuid)}
          <div>
            {console.log(window.location.hostname)}
            {window.location.href}
            </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="fullname" className="">
                FullName: &nbsp; 
              </label>

              <input
                value={this.state.fullname}
                type="text"
                className="form-control"
                id="fullname"
                onChange={this.handleSetFullName}
                required
                name="fullname"
              />
                
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="position" className="">
                  Position:  &nbsp;
              </label>

              <input
                value={this.state.position}
                type="text"
                className="form-control"
                id="position"
                onChange={this.handleSetPosition}
                required
                placeholder="Senior Developer"
                name="position"
              />

            </div>
            <div className="form-group col-xs-3">
              <label htmlFor="email" className="">
                  Email: &nbsp; 
              </label>

              <input
                value={this.state.email}
                type="text"
                className="form-control"
                id="email"
                onChange={this.handleSetEmail}
                required
                placeholder="example@email.comr"
                name="email"
              />
          
            </div>
          </div>
          
            <button
              className="btn btn-default"
              type="submit"
            >
              Submit
          </button>
        </form>
      </div>
    );
  }
}

export default InterviewQA;