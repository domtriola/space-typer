import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserMenu from './user_menu.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
