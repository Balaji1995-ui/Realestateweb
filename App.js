import React,{useState} from 'react';
import './App.css';
import BasicExample from './Home';
import Option from './Navigation';
function App(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <div className="App">
    



<BasicExample language={language} />




{/* 
<Option language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}/> */}
    </div>
  );
}
// function storeLanguageInLocalStorage(language) {
//   localStorage.setItem("language", language);
// }
export default App;
