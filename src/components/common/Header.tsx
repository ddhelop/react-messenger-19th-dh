import styled from 'styled-components';

interface HeaderProps {
	color: string;
}

export default function Header(props: HeaderProps): JSX.Element {
	return (
		<>
			<Wrapper color={props.color}>
				<Time>09:23</Time>
				<Icon src="/icon/Status Bar/Icons.svg" />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div<{ color: string }>`
	display: flex;
	background-color: ${props => props.color};

	padding: 5px 15px;
	justify-content: space-between;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Time = styled.div``;

const Icon = styled.img``;