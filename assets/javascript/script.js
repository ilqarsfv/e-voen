$(document).ready(() => {
  $("#steppedBtn").click(() => {
    let valid = true;

    $("#formInputsOne input[required]").each(function () {
      if ($(this).val().trim() === "") {
        valid = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });

    if (valid) {
      $("#steppedBtn").text("Göndər");
      $("#formInputsOne").addClass("hidden");
      $("#formInputsTwo").addClass("show");
      $("#formLine").addClass("stepped");
      $("#stepTwo").addClass("active");
    }
  });
});
