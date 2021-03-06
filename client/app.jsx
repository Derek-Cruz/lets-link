import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Header from './pages/header';
import Icons from './pages/icons';
import NotFound from './pages/not-found';
import PostStatus from './pages/post-status';
import SendRequest from './pages/send-req';
import Notification from './pages/notification';
import UpdatePlan from './pages/update-plan';
import Profile from './pages/profile';
import { parseRoute } from './lib';
import EditProfile from './pages/edit-profile';
import SearchPeople from './pages/search';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const windowChange = parseRoute(window.location.hash);
      this.setState({
        route: windowChange
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'post-status') {
      return <PostStatus />;
    }
    if (route.path === 'send-req') {
      return <SendRequest />;
    }
    if (route.path === 'update-plan') {
      const planId = route.params.get('planId');
      return <UpdatePlan planId={planId} />;
    }
    if (route.path === 'notification') {
      return <Notification />;
    }
    if (route.path === 'profile') {
      return <Profile />;
    }
    if (route.path === 'edit-profile') {
      const userId = route.params.get('userId');
      return <EditProfile userId={userId} />;
    }
    if (route.path === 'search-people') {
      return <SearchPeople />;
    }
    return <NotFound />;
  }

  render() {
    const { route } = this.state;
    if (route.path === 'login') {
      return <Login />;
    }
    return (
      <>
        <Header />
        {this.renderPage()}
        <Icons />
      </>
    );
  }
}
