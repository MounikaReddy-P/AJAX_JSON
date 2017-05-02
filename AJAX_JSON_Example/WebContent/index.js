function load()  
{  
   System.out.print("Hello");	
   alert("in load");
   var url = "http://date.jsontest.com/";//use any url that have json data  
   //var request;    
  // if(window.XMLHttpRequest){    
   var request=new XMLHttpRequest();//for Chrome, mozilla etc  
   //}    
    if(window.ActiveXObject){    
    request=new ActiveXObject("Microsoft.XMLHTTP");//for IE only  
   }    
   request.onreadystatechange  = function(){  
	   alert("in ready function");
      if (request.readyState == 4  )  
      {  
    	  System.out.println(request.readyState);
        var jsonObj = JSON.parse(request.responseText);//JSON.parse() returns JSON object 
        System.out.println(jsonObj);
        document.getElementById("time").innerHTML =  jsonObj.time;  
        document.getElementById("date").innerHTML = jsonObj.date;  
      }  
   }  
   request.open("GET", url, true);  
   request.send();  
}  
