import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { chatMessagesState } from '../../../context/ChatDataState';
import type { YourFirstMessageProps } from '../../../lib/types';

export default function YourFirstMessage(props: YourFirstMessageProps): JSX.Element {
	const messages = useRecoilValue(chatMessagesState);
	return (
		<MessageContainer>
			{!props.isContinuous && <Profile src="/ChatRoom/defaultProfile.svg" alt="profile" />}
			<TextContainer>
				{!props.isContinuous && <ProfileName>{props.name}</ProfileName>}
				<Chat>
					{props.isContinuous && <div style={{ marginLeft: '48px' }}></div>}
					<ChatBox>{props.message}</ChatBox>
					{!props.isContinuous && <ChatTail />}
					<SentTime>{props.sentTime}</SentTime>
				</Chat>
			</TextContainer>
		</MessageContainer>
	);
}

const MessageContainer = styled.div`
	display: flex;
	align-items: flex-start; // 프로필과 텍스트 컨테이너를 하단에 정렬
	margin-bottom: 10px;
`;

const Profile = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 20px; // 원형 프로필 이미지
	margin-right: 10px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProfileName = styled.div`
	font-size: 12px;
	color: #333;
	margin-bottom: 5px;
`;

const Chat = styled.div`
	width: auto;
	position: relative; // 꼬리 이미지의 위치 기준점이 됩니다.
	display: flex;
	align-items: end;
	margin-left: 10px; // 나선형 꼬리 이미지와 충분한 공간을 확보합니다.
`;

const ChatBox = styled.div`
	width: 80%;
	background-color: #fff;
	padding: 8px 12px;
	border-radius: 15px;
	font-size: 14px;
	word-wrap: break-word; // 긴 텍스트를 자동으로 줄바꿈합니다.
	white-space: normal; // 텍스트의 공백을 적절히 처리합니다.
`;

const ChatTail = styled.div`
	position: absolute;
	top: 0; // 꼬리의 정확한 위치를 조절합니다.
	left: -10px; // 꼬리가 ChatBox 왼쪽에 위치하도록 조절합니다.
	width: 20px;
	height: 20px;
	background-image: url('/ChatRoom/chatTail.svg');
	background-size: cover;
	transform: rotate(0deg); // 필요한 경우 꼬리의 방향을 조절합니다.
`;

const SentTime = styled.div`
	font-size: 12px;
	color: #666;
	margin-left: 6px;
`;
