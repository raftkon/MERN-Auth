import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "10px",
        height: "10px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
