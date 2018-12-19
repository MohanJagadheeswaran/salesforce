var sdk = new window.sfdc.BlockSDK();

var setContentToBuilder = function() {
    var a = document.getElementById('assetName').value;
    console.log(a);
    sdk.setContent('<h1>'+ assetName+ '</h1>')
}

