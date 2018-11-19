var twitterfeed = [];

function tweet() {
  var content = document.getElementById('input').value;
  twitterfeed.push(content);
  console.log(content);
  updateFeed();
  document.getElementById('message').innerHTML = "140 characters remaining"
}


function updateFeed() {
	var html = "";
	for (var i=0; i < twitterfeed.length; ++i) { 
		html += `<li>${twitterfeed[i]} </li>\n`;
        html += ` <button id="likeText" onclick="toggleLike()">Like</button>`;
      document.getElementById('input').value="";
	}
	document.getElementById('output').innerHTML = html;
    
}

function countCharacter(){
 var content = document.getElementById('input').value;
  document.getElementById('message').innerHTML = `${140-content.length} characters remaining`;
}

function toggleLike() {
  var x = document.getElementById("likeText");
  if (x.innerHTML === "Like") {
    x.innerHTML = "Unlike";
  } else {
    x.innerHTML = "Like";
  }
}
