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
