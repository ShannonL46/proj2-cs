import React, {useEffect} from 'react';
import './App.css';
import {Writ} from './Writ';
import {useSelector, useDispatch} from 'react-redux';
import {loadDate, startNewW} from './actions';


/*
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getMonth();
*/

function App() {
  /*
  const writs = useSelector(state => state.writs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDate(year, month, day));
  }, [dispatch]);

  const newW = () => {
    dispatch(startNewW(year, month, day));
  } 
  */

  const writs = [
    {id: 4, year: 2020, month: 4, day: 19, promp: "The first time you rode a rollar coaster.", text: "Pretty epic, I love rollar coaster."},
    {id: 3, year: 2019, month: 5, day: 30, promp: "( ͡° ͜ʖ ͡°)", text: "That face makes me uncomfortable..."},
    {id: 2, year: 2019, month: 3, day: 29, promp: "A time that something super easy was for some reason super hard.", text: "My mom bought a bottle of liquid soap, but for some reason despite 4 of us trying we couldn't get it open. The next day however? Opened just like normal. Never knew me and my family all shared one braincell."},
    {id: 1, year: 1018, month: 4, day: 22, promp: "Favortite soda?", text: "Ginger ale by far. Never before have I tasted a better soda, it never gets old. It has that sweetness, but also that tartness. Not to mention a decent amount of carbonation. A cold, refreshing ginger ale is the way to go."}
  ];
    
  return (
   <div className="writingpromt-root">
     <button id = "new">New Prompt</button>
     {writs.map(writ => <Writ key={writ.id} writ={writ} />)}
   </div>
  );
}

export default App;
