import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      {/* <h1 style={HeadingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "close" : "add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = "Task Tracker";

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const HeadingStyle = { color: "red", backgroundColor: "black" };

export default Header;
