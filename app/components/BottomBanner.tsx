import type { ReactNode } from "react";
import { Link } from "@remix-run/react";
import { PlusIcon } from "@radix-ui/react-icons";
import { useWindowSize } from "@reach/window-size";

export type BottomContactProps = {
  direction: "left" | "right";
  title: string;
  subtitle?: string;
  link: string;
  children?: ReactNode;
  imgUrl: string;
};

const BottomBanner = ({
  direction,
  title,
  subtitle,
  link,
  children,
  imgUrl,
}: BottomContactProps) => {
  const { width } = useWindowSize();

  return (
    <div>
      <figure
        className={`absolute ${
          direction === "left" ? "left-0" : "right-0"
        } transform ${width ? "-translate-y-28" : "-translate-y-56"} ${
          direction == "left"
            ? "rounded-br-full rounded-tr-full"
            : "rounded-bl-full rounded-tl-full"
        } overflow-hidden`}
        style={
          width
            ? { width: "200px", height: "200px" }
            : { width: "300px", height: "300px" }
        }
      >
        <img
          src={imgUrl}
          width={width ? 200 : 300}
          height={width ? 200 : 300}
          alt="A propos"
        />
      </figure>
      <div className={"bg-darkVertdeau lg:mt-64 mt-36"}>
        <div
          className={
            "lg:pt-36 pt-24 lg:pb-24 pb-12 lg:w-1/3 lg:mx-auto mx-4 text-white"
          }
        >
          <h3 className={"text-3xl text-center mb-6"}>{title}</h3>
          <p className={"text-center text-sm"}>{subtitle}</p>
          {children}
          <div className={"lg:mt-24 mt-16 flex justify-center items-center"}>
            <small className={"mr-6"}>{link}</small>
            <Link
              to={"/contact"}
              className={
                "bg-transparent border-2 border-white rounded-full w-12 h-12 flex justify-center items-center transform hover:scale-125 focus:scale-125 duration-200"
              }
            >
              <PlusIcon height={25} width={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BottomBanner };
