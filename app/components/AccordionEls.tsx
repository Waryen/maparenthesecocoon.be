import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import type {
  Dispatch,
  FC,
  SetStateAction} from "react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

export type AccordionElsProps = {
  num: string;
  value: string;
  header: string;
  id: string;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

const AccordionEls: FC<AccordionElsProps> = ({
  value,
  header,
  num,
  id,
  current,
  setCurrent,
  children,
}) => {
  const [active, setActive] = useState(false);
  const data = useRef(null);

  useEffect(() => {
    if (data.current) {
      const div = data.current as HTMLDivElement;
      const attr = div.getAttribute("data-state");

      if (attr === "open") {
        setActive(true);
      }
      if (attr === "closed") {
        setActive(false);
      }
    }
  }, [current]);

  return (
    <Accordion.Item
      value={value}
      className={"border-b-2 mt-4"}
      id={id}
      ref={data}
    >
      <Accordion.Trigger
        className={"mb-4 w-full grid grid-cols-12"}
        onClick={() => setCurrent(current + 1)}
      >
        <span className={"col-span-2 justify-self-start"}>{num}</span>
        <span className={"col-span-9 justify-self-start"}>{header}</span>
        {active ? (
          <MinusIcon className={"col-span-1 justify-self-end"} />
        ) : (
          <PlusIcon className={"col-span-1 justify-self-end"} />
        )}
      </Accordion.Trigger>
      <Accordion.Content className={"mb-4"}>
        <div className={"text-gray-500 lg:ml-20 ml-0"}>{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export { AccordionEls };
