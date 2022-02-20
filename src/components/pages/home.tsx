import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/common";
import "src/styles/home.scss";

export const HomePage = () => {
  return (
    <section className="home-page">
      <Link to="/cart">
        <Button>Go to Cart Page &#187;</Button>
      </Link>
      <Link to="/admin/cart">
        <Button>Go to Admin Cart Page &#187;</Button>
      </Link>
    </section>
  );
};
