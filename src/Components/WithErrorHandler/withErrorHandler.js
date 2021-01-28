// import React, { useEffect, useState } from "react";
// import Modal from "../UI/Modal/Modal";

// function WithErrorHandler(WrappedComponent, axios, props) {
//   const [axiosstate, setaxiosstate] = useState(null);

//   useEffect(() => {
//     axios.interceptors.request.use((req) => {
//       setaxiosstate(null);
//     });
//     axios.interceptors.response.use(
//       (res) => res,
//       (error) => {
//         setaxiosstate(error);
//       }
//     );
//   }, []);

//   const errorconfiremd = () => {
//     axiosstate(null);
//   };
//   return (
//     <>
//       <Modal show={axiosstate} clicked={errorconfiremd}>
//         {axiosstate ? axiosstate.message : null}
//       </Modal>
//       <WrappedComponent {...props} />
//     </>
//   );
// }

// export default WithErrorHandler;
