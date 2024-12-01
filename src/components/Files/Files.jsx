import { useState, useEffect } from "react";
import axios from "axios";
import { Body } from "./Body.jsx";
import { Foot } from "./Foot.jsx";
import { Head } from "./Head.jsx";
const Files = () => {
  const [types, setTypes] = useState({
    pdf: false,
    docx: false,
    png: false,
    jpeg: false,
    pdfa: false,
    doc: false,
    pnga: 0,
    jpega: 0,
    pdfb: 0,
    docxb: 0,
    pngb: 0,
    ppt: 0,
  });

  useEffect(() => {
    const fetchPaperSettingData = async () => {
      try {
        const host = import.meta.env.VITE_HOST;
        const response = await axios.get(
          `${host}/systemconfig/load-file/filetype`
        );
        const newtypes = response.data.data.reduce((acc, curr) => {
          acc[curr] = 1;
          return acc;
        }, {});
        setTypes((prev) => ({ ...prev, ...newtypes }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPaperSettingData();
  }, []);

  const changeType = (tyepname, value) => {
    const newtype = { ...types, [tyepname]: value };
    setTypes(newtype);
  };

  const updateType = async () => {
    const arr = Object.entries(types)
      .map(([key, value]) => {
        if (value) return key;
      })
      .filter((e) => e !== undefined);

    const data = {
      filename: "filetype",
      content: arr,
    };
    const headers = {
      "Content-Type": "application/json", // Sửa lại typo
    };

    const host = import.meta.env.VITE_HOST;

    try {
      const response = await axios.put(`${host}/systemconfig/update`, data, {
        headers,
      });
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <>
      <div className="m-16 flex flex-col items-center justify-center align-middle">
        <Head types={types} setTypes={setTypes} />
        <Body types={types} change={changeType} />
        <Foot func={async () => updateType()} />
      </div>
    </>
  );
};

export default Files;
