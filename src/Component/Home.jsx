import React from "react";
import Nav from "./Nav";
import About from "./About";
import Slider from "./Slider";
import Client from "./Client";
import Footer from "./Footer/Footer";
import Img from "./Img";
import TodoList from "./ToDoList/TodoList";

export default function Home() {
  return (
    <>
      <Nav
        logo={Img.CompLogo}
        text="-Tech"
        Tstyle={{
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          color: "#f6c12e",
        }}
        height={{ height: "40px" }}
      />
      <TodoList />
      <Footer />
    </>
  );
}
