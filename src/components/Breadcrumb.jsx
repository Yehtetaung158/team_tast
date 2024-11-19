// import { LuHome } from "react-icons/lu"; // Home icon
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className="w-full flex justify-center">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {/* <LuHome /> */}
              Home
            </Link>
          </li>

          {/* Separator */}
          <li>
            <span className="text-gray-500 dark:text-gray-400">/</span>
          </li>

          {/* Current Page */}
          <li aria-current="page">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {currentPageTitle}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
