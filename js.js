function check() {
    var username = document.getElementById("usernamee").value;

    const rad11 = document.getElementById("rad11");
    const rad12 = document.getElementById("rad12");
    const rad13 = document.getElementById("rad13");
    const rad14 = document.getElementById("rad14");

    const rad21 = document.getElementById("rad21");
    const rad22 = document.getElementById("rad22");
    const rad23 = document.getElementById("rad23");
    const rad24 = document.getElementById("rad24");

    const rad31 = document.getElementById("rad31");
    const rad32 = document.getElementById("rad32");
    const rad33 = document.getElementById("rad33");
    const rad34 = document.getElementById("rad34");

    var count = 0;

    if (rad11.checked) {
        count++;
    }
    if (rad21.checked) {
        count++;
    }
    if (rad31.checked) {
        count++;
    }

    alert(username + " Result = " + count);
}