import { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { editUser, getUser } from '../db/api';
import { useNavigate, useParams } from 'react-router-dom';

const Block = styled(FormGroup)`
  & > div {
    margin-top: 20px;
  }
`;

const sampleUser = {
  first_name: '',
  last_name: '',
  user_name: '',
  email: '',
  mobile_numbar: '',
};

const EditUsers = () => {
  const [user, setUser] = useState(sampleUser);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    recallUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recallUserData = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  const dataEntered = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUsr = async () => {
    await editUser(user, id);
    navigate('/list');
  };
  return (
    <Block sx={{ m: 'auto', mt: 5, width: 2 / 5 }}>
      <Typography align={'center'} variant="h4">
        Edit User Details
      </Typography>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="First Name"
          name="first_name"
          variant="filled"
          value={user.first_name}
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="Last Name"
          name="last_name"
          variant="filled"
          value={user.last_name}
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="User Name"
          name="user_name"
          variant="filled"
          value={user.user_name}
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="E-mail"
          name="email"
          variant="filled"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="Mobile Number"
          name="mobile_numbar"
          variant="filled"
          value={user.mobile_numbar}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUsr()}>
          Edit
        </Button>
      </FormControl>
    </Block>
  );
};

export default EditUsers;
