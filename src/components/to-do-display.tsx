import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ToDoList from "./to-do-list";
import NavBar from "./nav-bar";
import { addItem, removeAllItem } from "../redux/actions/to-do-actions";
import { ItemReducerState, IuserReducerState } from "../interface/reducers-interface";
import { Heading, Placeholder, Active, Completed, RemoveAll, Add, Colon } from "../assets/constants/constant";
import "../assets/css/to-do-display.css";

const TodoDisplay = () => {
  const [data, setData] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const active = useSelector((state: ItemReducerState) => state.itemReducer.active);
  const complete = useSelector((state: ItemReducerState) => state.itemReducer.complete);
  const recycleBin = useSelector((state: ItemReducerState) => state.itemReducer.recycleBin);
  const isLoggedIn = useSelector((state: IuserReducerState) => state.userReducer.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]) 

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  const addData = () => {
    if (!data.length || data.trim().length === 0) {
      setData("");
      return;
    }
    dispatch(addItem(data));
    setData("");
  };

  const handleRemoveAll = () => {
    dispatch(removeAllItem());
  };


  return (
    <React.Fragment>
      <div className="main-div">
        <div className="main-container">
          <div className="head">
            <h1 className="heading">{Heading}</h1>
          </div>

          <div className="nav">
            <NavBar />
          </div>

          <div className="upper-container">
            <div className="add-list">
              <input
                type="text"
                placeholder={Placeholder}
                value={data}
                id="input-text"
                onChange={changeInputValue}
              />
              <button
                id="Add"
                onClick={addData}
              >
                {Add}
              </button>
            </div>

            <div className="show-list">
              <ul>
                {active.map((value) => {
                  return (
                    <ToDoList
                      key={value.id}
                      text={value.title}
                      itemid={value.id}
                    />
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="lower-container">
            <div className="active">
              <Link
                to="/active"
                className="link"
                state={{ text: "Active List" }}
              >
                {Active}
                {Colon}
                {active.length}
              </Link>
            </div>

            <div className="active">
              <Link
                to="/complete"
                className="link"
                state={{ text: "Completed List" }}
              >
                {Completed}
                {Colon}
                {complete.length}
              </Link>
            </div>

            <div
              className="active"
              onClick={handleRemoveAll}
            >
              {RemoveAll}
            </div>

            <div className="active">
              <i className="fa fa-trash"></i>
              <span className="badge badge-light">
                <Link
                  to="/recycle"
                  state={{ text: "Recycle Bin" }}
                >
                  {recycleBin.length}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoDisplay;
