import { connect } from 'react-redux';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    cats: state.cats,
    dogs: state.dogs,
    selectedAnimal: state.selectedAnimal,
  };
}

export default connect(mapStateToProps)(Main);
