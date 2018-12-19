var sdk = new window.sfdc.BlockSDK();

var setContentToBuilder = function() {
    var a = document.getElementById('assetName').value;
    sdk.setContent('<h1>'+ assetName+ '</h1>')
}

