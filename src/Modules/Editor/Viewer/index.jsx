import React from 'react'
import convertElementsToHtml from '../../../utils/convertElementsToHtml'
import './styles.css'
import { saveAs } from 'file-saver';

const Viewer = ({ rootElements }) => {
  console.log(rootElements)

  let innerHTML = convertElementsToHtml(rootElements)
  const handleGenerateHtml = () => {
    const originalHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Project Title</title>
      <link rel="stylesheet" href="styles.css">
      <!-- Add any other head elements you need -->
    </head>
    <body>
      <div id="root">
        <!-- React app gets mounted here -->
      </div>
      <script src="index.js"></script>
    </body>
    </html>
  `;

    const updatedHtml = originalHtml.replace(
      /<div id="root">.*<\/div>/s,
      `<div id="root">${innerHTML}</div>`
    );

    const blob = new Blob([updatedHtml], { type: 'text/html' });
    saveAs(blob, 'generated.html');
  }

  return (
    <div className='viewer-container'>
      <div className='header'>
        <h3>Viewer</h3>
        <button onClick={handleGenerateHtml}>Genarate HTML</button>
      </div>
      <div className='content'>
        <div dangerouslySetInnerHTML={{ __html: convertElementsToHtml(rootElements) }} />
      </div>
    </div>
  )
}

export default Viewer