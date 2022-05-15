let href = window.location.href;
let path = window.location.pathname;
let root;

if (path != '/') {
  root = href.split(path)[0]
}

export const APP_ROOT = root ?? href.slice(0, -1);

let apiUrl = 'http://localhost:8000/api';

export const urls = {
  login: `${apiUrl}/login`,
  register: `${apiUrl}/register`,
  forgetPassword: `${apiUrl}/forget-password`,
  dashboard: `${apiUrl}/dashboard`,
}