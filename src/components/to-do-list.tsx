import React from "react";
import { useDispatch } from "react-redux";
import { completeItem ,removeItem} from "../redux/actions/to-do-actions";
import { IlistProps } from "../interface/to-do-list-interface";
import { Complete, Delete } from  "../assets/constants/constant";
import "../assets/css/to-do-list.css";

const ToDoList = (props: IlistProps) => {
  
  const dispatch=useDispatch();
  return (
    <React.Fragment>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <i
          className="fa fa-check"
          aria-hidden="true"
          onClick={() => {dispatch(completeItem(props.itemid, props.text ))}} 
        >
          <span className="tooltip">{Complete}</span>
        </i>
        
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {dispatch(removeItem(props.itemid, props.text))}} 
        >
          <span className="tooltip">{Delete}</span>
        </i>
      </div>
    </React.Fragment>
  );
};

export default ToDoList;
