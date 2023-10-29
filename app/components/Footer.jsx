"use client";

import Link from "next/link";
import "../components/footer.css";

export default function Footer() {
  return (
    <div className="theCalcDiv">
      <footer className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="container px-0 md:px-12 pb-6 flex flex-col sm:flex-row items-center justify-between mx-auto">
          <ul className="flex flex-row">
            <li>
              <Link
                href="/affiliate-disclaimer"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                bg-transparent dark:text-white"
              >
                Affiliate Disclaimer
              </Link>
            </li>

            <li>
              <Link
                href="private-notice"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                bg-transparent dark:text-white"
              >
                Private Notice
              </Link>
            </li>

            <li>
              <Link
                href="map"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                bg-transparent dark:text-white"
              >
                Map
              </Link>
            </li>
          </ul>
        </div>
        {/* Apply extra padding only to the top for screens larger than "sm" */}
        <style jsx>{`
          @media (min-width: 640px) {
            footer {
              padding-top: 10rem;
            }
          }
        `}</style>
      </footer>
    </div>
  );
}
