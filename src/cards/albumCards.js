import React from 'react';
import {A} from 'hookrouter';
import {useArtistValue} from '../artistProvider';
import AlbumCard from './albumCard';
import styled from 'styled-components';


function AlbumCards() {
	const [{albumData}] = useArtistValue();

	if (Object.entries(albumData).length === 0) window.location.replace('/');

	return (
		<div>
			<Wrap>
				<h1>Альбомы группы {albumData.name}</h1>
				<A href={'/'}>Назад</A>
			</Wrap>
			<CardWrapper>
				{albumData.albumData.topalbums.album.map((info, index) =>
					<AlbumCard key={info.mbid + index} info={info} />
				)}
			</CardWrapper>
		</div>
	);
}

export default AlbumCards;

const CardWrapper = styled.div`
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 40px;
	A {
		margin-left: auto;
		text-decoration: none;
		color: #ce0000;
		font-size: 18px;
	}
`;

