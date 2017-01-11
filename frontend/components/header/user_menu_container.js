import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserMenu from './user_menu.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  router: ownProps.router
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
