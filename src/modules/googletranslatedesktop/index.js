import { connect } from 'react-redux';
import { getTranslation } from "../../actions/googletranslatedesktop.actions";
import GoogleTranslateDesktop from './googletranslatedesktop';

const mapStateToProps = state => ({
  state,
  translation: state.translation.translation
});

const mapDispatchToProps = dispatch => ({
  getTranslation: (options) => dispatch(getTranslation(options))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleTranslateDesktop);
