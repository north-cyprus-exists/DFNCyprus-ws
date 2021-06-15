

function mpcall(){

    

    var SearchPostcode = document.getElementById("postcode").value;
    var Personame = document.getElementById("name").value;
    var Personemail = document.getElementById("email").value;
    var Personfirstline = document.getElementById("firstline").value;
    

    if(Personame.length ==0 && Personame.length ==0 && SearchPostcode.length ==0 && Personfirstline.length ==0){
        window.alert("You did not enter any details. Please enter your name, email, first line of your address and postcode before looking up your MP.");
        document.getElementById("mpconstit").value = ""
             document.getElementById("mpname").value = ""
             document.getElementById("mpemail").value = ""
             var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
    } 
    else if(Personame.length ==0 || Personame.length ==0 || SearchPostcode.length ==0 || Personfirstline.length ==0){
        window.alert("You did not enter all your details. Please enter your name, email, first line of your address and postcode before looking up your MP.");
        document.getElementById("mpconstit").value = ""
             document.getElementById("mpname").value = ""
             document.getElementById("mpemail").value = ""
             var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
    } 
    else if(Personame.length > 0 && Personame.length > 0 && SearchPostcode.length > 0 && Personfirstline.length > 0) {$.getJSON(
    "https://members-api.parliament.uk/api/Location/Constituency/Search?searchText="+ SearchPostcode + "&skip=0&take=20", 
    function(data){
        console.log(data);

        var MP_TotalResults = data.totalResults;
        console.log(MP_TotalResults);
        if(MP_TotalResults == 650){
            window.alert("You have not entered any details above. Please enter your name, email, first line of your address and postcode before looking up your MP.");
            document.getElementById("mpconstit").value = ""
             document.getElementById("mpname").value = ""
             document.getElementById("mpemail").value = ""
             

             var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
            } 
            else if (MP_TotalResults > 1){
                window.alert("We found more than 1 MP based on the information you provided. Please ensure you have entered your information correctly and try again.");
                document.getElementById("mpconstit").value = ""
                document.getElementById("mpname").value = ""
                document.getElementById("mpemail").value = ""
                

                var MP_img1 = '';
        $(".mpimg").attr("src",MP_img1);
            }
            else if (MP_TotalResults == 0){
            window.alert("The postcode entered is incorrect. Please correct and try again.");
            document.getElementById("mpconstit").value = ""
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
            console.log(MP_email1);
            if(MP_email1 == 0 || MP_email1 == null){var MP_email1 = dataid.value[1].email;}

            document.getElementById("mpemail").value = MP_email1;
            });

            if (MP_name1 == "Bambos Charalambous" || MP_consistency1 == "Enfield, Southgate" ||
            MP_name1 == "Theresa Villiers" || MP_consistency1 == "Chipping Barnet" || 
            MP_name1 == "Sir Roger Gale" || MP_consistency1 == "North Thanet" || 
            MP_name1 == "Mike Freer" || MP_consistency1 == "Finchley and Golders Green"){
                let Letter = "Unfortunately, we aren't able to send a letter to the following MP.";

                document.getElementById("input1_1").value = Letter;
            }
            else {

            

            // Letter to MP
            let Letter = 
            "Dear " + MP_name1 + ", \n \n" + 
            "I am writing as a constituent to request your help on a matter which is causing enormous inconvenience and cost to tens of thousands of British Citizens, ex-pats and travellers to Northern Cyprus each year. \n \n" + 
            "I am asking for you to support me in challenging the Department for Transport (DfT) and Foreign Commonwealth and Development Office (FCDO) to review security requirements for the Turkish Republic of Northern Cyprus airport, Ercan, with a view to dropping the prohibitive measures introduced in 2017 which are perceived as the UK Government discriminating against British travellers to the TRNC and the 300,000 strong British Turkish Cypriot community. \n \n" + 
            "The Turkish Republic of Northern Cyprus (TRNC) is not recognised by any other country other than Turkey, though this is currently being reviewed by the United Nations, in line with international aviation law; aircraft leaving the UK are not permitted to fly directly and land at Ercan Airport in the TRNC. Since 1984 this difficulty has been accommodated through 'touchdown' of flights in Turkey. \n \n" + 
            "All international aircraft are required to 'touchdown' (land at a Turkish mainland airport, wait for a short period while and then the aircraft then makes its' onward journey to Ercan airport in the TRNC). There has been no requirement for disembarkation or additional screening. \n \n" + 
            "In 2017 the UK (the ONLY country in the world to do so) introduced a requirement for disembarkation and additional security screening in Turkey.  \n \n" + 
            "In practice, this has meant that travellers from the UK to the TRNC are required to leave the aircraft with all their personal belongings, pass through additional security, and reboard another aircraft, very often a great distance away from the point of disembarkation.   \n \n" + 
            "Disembarkation gates used to be typically 200 – 300 metres from security screening checkpoints and transit gates (in Turkey), however with the opening of the new international airport in Istanbul -this is now one of the largest Airports in the world- and with the pandemic and mixing of passengers this is most undesirable.   \n \n" + 
            "For those with young children, the frail and elderly, this causes incredible difficulties. Many first generation British Turkish Cypriots are now elderly and this ‘UK only’ requirement is perceived as discriminatory.   \n \n" + 
            "The measure also results in: \n \n" + 
            "\u2022 Significant increase cost of travel (because of the additional service cost of flight change in Turkey). The average cost penalty for flying to Ercan is an increase in cost of 140%. \n" + 
            "\n \u2022 An additional 1.5 - 2 hours being added to travel time. Flying to Ercan takes at least 40% longer than flying to Larnaca Airport despite there being only 6 miles between them.  The average journey is 68% longer due to scheduling gaps in transit flights. \n" + 
            "\n \u2022 Discouraging British tourists from visiting the TRNC.  \n" + 
            "\n \u2022 Unnecessary and avoidable exposure to Covid for travellers to and from the UK, in requiring disembarkation in a ‘red’ high risk environment (Turkey unlike Cyprus is on the FCDO’s red list of countries). \n \n" + 
            "Since the UK is the only country to require disembarkation and additional security screening, there is a widely held belief that this decision is politically motivated. Because the UK have been unable to screen Ercan because the Republic of Cyprus have not allowed an inspection, I am saddened to think that the British Government has buckled under political pressure from the Republic of Cyprus and are colluding in the oppression of Turkish Cypriots and British citizens. This is abhorrent and entirely unacceptable. \n \n" + 
            "The advice of the transport minister in 2018, was to have a recognised UK company to inspect the Airport and act on its recommendations, this was done. \n \n" + 
            "This is further born out in the experience of travellers to the TRNC last year during the Covid lockdown. I have been disappointed and shocked to learn that even during the first Covid lock down in 2020, the UK refused to allow humanitarian rescue flights on a 'touchdown' basis, while the German Government sent seven aircraft on a 'humanitarian' mission to repatriate over 700 European citizens, all on a ‘touchdown' only basis. You will recall that the Turkish Government had an international lockdown in place, non-Turkish citizens were not permitted to disembark aircraft, because of this disembarkation and security screening were not possible. In the process, hundreds of British citizens were left stranded for weeks, not being able to return home. \n \n" + 
            "With Turkey now added to the list 'red' countries (7th May 2021) travellers to and from the TRNC will be stranded and discriminated against again. Having to go into 10-day quarantine simply because UK rules are forcing them into contact with a ‘high-covid risk’ environment in mainland Turkey. \n \n" + 
            "Avoidably so. If the UK were to lift the disembarkation requirement, British Turkish Cypriots would be free to return home without these unnecessary discriminatory measures introduced by the UK alone. \n \n" + 
            "The issue is complicated further by the prospect that Southern Cyprus is likely to be moved onto the ‘green’ list of countries. What impact will this have for travellers arriving into Southern Cyprus and crossing to the TRNC? Advice on the FCDO website states: \n \n" + 
            "\"Even when the crossing points are operating under normal conditions, British and other foreign nationals who have entered Cyprus through the north (such as via Ercan airport) are considered by the Government of the Republic of Cyprus to have entered Cyprus through an illegal port of entry. The Government of the Republic of Cyprus may fine you for illegal entry if you cross into the south, or refuse you entry into or exit from the Republic, or prevent crossing at the boundary with the north. \n \n" + 
            "The Republic of Cyprus authorities may count time spent in the north of Cyprus towards the 90 day visa free total. If you overstay, you may potentially face difficulties at the airport on exit or re-entry.\" \n \n" + 
            "Failure to act could see the FCDO and DfT become inadvertently complicit in barring British Turkish Cypriots from being able to return to their cultural homeland. There is no question that this would be considered overt and deliberate discrimination. I feel strongly that a review of the 2017 D/SS measures are well overdue and call on you to make this petition on behalf of myself and my wider community. \n \n" + 
            "Could I ask that you convene a meeting on my behalf, so that you can be assured from both departments that they are not deliberately acting in a discriminatory manner as that is how I perceive this. \n \n" + 
            "I look forward to hearing from you at the earliest opportunity. \n \n" + 
            "Yours sincerely, \n" +
            Personame + "\n \n" +
            "Email: " + Personemail + "\n" +
            "Address: " + Personfirstline + ", " + SearchPostcode.toUpperCase();

            document.getElementById("input1_1").value = Letter;

            var elmnt = document.getElementById("mpconstit");
            elmnt.scrollIntoView();}


        };  
        });
    };
};

function mpclear(){
    document.getElementById("mpconstit").value = '';
    document.getElementById("mpname").value = '';
    document.getElementById("mpemail").value = '';

    var MP_img1 = '';
    $(".mpimg").attr("src",MP_img1);
    document.getElementById("input1_1").value = 'Please fill the above out first.';
};

