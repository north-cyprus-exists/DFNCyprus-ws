

function mpcall(){

    var SearchPostcode = document.getElementById("postcode").value;
    var Personame = document.getElementById("name").value;
    var Personemail = document.getElementById("email").value;

$.getJSON(
    "https://members-api.parliament.uk/api/Location/Constituency/Search?searchText="+ SearchPostcode + "&skip=0&take=20", 
    function(data){
        console.log(data);

        var MP_TotalResults = data.totalResults;
        console.log(MP_TotalResults);
        if(MP_TotalResults == 650){
            document.getElementById("mpconstit").value = "Please enter details above"
             document.getElementById("mpname").value = ""
             document.getElementById("mpemail").value = ""
             var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
            } 
            else if (MP_TotalResults > 1){
                document.getElementById("mpconstit").value = "More than 1 result returned"
                document.getElementById("mpname").value = ""
                document.getElementById("mpemail").value = ""
                var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
            }
            else if (MP_TotalResults = 1) {
         var MP_name1 = data.items[0].value.currentRepresentation.member.value.nameDisplayAs;
            console.log(MP_name1);

            document.getElementById("mpname").value = MP_name1;

            var MP_consistency1 = data.items[0].value.name;
            console.log(MP_consistency1);

            document.getElementById("mpconstit").value = MP_consistency1;

            var MP_id1 = data.items[0].value.currentRepresentation.member.value.id;
            console.log(MP_id1);
        

            var MP_img1 = data.items[0].value.currentRepresentation.member.value.thumbnailUrl;
        $(".mpimg").attr("src",MP_img1);
        

            $.getJSON("https://members-api.parliament.uk/api/Members/" + MP_id1 + "/Contact", 
            function(dataid){
            console.log(dataid);

            var MP_email1 = dataid.value[0].email;
            

            document.getElementById("mpemail").value = MP_email1;
            });

            
            let Letter = "Dear " + MP_name1 + ", \n \n" +
            "We are writing to you to ask that you join the APPG for TRNC. \n \n" +
            "Yours sincerely, \n \n" +
            Personame + "\n" +
            Personemail + "\n" +
            SearchPostcode;

            document.getElementById("input1_1").value = Letter;

            ;


        };
        
        
    });

    

};