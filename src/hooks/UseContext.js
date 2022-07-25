import React, {useState} from 'react'
import ClassContext from '../components/ClassContext';
import FunctionContext from '../components/FunctionContext';

export const ThemeContext = React.createContext();

function UseContext() {
    const [dark, setDark] = useState(false);

    function toggleTheme(){
        setDark(prevDark => !prevDark)
    }
  return (
    <div>
        <ThemeContext.Provider value={dark}>
            <button onClick={toggleTheme}>Toggle</button>
            <ClassContext />
            <br/>
            <FunctionContext />
        </ThemeContext.Provider>
    </div>
  )
}

export default UseContext