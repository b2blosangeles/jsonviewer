{
    "tpls":[],
    "filelist":[
		"/js/json2.min.js",
		"/js/jquery-2.1.3.min.js",
		"/js/qalet_plugin.js"
      ],
	"mapping": {
		"giant_react":[
				"/mservice/jsx/giant_plugin/ad.jsx",
				"/mservice/jsx/giant_plugin/top_section.jsx",
				"/mservice/jsx/giant_plugin/body_section.jsx",
				"/mservice/jsx/giant_plugin/main.jsx"
			],
		"giant_angular":[],	
		"giant_smarty":[],		
		"video":["/mservice/jsx/ad/ad.jsx"],
		"docviewer":[

				"/mservice/jsx/doc/home.jsx", 
				"/jsx/doc/form.jsx",
				"/mservice/jsx/doc/doc.jsx"
			]	
	}, 
	"dependence": {
		"giant_react":[
			"/js/showdown/showdown.min.js",
			"/js/x2js/xml2json.min.js",		
			"/js/jquery.json-viewer.js",
			
			"/js/react/react.min.js",
			"/js/react/react-dom.min.js",
			"/js/react/ReactRouter/3.0.2/ReactRouter.min.js"			
			],
		"giant_angular":[
			"/js/angularjs/angular_v1.4.5.min.js"
		],	
		"video":[
			"/js/react/react.min.js",
			"/js/react/react-dom.min.js",
			"/js/react/ReactRouter/3.0.2/ReactRouter.min.js"		
		],
		"docviewer":[
			"/js/react/react.min.js",
			"/js/react/react-dom.min.js",
			"/js/react/ReactRouter/3.0.2/ReactRouter.min.js"		
		]	
	},
	"ms_tpls": {
		"giant_angular":[
			"tpl/home.html"
		],
		"giant_smarty":[
		]
	}	
}