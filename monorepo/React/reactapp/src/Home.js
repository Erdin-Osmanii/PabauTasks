import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function Home() {
  return (
    <div className='Home'>
        <Header title="Choose Service" part="1/2" />
        <div className='MainContainer'>
            <MainContent link="P1.js" image="pic1" text="Anti Wrinkle Treatment"/>
            <MainContent link="P2.js" image="pic2" text="Dermal Fillers"/>
            <MainContent link="P3.js" image="pic3" text="Secret RF"/>
            <MainContent link="P4.js" image="pic4" text="HArmonyCA"/>

        </div>
        <Footer/>
    </div>
  );
}

export default Home;
