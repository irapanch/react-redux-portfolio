import React, {  useEffect, useRef } from "react";

import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";

const Modal =({children, close, title})=> {
  const intervalId = useRef(null)
  

  useEffect(() => {
    const handleKeyDown = (e) => {
  
      if (e.key === "Escape") {
        console.log('Escape');
        close();
    
      }
    };
document.addEventListener('keydown', handleKeyDown)

    document.body.style.overflow = "hidden";
  intervalId.current = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    return () => {  // return з useEffect - це аналог з willUnmount 
      document.removeEventListener('keydown', handleKeyDown)
      clearInterval(intervalId.current)
      document.body.style.overflow = "auto";
    }
  }, [close])

  const onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  
    return (
      <ModalWrapper onClick={onBackDropClick}>
        <ModalContent>
          <>
            <h1>Modal</h1>
            <hr />
          </>
          <CloseButton onClick={close}>×</CloseButton>
          {/* +++++++ 10 застосовуємо пропс для закриття модалки */}
          {children}
        </ModalContent>
      </ModalWrapper>
    );
  }

export default Modal
// class Modal extends Component {
//   timeoutId = null;
  // handleKeyDown = (e) => {
  //   console.log(e.key);
  //   if (e.key === "Escape") {
  //     this.props.close();
  //   }
  // };
//   componentDidMount() {
//     document.body.style.overflow = "hidden"; // засстосовуємо стиль для запобігання скролу
//     this.timeoutId = setTimeout(() => {
//       console.log(new Date().toLocaleTimeString());
//     }, 1000);
//     document.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     document.body.style.overflow = "auto"; // прибираємо hidden, щоб з'явилась можливість скролити
//     document.removeEventListener("keydown", this.handleKeyDown);
//     clearTimeout(this.timeoutId);
//   }
  // onBackDropClick = (e) => {
  //   if (e.currentTarget === e.target) {
  //     this.props.close();
  //   }
  // };
//   render() {
//     return (
//       <ModalWrapper onClick={this.onBackDropClick}>
//         <ModalContent>
//           <>
//             <h1>Modal</h1>
//             <hr />
//           </>
//           <CloseButton onClick={this.props.close}>×</CloseButton>
//           {/* +++++++ 10 застосовуємо пропс для закриття модалки */}
//           {this.props.children}
//         </ModalContent>
//       </ModalWrapper>
//     );
//   }
// }

// export default Modal;
