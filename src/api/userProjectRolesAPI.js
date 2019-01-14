import { Server } from 'react-mock'

const usersEndPoint = '/api/v1/users'
const rolesEndPoint = '/api/v1/roles'
const projectsEndPoint = '/api/v1/projects'
const addProjectRoleEndPoint = '/api/v1/users/addprojectrole'
const removeprojectroleEndPoint = '/api/v1/users/removeprojectrole'

var users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }]
var roles = [{ id: 1, name: 'Admin' }, { id: 2, name: 'Editor' }, { id: 3, name: 'Viewer' }]
var projects = [{ id: 1, name: 'Trip to space' }, { id: 2, name: 'Assembly Ikea furniture' }, { id: 3, name: 'Datumize Zentral' }]


const getProjects = () => {
  try {
    return {
      status: 'OK',
      data: projects
    }
  } catch (e) {
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const getRoles = () => {
  try {
    return {
      status: 'OK',
      data: roles
    }
  } catch (e) {
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const getUsers = () => {
  try {
    return {
      status: 'OK',
      data: users
    }
  } catch (e) {
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const removeProjectRoleFromUser = (request) => {

  try {
    var body = JSON.parse(request.requestBody)
    const userName = body.user.name;
    const projectId = body.project.id;
    const roleId = body.role.id;
    var project = projects.find(x => x.id === projectId);
    var role = roles.find(x => x.id === roleId);
    var user = users.find(x => x.name === userName);

    if (user && project && role) {
      if (user.projects) {
        var userProject = user.projects.find(x => x.id === projectId);
        userProject.role = undefined;
        return {
          status: 'OK',
          message: 'Successfully deleted project role from user',
          data: user
        }
      }
    }

    return {
      status: 'ERROR',
      message: 'Couldnt delete project role from user'
    }
  }
  catch (e) {
    return {
      status: 'ERROR',
      message: e.message
    }
  }
}

const addProjectRoleToUser = (request) => {

  try {

    var body = JSON.parse(request.requestBody)
    const userName = body.user.name;
    const projectId = body.project.id;
    const roleId = body.role.id;
    var project = projects.find(x => x.id === projectId);

    if (!project) {
      return {
        status: 'ERRORPROJECTNOTEXIST',
        message: 'Project does not exist'
      }
    }

    var role = roles.find(x => x.id === roleId);
    if (!role) {
      return {
        status: 'ERRORROLENOTEXIST',
        message: 'Role does not exist'
      }
    }

    var user = users.find(x => x.name === userName);

    if (!user) {
      user = {
        id: users[users.length - 1].id + 1,
        name: userName
      }
      users.push(user);
    }

    if (!user.projects) {
      user.projects = [];
      project.role = role;
      user.projects.push(project);
      return {
        status: 'OK',
        data: user,
        message: 'Succesfully added project role'
      }
    }

    var userProject = user.projects.find(x => x.id === projectId);

    if (!userProject) {
      project.role = role;
      user.projects.push(project);
      return {
        status: 'OK',
        data: user,
        message: 'Succesfully added project role'
      }
    }
    else if (userProject && userProject.role === undefined) {
      userProject.role = role;
      return {
        status: 'OK',
        data: user,
        message: 'Succesfully added project role'
      }
    }

    return {
      status: 'ERRORUSERHASROLE',
      message: 'user has role on that project'
    }

  }
  catch (e) {
    return {
      status: 'ERROR',
      message: e.message
    }
  }
}


const requestUsersHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(getUsers())];
}

const requestRolesHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(getRoles())];
}

const requestProjectsHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(getProjects())];
}

const requestAddProjectRoleToUserHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(addProjectRoleToUser(request))];
}

const requestRemoveProjectRoleFromUserHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(removeProjectRoleFromUser(request))];
}


Server.mockPost(addProjectRoleEndPoint, requestAddProjectRoleToUserHandler)
Server.mockPost(removeprojectroleEndPoint, requestRemoveProjectRoleFromUserHandler)
Server.mockGet(usersEndPoint, requestUsersHandler)
Server.mockGet(projectsEndPoint, requestProjectsHandler)
Server.mockGet(rolesEndPoint, requestRolesHandler)
Server.on()