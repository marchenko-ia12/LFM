import React from 'react';
import {useArtistValue} from '../artistProvider';
import ArtistCard from './artistCard';
import {RedArrow} from './arrow';
import styled from 'styled-components';


function ArtistCards() {
	const [{artistData}] = useArtistValue();
	if (!artistData.artistData) return (
		<>
			<span style={{fontSize: '18px'}}>Введите имя артиста в строку поиска</span>
			<RedArrow />
		</>
	);

	if (Object.entries(artistData.artistData).length === 0) return (
		<>
			<span style={{fontSize: '18px'}}>Упс, ничего не найдено. Введите иной запрос</span>
			<RedArrow />
		</>
	);

	return (
		<CardWrapper>
			{artistData.artistData.results.artistmatches.artist.map((info, index) =>
				<ArtistCard key={info.mbid + index} info={info.name} />
			)}
		</CardWrapper>
	);
}

export default ArtistCards;

const CardWrapper = styled.div`
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
`;