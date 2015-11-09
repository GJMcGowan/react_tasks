var tasks = [
	{text: "Water Plants", complete:"false",  due_date: "01/01/2016"}
]

// ES5 version
var taskTable = React.createClass({
	render: function() {
		return (
			<div className="taskTable">
				Insert task table
			</div>
		);
	}
});

ReactDOM.render(
	<taskTable />,
	document.getElementById('content')
);