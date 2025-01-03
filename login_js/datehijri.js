var fixd;
var tglMasehi = document.getElementById('tglMasehi');
var tglHijriyah = document.getElementById('tglHijriyah');

function jam(){
setInterval(function() {
    var waktu = new Date();
    var jam = document.getElementById('jam')
    var hours = waktu.getHours();
      var minutes = waktu.getMinutes();
      var seconds = waktu.getSeconds();

      if (waktu.getHours() < 10)
      {
         hours = '0' + waktu.getHours();
      }
      if (waktu.getMinutes() < 10)
      {
         minutes = '0' + waktu.getMinutes();
      }
      if (waktu.getSeconds() < 10)
      {
         seconds = '0' + waktu.getSeconds();
      }
      jam.innerHTML  = '<span>' + hours + ' : </span>'
                     + '<span>' + minutes + ' : </span>'
                     + '<span>' + seconds +' </span>';


   }, 1000);
}

jam();

function isGregLeapYear(year)
{
return year%4 == 0 && year%100 != 0 || year%400 == 0;
}


function gregToFixed(year, month, day)
{
var a = Math.floor((year - 1) / 4);
var b = Math.floor((year - 1) / 100);
var c = Math.floor((year - 1) / 400);
var d = Math.floor((367 * month - 362) / 12);

if (month <= 2)
e = 0;
else if (month > 2 && isGregLeapYear(year))
e = -1;
else
e = -2;

return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
}

function Hijri(year, month, day)
{
this.year = year;
this.month = month;
this.day = day;
this.toFixed = hijriToFixed;
this.toString = hijriToString;
}

function hijriToFixed()
{
return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
}

function hijriToString()
{
var months = new Array("Muharram","Safar","Rabiul Awwal","Rabiul Tsani","Jumadil Ula","Jumadil Tsani","Rajab","Sya\'ban","Ramadhan","Syawwal","Dzul Qa\'dah","Dzul Hijjah");
return this.day + " " + months[this.month -1]+ " " + this.year;
}

function fixedToHijri(f)
{
var i=new Hijri(1100, 1, 1);
i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
var i2=new Hijri(i.year, 1, 1);
var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
i.month = Math.min(m, 12);
i2.year = i.year;
i2.month = i.month;
i2.day = 1;
i.day = f - i2.toFixed() + 1;
return i;
}

var tod=new Date();
var weekday=new Array("Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
var monthname=new Array("Januari","Februari","Maret","April","Mei"," Juni","Juli","Agustus","September","Oktober","November","Desember");

var y = tod.getFullYear();
var m = tod.getMonth();
var d = tod.getDate();
var dow = tod.getDay();
tglMasehi.textContent = weekday[dow] + " " + d + " " + monthname[m] + " " + y + " M"
// document.write(weekday[dow] + " " + d + " " + monthname[m] + " " + y);
m++;
fixd=gregToFixed(y, m, d);
var h=new Hijri(1421, 11, 28);
h = fixedToHijri(fixd);

tglHijriyah.textContent =h.toString() + " H";
// document.write(" Masehi | " + h.toString() + " Hijriah &nbsp;&nbsp;");
