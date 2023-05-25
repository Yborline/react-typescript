
import { Suspense } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Counter from './Components/Counter/Counter';
import { Routes ,Route} from 'react-router-dom';
import Form from './Components/Form/Form';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {


  return (
    <>

      <h1>Welcome</h1>
      <Suspense>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/colorPicker" element={<ColorPicker options={colorPickerOptions} />} />
          <Route path="/form" element={<Form onSubmit={(cred) => console.log(cred)} />}/>
        </Routes>
    </Suspense>
    
    </>
  );
}

export default App;
