import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="mx-4 container">
    <div className="text-2xl">Welcome Home</div>
    <Link
      to="/notes"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      role="button"
    >
      View Notes
    </Link>
  </div>
}

export default Home
