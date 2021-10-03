import { themeSwitchRef } from './refs';

import menu from '../json/menu.json';

import menuCards from '../templates/menu-cards.hbs';

import fnCreateTheme from './fnCreateTheme';
document.addEventListener('DOMContentLoaded', fnCreateTheme);

import fnSwitchTheme from './fnSwitchTheme';
themeSwitchRef.addEventListener('change', fnSwitchTheme);

import fnCreateMenuCards from './fnCreateMenuCards.js';
fnCreateMenuCards(menu, menuCards);

