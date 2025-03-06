'use client';

import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

const navigation: NavigationItem[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Bflobluereef/?locale=fo_FO&_rdr',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      React.createElement(
        'svg',
        { fill: "currentColor", viewBox: "0 0 24 24", className: "size-8", ...props },
        React.createElement('path', {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        })
      )
    ),
  },
];

export default function Footer(): React.ReactElement {
  return React.createElement(
    'footer',
    { className: "bg-white" },
    React.createElement(
      'div',
      { className: "mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8" },
      React.createElement(
        'div',
        { className: "flex justify-center gap-x-6 md:order-2" },
        navigation.map((item) => (
          React.createElement(
            'a',
            { key: item.name, href: item.href, className: "text-gray-700 hover:text-gray-900" },
            React.createElement('span', { className: "sr-only" }, item.name),
            React.createElement(item.icon, { "aria-hidden": "true", className: "size-8" })
          )
        ))
      ),
      React.createElement(
        'p',
        { className: "mt-8 text-center text-sm/6 text-gray-700 md:order-1 md:mt-0" },
        "© 2025 Blue Reef Aquatics, Inc. All rights reserved."
      )
    )
  );
}
