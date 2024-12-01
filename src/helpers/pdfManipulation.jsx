import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const getNumPages = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;

      try {
        const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        resolve(pdf.numPages); // Resolve the Promise with the number of pages
      } catch (err) {
        reject(err); // Reject the Promise with the error
      }
    };

    reader.onerror = () => {
      reject(new Error("File could not be read"));
    };

    reader.readAsArrayBuffer(file);
  });
};

export { getNumPages };
