import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

function BackToTopBtn () {
  const context = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            context.setOpenscrollUp(true);     
        }  else {
            context.setOpenscrollUp(false);
        }
    });
  },[]);

  return (
  <>
    {context.openScrollUp && (
        <button
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "60px",
          width: "60px",
          backgroundColor: "red",
          borderRadius: "50%",
          fontSize: "30px",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={context.scrollUp}
        >☝</button>
      )
    }
  </>
  );

}

export default BackToTopBtn ;