import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Adder } from './Components/Adder';
import { UserDetail } from './Components/UserDetail';


function App() {

  const githubUsers = ["ArnoldIza","kevindavid17","jouxjr7","AngelXS","JorgePerezEC","aleste-dx",]

  const [lista, setLista] = useState(githubUsers)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/api/users'   element={<Adder lista={lista}/>}/>
        <Route path={'/api/user/:username/'}   element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
