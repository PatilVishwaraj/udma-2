import { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { addUser } from '../db/api';
import {useNavigate} from 'react-router-dom';

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

const CreateUsers = () => {
  const [user, setUser] = useState(sampleUser);
  const navigate = useNavigate()
  const dataEntered = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const createUsr = async () => {
    await addUser(user);
    navigate('/list')
  };
  return (
    <Block sx={{ m: 'auto', mt: 5, width: 2 / 5 }}>
      <Typography align={'center'} variant="h4">
        Create New User
      </Typography>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="First Name"
          name="first_name"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="Last Name"
          name="last_name"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="User Name"
          name="user_name"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="E-mail"
          name="email"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={(e) => dataEntered(e)}
          label="Mobile Number"
          name="mobile_numbar"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => createUsr()}>
          Create
        </Button>
      </FormControl>
    </Block>
  );
};

export default CreateUsers;
