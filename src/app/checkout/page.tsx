"use client";

import withAuth from "@/Context/AuthContext/AuthContext";

const Checkout = () => {
  return (
    <div>
      <p>This is Checkout Component</p>
    </div>
  );
};

export default withAuth(Checkout);
