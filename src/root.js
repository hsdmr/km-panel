
//let headerItemsString = document.querySelectorAll('head')[0];
//headerItemsString.innerHTML = headerItemsString.innerHTML.replaceAll('{APP_URL}', APP_ROOT);

let href = window.location.href;
let path = window.location.pathname;
let root;

if (path != '/') {
  root = href.split(path)[0]
}

export const APP_ROOT = root ?? href.slice(0, -1);