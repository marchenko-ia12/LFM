import React from 'react';
import {useRoutes} from 'hookrouter';
import ArtistCards from './cards/artistCards';
import AlbumCard from './cards/albumCards';

const routes = {
	'/': () => <ArtistCards />,
	'/album': () => <AlbumCard />,
};

export const LastfmApp = () => {
	const routeResult = useRoutes(routes);

	return routeResult;
};

