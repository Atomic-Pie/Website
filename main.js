last_event_target = ''
document_domain = NaN



/* Close iFrame */
function closeIframe(){
}


/* Find highest Z index */
function findHighestZIndex()
{
  var elems = document.all;
  var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
  for (var i = 0; i < elems.length; i++)
  {
    var zindex = Number.parseInt(
      document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
      10
    );
    if (zindex > highest)
    {
      highest = zindex;
    }
  }
  return highest;
}

function openDesktop()
{
  
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropup_logic() {
  document.getElementById("myDropup").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropups = document.getElementsByClassName("dropup-content");
    var i;
    for (i = 0; i < dropups.length; i++) {
      var openDropup = dropups[i];
      if (openDropup.classList.contains('show') && openDropup.classList.contains('dropup-content')) {
        openDropup.classList.remove('show');
      }
    }
  }
}


function open_chrome(){
  document.getElementById("chrome").innerHTML = `<iframe class="iframe" width="100%" height="100%" src="chrome.html?${Date.now()}" frameborder="1"><script>document.domain=${document_domain}</script></iframe>`
}

function close_chrome(){
  console.log(parent)

}




window.addEventListener('message', event => {
  // IMPORTANT: check the origin of the data! 
  if (event.origin.startsWith('file:///C:/Users/User/Desktop/CV%20Site/')) { 
      // The data was sent from your site.
      // Data sent with postMessage is stored in event.data:
      console.log(event.data); 
  } else {
      // The data was NOT sent from your site! 
      // Be careful! Do not use it. This else branch is
      // here just for clarity, you usually shouldn't need it.
      return; 
  } 
}); 

/*
function open_chrome(){
  const iframeEl = document.querySelector('iframe');
  const nextQueryValue = !location.search ? 1 :
  Number(location.search.split("?").pop()) + 1;

  iframeEl.src = `index.html?${nextQueryValue}`;
  iframeEl.height = '100vh';
  iframeEl.width = '100vw';
  iframeEl.frameborder = "'1'";
}
*/