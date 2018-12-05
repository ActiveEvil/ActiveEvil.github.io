import { connect } from 'react-redux';
import Frame from '../../components/Frame';

const mapStateToProps = state => ({
  isLoading: state.Swapi.isFetching,
});

export default connect(mapStateToProps)(Frame);
