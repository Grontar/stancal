/*
 * This file is part of ANA StanCal.
 * See: <https://github.com/anairsoft/stancal>.
 *
 * Copyright (C) 2018 Association de Normalisation de l'Airsoft <contact@ana.asso.fr>.
 * Copyright (C) 2018 Jérémy Walther <jeremy.walther@golflima.net>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * Otherwise, see: <https://www.gnu.org/licenses/gpl-3.0>.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { addLocaleData, IntlProvider } from 'react-intl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function getQueryParameter(name) {
  return unescape(window.location.search
    .replace(new RegExp("^(?:.*[&\\?]" + escape(name)
      .replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

const locales = ['en', 'fr'];
const defaultLocale = 'en';
const queryLocale = getQueryParameter('locale');

const locale = queryLocale
  || (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage;
const localeShort = locale.toLowerCase().split(/[_-]+/)[0];
const messages = locales.includes(localeShort)
  ? require('./lang/' + localeShort)
  : require('./lang/' + defaultLocale);
addLocaleData(locales.includes(localeShort)
  ? require('react-intl/locale-data/' + localeShort)
  : require('react-intl/locale-data/' + defaultLocale));

ReactDOM.render(
  <IntlProvider
    locale={locale}
    messages={messages}>
    <App />
  </IntlProvider>, 
document.getElementById('root'));

registerServiceWorker();
