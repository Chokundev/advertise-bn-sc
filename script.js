console.log("🟢 Connect Success")

function scheduleAudio() {
  var time = document.getElementById('time').value;
  var audio = document.getElementById('audio').value;
  console.log("กำลังจะเล่นไฟล์ " + audio + "ในเวลา : "  + time)
  var audioPlayer = document.getElementById('audio-player');
  
  Swal.fire({
      title: 'ตั้งเวลาสำเร็จ',
      text: `ระบบจะเล่นไฟล์ : ${audio} ในเวลา ${time}`,
      icon: 'success',
      timer: 3000
    });
    document.getElementById("warning-text").innerHTML = "กำลังจะเล่นไฟล์ : " + audio + "  ในเวลา :  " + time;
    

  var scheduledTime = new Date();
  scheduledTime.setHours(time.substr(0, 2));
  scheduledTime.setMinutes(time.substr(3, 2));
  scheduledTime.setSeconds(0);

  var currentTime = new Date();
  var timeUntilPlay = scheduledTime - currentTime;

  setTimeout(function() {
    audioPlayer.src = audio;
    audioPlayer.play();
    Swal.fire({
      title: 'ถึงเวลาเล่นไฟล์!!',
      text: `ระบบกำลังเล่นไฟล์ ${audio}`,
      icon: 'success',
      timer: 3000
    });
    document.getElementById("alert-text").innerHTML = "กำลังเล่นไฟล์ : " + audio;
  }, timeUntilPlay);
}


    function pauseAudio() {
      var audioPlayer = document.getElementById('audio-player');
      audioPlayer.pause();
      
    }

    function stopAudio() {
      var audioPlayer = document.getElementById('audio-player');
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      document.getElementById("alert-text").innerHTML = "หยุดเล่นไฟล์";
    }