var sdk = new window.sfdc.BlockSDK();

var setContentToBuilder = function() {
    var assetName = document.getElementById('assetName').value;
    console.log(assetName);
    sdk.setContent('<h1>'+ assetName + '</h1>')
}

