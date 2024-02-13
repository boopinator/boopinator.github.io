

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    <link rel="stylesheet" href="assets/css/app.css" type="text/css" />
    <title>MotoX3M | 3kh0</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-98DP5VKS42"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-98DP5VKS42');
</script>

          <style type="text/css">
            .no-select {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
            }
          </style>
        
          <script type="text/javascript">
            setTimeout(function(){
              if(document.getElementsByTagName("canvas").length) {
                document.getElementsByTagName("body")[0].classList.add("no-select")
              }
            }, 2000);
          </script>
        <script type="text/javascript">
          function setUserAgent(window, userAgent) {
           // Works on Firefox, Chrome, Opera and IE9+
            if (navigator.__defineGetter__) {
                navigator.__defineGetter__("userAgent", function () {
                    return userAgent;
                });
            } else if (Object.defineProperty) {
                Object.defineProperty(navigator, "userAgent", {
                    get: function () {
                        return userAgent;
                    }
                });
            }
            // Works on Safari
            if (window.navigator.userAgent !== userAgent) {
                var userAgentProp = {
                    get: function () {
                        return userAgent;
                    }
                };
                try {
                    Object.defineProperty(window.navigator, "userAgent", userAgentProp);
                } catch (e) {
                    window.navigator = Object.create(navigator, {
                        userAgent: userAgentProp
                    });
                }
            }
          }
          if(window.navigator.userAgent.indexOf("Safari")>=0 && "ontouchstart" in window && window.navigator.userAgent.indexOf("iPhone")== -1) {
            //var userAgent = window.navigator.userAgent.replace("Macintosh", "iPad");
            var userAgent = "Mozilla/5.0 (iPad; CPU OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1";
            setUserAgent(window,userAgent);
          }
          </script>
        </head>
<body>
    <div id="content"></div>
    <div id="orientation"></div>
    <div id="loader">Loading ...</div>
    <script type="text/javascript" src="assets/box2dweb/nape.min.js">
        var nape = "nape.min.js";
    </script>
    <script type="text/javascript" src="assets/box2dweb/nape-debug-draw.min.js"></script>
    <script type="text/javascript" src="assets/box2dweb/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="assets/box2dweb/easeljs-0.8.2.combined.js"></script>
	<script type="text/javascript" src="assets/box2dweb/bluebird.min.js"></script>
<script type="text/javascript" src="motox3m4.min.js?7c244cab919211eaf53d"></script><script>function fnSendMsg(evt){
        	window.parent.postMessage('keypress-from-game', '*');
        }
        document.body.addEventListener('click', function(event) {
          fnSendMsg(event);
        });
        document.addEventListener('keypress', function(event) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keydown', function (e) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keyup', function (e) {
        	  fnSendMsg(event);
        });
        </script></body>
</html>
