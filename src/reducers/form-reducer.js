
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    users: [],
    roles: [],
    projects: [],
    result: '',
    message: '',
    userHasRole: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_USERS_PROJECTS_ROLES_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                roles: action.payload.roles,
                projects: action.payload.projects
            }
        case actionTypes.ADD_PROJECT_ROLE_TO_USER_SUCCESS:
            return {
                ...state,
                result: action.payload.status,
                message: action.payload.message,
                userHasRole: false
            }
        case actionTypes.RESET_PROJECT_ROLE_USER_RESULT:
            return {
                ...state,
                result: '',
                message: ''
            }
        case actionTypes.RESET_REMOVE_ROLE_FROM_PROJECT:
            return {
                ...state,
                userHasRole: false
            }
        case actionTypes.REMOVE_ROLE_FROM_PROJECT_SUCCESS:
            return {
                ...state,
                result: action.payload.status,
                message: action.payload.message,
                userHasRole: false
            }

        case actionTypes.ERROR_OCCURED:
            return {
                ...state,
                result: action.payload.status,
                message: action.payload.message,
                userHasRole: action.payload.status === 'ERRORUSERHASROLE'
            }
        default:
            return state;
    }

}