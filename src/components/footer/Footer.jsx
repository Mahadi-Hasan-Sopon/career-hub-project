// import React from 'react'
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="flex flex-wrap p-10 bg-base-200 text-base-content md:px-32 justify-between gap-6">
        <div className="">
          <h1 className="text-2xl font-semibold">CareerHub</h1>
          <p className="w-72 my-3">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="icons text-2xl flex gap-6 ">
            <SiFacebook />
            <SiTwitter />
            <SiInstagram />
          </div>
        </div>

        <nav className="flex flex-col gap-2 my-2">
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Work</Link>
          <Link className="link link-hover">Latest News</Link>
          <Link className="link link-hover">Careers</Link>
        </nav>
        <nav className="flex flex-col gap-2 my-2">
          <header className="footer-title">Product</header>
          <Link className="link link-hover">Prototype</Link>
          <Link className="link link-hover">Plans & Pricing</Link>
          <Link className="link link-hover">Customers</Link>
          <Link className="link link-hover">Integrations</Link>
        </nav>
        <nav className="flex flex-col gap-2 my-2">
          <header className="footer-title">Support</header>
          <Link className="link link-hover">Help Desk</Link>
          <Link className="link link-hover">Sales</Link>
          <Link className="link link-hover">Become a Partner</Link>
          <Link className="link link-hover">Developers</Link>
        </nav>
        <nav className="flex flex-col gap-2 my-2">
          <header className="footer-title">Contact</header>
          <Link className="link link-hover">524 Broadway , NYC</Link>
          <Link className="link link-hover">+1 777 - 978 - 5570</Link>
        </nav>
      </footer>
      <footer className="flex px-10 py-4 border-t bg-base-200 text-base-content border-base-300 justify-between md:px-32">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link
              to="https://career-hub-practice.surge.sh"
              className="hover:underline"
            >
              Career Hub
            </Link>
            . All Rights Reserved.
          </p>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Powered by CareerHub
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
