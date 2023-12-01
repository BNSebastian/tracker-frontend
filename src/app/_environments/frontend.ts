export const frontendUrl = {
  home: '',
  users: '/users',
  logIn: '',
  signUp: '',
  trackers: '/trackers',
  trackersCreate: '',
  activity: '/activity',
  activityCreate: '',
  activityList: '',
  type: '/type',
  typeCreate: '',
  typeList: '',
};

frontendUrl.logIn = `${frontendUrl.users}/login`;
frontendUrl.signUp = `${frontendUrl.users}/signUp`;
frontendUrl.trackersCreate = `${frontendUrl.trackers}/create`;
frontendUrl.activityCreate = `${frontendUrl.activity}/create`;
frontendUrl.activityList = `${frontendUrl.activity}/list`;
frontendUrl.typeCreate = `${frontendUrl.type}/create`;
frontendUrl.typeList = `${frontendUrl.type}/list`;
