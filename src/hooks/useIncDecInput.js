// import { useState } from "react";

// function useIncDecInput() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isWdDesktop, setIsWdDesktop] = useState(false);

//   const handleResize = () => {
//     window.innerWidth < 667 ?
//     setIsMobile(true) 
//     : (setIsMobile(false), setIsTablet(false));
  
//     window.innerWidth < 1024 ?
//       (setIsDesktop(false), setIsTablet(true))
//       : setIsDesktop(true);

//     window.innerWidth < 1400 ?
//       setIsWdDesktop(false)
//       : setIsWdDesktop(true);
//   };

//   useEffect(() => {
//     handleResize();
//   }, []);

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);

//     return _ => {
//       window.removeEventListener('resize', handleResize);
//     }
//   });

//   return [isMobile, isDesktop, isWdDesktop, isTablet];
// };

// export default useResize;