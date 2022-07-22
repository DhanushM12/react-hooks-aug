import React, {useState, useRef} from 'react'

function UseRef() {
    const [name, setName] = useState('');
    const inputRef = useRef();
    function focus(){
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)} />
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef;