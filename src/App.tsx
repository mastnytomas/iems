import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import store from "./redux/store";

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Router />
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
