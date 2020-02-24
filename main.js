var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!DOCTYPE html>
<html>




<head>
    
<meta charset="utf-8">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<!--<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://code.jquery.com/jquery-1.8.1.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>-->
<link href="https://fonts.googleapis.com/css?family=Caveat|Hanalei|Dancing+Script|Gothic+A1|Nanum+Gothic|Poor+Story|Sunflower:300&display=swap"  rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Geostar&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Bungee+Outline|Geostar|Nanum+Pen+Script|Nunito|Sunflower:300&display=swap" rel="stylesheet">
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://apis.google.com/js/api:client.js"></script>

<meta name="google-signin-client_id" content="752750634047-vip9p36hfcsehog8ai63fvg4jsgel8j6.apps.googleusercontent.com">



<title>${title}</title>

<style>
body{
    background-color: white;
    margin-left: 3%;
    margin-top: 3%;
    width: 1800px;
}


.loginBtn--google:focus {
  outline: none;
}
.loginBtn--google:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}

#loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
  float: inherit;
  height: 36px;
  margin-left: 800px;
  margin-top: 60px;
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;

}
#loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
#loginBtn--google:hover,
#loginBtn--google:focus {
  background: #E74B37;
}



.login_button{

background-color: white;
height: 50px;
margin-left: 500px;
}

a:visited{
  text-decoration: none;
  color: rgb(120,120,120);
}
a:link{
  text-decoration: none;
  color: black;
}
a:hover{
  color: rgb(120,120,120);
}


#logo{
    text-align: left;
    font-size: 70px;
    color: black;
    width: auto;
    line-height: 1.8;
    font-family: 'Nanum Pen Script', cursive;
    margin-left:35px;
    height: 55px;
    float: inline-start;


}

#nav_banner ul li{
    list-style: none;
    float: left;
    border: 1 solid rgb(255,255,255);
    text-align: center;
    line-height: 2;
    font-size:20px;
    color: rgb(90,200,100);
    text-decoration: none;
    width: 300px;
    height: 30px;
}

#nav_banner .ban{
    text-decoration: none;
    color: black;
    line-height: 2;
    background-color: rgb(100,180,80);
    font-family: 'Gothic A1', Courier, monospace;
    display: block;

}
#nav_banner .ban:hover{
  line-height: 2;
    background-color: rgb(140,220,100);

}

#p1{font-size: 35px;
    text-align: left;
    margin-left: 0px;
    margin-top: 10px;
    font-family: 'Poor story', cursive;
    }

#p2{color: black;
  line-height: 2;
  position: static;
  text-align: center;
  font-family: 'Gothic A1', Courier, monospace;
  font-size: 22px;
  }


.checkbox {
display: none;
}

.checkbox:checked + .title + .desc {
max-height: 1000px;
}

.list {
list-style: none;
padding: 0;
}
.list > li {
padding: 0;
}
.list-checkbox {
display: none;
}
.title {
font-size: 22px;
padding: 10px;
margin: 0;
border-top: 1px solid #ddd;
background: #f4f4f4;
cursor: pointer;
display: block;
}



.league-list {
list-style-type: none;
list-style: none;
border: black 1px;
width: 100%;
margin: 0px;
line-height: 2;
}



#league_pre{font-size: 25px;
text-align: left;
margin-left: 0px;
height: 80px;
font-family: 'Poor story', cursive;
width: 270px;
background-color: white;
float: left;
}

#league_la{font-size: 25px;
text-align: left;
margin-left: 0px;
height: 80px;
font-family: 'Poor story', cursive;
width: 230px;
background-color: white;
float: left;
}

#league_bun{font-size: 25px;
  text-align: left;
  margin-left: 0px;
  height: 80px;
  font-family: 'Poor story', cursive;
  width: 270px;
  background-color: white;
  float: left;
  }

#league_ser{font-size: 25px;
    text-align: left;
    margin-left: 0px;
    height: 80px;
    font-family: 'Poor story', cursive;
    width: 230px;
    background-color: white;
    }

#league button:hover{
background-color: rgb(90,200,100);
}
#px{
margin-left: 50px;

}

