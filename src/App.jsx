
// import './App.css';

import Productcard from './components/productcard.jsx';

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '15px',
    padding: '20px',
    
  };

  return (
    <div className="bg-black"style={gridStyle}>
      {cards.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
}

export default App;
