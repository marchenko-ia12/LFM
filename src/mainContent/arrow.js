import React from 'react';
import styled from 'styled-components';

export const RedArrow = () => {
	return (
		<Arrow className="things">
			<div className="content">
				<div className="arrow">
					<div className="curve"/>
					<div className="point"/>
				</div>
			</div>
		</Arrow>
	);
};

const Arrow = styled.div`
	/* Arrow */

	.arrow {
		position: relative;
		margin: 0 120px;
}
	
	.arrow .curve {
		width: 400px;
		
		@media (min-width: 800px) {
            width: 600px;
        }
        
		height: 100px; 
		margin-top: -40px;
		border:solid 2px #000;
		border-color:#ce0000 transparent transparent transparent;
		border-radius: 50%/100px 100px 0 0;
		-webkit-transform: rotate(180deg);
	}
	
	.arrow .point {
		position: absolute;
		left: 40px;
		top: 315px;
	}
	
	.arrow .point:before, .arrow .point:after {
		border: 1px solid #ce0000;
		height: 25px;
		content: "";
		position: absolute;
	}
	
	.arrow .point:before {
		top: -255px;
		left: 315px;
		
		@media (min-width: 800px) {
			top: -260px;
			left: 505px;
        }
	
		transform:rotate(44deg);
		-webkit-transform:rotate(44deg);
		  -moz-transform:rotate(44deg);
		  -ms-transform: rotate(44deg);
	}
	
	.arrow .point:after {
		top: -266px;
		left: 307px;
		
		@media (min-width: 800px) {
			top: -272px;
			left: 500px;
        }
        
		transform:rotate(-82deg);
		-webkit-transform: rotate(-82deg);
		-moz-transform:rotate(-82deg);
		-ms-transform: rotate(-82deg);
	}
`;
