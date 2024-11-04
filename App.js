import React, { useState, useEffect } from 'react';

function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  

  return (
    <div className="border-2 border-black w-80 h-40 mx-10 my-10 flex">
      <div className='border-2 border-black w-24 h-24 mx-5 my-5 mt-7' >
        <h2 className='text-center mt-7'>IMAGE</h2>
      </div>
      <div className='mt-10 ml-3'>
      {data.results.map((user) => (
        <>
            <h2> {user.name.first} {user.name.last}</h2>
            <h2>{user.gender}</h2>
            <h2>{user.phone}</h2>
          </>
        ))}
      </div>

    </div>
  );
}



function App() {
  return( 
  <Fetch />
  );
}
export default App;
