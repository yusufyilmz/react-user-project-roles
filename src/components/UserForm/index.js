import React from 'react';
import SelectBox from '../SelectBox';
import UserFormContainer from '../../containers/userFormContainer';
import Input from '../Input';
import { UserFormWrapper } from './style';

const UserForm = () => {
    return (
        <UserFormContainer>
            {
                ({ roles, selectRole, projects, selectProject, users, selectUser, attendUser, userHasRole, removeRoleFromProject }) => (
                    <UserFormWrapper onSubmit={attendUser}>
                        <SelectBox
                            name="user"
                            text="User"
                            placeHolder="Enter or select username"
                            list={users}
                            selectItem={selectUser}
                            required={true} />
                        <SelectBox
                            name="role"
                            text="Roles"
                            placeHolder="Select role"
                            list={roles}
                            selectItem={selectRole}
                            required={true} />
                        <SelectBox
                            name="project"
                            text="Projects"
                            placeHolder="Select project"
                            list={projects}
                            selectItem={selectProject}
                            required={true} />
                        <Input
                            type="submit"
                            value="Submit role" />
                        {userHasRole &&
                            <Input
                                type="button"
                                value="Remove role of user"
                                onClick={removeRoleFromProject} />}
                    </UserFormWrapper>
                )
            }
        </UserFormContainer>
    );
}

export default UserForm;