import { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default InputFocus;
