//functionality
//sportsdb URL
$document.ready(function() {
    $(".input").blur(function () {
        localStorage.setItem("Teams", $(this).val());
        console.log("click");
      }
}
    $.ajax({
        type: 'GET',
        url:
        success: function(orders) {
            $.each
        }
    })
}
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
        })
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
                //ajax for upcoming events
                $.ajax({
                    url: "https://www.thesportsdb.com/api/v1/json/4013017/eventsnextleague.php?id=4328",
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                });
                //AJAX for event highlights
                $.ajax({
                    url: "https://www.thesportsdb.com/api/v1/json/4013017/eventshighlights.php?s=Soccer",
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                });
                $.ajax({
                    url: "https://www.thesportsdb.com/api/v1/json/4013017/eventshighlights.php?s=Soccer",
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                });











