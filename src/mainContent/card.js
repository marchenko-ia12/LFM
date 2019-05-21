import styled from 'styled-components';

export const Card = styled.div`
	background: #fff;
	border-radius: 2px;
	display: flex;
	min-height: 100px;
	position: relative;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	cursor: pointer;
	
	span {
		font-size: 18px;
		margin: auto;
	}
	
	:hover {
	  box-shadow: 0 7px 14px rgba(0,0,0,0.25);
	}
`;

