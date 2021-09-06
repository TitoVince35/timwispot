import React, { useState } from "react";

const SpotifyUserContext = React.createContext([{}, () => { }]);

const SpotifyUserProvider = (props) => {
  const [state, setState] = useState({ token: "" });
  return (
    <SpotifyUserContext.Provider value={[state, setState]}>
      {props.children}
    </SpotifyUserContext.Provider>
  );
}

export { SpotifyUserContext, SpotifyUserProvider };
