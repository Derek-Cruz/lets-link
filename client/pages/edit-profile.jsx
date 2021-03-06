import React from 'react';
export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fullName: '',
      aboutMe: '',
      location: '',
      photoUrl: ''
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
    this.updateValues(this.props.userId);
    event.preventDefault();
  }

  componentDidMount() {
    fetch(`/api/updateProfile/${this.props.userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          fullName: data.fullName,
          aboutMe: data.aboutMe,
          location: data.location,
          photoUrl: data.photoUrl,
          isLoading: false
        });
      });
  }

  updateValues(userId) {
    const updatedProfile = this.state;
    fetch(`/api/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProfile)
    })
      .then(data => data.json())
      .then(values => {
        location.hash = '#';
      });
  }

  render() {
    return (
      <div className="container container-update-jsx">
        <div className="update-plan-position">
          <div>
            <div className="left-spacing">
              <img src={ this.state.photoUrl } alt="Profile picture" className="update-plan-img" />
            </div>
            <div className="update-plan-fullname-position left-spacing">
              <p className="update-plan-fullname">{ this.state.fullName }</p>
            </div>
          </div>
          <form onSubmit={ this.handleSubmit }>
            <div className="d-flex left-spacing">
              <label htmlFor="send-aboutMe"><i className="fas fa-user send-fa-user-icon"></i></label>
              <input
                className="send-input-style"
                name="aboutMe"
                type="text"
                id="send-aboutMe"
                value={ this.state.aboutMe }
                onChange={ this.handleChange } />
            </div>
            <div className="left-spacing">
              <label htmlFor="send-location"><i className="fas fa-location-arrow send-fa-location-arrow"></i></label>
              <input
                className="send-input-style"
                name="location"
                type="text"
                id="send-location"
                value={ this.state.location }
                onChange={ this.handleChange } />
            </div>
            <div className="buttons">
              <div className="div-button-placement">
                <a href="#profile" className="a-style">Cancel</a>
                <button className="button-style">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
