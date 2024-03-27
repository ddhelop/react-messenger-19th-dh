import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	background-color: gray;
`;

export const ChatHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 23px;
	height: 60px;
	background-color: #8cabd9;
	border-bottom: 0.5px solid #cdcdcd;
`;

export const HeaderBox = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	gap: 0 20px;
`;

export const SVGIcon = styled.img`
	width: 20px;
	height: 20px;
`;

export const Name = styled.div`
	font-weight: 600;
	font-size: 16px;
	margin-left: 10px;
	line-height: 60px;
`;

export const ChatContainer = styled.div`
	height: 83vh;
	flex-grow: 1;
	overflow-y: auto;
	background-color: #8cabd9;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0 17px;
	height: 55px;
	background-color: white;
	gap: 17px;
`;

export const ChatInput = styled.input`
	width: 267px;
	height: 39px;
	border-radius: 30px;
	padding: 15px;
	background-color: #f5f5f5;

	outline: none;
	border: none;
`;