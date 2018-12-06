import { connect } from 'react-redux';
import Profile from '../../components/Profile';

const mapStateToProps = state => ({
  character: state.Swapi.profile,
});

export default connect(mapStateToProps)(Profile);
