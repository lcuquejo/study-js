// Set function on all divs
$("div.grid-item#number").click(function (){
    if ($("#textResult").text()=="Calculator") {
        $("#textResult").text("")
    }
    var Id=$(this).text();
    $("#textResult").text($("#textResult").text()+Id);
  });

$("div.grid-item#equal").click(function (){
    // clear empty spaces
    result=$("#textResult").text().replace(/ +/g, '');

    // clear carriers (Enter /n or /g)
    result=result.replace(/\n/g, '');

    $("#textResult").text(eval(result));
});

$("div.grid-item#clear").click(function (){
    $("#textResult").text("Calculator");
});