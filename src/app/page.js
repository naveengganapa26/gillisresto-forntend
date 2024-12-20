'use client'

import Geofencing from "./geofencing-offers/page";

export default function Home() {
 
  return (
    <div>
     <Geofencing />
    

    </div>
  );
}





















// 'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
// import { useEffect, useState } from "react";

// export default function Home() {
 
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);
//   const [content, setContent] = useState("Loading content based on your location...");

//   useEffect(() => {
//     // Get user's location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//         },
//         (err) => setError("Unable to fetch location. Please enable location services."),
//         { timeout: 10000 }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//     }
//   }, []);

//   useEffect(() => {
//     if (location) {
//       // Example: Fetch location-based content (using latitude and longitude)
//       fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data)
//           if (data.city) {
//             setContent(`Welcome to ${data.city}, ${data.countryName}!, ${data.postcode}`);
//           } else {
//             setContent("We couldn't fetch location details.");
//           }
//         })
//         .catch(() => setContent("Error fetching location data."));
//     }
//   }, [location]);

//   return (
//     <div>
//          <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Location-Based Content</h1>
//       {error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         <p>{content}</p>
//       )}
//     </div>
//     </div>
//   );
// }





// 'use client'
// import { useEffect, useState } from "react";

// export default function Home() {
//   // Initialize with static latitude and longitude
//   const [location, setLocation] = useState({ latitude: "12.9767", longitude: "77.5713" });
//   const [error, setError] = useState(null);
//   const [content, setContent] = useState("Loading content based on your location...");

//   useEffect(() => {
//     // If you want to override with browser location dynamically, you can uncomment below:
//     /*
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//         },
//         (err) => setError("Unable to fetch location. Please enable location services."),
//         { timeout: 10000 }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//     }
//     */
//   }, []);

//   useEffect(() => {
//     if (location) {
//       // Fetch location-based content using static coordinates
//       fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data)
//           if (data.city) {
//             setContent(`Welcome to ${data.city}, ${data.countryName} (${data.postcode}).`);
//           } else {
//             setContent("We couldn't fetch location details.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching location data:", error);
//           setContent("Error fetching location data.");
//         });
//     }
//   }, [location]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Location-Based Content</h1>
//       {error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         <p>{content}</p>
//       )}
//     </div>
//   );
// }


