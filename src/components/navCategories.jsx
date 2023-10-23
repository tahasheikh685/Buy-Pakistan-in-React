// import productData from "./ProductData";
// import { useState } from 'react'


// const NavCategories = () => {
//   const categories = [...new Set(productData.map(item => item.category))];
//   const [selectedCategory, setSelectedCategory] = useState(null);
  
//   const [showSubcategories, setShowSubcategories] = useState(false);

//   const subcategories = productData
//     .filter(product => product.category === selectedCategory)
//     .map(product => product.productName);

//   const handleMouseEnter = (category) => {
//     setSelectedCategory(category);
//     setShowSubcategories(true);
//   };

//   const handleMouseLeave = () => {
//     setSelectedCategory(null);
//     setShowSubcategories(false);
//   };
  

//   return(
//     <ul className="categories flex space-x-4 text-white">
//     {categories.map(category => (
//       <li
//         key={category}
//         onMouseEnter={() => handleMouseEnter(category)}
//         onMouseLeave={handleMouseLeave}
//         className={`cursor-pointer ${selectedCategory === category ? 'text-green-400' : ''}`}
//       >
//         {category}
//         {showSubcategories && selectedCategory === category && (
//           <ul className="subcategories space-y-2 absolute mt-5 bg-green-900 w-50">
//             {subcategories.map(subcategory => (
//               <li
//                 key={subcategory}
//                 onClick={() => setSelectedProduct(subcategory)}
//                 className="cursor-pointer"
//               >
//                 {subcategory}
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
//   );
// }

// export default NavCategories;
import productData from "./ProductData";
import { useState } from 'react'

const NavCategories = () => {
  const categories = [...new Set(productData.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);

  const handleMouseEnter = (category) => {
    setSelectedCategory(category);

    // Filter unique subcategories for the selected category
    const subcategories = productData
      .filter(product => product.category === category)
      .map(product => product.productName);

    setUniqueSubcategories([...new Set(subcategories)]);
  };

  const handleMouseLeave = () => {
    setSelectedCategory(null);
    setUniqueSubcategories([]);
  };

  return (
    <ul className="categories flex space-x-4 text-white">
      {categories.map(category => (
        <li
          key={category}
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
          className={`cursor-pointer ${selectedCategory === category ? 'text-green-400' : ''}`}
        >
          {category}
          {uniqueSubcategories.length > 0 && selectedCategory === category && (
            <ul className="subcategories space-y-2 absolute pt-6 pb-2  bg-green-900 w-50 text-white">
              {uniqueSubcategories.map(subcategory => (
                <li
                  key={subcategory}
                  onClick={() => setSelectedProduct(subcategory)}
                  className="cursor-pointer px-4"
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavCategories;
