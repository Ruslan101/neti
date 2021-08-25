import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import EmployeeСards from './employeecards';

class Main extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<EmployeeСards />
				<Footer />
			</>
		);
	}
}
export default Main;