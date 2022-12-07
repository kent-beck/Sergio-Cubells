import { render } from "@testing-library/react";
import RotableImage from "..";

/*TODO: This feature was just for fun
Probably this don't will accepted in the features,
so I don't test everething about something that will be removed.

Enjoy the Seat Ibiza 360º View! 🤭
*/

describe("Renders a ", () => {
  const imageList: string[] = ["image1", "image2", "imgae3"];

  test("Rotable image", () => {
    const tree = render(<RotableImage imageList={imageList} />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("src first image", () => {
    render(<RotableImage imageList={imageList} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    const firstImage = imageList[0];

    expect(testImage.src).toContain(firstImage);
  });

  test("empty array", () => {
    render(<RotableImage imageList={[]} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.src).toContain("");
  });
});
