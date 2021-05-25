import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import ChangePasswordForm from './ChangePasswordForm';
import { render,useEffect} from 'react-dom';
import { useState } from 'react';

function List(props){
  return(
    <div>{props.animals.map(animal=>
      <li key={animal}>{animal}</li>)}</div>
  ) 
}





function App() {
  const animals = ["Pies", "Kot", "Koń"]
  const [haslo,SetHaslo] =useState('haslo')
  const Zmien=(e)=>{
    SetHaslo(e.target.value)
  }
  //zad3
  return (
    <div className="App">
      {
        // Poniżej zaprezentowano przykład użycia props
      }
        <Welcome name="Tomasz"/>
        {// Umieść komponent, który będzie przyjmował jako element props tablicę animals i ją wyświetlał wewnątrz tagów li.
      
        }
        <List animals={animals}/>


        {// Poniżej są przygotowane inputy pod profil użytkownika. Stwórz komponent, który będzie otrzymywał te dane jako propsy, a następnie wyświetlał je.
        }
        <form>
        <div>
          <label>Imię</label>
          <input type="text" />
        </div>
        <div>
          <label>Nazwisko</label>
          <input type="text" />
        </div>
        <div>
          <label>Wiek</label>
          <input type="text" />
        </div>
        </form>

        {// Zmień powyższe rozwiązanie tak, aby użyć dekonstrukcji obiektów zamiast odwoływać się do zmiennych za pomocą props.[nazwa]
        }

        {// Powszechną praktyką w React jest tworzenie osobnych komponentów dla wnętrza formularza. Uzupełnij komponenty App.js oraz ChangePasswordForm.js tak, 
         // aby wpisane hasło wyświetlało się po zatwierdzeniu w tagu <p> istniejącym w App.js 
        }

        <ChangePasswordForm DoChange={Zmien} />
        <p>{haslo}</p>

    </div>
  );
}

export default App;
