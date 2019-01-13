import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';
import axios from "axios";
import fetchMock from 'fetch-mock'

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

    // test('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
    //     moxios.wait(() => {
    //         const request = moxios.requests.mostRecent();
    //         request.respondWith({
    //             status: 200,
    //             response: getPostsMock,
    //         });
    //     });

    //     const expectedActions = [
    //         { type: actionTypes.FETCH_USERS_PROJECTS_ROLES, posts: getPostsMock },
    //     ];

    //     const store = mockStore({ users: [], projects: [], roles: [] })

    //     return store.dispatch(actions.fetchUserProjectsAndRoles()).then(() => {
    //         // return of async actions
    //         expect(store.getActions()).toEqual(expectedActions);
    //     });

    // })

    test('addProjecRoleToUser', () => {

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


    test('removeRoleFromProject', () => {

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


    test('fetchUserProjectsAndRoles', () => {

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