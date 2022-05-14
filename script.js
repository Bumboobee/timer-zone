$(document).ready(function () {
  window.setInterval(function () {
    $("#br").val(moment().format("DD/MM/yyyy H:mm:ss"));
    $("#eua").val(moment().subtract(1, "hours").format("MM/DD/yyyy H:mm:ss"));
    $("#japan").val(moment().add(12, "hours").format("yyyy/MM/DD H:mm:ss"));
    $("#germany").val(moment().add(5, "hours").format("DD/MM/yyyy H:mm:ss"));
    $("#canada").val(
      moment().subtract(1, "hours").format("MM/DD/yyyy H:mm:ss")
    );
    $("#uk").val(moment().add(1, "hours").format("DD/MM/yyyy H:mm:ss"));
    $("#egypt").val(moment().add(5, "hours").format("DD/MM/yyyy H:mm:ss"));
    $("#spain").val(moment().add(5, "hours").format("DD/MM/yyyy H:mm:ss"));

    var birth = '2022-08-24';
    var christmas = '2022-12-25';
    var programer = '2022-09-13';
    var turing = '2022-06-23'
    
    var datenow = moment().isSame(birth,'day');
    var datenowchristmas = moment().isSame(christmas,'day');
    var datenowprogramer = moment().isSame(programer,'day');
    var datenowturing = moment().isSame(turing,'day');

    var timerzone = (moment().subtract(1883, "years").format('yyyy'));
    var newtimerzone = timerzone.replace(/^(0+)(\d)/g,"$2"); //remove “0″ à esquerda

    if (datenow == true) {
      $('.birthday').removeClass('d-none');
    }
    else if (datenowchristmas == true) {
      $('.christmas').removeClass('d-none');
    }
    else if (datenowprogramer == true) {
      $('.programer').removeClass('d-none');
    }
    else if (datenowturing == true) {
      $('.turing').removeClass('d-none');
    } 
    else {
      $('.timerzone').text(newtimerzone + ' years ago, time zones were established!');
    }

  }, 1000);

  $('[data-toggle="tooltip"]').tooltip();
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
 
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});