import { Body } from "./Body.jsx";
import { Foot } from "./Foot.jsx";
import { Head } from "./Head.jsx";
const types = {
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
};
export const Files = () => {
  return (
    <>
      <div className="w-screen mb-8 flex flex-col items-center justify-center align-middle">
        <Head />
        <Body types={types} />
        <Foot />
      </div>
    </>
  );
};
