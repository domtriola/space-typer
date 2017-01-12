import { connect } from 'react-redux';
import UserProfile from './user_profile.jsx';

const mapStateToProps = (state, ownProps) => ({
  params: ownProps.params
});

export default connect(
  mapStateToProps
)(UserProfile);
