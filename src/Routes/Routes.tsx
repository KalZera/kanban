import React, { FunctionComponent } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PageHome } from 'Pages';

export const PathsDefault = {
	'page-home': '/',
};

export const Routes: FunctionComponent = () => {
	return (
		<Switch>
			<Route exact path={PathsDefault['page-home']} component={PageHome} />
			<Redirect exact from="/" to={PathsDefault['page-home']} />
		</Switch>
	);
};
