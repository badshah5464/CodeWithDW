//! Unlimited write for paragraph. (testing purpose only).
{
    unlimited = "";
    for (let i = 1; i < 101; i++) {
        unlimited += "This is a paragraph " + i + "<br>";
    }
    document.getElementById("unlimited").innerHTML = unlimited;
}