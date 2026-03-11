import React, { useState } from "react";

export function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export function UserCard({ name }) {
  return (
    <div>
      <h2>User: {name}</h2>
    </div>
  );
}

export function Button({ text }) {
  return <button>{text}</button>;
}

export function ProductInfo({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export function StudentList({ students }) {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text || ""}</p>
    </div>
  );
}
