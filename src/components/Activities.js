import {useEffect, useState} from "react";

function Activities() {
  function loadActivity() {
    fetch("https://www.boredapi.com/api/activity")
     .then ((response) => response.json())
     .then ((data) => {
        setActivities (data.activity);
    });
  }

const [activities, setActivities] = useState([]);

useEffect(() => {
  loadActivity();
}, []);

  return ( 
  <div>
    <h1>{activities}</h1>
    <button onClick={loadActivity}>Load Another</button>
  </div>
  );
}

export default Activities;