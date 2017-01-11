import { connect } from 'react-redux';
import Header from './header.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  router: ownProps.router
});

export default connect(
  mapStateToProps
)(Header);
