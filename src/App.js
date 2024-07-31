import React,{useState} from "react";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
// import About from "./componets/About";
import Alert from "./componets/Alert";
import Theme from "./componets/Theme";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    showAlert(`Theme changed to ${newTheme}`, 'success');
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Theme theme={theme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} title="Text Utilities" />
        <Alert alert={alert} />
        <TextForm theme={theme} heading="Enter your text below" showAlert={showAlert} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm theme={theme} heading="Enter your text below" showAlert={showAlert} />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}