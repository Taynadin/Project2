$(document).ready(function(){
    //variables to take from html
    var nameInput =$("#cName");
    var emailInput =$("#cEmail");
    var subjectInput =$("#cSubject");
    var messageInput =$("#cMessage");
    var form=$("#contactForm")

    $(form).on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        console.log("hello")
        event.preventDefault();
        // Don't do anything if the  fields haven't been filled out
        
       {
        // Calling the function and passing in the value of the name input
        addContact({
        Name: nameInput
            .val()
            .trim(),
        Email: emailInput
            .val()
            .trim(),        
        Subject: subjectInput
            .val()
            .trim(),        
        Message: messageInput
            .val()
            .trim(),        

        });
      }
    }

    function addContact(contactData) {
        $.post("/api/contact", contactData)
        .then();

      }    

})