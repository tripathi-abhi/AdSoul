import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdInfoPage from "./Screens/AdInfoPage";
import HomePage from "./Screens/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/ads/:id" component={AdInfoPage} />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
};

export default App;
