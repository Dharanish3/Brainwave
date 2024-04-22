import React from "react";
import { socials } from "../Contants/data";
import Section from "./Section";

const Footer = () => {
  return (
    <>
      <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block"></p>©
          {new Date().getFullYear()}. All Rights Reserved
          <ul className="flex gap-5 flex-wrap">
            {socials.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={icon.iconUrl}
                  width={16}
                  height={16}
                  alt={icon.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Footer;
