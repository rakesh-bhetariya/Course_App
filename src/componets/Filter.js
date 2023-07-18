import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler (title) {
    setCategory(title);
  }

  
  return (
    <div className='flex flex-wrap justify-center w-11/12 py-4 mx-auto space-x-4 max-w-max gap-y-4'>
      {
        filterData.map ((data) => (
          (
            <button key = {data.id} 
            className='px-2 py-1 text-lg font-medium text-white bg-black border-2 rounded-md hover:bg-opacity-50 '
            onClick = { () => filterHandler (data.title)} >  
              {data.title}
            </button>
          )
        ))
      }
    </div>
  )
}

export default Filter
