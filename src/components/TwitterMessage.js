import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message} />
        </div>
        <div>
          <h2>{this.props.maxChars - this.state.message.length}</h2>
        </div>
      </div>  
    );
  }
}

export default TwitterMessage;


