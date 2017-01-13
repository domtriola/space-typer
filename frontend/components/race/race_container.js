import { connect } from 'react-redux';
import Race from './race.jsx';
import { fetchRandomQuote } from '../../actions/quote_actions';

const mapStateToProps = ({ quote, session }, { children }) => ({
  quote,
  session,
  children
});

const mapDispatchToProps = dispatch => ({
  fetchRandomQuote: () => dispatch(fetchRandomQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Race);
