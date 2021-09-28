import React from "react"
import Multiselect from "./Multiselect";
const App = () => {
  const [dados1, setDados1] = React.useState([
    "ITEM 1",
    "ITEM 2",
    "ITEM 3",
  ]);
  const [dados2, setDados2] = React.useState([]);
  return(
    <div>
      <Multiselect 
        dados1={dados1} 
        dados2={dados2} 
        setDados1={setDados1}
        setDados2={setDados2}
        />
    </div>
  )
}

export default App;