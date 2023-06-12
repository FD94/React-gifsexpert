import { useState } from "react";   

export const AddCategory = ({onNewCategory}) => {
  
  const [inputvalue, setInputvalue] = useState("");
  
  const onInputChange = ({target}) =>{
    setInputvalue(target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputvalue.trim().length <= 1) return;

    //setCategories(categories =>[inputvalue,...categories])
    onNewCategory(inputvalue.trim());
    setInputvalue('');
  }
    return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={inputvalue}
        onChange={onInputChange}
        />
    </form>
  )
}
