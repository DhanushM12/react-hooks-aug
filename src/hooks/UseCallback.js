import React, {useState, useCallback} from 'react'
import List from '../components/List';

function UseCallback() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc': '#333',
        padding: '2rem',
        margin: '2rem'
    }
    const getItems = useCallback(() => () => {
        return [number, number+1, number+2]
    },[number])
  return (
    <div style={themeStyles}>
        <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <List getItems={getItems} />
    </div>
  )
}

export default UseCallback