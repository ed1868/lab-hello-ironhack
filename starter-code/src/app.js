import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/items/items";
import Header from "./components/header/header";

class App extends Component {
  items = [
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UIs",
      imgUrl: "/images/icon1.png"
    },
    {
      title: "Components",
      description: "Build encapsulated components that manage their state.",
      imgUrl: "/images/icon2.png"
    },
    {
      title: "Single Way",
      description: "A set of immutable values are passed to the components",
      imgUrl: "/images/icon3.png"
    },
    {
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers",
      imgUrl: "/images/icon4.png"
    }
  ];
  header= [
    { 
      logoUrl:'/images/ironhack-logo.svg',
      menu:"/images/menu-top.svg",
      title: "Say Hello To ReactJS",
      description: "You Will learn a frontend framework from scratch to become a ninja developer",
      
      
    },
  ];


  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
      <div class="headerStyle">

      </div>
        {this.items.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item.title}
              description={item.description}
              imagen={item.imgUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
