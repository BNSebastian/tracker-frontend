export const backendUrl = {
  home: 'http://localhost:8080/api',
  register: '',
  authenticate: '',
  tracker: '',
};

backendUrl.register = `${backendUrl.home}/auth/register`;
backendUrl.authenticate = `${backendUrl.home}/auth/authenticate`;
backendUrl.tracker = `${backendUrl.home}/tracker`;
