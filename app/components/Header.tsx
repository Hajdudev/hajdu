"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelected } from "../store/gsap/gsap";

export default function Header() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)
  function handleClick(){
    if(!isOpen){
     gsap.fromTo(hamburgerRef.current, {
       x: 770
     },{
         x: 0,
        duration: 0.8,
          onnComplete: () => {
          setIsOpen(state => !state)
         }
      })
    }else{
     gsap.fromTo(hamburgerRef.current, {
       x: 0
     },{
         x: 770,
        duration: 0.8,
          onnComplete: () => {
          setIsOpen(state => !state)
         }
      })

    }

    }

  useGSAP(() => {
    gsap.set(hamburgerRef.current, {x: 770})
    if (selected == 3) {
      gsap.set(headerRef.current, { y: -100, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => {
          dispatch(setSelected(4));
        },
      });
    }
  }, [selected]);

  return (
    <div
      ref={headerRef}
      id="header"
      className="w-screen  opacity-0 fixed z-40 flex justify-between items-center px-4 md:px-10 lg:px-16 py-2 md:py-4 h-auto"
    >
      <div className="flex justify-start w-1/3 items-center">
        <div className="w-16 h-16 relative">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 371.000000 216.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <g
              transform="translate(0.000000,216.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M0 2151 c0 -16 48 -60 91 -81 69 -36 146 -60 264 -81 99 -19 161 -22
613 -26 285 -3 502 -9 502 -14 0 -5 -280 -9 -665 -9 -368 0 -665 -4 -665 -9 0
-44 135 -119 275 -153 84 -20 123 -21 565 -25 274 -3 479 -8 485 -14 5 -5
-223 -9 -598 -9 -669 0 -639 3 -575 -61 45 -44 139 -86 250 -111 84 -19 135
-21 510 -25 240 -3 418 -9 418 -14 0 -5 -203 -9 -489 -9 -483 0 -489 0 -484
-20 8 -29 78 -89 132 -113 108 -48 129 -50 493 -54 292 -4 348 -7 348 -19 0
-12 -45 -14 -286 -14 l-285 0 6 -22 c15 -51 61 -103 120 -133 58 -30 59 -30
252 -33 l193 -3 0 -45 0 -44 55 0 55 0 0 45 0 45 60 0 c33 0 60 -1 60 -3 0 -9
151 -1053 153 -1061 2 -5 36 222 76 505 40 283 75 524 78 537 5 20 11 23 42
20 35 -3 36 -4 36 -46 l0 -42 58 0 57 0 0 44 0 45 213 3 214 3 58 30 c59 30
105 82 120 133 l6 22 -305 0 c-265 0 -306 2 -306 15 0 13 43 15 329 15 348 0
418 7 532 49 62 23 143 88 152 121 5 20 2 20 -504 20 -299 0 -509 4 -509 9 0
5 184 11 438 14 391 4 446 6 527 24 110 25 209 69 253 112 64 64 96 61 -593
61 -377 0 -625 4 -625 9 0 6 203 11 503 13 l502 4 100 27 c55 15 128 41 162
57 57 28 103 69 103 91 0 5 -306 9 -685 9 -391 0 -685 4 -685 9 0 5 225 11
513 14 404 4 533 8 611 21 112 18 222 49 281 78 41 21 105 75 105 90 0 4 -835
8 -1855 8 -1020 0 -1855 -4 -1855 -9z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden md:flex gap-13 justify-center w-1/3 items-center">
        <span className="text-xl text-paper/80" onDragOver={() => { }}>
          About
        </span>
        <span className="text-xl text-paper/80">Services</span>
        <span className="text-xl text-paper/80">Pricing</span>
      </div>
      <div className="hidden md:flex w-1/3 justify-end items-center">
        <button className="bg-gradient-to-r animate-background-animation from-cobal via-blue-400 to-cobal rounded-3xl text-2xl px-7 py-2 [background-size:200%_200%] ">
          Contact
        </button>
      </div>
      <div onClick={ () => handleClick()} className="md:hidden z-50 h-full w-auto ">
        <div className={`w-9 h-0.5  transition-all duration-150 ${isOpen ? "rotate-45 translate-y-1.5 " : ""} bg-white`}></div>  
        <div className={`w-9 h-0.5 transition-all duration-150 mt-3 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}  bg-white`}></div>  
      </div>
      <div ref={hamburgerRef} className="fixed md:hidden top-0 left-0 flex justify-center items-center  z-49 w-screen h-screen bg-[#0a0a0a]">

        <div className="flex flex-col items-center gap-10 w-full">
          <div className="w-20 h-20 mb-10">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 371.000000 216.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,216.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path d="M0 2151 c0 -16 48 -60 91 -81 69 -36 146 -60 264 -81 99 -19 161 -22
613 -26 285 -3 502 -9 502 -14 0 -5 -280 -9 -665 -9 -368 0 -665 -4 -665 -9 0
-44 135 -119 275 -153 84 -20 123 -21 565 -25 274 -3 479 -8 485 -14 5 -5
-223 -9 -598 -9 -669 0 -639 3 -575 -61 45 -44 139 -86 250 -111 84 -19 135
-21 510 -25 240 -3 418 -9 418 -14 0 -5 -203 -9 -489 -9 -483 0 -489 0 -484
-20 8 -29 78 -89 132 -113 108 -48 129 -50 493 -54 292 -4 348 -7 348 -19 0
-12 -45 -14 -286 -14 l-285 0 6 -22 c15 -51 61 -103 120 -133 58 -30 59 -30
252 -33 l193 -3 0 -45 0 -44 55 0 55 0 0 45 0 45 60 0 c33 0 60 -1 60 -3 0 -9
151 -1053 153 -1061 2 -5 36 222 76 505 40 283 75 524 78 537 5 20 11 23 42
20 35 -3 36 -4 36 -46 l0 -42 58 0 57 0 0 44 0 45 213 3 214 3 58 30 c59 30
105 82 120 133 l6 22 -305 0 c-265 0 -306 2 -306 15 0 13 43 15 329 15 348 0
418 7 532 49 62 23 143 88 152 121 5 20 2 20 -504 20 -299 0 -509 4 -509 9 0
5 184 11 438 14 391 4 446 6 527 24 110 25 209 69 253 112 64 64 96 61 -593
61 -377 0 -625 4 -625 9 0 6 203 11 503 13 l502 4 100 27 c55 15 128 41 162
57 57 28 103 69 103 91 0 5 -306 9 -685 9 -391 0 -685 4 -685 9 0 5 225 11
513 14 404 4 533 8 611 21 112 18 222 49 281 78 41 21 105 75 105 90 0 4 -835
8 -1855 8 -1020 0 -1855 -4 -1855 -9z" />
              </g>
            </svg>
          </div>
          <nav className="flex flex-col items-center gap-8 text-3xl font-semibold">
            <span className="text-paper/80">About</span>
            <span className="text-paper/80">Services</span>
            <span className="text-paper/80">Pricing</span>
            <button className="mt-8 bg-gradient-to-r animate-background-animation from-cobal via-blue-400 to-cobal rounded-3xl text-2xl px-8 py-3 [background-size:200%_200%]">
              Contact
            </button>
          </nav>
        </div>
      </div> 
    </div>

  );
}
