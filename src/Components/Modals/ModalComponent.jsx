import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ isOpen, onClose, results = [], name, russianName }) => {
  if (!isOpen) return null; // ✅ Ensure modal isn't rendered when closed

  const handleClick = async (url) => {
    try {
      const response = await fetch(`http://localhost:5169/api/ASO/article?url=${encodeURIComponent(url)}`);
      console.log(encodeURIComponent(url));
      if (!response.ok) throw new Error("Failed to fetch data");

      const htmlString = await response.text(); // получаем как текст
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
    } catch (error) {
      console.error("Error fetching ASO data:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        content: { width: "500px", margin: "auto", padding: "20px" },
      }}>
      <h2>{name} - {russianName}</h2>

      <div className="container">
        <div className="leftcontainer">
          {results.length === 1 && results[0].url === '' ?
            (<p>{results[0].name}</p>)
            : results.length > 0 ? (
              <ul>
                {results.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    <button onClick={() => { handleClick(item.url) }}>Button</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}

          <button onClick={onClose}>Close</button>
        </div>
        <div className="rightcontainer">Period</div>
      </div>

    </Modal>
  );
};

export default ModalComponent;
