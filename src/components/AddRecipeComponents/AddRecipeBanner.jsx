import Link from "next/link";

const AddRecipeBanner = () => {
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage:
            "url(https://github.com/ShariarNiaj05/BreakpointArt-Recipe-Client/blob/main/src/assets/Girl-ordering-food-from-menu-card.png?raw=true)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Delicious Creations! Explore Our Culinary Gallery
            </h1>
            <p className="mb-5">
              Welcome to BreakpointArt Add Recipe page, where you become the
              chef and architect of flavor!
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
    </div>
  );
};

export default AddRecipeBanner;
