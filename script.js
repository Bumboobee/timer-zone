$(document).ready(function () {

    window.setInterval(function () {
      $("#br").val(moment().format("DD/MM/yyyy H:mm:ss"));
      $("#eua").val(moment().subtract(1, 'hours').format("MM/DD/yyyy H:mm:ss"));
      $("#japan").val(moment().add(12, 'hours').format("yyyy/MM/DD H:mm:ss"));
      $("#germany").val(moment().add(5, 'hours').format("DD/MM/yyyy H:mm:ss"));
      $("#canada").val(moment().subtract(1, 'hours').format("MM/DD/yyyy H:mm:ss"));
      $("#uk").val(moment().add(1, 'hours').format("DD/MM/yyyy H:mm:ss"));
      $("#egypt").val(moment().add(5, 'hours').format("DD/MM/yyyy H:mm:ss"));
      $("#spain").val(moment().add(5, 'hours').format("DD/MM/yyyy H:mm:ss"));
    }, 1000);

    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);  
  });  
});