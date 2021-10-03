import { menuRef } from './refs';

export default function fnCreateMenuCards(menu, menuCards) {
  menuRef.insertAdjacentHTML('beforeend', menuCards(menu));
}
