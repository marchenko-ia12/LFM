import React from 'react';
import {useRoutes} from 'hookrouter';
import ArtistCards from './mainContent/artistList';
import AlbumCard from './mainContent/albumList';

const routes = {
	'/': () => <ArtistCards />,
	'/album': () => <AlbumCard />,
};

export const LastfmApp = () => {
	const routeResult = useRoutes(routes);

	return routeResult;
};

