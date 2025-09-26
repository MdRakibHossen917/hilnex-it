import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyBrand</h2>
          <p className="text-gray-400">
            Providing quality services and solutions to make your life easier.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About Us</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/solutions" className="hover:text-primary">Solutions</a></li>
            <li><a href="/package" className="hover:text-primary">Package</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@mybrand.com</li>
            <li>Phone: +880 1300 981 501</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Column 4: Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
