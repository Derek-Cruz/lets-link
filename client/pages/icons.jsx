import React from 'react';

export default function Icons(props) {
  return (
      <div className="icon-position d-flex justify-content-center">
        <a className="icon-style" href="#"><i className="fas fa-home icon-fas"></i><span className="icon-span">Home</span></a>
        <a className="icon-style" href="#search-people"><i className="fas fa-search icon-fas"></i><span className="icon-span">Search</span></a>
        <a className="icon-style circle-display" href="#post-status"><i className="fa-solid fa-circle-plus icon-fas"></i><span className="icon-span">Create</span></a>
        <a className="icon-style" href="#notification"><i className="fas fa-bell icon-fas"></i><span className="icon-span">Notification</span></a>
        <a className="icon-style" href="#profile"><i className="fas fa-user icon-fas"></i><span className="icon-span">Profile</span></a>
      </div>
  );
}
