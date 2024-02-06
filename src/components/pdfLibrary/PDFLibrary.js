import BookSearchInput from "../filters/pdfBookFilter/BookSearchInput";
import PdfBookFilter from "../filters/pdfBookFilter/PdfBookFilter";
import PDFBookCard from "./PDFBookCard";


const PDFLibrary = () => {

    return (
        <div className="pdf_library">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <BookSearchInput />
                </div>
                <PdfBookFilter />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <PDFBookCard />
                    <PDFBookCard />
                    <PDFBookCard />
                    <PDFBookCard />
                    <PDFBookCard />
                    <PDFBookCard />
                </div>
            </div>
        </div>
    )
};

export default PDFLibrary;