import React, { useState } from "react";
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: "Team meeting", completed: false },
    { id: 2, todo: "Task list and assignments", completed: false },
    { id: 3, todo: "Get Groceries", completed: false },
    { id: 4, todo: "Study 5th chapter of Physics", completed: false },
    { id: 5, todo: "Submit the project for Chemistry", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newId = todoItems.length + 1;
      const newItem = { id: newId, todo: newTodo, completed: false };
      setTodoItems([...todoItems, newItem]);
      setNewTodo("");
    }
  };

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todoItems.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoItems(updatedTodos);
  };

  return (
    <section className="p-5">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h5>
                  <span className="h2 me-2">ToDo</span>{" "}
                  <MDBBadge className="mx-2" color="danger">
                    checklist
                  </MDBBadge>
                </h5>
                <p className="text-muted pb-2">04/01/2020 • ML - 1321</p>

                <MDBInputGroup>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new item"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={addTodo}>
                    Add
                  </button>
                </MDBInputGroup>

                <MDBListGroup className="rounded-0">
                  {todoItems.map((todo) => (
                    <MDBListGroupItem
                      className="border-0 d-flex align-items-center ps-0"
                      key={todo.id}
                    >
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id={`flexCheckChecked-${todo.id}`}
                        className="me-3"
                        checked={todo.completed}
                        onChange={() => toggleTodoCompletion(todo.id)}
                      />
                      {todo.completed ? <s>{todo.todo}</s> : todo.todo}
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
