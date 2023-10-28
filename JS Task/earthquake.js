//Using await async
async function getEarthquakeData() {
  try {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-01-02&limit=3"
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

getEarthquakeData();

//Using .then() and .catch()
fetch(
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-01-02&limit=3"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
