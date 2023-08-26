const API_URL = window.location.origin === 'http://localhost:8000' || 'http://localhost:3000' ? 'http://localhost:8000' : "https://nasamc-api.netlify.app/.netlify/functions/api";
// Load planets and return as JSON.
console.log(process.env);
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b) => {
    return a.flightNumber - b.flightNumber;
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(launch),
    })
  } catch(err) {
    return {
      ok: false,
    };
  }
   
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error);
    return {
      ok: false
    }
  }
  
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};