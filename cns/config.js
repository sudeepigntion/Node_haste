/*
	@author Sudeep Dasgupta

	server and whole framework configuration file
*/

module.exports = {
	mySQL:{
		host:'localhost',
		username:'root',
		password:'',
		db:'tripkle'
	},
	mongoDB:{
		server1:"mongodb://localhost:27017/pounze"
	},
	redis:{
		host:'127.0.0.1',
		port:6379
	},
	server:{
		maintainance:false,
		setTimeout:12000,
		showHeapUsuage:false,
		maxListeners:0,
		socketTimeout:120000,
		keepAliveTimeout:5000,
		cpuCores:'',
		sessionTimeout:5
	},
	cache:{
		staticFiles:true,
		Document:true
	},
	log:{
		path:'',
	},
	errorPages:{
		PageNotFound:"404.html",
		InternalServerError:"500.html",
		NotAuthorized:"401.html",
		DirectoryAccess:"403.html",
		MaintainancePage:"maintainance.html"
	},
	compression:{
		gzip:false
	}	
};