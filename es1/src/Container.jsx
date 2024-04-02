import { useState } from "react";

export function Container({ title, children }) {
  const [open, setOpen] = useState(false);

  function openChildren() {
    setOpen((open) => !open );
  }

  return (
    <>
      <div className="container">
        <button onClick={openChildren}>{title}</button>
      </div>
       {open && <div>{children}</div>}
    </>
  );
}
