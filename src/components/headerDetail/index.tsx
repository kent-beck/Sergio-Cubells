import { useNavigate } from "react-router-dom";
import "./styles.css";

const HeaderDetail = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate("/");
  };

  return (
    <div className="detailHeaderContainer">
      <div className="detailTitleContainer" onClick={onClickGoBack}>
        <img
          data-testid="backIcon"
          alt="Back icon"
          className="backIcon"
          src="https://configurador.seat.es/seat-cc/assets/icons/unofficial/flat-arrow-left.svg"
        />
        <strong className="detailTitleCar">{title}</strong>
      </div>
    </div>
  );
};

export default HeaderDetail;
