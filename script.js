



$(document).ready(function () {
    $(".input").blur(function () {
        localStorage.setItem("Teams", $(this).val());
        console.log("click");
      }
      );
    //   Divs for upcoming matches
      var matchDiv1 = $(`   <div id= 'match1'>
                                <div id='match1Name'></div>
                                <div id='match1Time'></div>
                                <div id='match1Venue'></div>
                            </div>`);
      var matchDiv2 = $(`   <div id= 'match2'>
                                <div id='match2Name'></div>
                                <div id='match2Time'></div>
                                <div id='match2Venue'></div>
                            </div>`);
      var matchDiv3 = $(`   <div id= 'match3'>
                                <div id='match3Name'></div>
                                <div id='match3Time'></div>
                                <div id='match3Venue></div>
                            </div>`);

      $('#upcomingMatches').append(matchDiv1);
      $('#upcomingMatches').append(matchDiv2);
      $('#upcomingMatches').append(matchDiv3);
    $.ajax({
        url: "https://www.thesportsdb.com/api/v1/json/4013017/eventsnextleague.php?id=4328",
        method: "GET"
        }).then(function(response){
            console.log(response);
            var match1Name =               response.events[0].strEvent;
            var match1Time = "Game Starts "+response.events[0].strTime;
            var match1Venue= "Venue: "    +response.events[0].strVenue;
            var match2Name =               response.events[1].strEvent;
            var match2Time = "Game Starts "+response.events[1].strTime;
            var match2Venue= "Venue: "    +response.events[1].strVenue;
            var match3Name =               response.events[2].strEvent;
            var match3Time = "Game Starts "+response.events[2].strTime;
            var match3Venue= "Venue: "    +response.events[2].strVenue;

            $('#match1Name').append(match1Name);
            $('#match1Time').append(match1Time);
            $('#match1Venue').append(match1Venue);
            $('#match2Name').append(match2Name);
            $('#match2Time').append(match2Time);
            $('#match2Venue').append(match2Venue);
            $('#match3Name').append(match3Name);
            $('#match3Time').append(match3Time);
            $('#match3Venue').append(match3Venue);
            
     });
    // $.ajax({
    //     type: 'GET',
    //     url:
    //     success, function(orders) {
    //         $.each
    //     }
    // }),
$('#submitPlayerName').on('click', function searchNames(e){
        e.preventDefault();
        var playerFirstName = $('#playerFirstName').val();
        var playerLastName = $('#playerLastName').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?p="+playerFirstName+"%20"+playerLastName;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(queryURL);
            console.log(response);
            console.log(playerFirstName);
            console.log(playerLastName);
        })
        }),
$('#stats').on('click', function searchTeamName(t){
        t.preventDefault();
        var teamName = $('#comment').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchteams.php?t="+teamName;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(queryURL);
            console.log(response);
            console.log(teamName);
        })
        }),
        //AJAX for search teams
 $('#search-teams').on('click', function searchTeamName(e){
            e.preventDefault();
               var teamName = $('#teamName').val();
               var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchteams.php?t="+teamName;
           $.ajax({
                   url: queryURL,
                   method: "GET"
           }).then(function(response){
                   console.log(queryURL);
                   console.log(response);
                   console.log(teamName);      
           })
           });
            //ajax for search players
$('#search-players').on('click', function searchNames(e){
            e.preventDefault();
                var playerFirstName = $('#playerFirstName').val();
                var playerLastName = $('#playerLastName').val();
                var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?p="+playerFirstName+"%20"+playerLastName;
            $.ajax({
                    url: queryURL,
                    method: "GET"
            }).then(function(response){
                    console.log(queryURL);
                    console.log(response);
                    console.log(playerFirstName);
                    console.log(playerLastName);
                });
$('#submitPlayerName').on('click', function searchNames(e){
            e.preventDefault();
                var soccerFirstName = $('#soccerFirstName').val();
                var soccerLastName = $('#soccerLastName').val();
                var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?p="+playerFirstName+"%20"+playerLastName;
            $.ajax({
                    url: queryURL,
                    method: "GET"
            }).then(function(response){
                    console.log(queryURL);
                    console.log(response);
                    console.log(playerFirstName);
                    console.log(playerLastName);
                });
 });

 //AJAX for event highlights
 $.ajax({
    url: "https://www.thesportsdb.com/api/v1/json/4013017/eventshighlights.php?s=Soccer",
    method: "GET"
    }).then(function(response){
        console.log(response);
    })})
});