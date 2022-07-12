import React from "react";
import Link from "next/link"
const Nav = () => {
  return (
    <>
      <nav >
        <ul>
          <li>
            <Link href="/userPortal"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/changePassword"><a>Change Password</a></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
