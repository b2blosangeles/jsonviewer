var Home = React.createClass({
	getInitialState: function() {
		return {};
	},
	handleChange:function(){
		console.log(new Date());
	},	
	sendData:function() {
	},
	loadSample:function(a,b) {
		return function() {
			alert(b);
		}
		
	},	
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<table border="1">
						<tr>
							<td width="180"><img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/></td>
							<td width="*"><h3> Document viewer</h3></td>
						</tr>	
					</table>
					
					 <form>
						 <div className="container-fluid form_section">
							<div className="row">
								<div className="col-sm-12">
									<div className="form-group">
										<button type="button" className="btn btn-warning pull-right" onClick={this.sendData} >
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
									<button type="button" className="btn btn-info" onClick={this.sendData}>JSON</button>
									<button type="button" className="btn btn-info" onClick={this.sendData}>XML</button>
									<button type="button" className="btn btn-info" onClick={this.sendData}>Markdown</button>
								 </div>
							</div>
						</div>
					</form>						
				
					<div className="doc_renderer" id="doc-renderer"></div>
					<div className="sample_section">  
						Sample:<br/>
						<ul>
						  <li><a href="JavaScript:void(0)" onClick={this.loadSample(1,7)}>http://docviewer.qalet.com/README.md</a></li>
						  <li><a href="JavaScript:void(0)" onClick={this.loadSample(2,9)}>http://docviewer.qalet.com/sample/data.json</a></li>
						  <li><a href="JavaScript:void(0)" onClick={this.loadSample(3,8)}>http://docviewer.qalet.com/sample/data.xml</a></li>
						</ul>	
					</div>
				</div>	
			</div>
		  );
	}
});
