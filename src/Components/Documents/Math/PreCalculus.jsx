import React from "react"
import { Viewer } from '@react-pdf-viewer/core'; // install this library
import { Worker } from '@react-pdf-viewer/core'; // install this library
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
// const defaultLayoutPluginInstance = defaultLayoutPlugin();
export default class Algebra extends React.Component{
    render() {
        return(
            
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl="./Documents/Math/precalculus.pdf"  />
                </Worker>  
            </div>
        )
    }
}