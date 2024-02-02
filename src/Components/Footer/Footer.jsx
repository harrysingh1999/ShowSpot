import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className="flex items-end w-full mt-40">
      <footer className="w-full bg-gray-900 body-font">
        <div className="container flex flex-col flex-wrap px-5 pt-14 pb-2 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center mb-8">
            <NavLink to="/"><p className="hover:scale-110 text-white">ShowSpot</p></NavLink>
            <p className="text-xs text-sky-300">Explore Shows, Watch and Repeat</p>
            <div className="mt-2">
              <span className="inline-flex justify-center mb-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a
                  href="https://github.com/harrysingh1999"
                  className="text-white hover:scale-110"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/harvinder-singh-shahu-ab7b1b1a0/"
                  className="ml-3 text-white hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/harrysingh_1999/"
                  className="ml-3 text-white hover:scale-110"
                >
                  <InstagramIcon />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow text-center">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-white">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-white">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Platform
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-white">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-white">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-white">
                    hs541156@gmail.com
                  </a>
                </li>

                <li className="mt-3">
                  <a className="text-white">
                    +91 88261 41160
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-white capitalize text-center">
              ShowSpot © 2024 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}