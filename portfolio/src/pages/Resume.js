import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./softwareEngineer.pdf"
import Footer from "../components/Footer"
import Header from "../components/Header"

console.log(pdf)
function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Header></Header>
            <Document
                file="./softwareEngineer.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            <Footer></Footer>
        </div>

    )
}

export default Resume;

// ../../src/softwareEngineer.pdf