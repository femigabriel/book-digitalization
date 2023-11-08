import { useState } from "react";

import "./App.css";
import { HomePage } from "./components/home";
import { ReadBookPage } from "./components/read-book";
import { ActivitiesPage } from "./components/activities";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        {/* <HomePage /> */}
        {/* <ReadBookPage /> */}
        <ActivitiesPage />
      </div>
    </>
  );
}

export default App;
