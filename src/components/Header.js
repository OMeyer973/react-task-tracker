import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={HeadingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "close" : "add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = "Task Tracker";

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const HeadingStyle = { color: "red", backgroundColor: "black" };

export default Header;
