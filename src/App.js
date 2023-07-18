import React, { useEffect, useState } from "react";

import Navbar from './componets/Navbar'
import Filter from './componets/Filter'
import Cards from './componets/Cards'
import Spinner from './componets/Spinner'

import { apiUrl, filterData } from "./data"
import { toast } from "react-toastify";

const App = ( ) => {

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  // if you want to fetch data from api so did this way 
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output -->
      setCourse(output.data);
    }

    catch(error) {
      toast.error("something went wrong")
    }
    setLoading(false)

  }

  useEffect (() => {
    fetchData();
  }, [])

  return (
    
    <div className = "flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>

        <div>
          <div>
            <Filter filterData = {filterData} 
            category = {category} 
            setCategory = {setCategory} />
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap
          justify-center items-center min-[50vh]">
            {
              loading ? ( <Spinner />) : ( <Cards courses = {course} category = {category} /> )
            }
          </div>
        </div>
    </div>
    
  );
};

export default App;
 