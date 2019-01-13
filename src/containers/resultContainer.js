import React, { Component } from 'react';
import { connect } from 'react-redux';
 import { resetResult } from '../actions';

class ResultContainer extends Component {

    resetResult = () => {
        this.props.resetResult();
    }

    getStateAndHelpers() {
        return {
            result: this.props.result,
            message: this.props.message,
            resetResult: this.resetResult
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        result: state.form.result,
        message: state.form.message
    }
}

export default connect(mapStateToProps, {  resetResult })(ResultContainer);