const baseUrl: String = '';

export const frontendUrl = {
  home: `${baseUrl}`,
  signUp: `${baseUrl}/users/signup`,
  logIn: `${baseUrl}/users/login`,

  activity: `${baseUrl}/activity`,
  activityCreate: `${baseUrl}/activity/create`,
  activityList: `${baseUrl}/activity/list`,
  activityListAll: `${baseUrl}/activity/ADMIN/listAll`,

  type: `${baseUrl}/type`,
  typeCreate: `${baseUrl}/type/create`,
  typeList: `${baseUrl}/type/list`,

  time: `${baseUrl}/time`,
  timeGetAll: `${baseUrl}/time/ADMIN/getAll`,
};
