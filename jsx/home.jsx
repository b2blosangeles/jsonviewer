var Home = React.createClass({
  getInitialState: function() {
        return {};
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

						</div>
						<div class="col-sm-12">
							<label for="sel1">Show data as:</label>
							<button type="button" class="btn btn-info" >JSON</button>
							<button type="button" class="btn btn-info">XML</button>
							<button type="button" class="btn btn-info" >Markdown</button>
						 </div>
					</div>
				</div>
			</form>						
			
			<div class="doc_renderer" id="doc-renderer"></div>
			<div class="sample_section">  
				Sample:<br/>
				<ul>
				  <li><a href="JavaScript:void(0)" >http://docviewer.qalet.com/README.md</a></li>
				  <li><a href="JavaScript:void(0)">http://docviewer.qalet.com/sample/data.json</a></li>
				  <li><a href="JavaScript:void(0)">http://docviewer.qalet.com/sample/data.xml</a></li>
				</ul>	
			</div>			  
        </div>
      );
    }
});
