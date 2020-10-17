



$(document).ready(function () {
    $(".input").blur(function () {
        localStorage.setItem("Teams", $(this).val());
        console.log("click");
      }
      );
    //   Divs for upcoming matches
      var matchDiv1 = $(`   <div id= 'match1'>
                                <div id='match1Name'></div>
                                <div id='match1Date'></div>
                                <div id='match1Time'></div>
                                <div id='match1Venue'></div>
                            </div>`);
      var matchDiv2 = $(`   <div id= 'match2'>
                                <div id='match2Name'></div>
                                <div id='match2Date'></div>
                                <div id='match2Time'></div>
                                <div id='match2Venue'></div>
                            </div>`);
      var matchDiv3 = $(`   <div id= 'match3'>
                                <div id='match3Name'></div>
                                <div id='match3Date'></div>
                                <div id='match3Time'></div>
                                <div id='match3Venue'></div>
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
            var match1Date = " "    +response.events[0].dateEvent;
            var match1Time = " at " +response.events[0].strTime;
            var match1Venue= "@ "    +response.events[0].strVenue;
            var match2Name =               response.events[1].strEvent;
            var match2Date = " "    +response.events[1].dateEvent;
            var match2Time = " at " +response.events[1].strTime;
            var match2Venue= "@ "    +response.events[1].strVenue;
            var match3Name =               response.events[2].strEvent;
            var match3Date = " "     +response.events[2].dateEvent;
            var match3Time = " at " +response.events[2].strTime;
            var match3Venue= "@ "    +response.events[2].strVenue;

            $('#match1Name').append(match1Name);
            $('#match1Date').append(match1Date);
            $('#match1Time').append(match1Time);
            $('#match1Venue').append(match1Venue);
            $('#match2Name').append(match2Name);
            $('#match2Date').append(match2Date);
            $('#match2Time').append(match2Time);
            $('#match2Venue').append(match2Venue);
            $('#match3Name').append(match3Name);
            $('#match3Date').append(match3Date);
            $('#match3Time').append(match3Time);
            $('#match3Venue').append(match3Venue);
            
     });
     $.ajax({
        url: "https://www.thesportsdb.com/api/v1/json/4013017/eventshighlights.php?s=Soccer",
        method: "GET"
        }).then(function(response){
            console.log(response);
        })})
    // $.ajax({
    //     type: 'GET',
    //     url:
    //     success, function(orders) {
    //         $.each
    //     }
    // }),
    // Changed client-side storage to store persistent data
    $( "#soccer-teams" ).click(function() { 
        var soccerTeams = $('#soccerTeamName').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchteams.php?t="+soccerTeams;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        }).then(function(response){
        localStorage.setItem(soccerTeams, JSON.stringify(response));
        $(".card").html(JSON.stringify(response));
            console.log(queryURL);
            console.log(response);
        })
    });

    $( "#soccer-players" ).click(function() { 
        var soccerPlayers = $('#soccerFirstName').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?p="+soccerPlayers;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        }).then(function(response){
        localStorage.setItem(soccerPlayers, JSON.stringify(response));
        $(".card").html(JSON.stringify(response));
            console.log(queryURL);
            console.log(response);
        })
    });

    $( "#football-teams" ).click(function() { 
        var footballTeams = $('#footballTeamName').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchteams.php?t="+footballTeams;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        }).then(function(response){
        localStorage.setItem(footballTeams, JSON.stringify(response));
        $(".card").html(JSON.stringify(response));
            console.log(queryURL);
            console.log(response);
        })
    });

    $( "#football-players" ).click(function() { 
        var footballPlayers = $('#footballFirstName, footballLastName').val();
        var queryURL= "https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?p="+footballPlayers;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        }).then(function(response){
        localStorage.setItem(footballPlayers, JSON.stringify(response));
        $(".card").html(JSON.stringify(response));
            console.log(queryURL);
            console.log(response);
        })
    });

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
$('#soccer-teams').on('click', function searchTeamName(t){
        t.preventDefault();
        var teamName = $('#soccerTeamName').val();
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
$('#soccer-players').on('click', function searchNames(e){
            e.preventDefault();
                var playerFirstName = $('#soccerFirstName').val();
                var playerLastName = $('#soccerLastName').val();
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


