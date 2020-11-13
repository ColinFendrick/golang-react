import { Card, Icon } from 'semantic-ui-react';

const Tasks = ({
	items,
	updateTask,
	undoTask,
	deleteTask
}) => items.map(item => (
	<Card key={item._id} color={item.status ? 'green' : 'yellow'} fluid>
		<Card.Content>
			<Card.Header textAlign='left'>
				<div style={{ wordWrap: 'break-word' }}>{item.task}</div>
			</Card.Header>

			<Card.Meta textAlign='right'>
				<Icon
					name='check circle'
					color='green'
					onClick={() => updateTask(item._id)}
				/>
				<span style={{ paddingRight: 10 }}>Done</span>
				<Icon
					name='undo'
					color='yellow'
					onClick={() => undoTask(item._id)}
				/>
				<span style={{ paddingRight: 10 }}>Undo</span>
				<Icon
					name='delete'
					color='red'
					onClick={() => deleteTask(item._id)}
				/>
				<span style={{ paddingRight: 10 }}>Delete</span>
			</Card.Meta>
		</Card.Content>
	</Card>
));

export default Tasks;
