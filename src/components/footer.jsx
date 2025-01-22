import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-300 text-black py-6 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nasri Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 