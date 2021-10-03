import { bodyRef } from './refs';
import { LIGHT, DARK } from './theme';

export default function fnSwitchTheme(event) {
  if (!event.target.checked) {
    bodyRef.classList.replace(DARK, LIGHT);
  } else if (event.target.checked) {
    bodyRef.classList.replace(LIGHT, DARK);
  }
  localStorage.setItem('theme', bodyRef.classList.value);
}