var list = {}
var data={}
fetch("items.json", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  
  })
  .then((response) =>response.json())
  .then((result) =>data=result);
//data is taken from the url/relative path/database and is converted to a "promise". this promis is hen converted to json file using"reponse.json" and then it is used

function onPress() {
    console.log();
}

function select(id) {
    var element = document.getElementById(id)
    var obj = data[id]

    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
    }
    else {
        element.classList.add('selected')

    }

    //adding items to the list
    var obj= data[id]
    
    if(list[id]){
        list[id].count=list[id].count+1
    }
    else {
        var obj2=  {"item": obj, count: 1}
        list[id]=obj2

    }
    console.log(list)
    //deleting an item

    function deleteItem(id){
        if(list[id]){
            if(list[id].count == 1){
                delete list[id]
            }
            else {
                list[id].count= list[id].count -1 
            }
        }
    }
    // calculating the total

    
}
function recpt(){
    return list
}
function calcTotal(){
    var arr= Object.keys(list) 
    var total=0

    arr.map(key=>{
        var obj=list[key]
        total+= (obj.count * obj.item.price)
    })

    console.log(total)
    document.getElementById('amt').innerHTML=total
}






