import "./styles.css";

const FloatingPlusButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="floatingPlusButton"
      onClick={onClick}
      data-testid="floatingPlusButton"
    />
  );
};

export default FloatingPlusButton;
