import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Stack,
} from '@mui/material';
import { getUsers, deleteUsr } from '../db/api.js';
import { Link } from 'react-router-dom';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  const deleteUser = async (id) => {
    await deleteUsr(id);
    getAllUsers();
  };
  return (
    <Table sx={{ m: 'auto', mt: 5, width: 9 / 10 }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: '#dda223' }}>
          <TableCell>id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>User Name </TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell>Mobile Number</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.first_name}</TableCell>
            <TableCell>{user.last_name}</TableCell>
            <TableCell>{user.user_name} </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.mobile_numbar}</TableCell>
            <TableCell>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
