var myListItems=document.getElementsByTagName("LI");
var i;
for(i=0;i<myListItems.length;i++){
    var span=document.createElement("SPAN");
    var txt=document.createTextNode('\u00D7');
    span.className="close";
    span.appendChild(txt);
    myListItems[i].appendChild(span);
}

var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
	if(ev.target.tagName==='LI')
		ev.target.classList.toggle('checked');
})

function addfunction()
{
    var newelement= document.createElement("li");
    var inputValue=document.getElementById("todo").value;
    var text=document.createTextNode(inputValue);
    newelement.appendChild(text);
    document.getElementById("pid").appendChild(newelement);
    document.getElementById("todo").value=null;
    var span=document.createElement("SPAN");
    var txt=document.createTextNode('\u00D7');
    span.className="close";
    span.appendChild(txt);
    newelement.appendChild(span);   
    var arr=document.getElementsByClassName("close");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].onclick=function(){
            var a=this.parentElement;
            //console.log(a);
            a.style.display="none";
        }
    }
}

function checkenter(e){
    //console.log("Here");
    if(e.keyCode==13)
        addfunction();
}

var arr=document.getElementsByClassName("close");
for(var i=0;i<arr.length;i++)
{
    arr[i].onclick=function(){
        var a=this.parentElement;
        //console.log(a);
        a.style.display="none";
    }
}