function checkAge(age) {
  if (age < 18) {
    return 'Too young';
  } else {
    return 'Access allowed';
  }
}

function checkAgeByTwoParams(age) {
  if (age < 18) {
    return 'Too young';
  } else if (age > 70) {
    return 'Too old'
  }

  return 'Access Allowed';
}


function getAccess(age) {
  const access = age > 18 ? 'Allowed' : 'Rejected';

  return access;
}

function login(email, password) {
  if (email && password) {
    return 'User is logged in';
  } else if (email || password) {
    return 'Authorization data is not full';
  }

  return 'Data is empty';
}