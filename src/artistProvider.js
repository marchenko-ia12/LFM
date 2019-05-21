import React, {useReducer, useContext} from 'react';


export const ArtistContext = React.createContext();

export const ArtistProvider = ({reducer, initialState, children}) => {
	return (
		<ArtistContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</ArtistContext.Provider>
	);
};

export const useArtistValue = () => useContext(ArtistContext);