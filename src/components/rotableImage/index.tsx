import { useState } from "react";
import "./styles.css";

/*TODO: Refactor and test this. This feature is just for fun.
        I will do it with TDD and good practices if you like this MVP.
 */

const RotableImage = ({ imageList }: { imageList: string[] }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<number | null>(null);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const clientX = event.clientX;
    setMousePosition(clientX);
  };

  const handleMouseUp = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMousePosition(null);
  };

  const moveRight = (positionX: number) => {
    if (mousePosition) {
      const numberTowSwitch = 20;
      if (positionX - mousePosition > numberTowSwitch) {
        setMousePosition(positionX);

        if (currentImage === 22) {
          setCurrentImage(0);
        } else {
          setCurrentImage(currentImage + 1);
        }
      }
    }
  };

  const moveLeft = (positionX: number) => {
    if (mousePosition) {
      const numberTowSwitch = 20;
      if (mousePosition - positionX > numberTowSwitch) {
        setMousePosition(positionX);

        if (currentImage > 0) {
          setCurrentImage(currentImage - 1);
        } else {
          setCurrentImage(22);
        }
      }
    }
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clientX = event.clientX;
    if (mousePosition) {
      moveRight(clientX);
      moveLeft(clientX);
    }
  };
  return (
    <div
      className="rotableImage"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img draggable="false" src={imageList[currentImage]} />
    </div>
  );
};

export default RotableImage;
