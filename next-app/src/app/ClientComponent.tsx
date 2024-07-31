"use client";
import React, { useState } from "react";

const ClientComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div>Client Conponent</div>
      <button onClick={() => setValue(value + 1)}>client</button>
      <div>{value}</div>
    </>
  );
};

export default ClientComponent;
