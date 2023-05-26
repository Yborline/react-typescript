
import { Suspense, useEffect, useLayoutEffect } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Counter from './Components/Counter/Counter';
import { Routes ,Route, Link} from 'react-router-dom';
import Form from './Components/Form/Form';
import FormAttempt from './Components/Form/FormAttempt';
import TodosView from './Components/Todos/TodosView';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {


  useEffect(() => {
    console.log('effect')
  }, [])
  
  useLayoutEffect(() => {
  console.log('layout')
  })
  
  console.log('render dom')


  return (
    <>

      <h1>Welcome</h1>
      <ul>
            <li>
        <Link to="/counter">Счётчик</Link>
      </li>
      <li>
        <Link to="/colorPicker">ColorPicker</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/formAttempt">formAttempt</Link>
      </li>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
    </ul>
      <Suspense>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/colorPicker" element={<ColorPicker options={colorPickerOptions} />} />
          <Route path="/form" element={<Form onSubmit={(cred) => console.log(cred)} />} />
          <Route path='/formAttempt' element={<FormAttempt />} />
          <Route path="/todos" element={<TodosView/>}/>
        </Routes>
    </Suspense>
    
    </>
  );
}

export default App;
