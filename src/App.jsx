import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Menu from "./components/Menu/Menu";


// function UserData(){
//   const user = {first:"George", last:"Salayka", age: "40"};
//   return(
//     <div>
//       <h2>Name: {user.last}, {user.first}</h2>
//       <h3>Age: {user.age}</h3>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Menu />
      </main>
    </div>
  );
}


// {
//   CORE_CONCEPTS.map(concept)=><CoreConcept {...concept}/>
// }
export default App;
