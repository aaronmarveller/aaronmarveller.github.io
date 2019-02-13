//http://yun.93me.com/ 免费提供PHP虚拟主机
document.write('<div id="htright" class="float_r align_r"></div>');
function show_student_time(){ 
window.setTimeout("show_student_time()", 1000); 
BirthDay=new Date("2019/02/14");
today=new Date(); 
timeold=(BirthDay.getTime()-today.getTime()); 
sectimeold=timeold/1000 
secondsold=Math.floor(sectimeold); 
msPerDay=24*60*60*1000 
e_daysold=timeold/msPerDay 
daysold=Math.floor(e_daysold); 
e_hrsold=(e_daysold-daysold)*24; 
hrsold=Math.floor(e_hrsold); 
//http://yun.93me.com/ 免费提供PHP虚拟主机
e_minsold=(e_hrsold-hrsold)*60; 
minsold=Math.floor((e_hrsold-hrsold)*60); 
seconds=Math.floor((e_minsold-minsold)*60); 
	htright.innerHTML='<font style="color: #FF69B4; font-family: fantasy " >2019年2月14日5点20分</font><DIV style="DISPLAY: none"><script src="http://s9.cnzz.com/z_stat.php?id=1253206362&web_id=1253206362" language="JavaScript"></script><script language="javascript" type="text/javascript" src="http://js.users.51.la/17292473.js"></script>';
	} 
show_student_time(); 
//http://yun.93me.com/ 免费提供PHP虚拟主机