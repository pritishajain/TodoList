import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./nav-bar";
import { deleteItemRestore, completeItemRestore, completeItem, removeItem } from "../redux/actions/to-do-actions";
import { ItemReducerState, IuserReducerState } from "../interface/reducers-interface";
import { Complete, Delete } from "../assets/constants/constant";
import "../assets/css/list.css";

const List = () => {

  const active = useSelector((state: ItemReducerState) => state.itemReducer.active);
  const complete = useSelector((state: ItemReducerState) => state.itemReducer.complete);
  const recycleBin = useSelector((state: ItemReducerState) => state.itemReducer.recycleBin);
  const isLoggedIn = useSelector((state: IuserReducerState) => state.userReducer.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

   useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  interface stateType {
    text: string;
  }

  const location = useLocation();
  const { text } = location.state as stateType;

  let arrayDataItems;

  if (text === "Active List") {
    arrayDataItems = active.map((item) => (
      <li key={item.id}>
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <i
            className="fa fa-check"
            aria-hidden="true"
            onClick={() => {
              dispatch(completeItem(item.id, item.title));
            }}
          >
            <span className="tooltip">{Complete}</span>
          </i>

          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              dispatch(removeItem(item.id, item.title));
            }}
          >
            <span className="tooltip">{Delete}</span>
          </i>
        </div>
      </li>
    ));
  } else if (text === "Completed List") {
    arrayDataItems = complete.map((item, key) => (
      <li key={item.id}>
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <div className="restore">
            <i
              className="fas fa-sync-alt"
              onClick={() => dispatch(completeItemRestore(item.id, item.title))}
            ></i>
          </div>
        </div>
      </li>
    ));
  } else if (text === "Recycle Bin") {
    arrayDataItems = recycleBin.map((item, key) => (
      <li key={item.id}>
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <div className="restore">
            <i
              className="fas fa-sync-alt"
              onClick={() => dispatch(deleteItemRestore(item.id, item.title))}
            ></i>
          </div>
        </div>
      </li>
    ));
  } else {
    alert("not a valid item");
  }

  return (
    <React.Fragment>
      <div className="main-list">
        <NavBar />
        <h1 className="heading">{text}</h1>
        <div className="list">
          <ul>{arrayDataItems}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
