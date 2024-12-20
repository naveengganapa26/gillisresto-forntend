import React from "react";
import { X } from "lucide-react";
import "../../styles/sidenav-comp.scss";

const SideAdvertisement = ({
  title = "Special Offer!",
  description = "Check out our amazing deal",
  imageUrl = "/api/placeholder/200/300",
  ctaText = "Learn More",
  onClose,
}) => {
  return (
    <div className="sideAdvertisement">
      {onClose && (
        <button
          onClick={onClose}
          className="sideAdvertisement__closeBtn"
          aria-label="Close advertisement"
        >
          <X size={20} />
        </button>
      )}

      <div className="sideAdvertisement__content">
        <h3 className="styles.sideAdvertisement__title">{title}</h3>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-R2h-IXog1JaEW969s_kp63sMYxeFGjvwg&s"
          alt="Advertisement"
          className="sideAdvertisement__image"
        />

        <p className="sideAdvertisement__description">{description}</p>

        <button className="sideAdvertisement__cta">{ctaText}</button>
      </div>
    </div>
  );
};

export default SideAdvertisement;
