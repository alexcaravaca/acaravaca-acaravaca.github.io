(function(){
 	

	$( "#sendInfo" ).submit(function( event ) {
		 
		  // Stop form from submitting normally
		  event.preventDefault();

		  console.log("click");
 													
				  $.ajax({
				    url: 'https://demo-1.fico.site/data/api/entities/customer?callback=?',
				    type: 'POST',
                    crossDomain: true,  
                    jsonp: "callback",
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
                      
                    
   
 
    
                    // Work with the response
                    success: function( response ) {
                        console.log( response ); // server response
                    },
                      
                    error  : function(response){
                        console.log(response);
                    }
                      
                      

				});

            function localJsonpCallback(json) {
                if (!json.Error) {
                   console.log(json.Error);
                }
                else {

                    console.log(json);

                }
            }
  
	});
    
    
    


})();