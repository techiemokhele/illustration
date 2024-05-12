"use client";

import { memo } from "react";
import Image from "next/image";

//custom
import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";
import ActiveUsersComponent from "../users/ActiveUsersComponent";

const NavbarComponent = ({
  activeElement,
  handleActiveElement,
}: NavbarProps) => {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) &&
      value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white py-2">
      <div className="flex items-center">
        <Image
          src="/assets/logo.svg"
          alt="Illustration-logo"
          width={30}
          height={30}
          className="mr-4"
        />
        <span className="text-white text-xl">Illustration</span>
      </div>

      <ul className="flex flex-row">
        {navElements.map((item: ActiveElement | any) => (
          <li
            key={item.name}
            onClick={() => {
              if (Array.isArray(item.value)) return;
              handleActiveElement(item);
            }}
            className={`group px-2.5 py-5 flex justify-center items-center
            ${
              isActive(item.value)
                ? "bg-primary-green"
                : "hover:bg-primary-grey-200"
            }
            `}
          ></li>
        ))}
      </ul>

      <ActiveUsersComponent />
    </nav>
  );
};

export default memo(
  NavbarComponent,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
