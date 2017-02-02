var pp = {html:'<span style="color:red">html</span>'};
var Home = React.createClass({
  getInitialState: function() {
        return {
           
        };
    },
handleChange:function(){
	console.log(new Date());
},	
  render: function() {
    return (
        <div>
			<table>
				<tr>
					<td width="180"><img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/></td>
					<td width="*"><h3> Document viewer</h3></td>
				</tr>	
			</table>
						
			
			 <form>
				 <div class="container-fluid form_section">
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group">
							<button type="button" class="btn btn-warning pull-right" onClick="sendData('')" style="margin-top:-12px">
								Show Original
							</button>	
							
							<label for="comment">
								  Data Source: (url or text)
									
							  </label>
							  
							  <textarea class="form-control" rows="5" name="code"></textarea>
							</div>	

						</div>
						<div class="col-sm-12">
							<label for="sel1">Show data as:</label>
							<button type="button" class="btn btn-info" onClick="sendData('json')">JSON</button>
							<button type="button" class="btn btn-info" onClick="sendData('xml')">XML</button>
							<button type="button" class="btn btn-info" onClick="sendData('md')">Markdown</button>
						 </div>
					</div>
				</div>
			</form>
			
			<div class="doc_renderer" id="doc-renderer"></div>
			<div class="sample_section">  
				Sample:<br/>
				<ul>
				  <li><a href="JavaScript:void(0)" onClick="loadSample('http://docviewer.qalet.com/README.md', 'md')">http://docviewer.qalet.com/README.md</a></li>
				  <li><a href="JavaScript:void(0)" onClick="loadSample('http://docviewer.qalet.com//sample/data.json', 'json')">http://docviewer.qalet.com/sample/data.json</a></li>
				  <li><a href="JavaScript:void(0)" onClick="loadSample('http://docviewer.qalet.com/sample/data.xml', 'xml')">http://docviewer.qalet.com/sample/data.xml</a></li>
				</ul>	
			</div>			  
        </div>
      );
    }
});
