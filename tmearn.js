<header class="header-banner">
  <div id="ia37" class="logo">Tmearn
  </div>
  <div class="container-width">
    <div class="logo-container">
    </div>
    <nav class="menu">
    </nav>
    <div class="clearfix">
    </div>
  </div>
</header>
<link rel="stylesheet" href="style.css" type="text/css"/>
<title>Tmearn easy short link
</title>
<p id="demo">Url Please: 
  <input type="text" id="myText"/>
</p>
<button onclick="myFunction()" id="iyxngf">Shorten</button>
<button onclick="change()" id="ipj7f6">Copy to clipboard</button>
<style>* {
  box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  .clearfix{
    clear:both;
  }
  .header-banner{
    padding-top:35px;
    padding-bottom:100px;
    color:#ffffff;
    font-family:Helvetica, serif;
    font-weight:100;
    background-image:url("//grapesjs.com/img/bg-gr-v.png"), url("//grapesjs.com/img/work-desk.jpg");
    background-attachment:scroll, scroll;
    background-position:left top, center center;
    background-repeat:repeat-y, no-repeat;
    background-size:contain, cover;
  }
  .container-width{
    width:90%;
    max-width:1150px;
    margin:0 auto;
  }
  .logo-container{
    float:left;
    width:50%;
  }
  .logo{
    background-color:#fff;
    border-radius:5px;
    width:130px;
    padding:10px;
    min-height:30px;
    text-align:center;
    line-height:30px;
    color:#4d114f;
    font-size:23px;
    right:9px;
  }
  .menu{
    float:right;
    width:50%;
  }
  #ia37{
    margin:0 0 0 50px;
  }
  *{
    box-sizing:border-box;
  }
  body{
    margin:0;
  }
  #myText{
    margin:-7px 0 0 0;
    width:200px;
    border-radius:5px 5px 5px 5px;
    padding:6px 0 1px 0;
  }
  #demo{
    margin:100px 18px 19px 10px;
    padding:16px 0 0 100px;
    max-width:500px;
    height:50px;
  }
  #iyxngf{
    margin:3px 15px 0 185px;
    padding:8px 8px 8px 8px;
  }
  #ipj7f6{
    margin:0 0 0 0;
    padding:8px 8px 8px 8px;
  }
</style>
            var a;
             function change() {
var copyText = document.getElementById("myText");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
            }
      function myFunction() {

 var url = document.getElementById("myText").value;
 var xhr = new XMLHttpRequest();
xhr.open('GET', "https://tmearn.com/api?api=14bca4b052e9d56677a5b368eeb2c3f14cd18e46&url="+ url , true);
xhr.send();
xhr.onreadystatechange = processRequest;

function processRequest(e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response.shortenedUrl);
        a = response.shortenedUrl;
           document.getElementById("myText").value = ""+ a ;
           
    }
}
      }
           


  </script>