export const userProfile = {
  userName: 'admin',
  userPassword: 12345
};

export const userService = formData => {
  const promise = new Promise((resolve, reject) => {
    if (JSON.stringify(userProfile) === JSON.stringify(formData)) {
      resolve(formData.userName);
    } else {
      reject(new Error('The username or password you entered is incorrect'));
    }
  });

  return promise;
};
