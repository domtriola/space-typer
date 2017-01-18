import { connect } from 'react-redux';
import Race from './race.jsx';
import { fetchRandomQuote, resetQuote } from '../../actions/quote_actions';

const mapStateToProps = ({ quote, session }, { children }) => ({
  quote,
  session,
  children
});

const mapDispatchToProps = dispatch => ({
  fetchRandomQuote: () => dispatch(fetchRandomQuote()),
  resetQuote: () => dispatch(resetQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Race);
