"use client";

import Link from "next/link";

/* const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "bg-green-600 text-white rounded p-2"
    : " hover:bg-green-400 hover:text-white rounded p-2"; */

/* const navItem = (
  <>
    <Link href={"/"} className={activeLinkStyle}>
      Home
    </Link>
    <Link href={"/all-recipe"} className={activeLinkStyle}>
      All Recipe
    </Link>
    <Link href={"/add-recipe"} className={activeLinkStyle}>
      Add Recipe
    </Link>
  </>
); */

const Navbar = () => {
  return (
    <div className="flex justify-between bg-base-100">
      <div>BreakPointArt Recipe</div>
      <div className="flex gap-5 justify-center">
        <Link href={"/"} className={''}>
          Home
        </Link>
        <Link href={"/all-recipe"} className={''}>
          All Recipe
        </Link>
        <Link href={"/add-recipe"} className={''}>
          Add Recipe
        </Link>
      </div>
      <div>login</div>
    </div>
  );
};

export default Navbar;
