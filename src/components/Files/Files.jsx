import { useState } from "react";
import { Body } from "./Body.jsx";
import { Foot } from "./Foot.jsx";
import { Head } from "./Head.jsx";
const Files = () => {
  const [types, setTypes] = useState({
    pdf: 1,
    docx: 0,
    png: 1,
    jpeg: 1,
    pdfa: 0,
    docxa: 1,
    pnga: 1,
    jpega: 0,
    pdfb: 1,
    docxb: 0,
    pngb: 1,
    jpegb: 0,
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center align-middle">
        <Head types={types} setTypes={setTypes} />
        <Body types={types} />
        <Foot />
      </div>
    </>
  );
};

export default Files;
