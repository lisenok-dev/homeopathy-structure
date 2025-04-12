import Element from "./Element";
import TableColumn from "./TableColumn";
import TableHeader from "./TableHeader";
import React, { Fragment, useState, useEffect } from 'react';
import ModalComponent from "../Components/Modals/ModalComponent";

export default function PeriodicTable(props) {

    const [elements, setElements] = useState(null);
    const [element, setElement] = useState(null);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [results, setResults] = useState([]); // Ensure results is initialized as an empty array

    const closeModal = () => {
        setModalOpen(false);
        setResults([]); // ✅ Clear results to prevent conflicts
    };

    useEffect(() => {

        fetch(`${process.env.PUBLIC_URL}/resources/Elements.json`) // Assuming Elements.json is in the public/resources folder
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setElements(data);
            })
            .catch(error => {
                setError(error);
                console.error("Could not load elements:", error);
            });
    }, []);

    if (error) {
        return <div>Error loading elements: {error.message}</div>;
    }

    if (!elements) {
        return <div>Loading elements...</div>;
    }

    return (
        <Fragment>
            <table cellPadding="10" border="1">
                <thead>
                    <tr align="center">
                        <th>&nbsp;</th>
                        {Array.from({ length: 18 }, (_, i) => (
                            <TableHeader key={i} number={i} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {elements && Array.isArray(elements) &&
                        Array.from({ length: 7 }, (_, i) => {
                            const rowNumber = i + 1;
                            const rowElements = elements.filter(element => element.row === rowNumber);
                            const rowCells = [];
                            rowCells.push(<TableColumn key={i} number={rowNumber} />);

                            let currentColumn = 1;

                            rowElements.forEach(element => {
                                if (element.column > currentColumn) {
                                    rowCells.push(
                                        <td
                                            key={`empty-${rowNumber}-${currentColumn}`}
                                            className={rowNumber === 1 ? '' : 'nonetopborder'}
                                            colSpan={element.column - currentColumn}
                                        ></td>
                                    );
                                    currentColumn = element.column;
                                }
                                rowCells.push(
                                    <Element
                                        key={element.atomicNumber}
                                        period={element.atomicNumber}
                                        symbol={element.symbol}
                                        name={element.name}
                                        russianName={element.russianName}
                                        atomicMass={element.atomicMass}
                                        family={element.family}
                                        search={element.search}
                                        setModalOpen={setModalOpen}
                                        setResults={setResults}
                                        setElement={setElement}
                                    />);
                                currentColumn = element.column + 1;
                            });

                            return <tr key={`row-${rowNumber}`}>{rowCells}</tr>;
                        })
                    }

                    <tr className="separator"><td colSpan={19}></td></tr>

                    {(() => {
                        const lanthanides = elements.filter(element => element.family === 'Lanthanides');
                        const rowCells = [];
                        rowCells.push(<td key={`empty-start-row-8`} className="border-right" colSpan={3}></td>);

                        lanthanides.forEach(element => {
                            rowCells.push(
                                <Element
                                    key={element.atomicNumber}
                                    period={element.atomicNumber}
                                    symbol={element.symbol}
                                    name={element.name}
                                    russianName={element.russianName}
                                    atomicMass={element.atomicMass}
                                    family={element.family}
                                    search={element.search}
                                    setModalOpen={setModalOpen}
                                    setResults={setResults}
                                    setElement={setElement}
                                />);
                        });
                        rowCells.push(<td key={`empty-end-row-8`} className="border-left"></td>);

                        return <tr key={`row-8`}>{rowCells}</tr>; // Replace this with the intended JSX or logic if needed
                    })()}

                    {(() => {
                        const actinides = elements.filter(element => element.family === 'Actinides');
                        const rowCells = [];
                        rowCells.push(<td key={`empty-start-row-9`} className="border-right" colSpan={3}></td>);

                        actinides.forEach(element => {
                            rowCells.push(
                                <Element
                                    key={element.atomicNumber}
                                    period={element.atomicNumber}
                                    symbol={element.symbol}
                                    name={element.name}
                                    russianName={element.russianName}
                                    atomicMass={element.atomicMass}
                                    family={element.family}
                                    search={element.search}
                                    setModalOpen={setModalOpen}
                                    setResults={setResults}
                                    setElement={setElement}
                                />);
                        });
                        rowCells.push(<td key={`empty-end-row-9`} className="border-left"></td>);

                        return <tr key={`row-9`}>{rowCells}</tr>; // Replace this with the intended JSX or logic if needed
                    })()}
                </tbody>
            </table>

            {modalOpen && (
                <ModalComponent 
                    isOpen={modalOpen} 
                    onClose={closeModal} 
                    results={results} // Ensure results is passed correctly
                    element={element} 
                />
            )}
        </Fragment>
    );
}