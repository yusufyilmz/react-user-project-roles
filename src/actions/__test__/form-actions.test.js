import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

moxios.respondAllWith = function () {
    return Array.from(arguments).reduce((promise, res, i) => {
        return moxios.requests.at(i).respondWith(res)
    }, null)
}


describe('ACTIONS', () => {

    let store, item, initialState;


    beforeEach(function () {
        store = mockStore({ users: [], projects: [], roles: [] })
        item = {}
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test('addProjecRoleToUser success', () => {

        var response = {
            status: 'OK',
            data: [],
            message: 'Succesfully added project role'
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ADD_PROJECT_ROLE_TO_USER_SUCCESS, payload: response
            },
        ];

        return store.dispatch(actions.addProjecRoleToUser(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('addProjecRoleToUser unstable error', () => {

        var response = {"message": "Request failed with status code 400", "status": "ERROR"};
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload:  response
            },
        ];

        return store.dispatch(actions.addProjecRoleToUser(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('addProjecRoleToUser api error', () => {

        var response= {
            status: 'ERROR',
            message: 'error occured'
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.addProjecRoleToUser(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })


    test('removeRoleFromProject success', () => {

        var response = {
            status: 'OK',
            data: [],
            message: 'Successfully deleted project role from user'
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.REMOVE_ROLE_FROM_PROJECT_SUCCESS, payload: response
            },
        ];

        return store.dispatch(actions.removeRoleFromProject(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    test('removeRoleFromProject api error', () => {

        var response= {
            status: 'ERROR',
            message: 'error occured'
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.removeRoleFromProject(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })


    test('removeRoleFromProject network error', () => {

        var response = {"message": "Request failed with status code 400", "status": "ERROR"};

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.removeRoleFromProject(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })



    test('fetchUserProjectsAndRoles success', () => {

        var response = {
            users: [],
            projects: [],
            roles: []
        };

        moxios.wait(() => {
            moxios.respondAllWith(
                {
                    status: 200,
                    response: {
                        data :response.users,
                        status: 'OK'
                    }
                },
                {
                    status: 200,
                    response: {
                        data :response.projects,
                        status: 'OK'
                    }
                },
                {
                    status: 200,
                    response: {
                        data :response.roles,
                        status: 'OK'
                    }
                }
            )
        });

        const expectedActions = [
            {
                type: actionTypes.FETCH_USERS_PROJECTS_ROLES_SUCCESS, payload: response
            },
        ];


        return store.dispatch(actions.fetchUserProjectsAndRoles(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })


    
    test('fetchUserProjectsAndRoles network error', () => {

        var response = {"message": "Request failed with status code 400", "status": "ERROR"};

        moxios.wait(() => {
            moxios.respondAllWith(
                {
                    status: 400,
                    response
                },
                {
                    status: 400,
                    response

                },
                {
                    status: 400,
                    response
                }
            )
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.fetchUserProjectsAndRoles(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })


    test('resetRemoveRoleFromProject', () => {

        const expectedActions = {
            type: actionTypes.RESET_REMOVE_ROLE_FROM_PROJECT
        }

        expect(actions.resetRemoveRoleFromProject(item)).toEqual(expectedActions)
    });


    test('resetRemoveRoleFromProject', () => {

        const expectedActions = {
            type: actionTypes.RESET_PROJECT_ROLE_USER_RESULT
        }

        expect(actions.resetResult(item)).toEqual(expectedActions)
    });
})