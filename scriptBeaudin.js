
//Fonction pour permettre le Form Entreprise/Particulier Custom.
$(function(){
    $('#entreprise,#particulier').hide();
    $('#choixEntreprise').click(function(){
        $('#entreprise').show().fadeIn(2000);
        $('#particulier').hide();
    });
    $('#choixParticulier').click(function(){
        $('#particulier').show().dropdown(2000);
        $('#entreprise').hide();
    });

//Icones dans à propos
    $('.hideshow').hide();


    $('#tpsd').click(function(){
        $('.hideshow').hide();
        $('#tpsdhs').show();
    });
    $('#thtml5').click(function(){
        $('.hideshow').hide();
        $('#thtml5hs').show();
    });
    $('#tcss3').click(function(){
        $('.hideshow').hide();
        $('#tcss3hs').show();
    });
    $('#tjs').click(function(){
        $('.hideshow').hide();
        $('#tjshs').show();
    });
    $('#tjq').click(function(){
        $('.hideshow').hide();
        $('#tjqhs').show();
    });
    $('#tbs').click(function(){
        $('.hideshow').hide();
        $('#tbshs').show();
    });
    $('#twp').click(function(){
        $('.hideshow').hide();
        $('#twphs').show();
    });
    $('#tajs').click(function(){
        $('.hideshow').hide();
        $('#tajshs').show();
    });

    $("#modalBtn").click(function(){
        $("#soumission").modal({backdrop: static});
    });

//Smooth Scrolling test.
// Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 0});

// Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });



});