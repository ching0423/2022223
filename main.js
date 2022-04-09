$(function(){
    $("input").on("click",function(){
        //var x=5;
        //debugger;
        //alert("yo");
        var NumberOfListItem =$("li").length;
        var randomChildNumber=Math.floor(Math.random()*NumberOfListItem);
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
}

);