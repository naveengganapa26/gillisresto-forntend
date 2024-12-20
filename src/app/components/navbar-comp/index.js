'use client'

import React from 'react';
import {  HousePlusIcon, MapPin, User } from 'lucide-react';
import '../../styles/navbarcomp.scss';



const NavbarComp = ({ 
  appName = "Gillis Resto", 
  userName = "Naveen G Ganapa", 
  locationDetails
}) => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">

        <div className="app-name">
          <h1 className="app-name__text">{appName}</h1>
        </div>
        
 
        <div className="navbar-right">

          
          <div className="navbar-right__location">
            <MapPin className="navbar-right__location-icon" size={20} />
            <span className="navbar-right__location-text">{locationDetails.city}<br/>{locationDetails.countryName},{locationDetails.postcode}</span>
          </div>
          
       
          <div className="navbar-right__profile">
            <div className="navbar-right__profile-icon-container">
              <User className="navbar-right__profile-icon-container-svg" size={20} />
            </div>
            <span className="navbar-right__profile-name">{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;




// opencage details
// 'use client'

// import React from 'react';
// import { MapPin, User } from 'lucide-react';
// import '../../styles/navbarcomp.scss';



// const NavbarComp = ({ 
//   appName = "Gillis Resto", 
//   userName = "Naveen G Ganapa", 
//   locationData

  
// }) => {
//   const { suburb = "Unknown Suburb", county = "Unknown County", postcode = "000000" } = locationData.components || {};
//   return (
//     <nav className="navbar-container">
//       <div className="navbar-wrapper">

//         <div className="app-name">
//           <h1 className="app-name__text">{appName}</h1>
//         </div>
        
 
//         <div className="navbar-right">
   
//           <div className="navbar-right__location">
//             <MapPin className="navbar-right__location-icon" size={20} />
//             <span className="navbar-right__location-text">{suburb}<br/>{county},{postcode}</span>
//           </div>
          
       
//           <div className="navbar-right__profile">
//             <div className="navbar-right__profile-icon-container">
//               <User className="navbar-right__profile-icon-container-svg" size={20} />
//             </div>
//             <span className="navbar-right__profile-name">{userName}</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarComp;