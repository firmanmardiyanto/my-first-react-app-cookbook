import React from "react";
import { BsCheck, BsTrash } from "react-icons/bs";

const List = (props) => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key} className={`${item.completed ? "completed" : "pending"}`}>
        {/*
         * Jika tasknya complete maka classnya completed
         * Sebaliknya classnya pending
         */}
        {item.task}
        <div className="actions">
          {/*
           * Menggunakan callback onClick dari props markAsCompleted
           */}
          <span
            className={item.completed ? "hide" : "done"}
            onClick={() => props.markAsCompleted(item.id)}
          >
            <BsCheck />
          </span>
          {/*
           * Menggunakan callback onClick dari props removeTask
           */}
          <span className="trash" onClick={() => props.removeTask(item.id)}>
            <BsTrash />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
