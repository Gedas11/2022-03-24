
import Div from '../div/Div'
import Form from '../form/Form'

const App = ()=> {
  const divs = ["Pirmas", "Antras", "Trecias", "Ketvirtas", "Penktas", "Sestas", "Septintas", "Astuntas", "Devintas", "Desimtas", "Vienuoliktas", "Dvyliktas", "Tryliktas", "Keturioliktas", "Penkioliktas", "Sesioliktas"]



  return (
    <div className="container">
       <Form/>
      <div className="row">
        {divs.map((number,i)=><Div key={i} number={number}/>)}
      </div>
    </div>
  );
}

export default App;
