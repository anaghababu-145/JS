function Name(){
  var n=document.getElementById('name');
  if(n.value.length<=5)
  {
document.getElementById('nm').style.visibility="visible";
  }
  else
    {
      document.getElementById('nm').style.visibility="hidden";
    }

}
function email(){
  var e=document.getElementById('email');
  var regex=/^([a-z A-Z 0-9\.]+)@([a-z A_Z 0-9]+).([a-z A-Z]{2-20})$/;
  if(regex.test(e.value))
  {
document.getElementById('eml').style.visibility="hidden";
  }
  else
    {
      document.getElementById('eml').style.visibility="visible";
    }
}
function password(){
  var pw=document.getElementById('pswd');
  if(pw.value.length<=8)
  {
document.getElementById('ps').style.visibility="visible";
  }
  else
    {
      document.getElementById('ps').style.visibility="hidden";
    }
}
function confirm()
{
  var con=document.getElementById('pswd');
  var firm=document.getElementById('cpswd');
  if(con.value==firm.value)
  {
    document.getElementById('cnps').style.visibility="hidden";
    document.getElementById('right').style.visibility="visible";
  }
  else
  {
    document.getElementById('cnps').style.visibility="visible";
    document.getElementById('wrong').style.visibility="visible";
  }
}
function count()
{
  var t=document.getElementById('text').value.length;
  if(140-t >=0)
  {
    document.getElementById('cnt').innerHTML=140-t;
  }
}
function date()
{
  var d=new Date();
  var current_year=d.getFullYear();
  var dts=document.getElementById('datee').value;
  var type_year=new Date(dts);
  var fullyear=type_year.getFullYear();
  var diff=current_year-fullyear;
  if (diff<18) {
    document.getElementById('age').style.visibility="visible";
  }
  else {
    document.getElementById('age').style.visibility="hidden";
  }
}
