const op={
movie:"",
radio:"",
select:"",
num3:""
}
function fun1(){
    op.movie = document.getElementById("movie").value;
    if (document.getElementById("num1").checked==true) {
        op.radio = document.getElementById("num1").value;
    } else  {
        op.radio = document.getElementById("num2").value;
    }
    if(document.getElementById("select").value=="1"){
        op.select="Action";
    }
    else if(document.getElementById("select").value=="2"){
        op.select="Thriller";
    }
    else if(document.getElementById("select").value=="3"){
        op.select="Comedy";
    }
    else{
        op.select="Animation";
    }
    if(document.getElementById("num3").checked==true){
        op.num3="Yes"
    }
    else{
        op.num3="No"
    }
    var table = document.getElementById("Table") ;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1=Math.floor();
    cell2.innerHTML= op.movie;
    cell3.innerHTML= op.radio;
    cell4.innerHTML= op.select;
    cell5.innerHTML= op.num3;
}
function fun2() {
    document.getElementById("myTable").deleteRow(1);
  }