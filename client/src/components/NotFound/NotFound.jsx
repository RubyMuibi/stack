import notFoundStyles from "./notFound.module.css"

import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <>
      <div className={ notFoundStyles.container }>
        <h1> 404 ERROR </h1>
        <h2> Page Not Found</h2>
        <Link to="/">
         <button> stack </button>
        </Link>
      </div>
    </>
  );
};
