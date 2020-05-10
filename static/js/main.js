
// each box has a bodID.mp3 in the audio folder
var makeAudio = (box) => {
    var audioElement = document.createElement('audio');
    audioElement.addEventListener('ended', function() {
        box.removeClass("talk spaz")
    }, false);

    var spazzy =  ["kevin", "roo", "tammy"]
    var boxId = box.attr('id')
    console.log(boxId)
    audioElement.setAttribute('src', 'static/audio/' + boxId + '.mp3');
    box.click(() => {
        if (audioElement.paused) {
            audioElement.play()
            if (spazzy.includes(boxId)){
                box.addClass("spaz")
            }
            else {
                box.addClass("talk")
            }
        }
        else {
            audioElement.pause()
            box.removeClass("talk spaz")
        }
    })
}

$(document).ready(function() {
    console.log("running")
    var theone = $('#special').find('img')
    var arr = $.makeArray(theone)

    arr.forEach(element => {
       console.log(element);
       console.log($(element).attr('id'))
       makeAudio($(element))
    });

    /* 
    theone.each(() => {
        $(self).css("color", "blue")
        var self = this
        var x = $(self)
       console.log(x.attr('id'));
       makeAudio();
    });
    */

});