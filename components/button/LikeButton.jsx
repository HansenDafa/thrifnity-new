import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const LikeButton = ({ liked, onToggle }) => {
  return (
    <button onClick={onToggle} aria-label="Like Button">
      {liked ? (
        <IoIosHeart color="#3E918D" size={28} />
      ) : (
        <IoIosHeartEmpty color="#3E918D" size={28} />
      )}
    </button>
  );
};

export default LikeButton;
