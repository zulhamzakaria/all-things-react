// app start page
import Nav from "@/components/Nav";
import Resume from "@/components/Resume";
import React from "react";

const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Resume />
    </section>
  );
};

export default Home;
