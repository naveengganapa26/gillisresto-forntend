//data within  bigdatacloud
"use client";

import { useEffect, useState } from "react";
import NavbarComp from "@/app/components/navbar-comp";
import hotelsData from "../components/hotels-address";
import "../styles/geofencing-offers.scss";
import SideAdvertisement from "../components/sidenav-comp";
import ModalComponent from "../components/modal-comp";
import { HousePlusIcon } from "lucide-react";

function Geofencing() {
  const [location, setLocation] = useState(null);
    // const [location, setLocation] = useState({ latitude: "12.94", longitude: "77.56" });
  const [locationDetails, setLocationDetails] = useState({});
  const [error, setError] = useState(null);
  const [hotelsToDisplay, setHotelsToDisplay] = useState([]);
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        () =>
          setError(
            "Unable to fetch location. Please enable location services."
          ),
        { timeout: 10000 }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.city) {
            const { city, countryName, postcode } = data;
            setLocationDetails({ city, countryName, postcode });
          } else {
            setError("We couldn't fetch location details.");
          }
        })
        .catch(() => setError("Error fetching location data."));
    }
  }, [location]);

  let postalcode = locationDetails.postcode;

  useEffect(() => {
    if (locationDetails.postcode) {

      const fetchHotels = async () => {
        try {
          const response = await fetch(
            `https://giilisresto.vercel.app/api/restaurants/${postalcode}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch hotels");
          }
          const data = await response.json();
          setHotelsToDisplay(data.data);
        } catch (error) {
          console.error("Error fetching hotels:", error.message);
          setError("Unable to fetch hotels. Please try again later.");
        }
      };

      fetchHotels();
    }
  }, [locationDetails.postcode]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Resturants"
      />

      <NavbarComp locationDetails={locationDetails} />

      <div className="add-resto__btn-cont" onClick={openModal}>
        <HousePlusIcon className="add-resto__icon" size={20} />
        <span className="add-resto__icon-text">Add Restos</span>
      </div>

      <SideAdvertisement
        title="Summer Sale!"
        description="50% off all products this week"
        ctaText="Shop Now"
        onClose={"handleCloseAd"}
      />

      <div className="geofencing__container">
        <h1 className="geofencing__container-title">Nearby Hotels</h1>
        {error ? (
          <p className="geofencing__container-error">{error}</p>
        ) : hotelsToDisplay.length > 0 ? (
          <div className="geofencing__hotels">
            {hotelsToDisplay.map((hotel) => (
              <div key={hotel.id} className="geofencing__hotels__card">
                <div className="geofencing__hotels__card-image">
                  <img src={hotel.imageUrl} alt={hotel.name} />
                  <span className="geofencing__hotels__card-image__rating">
                    ★ {hotel.rating}
                  </span>
                </div>
                <div className="geofencing__hotels__card-details">
                  <h3 className="geofencing__hotels__card-details__title">
                    {hotel.name}
                  </h3>
                  <p className="geofencing__hotels__card-details__address">
                    {hotel.address}
                  </p>
                </div>
                <div className="geofencing__hotels__card-offers">
                  <div className="geofencing__hotels__card-offers__text">
                    <span>
                      Flat <strong>{hotel.offerPercentage}%</strong> off on
                      pre-booking
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hotels found near your location.</p>
        )}
      </div>
    </div>
  );
}

export default Geofencing;


