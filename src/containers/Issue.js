import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Issue from '../components/templetes/Issue'
import { actionCreators } from '../Actions/Index'

const mapStateToProps = (state) => {
  return {
    data: state.issue
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue)
