var Form = React.createClass({
	render: function() {
		return (	
			 <form>
				 <div className="container-fluid form_section">
					<div className="row">
						<div className="col-sm-12">
							<div className="form-group">
								<button type="button" className="btn btn-warning pull-right form_button" onClick={this.props.parent.sendData('')}>
									Show Original
								</button>	

								<label for="comment">
								  Data Source: (url or text)

								</label>

								<textarea className="form-control" rows="5" name="code"></textarea>
							</div>	

						</div>
						<div className="col-sm-12">
							<label for="sel1">Show data as:</label>
							<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('json')}>JSON</button>
							<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('xml')}>XML</button>
							<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('md')}>Markdown</button>
						 </div>
					</div>
				</div>
			</form>	
		);	
	}
});
	var About = React.createClass({
		render: function() {
			return (	
				 <div>about</div>
			);	
		}
	});
	var Services = React.createClass({
		render: function() {
			return (	
				 <div>Service</div>
			);	
		}
	});
