// This is the form you need for your react applination.





const verify = info.object().shape({
    mineralName: info.string().required(),
    mineralCount: info.number().required(),
    confirmCount: info.string().oneOf([info.ref("count"), null]),
});

function Form() {
    const { name, count, errors } = useform();
}

const form = () {
    return (
     <div className="Form">
       <div className="title">Pill Counter form</div>
       <div className="inputs">

       <form>

       <input type="text" name"mineralName" placeholder="Mineral Name..." />

       <input type="text" name"mineralCount" placeholder="Mineral Count..." />

       <input
         type="text"
         name="confirmCount"
         placeholder="Confirm Count..."
       />

       <input type="submit" id="submit" />
       </form>
     </div>
   </div>
  );
}

export default Form;


// This is a functional components counter.
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(1)}>
      Click me!
    </button>
  );
}

export default App;