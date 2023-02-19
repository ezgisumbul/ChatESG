import './index.css';

export const Conversation = () => {
  return (
    <div className="conv">
      <div className="conv-img-container">
        <img src="/MichaelScott.png" alt="" className="conv-img"></img>
        <div className="online-badge"></div>
      </div>

      <p className="conv-name">Michael Scott</p>
    </div>
  );
};
