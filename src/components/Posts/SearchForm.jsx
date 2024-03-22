import React, {  useEffect, useRef, useState } from "react";


export const SearchForm = ({onChangeQuery}) => {
  const [query, setQuery] = useState('')
  const myRef = useRef(null) // чітке посилання на елемент. В  даному випадку для встановлення в інпуті автофокусу при відправці форми
  useEffect(()=>{
    myRef.current.focus()
  })

  const handleChange = (e) => {
    setQuery( e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  onChangeQuery(query);
    setQuery( '');
    myRef.current.focus()
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      ref={myRef}
      
        value={query}
        type="text"
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

// export default class SearchForm extends Component {
//   state = {
//     query: "",
//   };
  // handleChange = (e) => {
  //   this.setState({ query: e.target.value });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onChangeQuery(this.state.query);
  //   this.setState({ query: "" });
  // };
//   render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <input
    //       value={this.state.query}
    //       type="text"
    //       onChange={this.handleChange}
    //     />
    //     <button>Search</button>
    //   </form>
    // );
//   }
// }
