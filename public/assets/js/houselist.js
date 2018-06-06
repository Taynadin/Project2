$(document).ready(function(){
    //variables to take from html
    var addressInput =$("#Address");
    var cityInput =$("#City");
    var postcodeInput =$("#Postcode");
    var bedroomsInput =$("#Bedrooms");
    var bathroomsInput =$("#Bathrooms")
    var guestsInput =$("#Guests")
    var descriptionInput =$("#Description")
    var priceInput =$("#Price")
    var submit=$("#form")

$(submit).on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        console.log("hello")
        event.preventDefault();
        // Don't do anything if the  fields haven't been filled out

       {
        // Calling the function and passing in the value of the name input
        addHouse({
        Address: addressInput
            .val()
            .trim(),
        City: cityInput
            .val()
            .trim(),        
        Postcode: postcodeInput
            .val()
            .trim(),        
        Bedrooms: bedroomsInput
            .val()
            .trim(), 
        Bathrooms: bathroomsInput
            .val()
            .trim(),
        MaxGuests: guestsInput
            .val()
            .trim(),  
        Description:descriptionInput
            .val()
            .trim(),      
        Price: priceInput
            .val()
            .trim(),                    

        });
      }
    }

    function addHouse(contactData) {
        $.post("/api/house", contactData, function() {

        })

      }    

})