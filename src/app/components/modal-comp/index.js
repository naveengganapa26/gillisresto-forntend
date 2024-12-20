// import React from 'react';
// import '../../styles/modal-comp.scss'; 

// const ModalComponent = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <div className="modal-header">
//           <h2>{title}</h2>
//           <button className="close-button" onClick={onClose}>
//             ×
//           </button>
//         </div>
//         <div className="modal-content">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default ModalComponent;


import React, { useState } from 'react';
import InputBox from '../inputbox-comp';
import '../../styles/modal-comp.scss'; 

const ModalComponent = ({ isOpen, onClose, title }) => {
  const [formData, setFormData] = useState({
    name: "",
    offerPercentage: "",
    address: "",
    city: "",
    postalCode: "",
    imageUrl: "",
    rating: "",
  });

  const [modalErrors, setmodalErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newmodalErrors = {};

    if (!formData.name) newmodalErrors.name = "Name is required.";
    if (formData.offerPercentage <= 0 || formData.offerPercentage > 100)
      newmodalErrors.offerPercentage = "Offer percentage must be between 1 and 100.";
    if (!formData.address) newmodalErrors.address = "Address is required.";
    if (!formData.city) newmodalErrors.city = "City is required.";
    if (!formData.postalCode.match(/^\d{6}$/))
      newmodalErrors.postalCode = "Postal code must be 6 digits.";
    if (!formData.imageUrl.match(/^https?:\/\/.+/))
      newmodalErrors.imageUrl = "Invalid URL.";
    if (formData.rating < 0 || formData.rating > 5)
      newmodalErrors.rating = "Rating must be between 0 and 5.";

    setmodalErrors(newmodalErrors);
    return Object.keys(newmodalErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch("https://giilisresto.vercel.app/api/restaurants/", {
          method: "POST", // Use POST to send data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Convert form data to JSON
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log("Form Data Submitted Successfully:", result);
          onClose(); // Close the modal after successful submission
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-content">
          <InputBox
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={modalErrors.name}
          />
          <InputBox
            label="Offer Percentage"
            type="number"
            name="offerPercentage"
            value={formData.offerPercentage}
            onChange={handleChange}
            error={modalErrors.offerPercentage}
          />
          <InputBox
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={modalErrors.address}
          />
          <InputBox
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={modalErrors.city}
          />
          <InputBox
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            error={modalErrors.postalCode}
          />
          <InputBox
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            error={modalErrors.imageUrl}
          />
          <InputBox
            label="Rating"
            type="number"
            name="rating"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            error={modalErrors.rating}
          />
          <div className="modal-footer">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;

