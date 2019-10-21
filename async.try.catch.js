var fs = require('fs');

fs.readFile('textfile.txt','utf8',function(error,data){
	if(error){
		console.log(error);
	}else{
		console.log(data);
	}
});

fs.writeFile('textfile.txt','Hello World ...!','utf8',function(error){
	if(error){
		console.log(error);
	}else{
		console.log('FILE WRITE COMPLETE');
	}
})
