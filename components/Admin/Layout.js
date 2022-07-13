import React from "react";
import Link from "next/link"
const Layout = () => {
  return (
    <>
      <nav >
        <ul>
        <li>
            <Link href="/adminLayout"><a></a></Link>
          </li>
          <li>
            <Link href="/createBook"><a>Create Book</a></Link>
          </li>
          <li>
            <Link href="/getBooks"><a>Get Books</a></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
