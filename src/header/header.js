import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {navigate} from 'hookrouter';
import {useArtistValue} from '../artistProvider';
import styled from 'styled-components';
import {MaterialInput} from './input';
import {Search} from './searchButton';
import logo from './lastfmLogo.svg';


export default function Header() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [artistName, setArtistName] = useState('');
	const [{artistData}, dispatch] = useArtistValue();

	const input = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const result = await axios(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=c49045277df93e2f9557a6d1044185e4&format=json`,);
				if (result.data.results) {
					dispatch({type: 'changeArtist', newArtist: {artistData: result.data}});
					navigate('/')
				}
			} catch (error) {
				alert('Ошибка при выполнении запроса. Повторите попытку');
				setIsError(true);
			}

			setIsLoading(false);
		};
		fetchData();
	}, [artistName]);

	const keyPress = key => {
		if (key.keyCode === 13) setArtistName(key.target.value);
	};


	return (
		<CustomHeader>
			<a href='/'><img src={logo} alt='site-logo' /></a>
			<div className='search'>
				<MaterialInput className="group">
					<input
						ref={input}
						onKeyDown={keyPress}
						type="text"
						required
					/>
					<span className="bar"/>
					<label>Поиск исполнителя</label>
				</MaterialInput>
				<Search onClick={() => setArtistName(input.current.value)}>➥</Search>
			</div>
		</CustomHeader>
	);
}

const CustomHeader = styled.header`
	display: flex;
	margin-bottom: 100px;
	
	.search {
		display: flex;
		margin-left: auto;
		width: 300px;
	
		@media (min-width: 800px) {
			width: auto;
		}   
	}
`;