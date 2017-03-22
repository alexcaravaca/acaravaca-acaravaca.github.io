(function(){
 	

	$( "#sendInfo" ).submit(function( event ) {
		 
		  // Stop form from submitting normally
		  event.preventDefault();

		  console.log("click");
 													
				  $.ajax({
				    url: 'https://demo-1.fico.site/data/api/entities/customer',
				    type: 'POST',
                    crossDomain: true,  
                    dataType: 'jsonp',
				    data: {
				        	"email":" devtest@prodigious ",
							"customer_id":1234568904,
							"patient_id":1234568904,
							"address_line_1":"Birri de Santa Barbara",
                            format: "json"
				    },
				    headers: {
				       
				    Authorization: 'bearer 2baef08f-bbcc-4bbd-9c53-6e2dc54a1bdf',
                    'Access-Control-Allow-Origin': '*'     
					 

				    },
                      
                    jsonpCallback: "localJsonpCallback",  
				   
				    success: function (data) {
				        console.info("work "+data);
				    },
                      
                    error: function(error) {
                        console.log('it doesnt work'+ error)},  
                      
				});


  
	});
    
    
    function localJsonpCallback(json) {
        if (!json.Error) {
           console.log(json.Error);
        }
        else {
            
            console.log(json);
            
        }
    }


})();