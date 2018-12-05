import { connect } from 'react-redux';
import Results from '../../components/Results';

const mapStateToProps = state => ({
  characters: state.Swapi.characterMatches,
});

export default connect(mapStateToProps)(Results);
