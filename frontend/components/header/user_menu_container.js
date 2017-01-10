import { connect } from 'react-redux';
import UserMenu from './user_menu.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(UserMenu);
