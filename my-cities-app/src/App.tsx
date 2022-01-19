import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import City from './components/City';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/city/:cityName" element={<City />} />
			</Routes>
		</Router>
	);
}

export default App;
