console.log(document.cookie);

const getCookie = name => {
  const re = new RegExp(name);
  const value = document.cookie.split('; ').find(cookie => re.test(cookie));

  return value ? value.replace(`${name}=`, '') : 'Cookie not found';
};

const cookie = getCookie('_ga');
console.log(cookie);

document.cookie = "userName=Timur";
console.log(document.cookie);


const setCookie = (name, value = true, term = '',  path = '/') => {
  const duration = term ? `expires=${term}` : '';

  document.cookie = `${name}=${value}; ${duration}; path=${path}`;
};

// path=/ - cookie available for all site pages

function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}