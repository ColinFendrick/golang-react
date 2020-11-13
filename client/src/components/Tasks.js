import { Card, Icon } from 'semantic-ui-react';

const Tasks = ({
	items,
	updateTask,
	undoTask,
	deleteTask
}) => items.map(item => (
	<Card
		key={item._id}
		color={item.status ? 'green' : 'yellow'}
		fluid
		style={{ backgroundColor: item.status ? 'green' : 'gold' }}
	>
		<Card.Content>
			<Card.Header textAlign='left'>
				<div style={{ wordWrap: 'break-word', color: '#fff' }}>{item.task}</div>
			</Card.Header>

			<Card.Meta textAlign='right'>
				<div className='flex flex-end'>
					<div onClick={() => updateTask(item._id)} className='pointer'>
						<Icon
							name='check circle'
							color='green'
						/>

						<span style={{ paddingRight: 10 }}>Done</span>
					</div>

					<div onClick={() => undoTask(item._id)} className='pointer'>
						<Icon
							name='undo'
							color='yellow'
						/>
						<span style={{ paddingRight: 10 }}>Undo</span>
					</div>

					<div onClick={() => deleteTask(item._id)} className='pointer'>
						<Icon
							name='delete'
							color='red'
						/>
						<span style={{ paddingRight: 10 }}>Delete</span>
					</div>
				</div>
			</Card.Meta>
		</Card.Content>
	</Card>
));

export default Tasks;
