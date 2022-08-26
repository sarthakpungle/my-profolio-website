function changeImageOver() 
{
document.getElementById("profile").src="my.jpg";

}

function changeImageout()
{
    document.getElementById("profile").src="https://rizeyond.com/assets/images/thaer.png";
}

function ok(){
    hi.style.color="cyan";
    hi.style.border="5px solid indigo";
    hi.style.borderRadius="50px";
    document.getElementById("hi").innerHTML="Hi I am sarthak";
}

function ko(){
    hi.style.color="yellow";
    hi.style.border="0px"; 
    document.getElementById("hi").innerHTML="Hi!";
}
