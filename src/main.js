import App from './App.svelte';
import { APP_ROOT } from 'src/root.js';

let appDiv = document.getElementById('app');

var app = new App({
  target: appDiv
});

export default app;