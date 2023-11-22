export const frontendUrl = {
  home: '',
  users: '/users',
  logIn: '',
  signUp: '',
  trackers: '/trackers',
  trackersCreate: '/trackers/create',
};

frontendUrl.logIn = `${frontendUrl.users}/login`;
frontendUrl.signUp = `${frontendUrl.users}/signUp`;
