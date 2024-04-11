import LastPage from "./components/LastPage";
import MultiStepForm from "./components/MultiStepForm"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/learning-path" element={<LastPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
