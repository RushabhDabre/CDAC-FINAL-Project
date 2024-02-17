import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";

export default function GetAllProject() {
    let navigate = useNavigate();
    const [originalRecords, setOriginalRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div></div>
    )
}
