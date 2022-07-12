import React from "react";
import Link from "next/link"
const Nav = () => {
  return (
    <>
      <nav >
        <ul>
        <li>
            <Link href="/adminLayout"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/changePassword"><a>Change Password</a></Link>
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

export default Nav;
