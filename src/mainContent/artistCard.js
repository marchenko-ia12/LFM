import React, {useState} from 'react';
import {navigate} from 'hookrouter';
import {Card} from './card';
import axios from 'axios';
import {useArtistValue} from '../artistProvider';


function ArtistCard(name, key) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [{albumData}, dispatch] = useArtistValue();

	const fetchData = async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const result = await axios(
				`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name.info}&limit=10&api_key=c49045277df93e2f9557a6d1044185e4&format=json`,
			);
			dispatch({type: 'albumList', albumData: {albumData: result.data, name: name.info}});
			navigate('album')
		} catch (error) {
			alert('Ошибка при выполнении запроса. Повторите попытку');
			setIsError(true);

		}

		setIsLoading(false);
	};

	return (
		<Card key={key} onClick={fetchData}>
			<span>{name.info}</span>
		</Card>
	);
}

export default ArtistCard;
