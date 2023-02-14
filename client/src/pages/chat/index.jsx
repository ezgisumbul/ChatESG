import { Conversation } from '../../components/conversation';
import { ConversationHeader } from '../../components/conversation-header';
import { Message } from '../../components/message';
import './index.css';

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-menu-container">
        <div className="chat-menu">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="chat-menu-input"
          />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chat-box-container">
        <div className="chat-box">
          <div className="chat-box-top">
            <ConversationHeader />
          </div>

          <div className="chat-box-bottom">
            <Message />
          </div>
        </div>
      </div>
      <div className="chat-online-container">
        <div className="chat-online">online</div>
      </div>
    </div>
  );
};
