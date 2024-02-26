import React from "react"
import { Viewer } from '@react-pdf-viewer/core'; // install this library
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
export const Algebra = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={"/Documents/Math/algebra.pdf"}
                    plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>   
    )
}
export default Algebra;