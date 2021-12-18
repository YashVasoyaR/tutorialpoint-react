import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Img from "../Img";
import Nav from "../Nav";
import "../ToDoList/ToDo.css";
import HeaderInput from "./HeaderInput";
import ListSet from "./ListSet";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItems, setEditItem] = useState(null);

  function getItem(event) {
    var value = event.target.value;
    setInput(value);
  }

  //Add items
  function addItem() {
    if (!input) {
      alert("please add item");
    } else if (input && !toggleSubmit) {
      setItem(
        item.map((element) => {
          if (element.id === editItems) {
            return { ...element, name: input };
          }
          return element;
        })
      );
      setInput("");
      setToggleSubmit(true);
      setEditItem(null);
    } else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setItem([...item, allInput]);
      setInput("");

      //Before::
      // setItem((preValue) =>{
      //     return [...preValue, input] },
      // setInput(''));
    }
  }

  //remove particular item
  function removeItem(index) {
    setItem(() => {
      return item.filter((elem) => {
        return index !== elem.id; //Before::
      });
    });

    //Before::
    // setItem((preVal) => {
    //     return item.filter((arr,elem) => {
    //         return index !== elem;
    //     })
    // });
  }

  //Edit Items
  function editItem(id) {
    let newEditItem = item.find((element) => {
      return id === element.id;
    });
    setToggleSubmit(false);
    setInput(newEditItem.name);

    setEditItem(id);
  }

  // Delete All
  function deleteAll() {
    setItem([]);
  }

  // {examp-2 from ListSet}
  // function DitemOnClick(id) {
  //     setItem((pre) => {
  //         return pre.filter((arr, ele) => {
  //             return ele !== id;
  //         })
  //     })
  // }

  return (
    <>
      {/* <Nav logo={Img.todoList}
                height={{height:'40px'}}    
            /> */}
      <div className="container-fluid Tmain">
        <div className="container Tcontainer">
          <div className="Theading">
            <h1>to-Do List</h1>
          </div>

          <HeaderInput
            getItm={getItem}
            inp={input}
            tgsubmit={toggleSubmit}
            addItm={addItem}
          />

          <div className="Tlist">
            <ul>
              {item.map((todoItem) => {
                return (
                  <ListSet
                    itemList={todoItem.name}
                    removeItm={removeItem}
                    editItm={editItem}
                    id={todoItem.id}
                    key={todoItem.id}
                    // {examp-2 from ListSet}
                    // onClickDele={DitemOnClick}
                  />
                );
              })}
            </ul>
          </div>

          <button onClick={deleteAll} className="TbtnCheck">
            <span>Check List</span>
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
// { textDecoration: cutItems ? 'lineThrough' : null }}
