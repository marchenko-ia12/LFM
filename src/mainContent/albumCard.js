import React from 'react';


function AlbumCard(info, key) {
	const data = info.info;
	return (
		<img key={key} src={data.image[2]['#text']} alt={`album ${data.name}`}/>
	);
}

export default AlbumCard;
