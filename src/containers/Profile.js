import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile from '../components/templetes/Profile'
import { actionCreators } from '../Actions/Index'

const mapStateToProps = (state) => {
  return {
    data: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
