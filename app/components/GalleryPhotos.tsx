import { Link } from "@remix-run/react";
import { useWindowSize } from "@reach/window-size";

type Props = {
  slides: {
    title: string;
    url: string;
  }[];
};

export const GalleryPhotos = ({ slides }: Props) => {
  const { width } = useWindowSize();

  return (
    <div className="mt-24 lg:ml-32 lg:mx-0 2xl:mx-auto mx-4 max-w-screen-xl flex md:flex-row md:flex-wrap md:justify-even flex-col justify-center items-center">
      {slides.map((slide) => (
        <div
          key={slide.title}
          className="m-4 transition-transform transform-gpu hover:scale-95 focus:border-4"
        >
          <Link
            to={`/services`}
            style={{
              backgroundImage: `url('${slide.url}')`,
              backgroundSize: "cover",
            }}
            className={`${
              width ? "h-64 w-64" : "h-80 w-80"
            } flex items-end flex-row-reverse cursor-pointer`}
          >
            <h3 className="bg-darkVertdeau py-2 px-4 text-white md:w-max w-full text-xl text-center">
              {slide.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
