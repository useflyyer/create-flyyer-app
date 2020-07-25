import React from "react";

// Make sure to default export a React component
export default function Hello({ variables }) {
  return (
    <div>
      <h1>Hello template</h1>
      <pre>{JSON.stringify(variables)}</pre>
    </div>
  );
}
