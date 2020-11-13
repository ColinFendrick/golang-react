import { Container } from 'semantic-ui-react';

import { ToDoList } from './components';

const App = () => {
	return (
		<div>
			<Container>
				<ToDoList />
			</Container>
		</div>
	);
};

export default App;
