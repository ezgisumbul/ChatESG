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
            className="chat-menu-input"
            type="text"
            placeholder="Search or start new chat"
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

          <div className="chat-box-middle">
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-msg-input"
              placeholder="Write a message"
              minLength={1}
              maxLength={500}
              spellCheck={true}
            />
            <button className="chat-msg-submit-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
