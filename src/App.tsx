import React from 'react';
import { Routes } from 'Routes';
import { GlobalStyle } from 'Styles';
import { Provider } from 'react-redux';
import { store } from 'store';

const App: React.FC = () => {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<Routes />
			</Provider>
		</>
	);
};

export default App;
