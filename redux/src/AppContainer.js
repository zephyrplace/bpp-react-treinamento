import { connect } from 'react-redux'
import { changeToFoo, changeToBar } from './AppAction'
import AppView from './AppView';

// import { bindActionCreators } from 'redux'
// import * as AppActions from './AppAction'

const mapStateToProps = state => {
    return {
        value: state.app
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeToFoo: () => {
            dispatch(changeToFoo())
        },
        changeToBar: () => {
            dispatch(changeToBar())
        },
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators(AppActions, dispatch);
// }

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView)

export default AppContainer