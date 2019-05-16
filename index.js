const { google } = require('googleapis');

module.exports = options => {
    const apiVersion = options.apiversion || 'v5';
    const  getResult = google.pagespeedonline(apiVersion).pagespeedapi.runpagespeed(options)

    console.log(getResult);

    getResult.then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.log(error);
    })
    

}