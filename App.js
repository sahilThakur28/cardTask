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

  // console.log(data);
  console.log(data);
  
  

  return (
    <div className="border-2 border-black w-80 h-40 mx-10 my-10 ">
      <div className='flex'>
      {data.results.map((user) => (
        <>
             <img src={user.picture.large} className='mx-5 mt-3'/>
             <div className='mt-9'>
            <h2>{user.name.title}. {user.name.first} {user.name.last}</h2>
            <h2>{user.gender}</h2>
            <h2>{user.phone}</h2>
            </div>
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
