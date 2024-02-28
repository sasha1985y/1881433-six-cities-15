import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app/app';
import {Setting} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      favoritesCount = {Setting.FavoritesCount}
      placesFound = {Setting.PlacesFound}
    />
  </React.StrictMode>
);