#table_top{
font-size: 35px;
text-align: left;
font-family: 'Poor story', cursive;
width: fit-content;
}

#table_top_laliga{
font-size: 35px;
text-align: left;
font-family: 'Poor story', cursive;
}

#table_top_bun{
font-size: 35px;
text-align: left;
font-family: 'Poor story', cursive;
}

#table_top_ser{
font-size: 35px;
text-align: left;
font-family: 'Poor story', cursive;
}
#pp{
margin: auto;
}

table{
margin-left: 0px;
width: 600px;
}
#right{
height: 700px;
width: 400px;
margin-left: 598px;
margin-top: 0;

}

thead{
background-color: rgb(100,180,80)
}
tr{
font-size: 20px;
text-align: center;

}
td th{
width: 100px;
height: 10px;
border-width: 1px;
border-color: white;
text-align: left;
}




#uefac{
background-color: rgb(127, 180, 255)
}
#uefac2{
background-color: rgb(127, 200, 255)
}
#uefac3{
background-color: rgb(127, 220, 255)
}
#uefac4{
background-color: rgb(127, 230, 255)
}
#uefau{
background-color: 	#FFA500;
}
#uefau2{
background-color: 	#FF8C00;
}
#relegation{
background-color:	#FF4500;

}
#normal{
background-color: whitesmoke;
}


#num1_score{

}

#player_stats{
float: left;
margin-left: 30px;
height: 200px;
}

#player_stata{
float: left;
margin-left: 500px;
height: 200px;
}

#px{
width: 80%;
}
#papa{
width: 400px;
height: 400px;

}
#lala{
width: 40%;
float: left;
}

#ppp{
width: 400px;
height: 400px;
margin-left: 670px;
margin-top: 280px;
}


</style>




    </head>

    <body>




<div style="width: 1500px; height:90px;">
      <a href="https://van1164.github.io/soccer/soccer_home.html" id="logo">해외축구포탈</a>
        <img src="https://cdn.pixabay.com/photo/2013/07/12/14/09/football-147854__480.png" alt="ball" style="width: 50px; height: 50px; float:inherit;">
    <div data-onsuccess="onSignIn"><button type="button" class="customGPlusSignIn" id="loginBtn--google" style="margin-left: 730px; margin-top: 10px;">Login with Google</button></div>
</div>

    <div></div> 
    
    <nav id="nav_banner">
        <ul style="margin-left: 9px;">
            <li>
                <a style="background-color: rgb(140,220,100)" class="ban" href="https://van1164.github.io/soccer/league_stats.html">리그정보</a>
            </li>
            <li>
                <a class="ban" href="https://van1164.github.io/soccer/player_stats.html">선수정보</a>
            </li>
            <li>
                <a class="ban" href="https://van1164.github.io/soccer/커뮤니티">커뮤니티</a>
            </li> 
            <li>
                <a class="ban" href="https://van1164.github.io/soccer/베팅">가상베팅</a>
            </li>
        </ul>
    </nav>

<br></br>




<nav style="margin-left:8px;">
 
  <ul>
    <li class="league-list">
    <button type="button" id="league_pre"><img src ="data:image/png;base64,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" alt="England" width="80" height="35">프리미어리그 순위</button>
            </li>
    <li class="league-list">
    <button type="button" id="league_la" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/1200px-LaLiga.svg.png" alt="Spain" width="30" height="40">&nbsp; 라리가 순위</button>
    </li>   
  <li class="league-list">
    <button type="button" id="league_bun" ><img src ="https://upload.wikimedia.org/wikipedia/ko/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png"  alt="England" width="80" height="50" style="margin: 0px;">분데스리가 순위</button>
    </li>
    <li class="league-list">
    <button type="button" id="league_ser" ><img src="https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/Serie_A_TIM_-_Logo_2019.svg/1200px-Serie_A_TIM_-_Logo_2019.svg.png" alt="Spain" width="45" height="55">&nbsp; 세리에A 순위</button>
    </li>
  </ul>  

    </nav>



<br></br>
<div id="px"></div>
<div id="player_stats"></div>
<div id="player_statsa"></div>


<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>

    </body>
</html>
    `;
    response.end(template);
 
});
app.listen(3000);