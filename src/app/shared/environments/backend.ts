const baseUrl: String = 'http://localhost:8080/api';

export const backendUrl = {
  register: `${baseUrl}/auth/register`,
  authenticate: `${baseUrl}/auth/authenticate`,
  isAdmin: `${baseUrl}/auth/isAdmin`,
  activity: `${baseUrl}/activity`,
  getTime: `${baseUrl}/time`,
  type: `${baseUrl}/type`,
};
