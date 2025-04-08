import React, { useState } from "react";
import ModalComponent from "../Components/Modals/ModalComponent";

const Element = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      if (modalOpen) return; // ✅ Prevent opening again if already open
      setModalOpen(true);

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/ASO/parse?input=${encodeURIComponent(props.search)}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching ASO data:", error);
    }
  };

  // 🔹 Close modal and reset results
  const closeModal = () => {
    setModalOpen(false);
    setResults([]); // ✅ Clear results to prevent conflicts
  };

  return (
    <td>
      <button onClick={handleSearch}>
        <div className="container">
          <div className="leftcontainer">{props.symbol}</div>
          <div className="rightcontainer">{props.period}</div>
        </div>
        <div>{props.name}</div>
        <div>{props.russianName}</div>
      </button>

      {modalOpen && ( // ✅ Only render when needed
        <ModalComponent isOpen={modalOpen} onClose={closeModal} results={results} {...props} />
      )}
    </td>
  );
};

export default Element;
