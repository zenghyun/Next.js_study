"use client";
export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An Error Occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
