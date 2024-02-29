let newpromise
function getdata(){
    newpromise = new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve('cone ice cup ice')
        }, 2000);
    })
}

function displaydata(data){
    console.log(data)
}
getdata()
newpromise.then(function(data){
    displaydata(data)
})
