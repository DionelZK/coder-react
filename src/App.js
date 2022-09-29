import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<Navbar user='Profesor' />

		
		</>
		
	);
}

export default App;
