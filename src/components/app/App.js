import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import AppHeader from '../appHeader/AppHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="/comics" element={<ComicsPage />}></Route>
						<Route
							path="/comics/:comicId"
							element={<SingleComicPage />}
						></Route>
						<Route
							exact
							path="/characters/:id"
							element={<SingleCharacterLayout />}
						></Route>
						<Route path="*" element={<Page404 />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
