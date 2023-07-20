import Button from '../Button/Button';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
  const cards = [
    { title: '1', text: 'Hello1' },
    { title: '2', text: 'Hello2' },
    { title: '3', text: 'Hello3' },
    { title: '4', text: 'Hello4' },
  ]
  return (
    <>
      <div className="App">
        <Button />
      </div>
      <Cards cards={cards} />
    </>
  );
}

export default App;
