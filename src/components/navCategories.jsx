import productData from "./productData";
import { useState } from 'react'
import Logo from "./logo";

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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  
  return (
    
      <nav className="bg-green-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-900 bg-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={isNavOpen}
              onClick={toggleNav}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {categories.map(category => (
              <li 
                key={category}
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
                className={`cursor-pointer ${selectedCategory === category ? 'text-green-400' : ''}`}
              >
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-green-900 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{category} </button>
                  {/* <!-- Dropdown menu --> */}
                  {uniqueSubcategories.length > 0 && selectedCategory === category && (
                    <div id="dropdownNavbar" className="absolute z-10 font-normal bg-green-900 divide-y divide-gray-100 rounded-lg shadow w-44 text-white dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-5 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                          {uniqueSubcategories.map(subcategory => (
                            <li
                              key={subcategory}
                              onClick={() => setSelectedProduct(subcategory)}
                              className="cursor-pointer"
                            >
                              <a href="#" class="block px-4 py-1 hover:bg-black dark:hover:bg-gray-600 dark:hover:text-white">{subcategory}</a>
                            </li>
                          ))}  
                        </ul>  
                    </div>
                  )}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

  );
}

export default NavCategories;
