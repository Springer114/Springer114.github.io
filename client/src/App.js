import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <About />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;