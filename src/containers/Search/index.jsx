import { connect } from 'react-redux';
import Search from '../../components/Search';
import { partialMatchCharacters } from '../../actions/Swapi';

const mapStateToProps = state => ({
  isLoading: state.Swapi.isFetching,
});

const mapDispatchToProps = dispatch => ({
  uiEventHandlers: {
    handleSearchInput: search => dispatch(partialMatchCharacters(search)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
