import AddRecipeBanner from '@/components/AddRecipeComponents/AddRecipeBanner';
import React from 'react';

const AddRecipePage = () => {
    return (
        <div>
            <AddRecipeBanner></AddRecipeBanner>

            <div className="max-w-screen-sm mx-auto">
                <form className="card-body"
                    // onSubmit={handleSubmit}
                >
                    
                    {/* title  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="title"
                            placeholder="Title"
                            name="title"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {/* Ingredients */}
                    <label className="label">
                        <span className="label-text">Ingredients</span>
                    </label>
                    <select
                        name="ingredients"
                        placeholder="Ingredients"
                        className="input input-bordered h-96"
                        // value={recipe.ingredients}
                        // onChange={handleIngredientChange}
                        multiple
                    >
                        {/* accessing all the ingredients from the stored array  */}
                        {recipeIngredients?.map((ingredient) => (
                            <option key={ingredient.id} value={ingredient.label}>
                                {ingredient.label}
                            </option>
                        ))}
                    </select>

                    {/* instruction filed  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instruction</span>
                        </label>
                        <textarea
                            name="instruction"
                            cols="50"
                            rows="100"
                            placeholder="Instruction"
                            className="input input-bordered"
                            required
                        ></textarea>
                    </div>

                    {/* image field  */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm">
                            Select Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-400 text-white"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

const recipeIngredients = [
    { id: 1, label: "Flour" },
    { id: 2, label: "Eggs" },
    { id: 3, label: "Milk" },
    { id: 4, label: "Sugar" },
    { id: 5, label: "Butter" },
    { id: 6, label: "Salt" },
    { id: 7, label: "Yeast" },
    { id: 8, label: "Baking powder" },
    { id: 9, label: "Chocolate chips" },
    { id: 10, label: "Vanilla extract" },
    { id: 11, label: "Ghee" },
    { id: 12, label: "Mustard oil" },
    { id: 13, label: "Turmeric powder" },
    { id: 14, label: "Chili powder" },
    { id: 15, label: "Cumin seeds" },
    { id: 16, label: "Coriander seeds" },
    { id: 17, label: "Garlic" },
    { id: 18, label: "Ginger" },
    { id: 19, label: "Onions" },
    { id: 20, label: "Tomatoes" },
    { id: 21, label: "Potatoes" },
    { id: 22, label: "Chickpeas" },
    { id: 23, label: "Lentils" },
    { id: 24, label: "Rice" },
    { id: 25, label: "Fish" },
    { id: 26, label: "Chicken" },
    { id: 27, label: "Beef" },
    { id: 28, label: "Yogurt" },
    { id: 29, label: "Lime juice" },
    { id: 30, label: "Coconut milk" },
    { id: 31, label: "Bananas" },
    { id: 32, label: "Mangoes" },
    { id: 33, label: "Panch Phoron" },
    { id: 34, label: "Bay leaves" },
    { id: 35, label: "Green chilies" },
    { id: 36, label: "Cilantro" },
    { id: 37, label: "Mint leaves" },
    { id: 38, label: "Shrimp" },
    { id: 39, label: "Hilsa fish" },
    { id: 40, label: "Begun" },
    { id: 41, label: "Aloo" },
    { id: 42, label: "Doi" },
];

export default AddRecipePage;