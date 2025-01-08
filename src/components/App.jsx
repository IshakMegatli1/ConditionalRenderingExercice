import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? null : null}
      {userIsRegistered}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
