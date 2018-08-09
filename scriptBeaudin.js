
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



});