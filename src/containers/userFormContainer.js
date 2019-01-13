import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProjectsAndRoles, addProjecRoleToUser, resetRemoveRoleFromProject, removeRoleFromProject } from '../actions';

class UserFormContainer extends Component {

    initialState = {
        user: null,
        role: null,
        project: null
    }

    state = this.initialState

    componentDidMount() {
        this.props.fetchUserProjectsAndRoles();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.result !== this.props.result) {
            this.props.fetchUserProjectsAndRoles();
        }
    }

    onSelectRole = (role) => {
        this.setState(() => ({
            role
        }), () => {
            this.props.resetRemoveRoleFromProject();
        })
    }


    onSelectUser = (user) => {
        this.setState(() => ({
            user
        }), () => {
            this.props.resetRemoveRoleFromProject();
        })
    }

    onSelectProject = (project) => {
        this.setState(() => ({
            project
        }), () => {
            this.props.resetRemoveRoleFromProject();
        })
    }

    attendUser = (e) => {
        e.preventDefault()
        this.props.addProjecRoleToUser(this.state);
    }

    removeRoleFromProject = () => {
        this.props.removeRoleFromProject(this.state);
    }

    getStateAndHelpers() {
        return {
            users: this.props.users,
            roles: this.props.roles,
            projects: this.props.projects,
            selectRole: this.onSelectRole,
            selectProject: this.onSelectProject,
            attendUser: this.attendUser,
            selectUser: this.onSelectUser,
            userHasRole: this.props.userHasRole,
            removeRoleFromProject: this.removeRoleFromProject
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.form.users,
        roles: state.form.roles,
        projects: state.form.projects,
        result: state.form.result,
        userHasRole: state.form.userHasRole

    }
}

export default connect(mapStateToProps, {
    fetchUserProjectsAndRoles,
    addProjecRoleToUser,
    removeRoleFromProject,
    resetRemoveRoleFromProject
})(UserFormContainer);