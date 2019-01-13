import formReducer from '../../reducers/form-reducer';
import * as actionTypes from '../../constants/actionTypes';


describe('REDUCERS', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            users: [],
            roles: [],
            projects: [],
            result: '',
            message: '',
            userHasRole: false
        }

    });

    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(formReducer(undefined, action)).toEqual(initialState);
        });
    });


    describe('FETCH_USERS_PROJECTS_ROLES', () => {
        test('returns correct state', () => {
            var payload = { users: [], projects: [], roles: [] }
            const action = { type: actionTypes.FETCH_USERS_PROJECTS_ROLES, payload };
            expect(formReducer(undefined, action)).toEqual({ ...initialState, ...payload });

        });
    });

    describe('ADD_PROJECT_ROLE_TO_USER_SUCCESS', () => {
        test('returns correct state', () => {
            var payload = { status: 'OK', message: '' }
            const action = { type: actionTypes.ADD_PROJECT_ROLE_TO_USER_SUCCESS, payload };
            expect(formReducer(undefined, action)).toEqual({ ...initialState, result: payload.status });

        });
    });


    describe('RESET_PROJECT_ROLE_USER_RESULT', () => {
        test('returns correct state', () => {
            const action = { type: actionTypes.RESET_PROJECT_ROLE_USER_RESULT };
            expect(formReducer(undefined, action)).toEqual({ ...initialState });

        });
    });


    describe('ERROR_OCCURED', () => {
        test('returns correct state', () => {
            let payload = { message: 'error occured',  status:'ERROR'}
            const action = { type: actionTypes.ERROR_OCCURED, payload };
            expect(formReducer(undefined, action)).toEqual({ ...initialState, result: 'ERROR', message: payload.message });

        });
    });
})