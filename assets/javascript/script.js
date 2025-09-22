$(document).ready(() => {
    $("#steppedBtn").click(() => {
        let valid = true;

        if ($("#steppedBtn").text() === "Növbəti") {
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
        } else if ($("#steppedBtn").text() === "Göndər") {
            $("#formInputsTwo input[required]").each(function () {
                if ($(this).val().trim() === "") {
                    valid = false;
                    $(this).addClass("error");
                } else {
                    $(this).removeClass("error");
                }
            });

            if (valid) {
                $("#formInputsTwo").removeClass("show").addClass("hidden");
                $("#steppedBtn").hide();
                $("#successForm").addClass("show");
            }
        }
    });
});
