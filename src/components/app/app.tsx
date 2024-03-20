import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../authorizationStatus';

import PrivateRoute from '../private-route';

import WelcomeScreen from '../../pages/welcome-screen';
import FavouriteScreen from '../../pages/favourite-screen';
import LoginScreen from '../../pages/login-screen';
import OfferScreen from '../../pages/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen';
import Layout from '../layout';

type AppScreenProps = {
  favouriteCount: number;
  placesFound: number;
}

function App({
  favouriteCount,
  placesFound
}: AppScreenProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={
                <WelcomeScreen
                  favouriteCount={favouriteCount}
                  placesFound={placesFound}
                />
              }
            />
            <Route
              path={AppRoute.Favourite}
              element={(
                <PrivateRoute
                  authorizationStatus={authorizationStatus}>
                  <FavouriteScreen />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.Login}
              element={(
                <PrivateRoute
                  authorizationStatus={authorizationStatus} isReverse>
                  <LoginScreen />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen />
              }
            />
            <Route
              path="*"
              element={
                <NotFoundScreen
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
