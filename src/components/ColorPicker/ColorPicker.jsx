import {
  StyledBackgroundTheme,
  StyledColorPalette,
  StyledColor,
  StyledColorsList,
} from "./ColorPicker.styled";
import React, { useEffect, useState } from "react";
import colorsData from "../../assets/colors.json";




export const ColorPicker = () =>{
  const [colors] = useState(colorsData)
  const [currentColor, setCurrentColor] = useState('white')
  
  useEffect(()=>{
if (currentColor === 'yellow'){
  console.log('Yellow');
}
  }, [currentColor]) // виконується за умови кожен раз, коли змінюється currentColor 

  useEffect(()=>{ // виконується один раз, т.я немає залежності []
console.log('Hello friend!');
  }, [])



  const handleChangeColor = (color) => {
    setCurrentColor(color)
  };
  return (
    <StyledBackgroundTheme $bg={currentColor}>
      <StyledColorPalette>
        <h1>Background color: {currentColor}</h1>
        <StyledColorsList>
          {colors.map((item) => (
            <StyledColor
              key={item.id}
              onClick={() => handleChangeColor(item.color)}
            >
              {item.color}
            </StyledColor>
          ))}
        </StyledColorsList>
      </StyledColorPalette>
    </StyledBackgroundTheme>
  );
}
 

// export class ColorPicker extends React.PureComponent {
//   state = {
//     colors: colorsData,
//     currentColor: "white",
//   };
//   componentDidUpdate(prevProps, prevState) {
//     console.log(this.state.currentColor);
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextState.currentColor !== this.state.currentColor; // функція запобігає ререндеру компонента при натисканні на ту саму кнопку кілька разів
//   // }

  // handleChangeColor = (color) => {
  //   this.setState({ currentColor: color });
  // };
//   render() {
//     const { colors, currentColor } = this.state;
//     return (
//       <StyledBackgroundTheme $bg={currentColor}>
//         <StyledColorPalette>
//           <h1>Background color: {currentColor}</h1>
//           <StyledColorsList>
//             {colors.map((item) => (
//               <StyledColor
//                 key={item.id}
//                 onClick={() => this.handleChangeColor(item.color)}
//               >
//                 {item.color}
//               </StyledColor>
//             ))}
//           </StyledColorsList>
//         </StyledColorPalette>
//       </StyledBackgroundTheme>
//     );
//   }
// }
