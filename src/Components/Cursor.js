import React, { useRef, useState } from 'react';

const Cursor = () => {

  let cursorRef = useRef();
  useState(() => {
    
    window.addEventListener("mousemove", (e) => moveCursor(e));
    const moveCursor = (e) => {
      if (cursorRef.current) {
        setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.setAttribute(
              "style",
              `top: ${e.pageY - 25}px; left: ${e.pageX - 25}px;`
            );
          }
          
        }, 150);
      }
    };
    return () => {
      window.removeEventListener('mousemove',moveCursor)
    }
  }, [cursorRef])

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
    </>
  );
};

export default Cursor;