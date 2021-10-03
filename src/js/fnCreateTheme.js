import { themeSwitchRef, bodyRef } from './refs';
import { LIGHT, DARK } from './theme';

export default function fnCreateTheme() {
  if (!localStorage.getItem('theme')) {
    bodyRef.classList.add(LIGHT);
  } else {
    bodyRef.classList.add(localStorage.getItem('theme'));
  }
  if (bodyRef.classList.contains(DARK)) {
    themeSwitchRef.checked = true;
  }
}