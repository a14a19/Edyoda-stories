import './App.css';
import Header from './components/header';
import Trending from './components/trending';
import Filter from './components/filter';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className='edyoda-stories'>
      <Header />
      <Trending />
      <Filter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
