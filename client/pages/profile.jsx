import React from 'react';
import Spinner from './spinner';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProfile: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        this.setState({
          myProfile: data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div className="container container-home-jsx">
        <div className="row noti-row-style">
          <div className="col p-0">
            <h2 className="noti-h2-style">MY PROFILE</h2>
            <div className="noti-jsx-margin">
              <div className="row">
                {
                  this.state.isLoading
                    ? <Spinner />
                    : this.state.myProfile.length > 0
                      ? this.state.myProfile.map(status => (
                        <div key={status.userId} className="col-12">
                          <RenderProfile status={status} />
                        </div>
                      ))
                      : (<div className="margin-top">Not loading proper</div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function RenderProfile(props) {
  const { photoUrl, fullName, location, aboutMe, userId } = props.status;
  return (
    <div className="row">
      <div className="col-12">
        <div className="small-img-placement">
          <img src={photoUrl} alt=".." className="my-profile-small-img" />
        </div>
        <div className="my-profile-style">
          <p className="my-profile-p-fullname">{fullName}</p>
          <p className="my-profile-p-info"><i className="fas fa-location-arrow style-fa-location-arrow"></i>{location}</p>
          <p className="my-profile-p-info"><i className="fas fa-user profile-user-icon"></i>{aboutMe}</p>
        </div>
        <div className="profile-edit-button">
          <a href={`#edit-profile?userId=${userId}`} className="my-profile-edit">Edit</a>
        </div>
      </div>
    </div>
  );
}
