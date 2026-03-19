import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex py-5 bg-cyan-950 m-auto text-white text-sm flex-col items-center border-t max-w-screen-xxl space-y-2">
        {/* Links Section */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/privacy-policy" className="hover:text-cyan-400 transition">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms-of-use" className="hover:text-cyan-400 transition">
            Terms of Use
          </a>
          <span>|</span>
          <a href="/newsletter" className="hover:text-cyan-400 transition">
            Newsletter Opt-In
          </a>
        </div>

        {/* Copyright */}
        <p>© Copyright 2025 excellentoffers.com. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
