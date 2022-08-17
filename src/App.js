
import Header from './Header';
import Main from './Main';
import Footer from'./Footer'
import Horns from './data.json';

function App() {
  return (
    // <title>HornedBeast</title>
 <main>
    <Header />
    <Main label = {Horns}/>
    <Footer />

 </main>

 
  );
}

export default App;
