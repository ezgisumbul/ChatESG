import './index.css';

export const Message = () => {
  return (
    <div className="msg-container">
      <div className="msg own">
        <p className="msg-txt">Message text</p>
        <p className="msg-timestamp">1h ago</p>
      </div>
    </div>
  );
};
