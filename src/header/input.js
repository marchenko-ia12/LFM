import styled from 'styled-components';

export const MaterialInput = styled.div`
	position: relative;
	width: 240px;

	@media (min-width: 800px) {
		width: auto;
	}   

	input {
	  font-size: 16px;
	  padding: 10px;
	  display: block;
	  
	  @media (min-width: 800px) {
	    width: 300px;
	  }
	  border: none;
	  border-bottom: 1px solid #ccc;
	}
	input:focus {
	  outline: none;
	}
	
	/* LABEL ======================================= */
	label {
	  color: #999;
	  font-size: 18px;
	  position: absolute;
	  pointer-events: none;
	  left: 10px;
	  top: 15px;
	  transition: 0.2s ease all;
	  -moz-transition: 0.2s ease all;
	  -webkit-transition: 0.2s ease all;
	}
	/* active state */
	input:focus ~ label {
	  top: -15px;
	  font-size: 14px;
	  color: #ce0000;
	}
	input:valid ~ label {
	  top: -15px;
	  font-size: 14px;
	  color: #ce0000;
	}
	/* BOTTOM BARS ================================= */
	.bar {
	  position: relative;
	  display: block;
	  width: 320px;
	}
	.bar:before, .bar:after {
	  content: "";
	  height: 2px;
	  width: 0;
	  bottom: 0;
	  position: absolute;
	  background: #ce0000;
	  transition: 0.2s ease all;
	  -moz-transition: 0.2s ease all;
	  -webkit-transition: 0.2s ease all;
	}
	.bar:before {
		left: 30%;	
		@media (min-width: 800px) {
			left: 50%; 
		}
	}
	.bar:after {
	    right: 60%;
		@media (min-width: 800px) {
			right: 50%; 
		}
	}
	/* active state */
	input:focus ~ .bar:before, input:focus ~ .bar:after {
		width: 40%;
		@media (min-width: 800px) {
            width: 50%;
		}
	}
`;