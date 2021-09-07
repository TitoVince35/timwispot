import React, { useState } from "react";

const SpotifyUserContext = React.createContext();

const SpotifyUserProvider = ({ children }) => {
  const [spotifyUser, setSpotifyUser] = useState({ token: null });
  const value = { spotifyUser, setSpotifyUser };
  return <SpotifyUserContext.Provider value={value}>{children}</SpotifyUserContext.Provider>;
}

const useSpotifyUser = () => {
  const context = React.useContext(SpotifyUserContext);
  if (context === undefined) {
    throw new Error('useSpotifyUser must be used within a SpotifyUserProvider')
  }
  return context
}

export { SpotifyUserContext, SpotifyUserProvider, useSpotifyUser };
