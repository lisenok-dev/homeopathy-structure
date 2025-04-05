import React from 'react';

const TableColumn = (props) => {
    return (
        <th><a href='blank'>{props.number + 1}</a></th>
    );
};

export default TableColumn;