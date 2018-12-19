var sdk = new window.sfdc.BlockSDK();
 
var setContentToBuilder = function() {
   
    var assetName = document.getElementById('assetName').value;
    console.log(assetName);
    // sdk.setContent('<h1>'+ assetName + '</h1>')
    sdk.setContent('<img src="https://www.opentext.com/file_source/OpenText/en_US/PNG/opentext-zoom-crop-screen-otmm-16-3.png"/');
}



var getAuthentication = function() {
    var assetName = document.getElementById('assetName').value;
    var assetType = document.getElementById('assetType').value;
    var url = 'http://183.82.105.188:18080/otmmapi/v5/sessions';
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true ;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Authorization,X-Requested-With");
  
    xhr.send('username='+assetName+'&password='+assetType+'');
   
    xhr.onload = function() {
        console.log(this.responseText);

    }
}