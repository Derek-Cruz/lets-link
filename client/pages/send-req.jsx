import React from 'react';

export default class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      location: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestSent = this.requestSent.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.requestSent(this.state);
    event.preventDefault();
  }

  requestSent(status) {
    status.toUserId = 2;
    fetch('/api/sendRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(status)
    })
      .then(data => data.json())
      .then(status => {
        location.hash = '#';
      });
  }

  render() {
    return (
      <div className="container container-req-jsx">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="left-spacing title-update-req">
              <label htmlFor="send-title">Title:</label>
              <input
                className="send-input-style"
                name="title"
                type="text"
                id="send-title"
                value={this.state.title}
                onChange={this.handleChange} />
            </div>
            <div className="left-spacing">
              <label htmlFor="send-location"><i className="fas fa-location-arrow style-fa-location-arrow"></i></label>
              <input
                className="send-input-style"
                name="location"
                type="text"
                id="send-location"
                value={this.state.location}
                onChange={this.handleChange} />
            </div>
            <div className="left-spacing">
              <label htmlFor="send-time"><i className="fas fa-clock send-fa-clock"></i></label>
              <input
                className="send-input-style"
                name="time"
                type="time"
                id="send-time"
                value={this.state.time}
                onChange={this.handleChange} />
            </div>
            <div className="left-spacing">
              <label htmlFor="send-description"><i className="fas fa-comment-alt send-fa-comment-alt"></i></label>
              <input
                className="send-input-style"
                name="description"
                type="text"
                id="send-description"
                placeholder="What do you want to do?"
                value={this.state.description}
                onChange={this.handleChange} />
            </div>
            <div className="buttons">
              <div className="div-button-placement">
                <a href="#" className="a-style">Cancel</a>
                <button className="button-style">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
