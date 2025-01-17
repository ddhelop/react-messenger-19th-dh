import styled from 'styled-components';
import Footer from './Footer';
import FooterMenu from './FooterMenu';

export default function MergeFooter() {
	return (
		<div>
			<MainFooter>
				<FooterMenu />
				<Footer />
			</MainFooter>
		</div>
	);
}

const MainFooter = styled.div`
	position: fixed; // 위치를 고정시킴
	bottom: 0; // 화면 하단에 위치
	width: 375px;
	background-color: white; // 배경색 지정 (필요에 따라 조정)
	/* box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); // 상단에 그림자 효과를 줘서 더 돋보이게 함 */

	@media (max-width: 768px) {
		width: 100%; // 뷰포트 너비가 768px 이하일 때 전체 너비를 사용
	}
`;
