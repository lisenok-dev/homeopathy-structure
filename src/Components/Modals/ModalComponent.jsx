import React from "react";
import Modal from "react-modal";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitizing HTML

const ModalComponent = ({ isOpen, onClose, results = [], name, russianName }) => {
  if (!isOpen) return null; // ✅ Ensure modal isn't rendered when closed

  const handleClick = async (url,index) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/ASO/article?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const htmlString = await response.text();
      document.getElementById('article').innerHTML = DOMPurify.sanitize(htmlString);

      const allDragElements = document.querySelectorAll('[id^="id-drag-"]');
      allDragElements.forEach(el => el.classList.remove('bold'));
      document.getElementById(`id-drag-${index}`).classList.add('bold');
    } catch (error) {
      console.error("Error fetching ASO data:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="modal-content"
      overlayClassName="modal-overlay" >

      <div className="container">
        <div className="leftcontainer">
          <h2>{name} - {russianName}</h2>

          {results.length === 1 && results[0].url === '' ?
            (<p>{results[0].name}</p>)
            : results.length > 0 ? (
              <ul>
                {results.map((item, index) => (
                  <li key={index} id={`id-drag-${index}`} onClick={() => { handleClick(item.url, index) }}>
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
        </div>
        <div className="rightcontainer">
          <div id="article"></div>
          <button onClick={onClose} className="close-button">X</button>
        </div>
      </div>

    </Modal>
  );
};

export default ModalComponent;
