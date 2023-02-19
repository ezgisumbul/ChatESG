import './index.css';

export const Message = ({ own }) => {
  return (
    <div className={own ? 'msg-container own' : 'msg-container'}>
      <div className="msg">
        <p className="msg-txt">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          obcaecati sit cum reiciendis praesentium.
        </p>
        <p className="msg-timestamp">1h ago</p>
      </div>
    </div>
  );
};
