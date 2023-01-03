
import './App.css'
import NavigationBar from './componets/NavigationBar';
import "./style/landingpage.css"
import Intro from "./componets/Intro";
import Trending from "./componets/Trending"
import Superhero from './componets/Superhero';

function App() {
  return (
  <div>
    {/* intro  */}
    <div className='myBG border'>
    <NavigationBar/>
    <Intro/>
    </div>
    {/* akhir intro  */}

    {/* awal trending */}
    <div className='trending'>
      <Trending/>
    </div>
  {/* akhir trending */}

{/* Awal superhero */}
<div className='superhero'>
  <Superhero/>
</div>
{/* akhir superhero */}


  </div>
    )
  }

export default App
