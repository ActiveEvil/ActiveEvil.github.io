import { connect } from 'react-redux';
import Results from '../../components/Results';
import { characterSelection } from '../../actions/Swapi';

const mapStateToProps = state => ({
  characters: state.Swapi.characterMatches,
});

const mapDispatchToProps = dispatch => ({
  uiEventHandlers: {
    handleCharacterSelection: profile => dispatch(characterSelection(profile)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
