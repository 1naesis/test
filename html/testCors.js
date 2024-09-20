var xhr = new XMLHttpRequest();

data = {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZXcgdG9rZW4iLCJpc3MiOiJzdG4iLCJleHAiOjE3MjAxMDYyNzIsImlhdCI6MTcxNzUxNDI3MiwianRpIjoiMTYzODk5NDgtMjAwZi00NmRhLWEwMTYtOGMyYzNmYTA1NDc4In0.DQLqcBP1MJyc33ik31kjuBB2qLWWPQIG5jtJPSI0gJs"
}

url = "https://auroraback.stnpro.online/api/v1/management/affirmation"
// url = "https://auroraback.stnpro.online/api/v1/management/affirmation"
// url = "http://portdev:8888/auroraback/api/v1/management/affirmation"
// url = "https://auth.stnpro.online/api/v1/auth"
url = "https://auroradev.stnpro.online/api/v1/reference"
xhr.open("GET", url, false);
// xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZXcgdG9rZW4iLCJpc3MiOiJzdG4iLCJleHAiOjE3MTk5MjI5NzQsImlhdCI6MTcxNzMzMDk3NCwianRpIjoiMTYzODk5NDgtMjAwZi00NmRhLWEwMTYtOGMyYzNmYTA1NDc4In0.ZGyMo1FzNvpI9f2COI6mKCUp-MyVF4qRrh220wVHYY9")
// xhr.setRequestHeader("Content-Type", "application/json")

xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
  
    console.log( this.responseText );
    console.log( this.getAllResponseHeaders() );
  }

xhr.send()