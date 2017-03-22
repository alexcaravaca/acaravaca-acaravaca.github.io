(function(){
 	

	$( "#sendInfo" ).submit(function( event ) {
		 
		  // Stop form from submitting normally
		  event.preventDefault();

		  console.log("click");
 													
				  $.ajax({
				    url: 'https://demo-1.fico.site/data/api/entities/customer',
				    type: 'post',
                    crossDomain: true,
                    dataType: 'jsonp',
				    data: {
				        	"email":" alexdev@prodigious ",
							"customer_id":1234568903,
							"patient_id":1234568903,
							"address_line_1":"Birri de Santa Barbara"
				    },
				    headers: {
				       
				    Authorization: 'bearer 2baef08f-bbcc-4bbd-9c53-6e2dc54a1bdf'
					 

				    },
				   
				    success: function (data) {
				        console.info(data);
				    }
				});


  
	});


})();