var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
    
    function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'o-Ikkh5oxuo', //최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true,
            loop:true,
            playlist: 'o-Ikkh5oxuo'
        },
        events : {
            onReady : function(event) {
                event.target.mute() // 음소거
            }
        }
        });
    }
