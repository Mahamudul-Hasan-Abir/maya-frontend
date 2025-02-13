const Footer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full px-28 py-10 mt-24 bg-[#F5F5F5] gap-10">
      <div>
        <h1 className="font-semibold mb-5">Contact</h1>
        <p className="text-sm">Contact Us</p>
        <p className="text-sm">Website:https://maya.io</p>
      </div>
      <div>
        <h1 className="font-semibold mb-5">About</h1>
        <p className="text-sm">Support Center</p>
        <p className="text-sm">Customer Support</p>
        <p className="text-sm">About Us</p>
        <p className="text-sm">Copyright</p>
      </div>
      <div>
        <h1 className="font-semibold mb-5">Customer Care</h1>
        <p className="text-sm">FAQ & Helps</p>
        <p className="text-sm">Shipping & Delivery</p>
        <p className="text-sm">Return & Exchanges</p>
      </div>
      <div>
        <h1 className="font-semibold mb-5">Our Information</h1>
        <p className="text-sm">Privacy policy update</p>
        <p className="text-sm">Terms & conditions</p>
        <p className="text-sm">Return Policy</p>
        <p className="text-sm">Site Map</p>
      </div>
    </div>
  );
};

export default Footer;
