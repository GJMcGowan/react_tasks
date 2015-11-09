var tasks = [
	{text: "Water Plants", complete:"false",  due_date: "01/01/2016"}
];

var TaskTable = React.createClass({
	render: function() {
		return (
			<table className="taskTable">
				<thead>
					<tr>
						<th>
							Task
						</th>
						<th>
							Complete?
						</th>
						<th>
							Due
						</th>
					</tr>
				</thead>
				<tbody>
					<TaskList />
				</tbody>
			</table>
		);
	}
});

var TaskList = React.createClass({
	render: function() {
		return (
			<Task text="Feed Cat"></Task>
		);
	}
});

var Task = React.createClass({
	render: function() {
		return (
			<tr className="task">
				<td>
					{this.props.text}
				</td>
				<td>
					{this.props.complete}
				</td>
				<td>
					Blank
				</td>
			</tr>
		);
	}
});

ReactDOM.render(
	<TaskTable />,
	document.getElementById('content')
);