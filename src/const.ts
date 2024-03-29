export const Setting = {
  FavouriteCount: 4,
  PlacesFound: 311
};

export enum AppRoute {
  Root = '/',
  Favourite = '/favourite',
  Login = '/login',
  NotFound = '/not-found-screen',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
