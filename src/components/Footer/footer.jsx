// Footer.jsx
import React from 'react';
import Printer from "../../assets/footer.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#46A0DE] text-white py-5 flex items-center justify-between relative">
      
      {/* Printer Image Positioned Absolutely */}
      <img
        src={Printer}
        alt="Printer"
        className="absolute h-full w-auto opacity-60"
      />

      {/* Content of Footer in a 3-column grid with left margin */}
      <div className="container mx-auto px-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 ml-[322px]">
        
        {/* Left Column (Logo and Name) */}
        <div className="space-y-6">
          <div className="flex items-center">
            <img src={Logo} alt="BK Logo" className="h-20 mr-2" />
            <span className="text-2xl font-bold">HCMUT</span>
          </div>
        </div>

        {/* Middle Column (Website Links) */}
        <div>
          <h3 className="font-semibold">WEBSITE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">HCMUT</a></li>
            <li><a href="#" className="hover:underline">MyBK</a></li>
            <li><a href="#" className="hover:underline">BKSI</a></li>
            <li><a href="#" className="hover:underline">SSPS</a></li>
          </ul>
        </div>

        {/* Right Column (Contact Info) */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>268 Ly Thuong Kiet Street, Ward 14, District 10,<br />Ho Chi Minh City, Vietnam</li>
            <li>(028) 38 651 670 - (028) 38 647 256</li>
            <li><a href="mailto:elearning@hcmut.edu.vn" className="hover:underline">elearning@hcmut.edu.vn</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
