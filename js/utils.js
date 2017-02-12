export function httpGet(url) {
	var promise = new Promise(function(resolve, reject) {
		//create an instance of the xmlhttprequest object
		var xhr = new XMLHttpRequest();
		//open the request with a get request
		xhr.open('GET', url);
		//send the request
		xhr.send(null);
		xhr.onload = function() {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject(xhr.statusText);
			}
		};
	});
	return promise;
}
