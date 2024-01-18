"use client";

import Link from "next/link";

const AllRecipeBanner = () => {
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage:
          "url(https://github.com/ShariarNiaj05/BreakpointArt-Recipe-Client/blob/main/src/assets/Online-cooking-show.png?raw=true)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Create Culinary Magic! Add Your Signature Recipe
          </h1>
          <p className="mb-5">
            Embark the journey with BreakpointArt All Recipes page
          </p>
          <div className="flex mt-5 gap-5 justify-center bg-sky-600 p-3 rounded">
            <Link href={"/"} className={""}>
              Home
            </Link>
            <Link href={"/all-recipe"} className={""}>
              All Recipe
            </Link>
            <Link href={"/add-recipe"} className={""}>
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipeBanner;
