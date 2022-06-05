window.onload=current_date_function;
var parsedrecord ;
var	xhr = new XMLHttpRequest();
function current_date_function()
{
	
	var current_date = new Date();
	var formatte = current_date.getDate() + "/" + (current_date.getMonth() + 1) + "/" + current_date.getFullYear()
    +"&ensp;&ensp;&ensp;&ensp;&ensp;"+ current_date.getHours() + ":" + current_date.getMinutes() + ":" + current_date.getSeconds();

	document.getElementById("current_Date").innerHTML = formatte;
}



function adddata() {
    document.getElementById("clientname").addEventListener("keyup", function(){SearchLname(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","rentalclients.json", true);
  xhr.send();
}

var table;
var obj ;
var list =[];
function SearchLname(searchByLname){
    document.getElementById("searchvalue").innerHTML = "Search by last name<br>";
    var searchName;
    //var exist= "false";
    var i=0;
    var z=0;
     table="<label>Select the last Name </label>";
    // var j=0;
    for(i=0; i<parsedrecord.length; i++)
    {
         obj = parsedrecord[i];
        searchName=obj.last_name;
       
        if (searchName && searchName.startsWith(searchByLname.toUpperCase()))
        {
            list.push(obj);
            // table+="<select  id =Users"+z+" multiple name=Users"+z+" onclick=setFormToEdit("+z+") value="+z+" >";    
            // table+="<option value="+list[z].first_name+" " +list[z].first_name+">" + list[z].first_name+" " +list[z].first_name+"</option>";
            // z+=1;
        }

        
    }


    // table+="<select  id =Users"+z+" multiple name=Users"+z+" onclick=setFormToEdit("+z+") value="+z+" >"; 
for(z=0; z<list.length; z++){
        
            table+="<option  value="+z+">" + list[z].first_name+" " +list[z].last_name+"</option>";
                   
}

    

   /* if (exist=="true"){*/
    document.getElementById("searchvalue").innerHTML=table;
    
}
/*}else{
document.querySelector('input[name = "gender"]:checked'}*/

// if (document.getElementById('input[id = "Select"]:checked')){
    // setFormToEdit();


function setFormToEdit(ind) {
	
	document.getElementById("rentVehicle").disabled=false;
	document.getElementById("options").disabled=false;
	document.getElementById("quantity").disabled=false;
	document.getElementById("fvbutton").disabled=false;
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("firstname").disabled=false;
	document.getElementById("lastname").disabled=false;
	document.getElementById("address").disabled=false;
	document.getElementById("email").disabled=false;
    document.getElementById("prov").disabled=false;
	document.getElementById("phone").disabled=false;
    getClient(ind);
	}

     function getClient(ind){
       var y = list[ind];
         
       
        document.getElementById("lastname").value =  y.last_name;
        document.getElementById("firstname").value =  y.first_name;
        document.getElementById("phone").value =  y.phone;
        document.getElementById("address").value =  y.address;

        document.getElementById("email").value =  y.email;

        document.getElementById("prov").value =  y.state_prov;


     }
    //  var select = document.getElementById('language');
    //  var value = select.options[select.selectedIndex].value;
     function calculation(){
         var total =0;
         var FinalOutPut;
        //  var cal;
        var type =  document.getElementById('rentVehicle').value;
        var days = document.getElementById("quantity").value;
        var option2=parseInt(document.getElementById('option2').value) ;
        var option1= parseInt(document.getElementById('option1').value);
        var option3 = parseInt(document.getElementById('option3').value);
        FinalOutPut ="<table id=final >";
        FinalOutPut += "<td>"+document.getElementById("firstname").value + " "+document.getElementById("lastname").value+"</td></tr>"; 
        FinalOutPut += "<td>"+document.getElementById("phone").value+"</td></tr>";
        FinalOutPut +="<td>"+document.getElementById("address").value+"</td></tr>";
        FinalOutPut += "<td>"+document.getElementById("email").value+"</td></tr>";
        FinalOutPut += "<td>"+document.getElementById("prov").value+"</td></tr>";
        FinalOutPut +="<td>"+document.getElementById("quantity").value+" day</td></tr>";
        FinalOutPut += "<td>"+document.getElementById("rentVehicle").options[document.getElementById("rentVehicle").selectedIndex].text+"</td></tr>";
        
         total += days*type;

        if (document.getElementById('option2').checked){
            total+= option2;
            
        FinalOutPut +="<tr><td> Extra GPS $10</td></tr>";
        }
        if(document.getElementById('option1').checked) {
            
           var valueOption = days*option1;
         total += valueOption;
         FinalOutPut +="<tr><td> Extra  Roof Rack or Bicycle Rack $10 per day</td></tr>";
        }if(document.getElementById('option3').checked){
            var valueOption = days*option3;
            total += valueOption;
            FinalOutPut +="<tr><td> Free child seat For free </td></tr>"; 
        }
        
         FinalOutPut +="<tr><td> Your total cost is $"+total+"</td></tr></table>";

        
        // var options =  document.getElementById('options').value;
        // document.getElementById('fruitAlmonds').checked
        // if (options==10){
        //     var valueChoice = days*type;
        //     total= valueChoice +options;   
        // }else{
        //     var valueChoice = days*type;
        //     var valueOption = days*options;
        //     total = valueChoice +valueOption;
        // }
     
        
        document.getElementById("result").innerHTML=FinalOutPut;

     }
     function pictures(){
         var choosenPic = document.getElementById("rentVehicle").options[document.getElementById("rentVehicle").selectedIndex].text;
         if (choosenPic && choosenPic.startsWith("compact") ){
          document.getElementById("carPic").style.backgroundImage= "url(pic/compact.jpg)" ;  
         }
         if (choosenPic && choosenPic.startsWith("Mid-size") ){
            document.getElementById("carPic").style.backgroundImage= "url(pic/mid.jpg)" ;  
           }
           if (choosenPic && choosenPic.startsWith("Luxury") ){
            document.getElementById("carPic").style.backgroundImage= "url(pic/loxury.jpg)" ;  
           }
           if (choosenPic && choosenPic.startsWith("Van") ){
            document.getElementById("carPic").style.backgroundImage= "url(pic/Truck.jpg)" ;  
           }
     }
     function setSearchVisible(){
        document.getElementById("searchvalue").disabled=false;
     }
     