import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => (loading ? (
  <Spinner />
) : (
  <div style={userStyle}>
    {users.map(user => (
      <UserItem key={user.id} user={user} />
    ))}
  </div>
));

export default Users;

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
