import React from "react";

const Element = (props) => {

  const handleSearch = async () => {
    try {
      if (props.isOpen) return; // ✅ Prevent opening again if already open
      props.setModalOpen(true);
      props.setElement(props);

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/ASO/parse?input=${encodeURIComponent(props.search)}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      props.setResults(data);
    } catch (error) {
      console.error("Error fetching ASO data:", error);
    }
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
    </td>
  );
};

export default Element;
