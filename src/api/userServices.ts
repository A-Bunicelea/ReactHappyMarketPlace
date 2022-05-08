import myapi from './apiServices';
interface DataInterface {
  username: string;
  password: string;
}

interface LogInResponse {
  token?: string;
  msg?: string;
  status?: string;
}

const updateUser = (data: DataInterface) => {
  return myapi.post<LogInResponse>('/auth/login', data);
};

const UserService = {
  updateUser,
};

export default UserService;
