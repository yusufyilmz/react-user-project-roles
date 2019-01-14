import * as actionTypes from '../constants/actionTypes';
import '../api/userProjectRolesAPI';
import axios from 'axios';


const errorOccured = (error) => {
    return {
        type: actionTypes.ERROR_OCCURED,
        payload: error
    }
}

const fetchUserProjectsAndRolesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USERS_PROJECTS_ROLES_SUCCESS,
        payload: data
    }
}


const addProjecRoleToUserSuccess = (response) => {
    return {
        type: actionTypes.ADD_PROJECT_ROLE_TO_USER_SUCCESS,
        payload: response

    }
}

const removeRoleFromProjectSuccess = (response) => {
    return {
        type: actionTypes.REMOVE_ROLE_FROM_PROJECT_SUCCESS,
        payload: response
    }
}

export const resetRemoveRoleFromProject = () => {
    return {
        type: actionTypes.RESET_REMOVE_ROLE_FROM_PROJECT,
    }
}

export const resetResult = () => {
    return {
        type: actionTypes.RESET_PROJECT_ROLE_USER_RESULT,
    }
}

export const fetchUserProjectsAndRoles = () => async (dispatch, getState) => {

    try {

        const [usersResponse, rolesResponse, projectsResponse] = await Promise.all([
            axios.get('/api/v1/users'),
            axios.get('/api/v1/roles'),
            axios.get('/api/v1/projects')
        ])


        if (usersResponse.status === 200 && usersResponse.data.status === 'OK' &&
            rolesResponse.status === 200 && rolesResponse.data.status === 'OK' &&
            projectsResponse.status === 200 && projectsResponse.data.status === 'OK'
        ) {
            return dispatch(fetchUserProjectsAndRolesSuccess({
                users: usersResponse.data.data,
                roles: rolesResponse.data.data,
                projects: projectsResponse.data.data    
            }))
        }

        dispatch(errorOccured({status: 'ERROR', message: 'Couldnt get data from server'}))

    }
    catch (e) {
        dispatch(errorOccured({status: 'ERROR', message: e.message}))
    }
}


export const addProjecRoleToUser = (item) => async (dispatch, getState) => {

    try {
        var response = await axios.post('/api/v1/users/addprojectrole', {
            user: item.user,
            role: item.role,
            project: item.project
        })

        if (response.status === 200 && response.data.status === 'OK') {
            return dispatch(addProjecRoleToUserSuccess(response.data))
        }

        dispatch(errorOccured(response.data))

    }
    catch (e) {
        dispatch(errorOccured({status: 'ERROR', message: e.message}))
    }
}


export const removeRoleFromProject = (user) => async (dispatch, getState) => {


    try {

        var response = await axios.post('/api/v1/users/removeprojectrole', {
            user: user.user,
            role: user.role,
            project: user.project
        })

        if (response.status === 200 && response.data.status === 'OK') {
            return dispatch(removeRoleFromProjectSuccess(response.data))
        }

        dispatch(errorOccured(response.data))
    }
    catch (e) {
        dispatch(errorOccured({status: 'ERROR', message: e.message}))
    }
}