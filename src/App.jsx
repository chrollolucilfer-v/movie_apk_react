import {react} from 'react';

function App() {
  return (
    <>
    {/* this is a fragment when you don't want a parent and just an empty atg */}
        {/* A component is really just any function in just
        that retturns some kind of jsx code */}
        <p> Hello World </p>
        <Text name="Bhaskar"/>
        <Text name="Deepak"/>

    </>
    
  );
}

function Text({name}){
  return(
    <div>
    <h1>Hello  {name}</h1>
    </div>
  );
}

export default App;


