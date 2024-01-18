import AllRecipe from '@/components/AllRecipeComponents/AllRecipe';
import AllRecipeBanner from '@/components/AllRecipeComponents/AllRecipeBanner';
import Image from 'next/image';
import Link from 'next/link';

const AllRecipePage = async () => {
    const res = await fetch('https://breakpoint-art-task-server.vercel.app/all-recipe')
    const AllRecipe = await res.json()
    // console.log(AllRecipe);

    return (
        <div>
            <AllRecipeBanner></AllRecipeBanner>
            {/* <AllRecipe></AllRecipe> */}
            <h2 className=' text-center font-bold text-2xl'>Total Recipe: {AllRecipe.length} </h2>



            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 w-5/6 mx-auto">
                {AllRecipe?.map((recipe) => (
                    <div className="rounded shadow-lg p-3 " key={recipe._id}>
                        <Image
                            className=" mb-2 h-64 mx-auto object-cover"
                            height={256}
                            width={350}
                            src={recipe?.recipeImage}
                            alt=""
                        />
                        <h2 className="mb-2 font-bold text-2xl">{recipe?.title}</h2>
                        <Link href={`/recipe-details/${recipe._id}`}>
                            <button className=" btn bg-green-600 text-white hover:bg-green-400">
                                View Details
                            </button>
                        </Link>

                        <Link href={`/edit-recipe/${recipe._id}`}>
                            <button className=" btn bg-sky-300 text-black hover:bg-sky-400">
                                Edit Recipe
                            </button>
                        </Link>

                        <button
                            // onClick={() => handleRecipeDelete(recipe._id, recipe?.title)}
                            className=" btn bg-red-600 text-white hover:bg-red-400"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRecipePage;