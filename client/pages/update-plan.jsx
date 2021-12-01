import React from 'react';

export default class UpdatePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      location: '',
      description: '',
      photoUrl: '',
      fullName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValues = this.updateValues.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.updateValues(this.state);
    event.preventDefault();
  }

  componentDidMount() {
    fetch(`/api/updatePlans/${this.props.planId}`)
      .then(res => res.json())
      .then(testing => {
        this.setState({
          title: testing.title,
          time: testing.time,
          location: testing.location,
          description: testing.description,
          photoUrl: testing.photoUrl,
          fullName: testing.fullName
        });
      });
  }

  updateValues(planId) {
    fetch(`/api/approvedPlans/${planId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
      .then(values => {
        location.hash = '#';
      });
  }

  render() {
    return (
      <div className="container">
        <div className="update-plan-position">
          <div>
            <div>
              <img src={ this.state.photoUrl } alt="Profile picture" className="update-plan-img" />
            </div>
            <div className="update-plan-fullname-position">
              <p className="update-plan-fullname">{ this.state.fullName }</p>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="send-title">Title:</label>
              <input
                className="send-input-style"
                name="title"
                type="text"
                id="send-title"
                value={ this.state.title }
                onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="send-location"><i className="fas fa-location-arrow send-fa-location-arrow"></i></label>
              <input
                className="send-input-style"
                name="location"
                type="text"
                id="send-location"
                value={ this.state.location }
                onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="send-time"><i className="fas fa-clock send-fa-clock"></i></label>
              <input
                className="send-input-style"
                name="time"
                type="time"
                id="send-time"
                value={ this.state.time }
                onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="send-description"><i className="fas fa-comment-alt send-fa-comment-alt"></i></label>
              <input
                className="send-input-style"
                name="description"
                type="text"
                id="send-description"
                placeholder="What do you want to do?"
                value={ this.state.description }
                onChange={this.handleChange} />
            </div>
            <div className="button1">
              <button className="button-style">Update</button>
            </div>
            <div className="button2">
              <a href="#" className="a-style">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}