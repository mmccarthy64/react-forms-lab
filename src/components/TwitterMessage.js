import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleTextInput = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let num = this.props.maxChars - this.state.message.length
    // console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleTextInput} />
          <p>{num}</p>
      </div>
    );
  }
}

export default TwitterMessage;
