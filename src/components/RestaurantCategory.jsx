import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ categoryData, showItems, setShowIndex }) => {

    const [showSubCategory, setShowSubCategory] = useState(null);

    const isItemCategory =
        categoryData?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    const isNestedCategory =
        categoryData?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    return (
        <div className="w-3/4 border-slate-300 border-b-8 rounded-xl mx-auto my-3 p-2 shadow-md font-semibold">
            <div
                className="flex justify-between font-bold mb-3 px-3 cursor-pointer"
                onClick={() => setShowIndex()}
            >
                <span className="text-xl ">{categoryData?.title}{" "}
                    {isItemCategory && <span>({categoryData?.itemCards?.length})</span>}
                </span>
                {showItems ? <span>⮝</span> : <span>⮟</span>}
            </div>
            {showItems &&
                <>
                    {/* ItemCategory */}
                    {isItemCategory && categoryData?.itemCards && (
                        <ItemList itemCards={categoryData.itemCards} />
                    )}

                    {/* NestedItemCategory */}
                    {isNestedCategory &&
                        categoryData?.categories?.map((subCat, idx) => (
                            <div key={subCat?.categoryId || idx} className="mt-4 ml-4">
                                <div
                                    className="flex justify-between pr-4 font-bold mb-2 text-zinc-600"
                                    onClick={() => setShowSubCategory(showSubCategory === subCat?.categoryId ? null : subCat?.categoryId)}
                                >
                                    <h3 className="text-lg">{subCat?.title} ({subCat?.itemCards?.length})</h3>
                                    {showSubCategory === subCat?.categoryId ? <span>⮝</span> : <span>⮟</span>}
                                </div>
                                 {showSubCategory === subCat?.categoryId && <ItemList itemCards={subCat?.itemCards} />}
                            </div>
                        ))
                    }
                </>
            }
        </div>
    );
};

export default RestaurantCategory;