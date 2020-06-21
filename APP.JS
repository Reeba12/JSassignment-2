// Chapter 21-25
//Q#1
var firstname=prompt("Enter your first name")
var lastname=prompt("Enter your last name")
var fullname=firstname+" "+lastname;
alert(fullname+". Welcome!");
//Q#2
var favmobile=prompt("Enter your faviourate mobile model")
document.write("Q#2 My favorite mobile phone is : "+favmobile+"<br>")
document.write("Length of a string: "+favmobile.length+"<br>")
//Q#3
var arr="Pakistan"
document.write("String: "+arr+"<br>")
document.write("Index of 'n' is:"+arr.indexOf('n')+"<br>")
//Q#4
var word="Hello world"
document.write("String: "+word+"<br>")
document.write("Last index of 'l' is: "+word.lastIndexOf('l')+"<br>")
//Q#5
var strs="Pakistan"
document.write("String: "+strs)
document.write("<br>Character at index 3: "+strs.charAt(3))
//Q#6
var str1 =prompt("Enter first name")
var str2 =prompt("Enter last name")
var res = str1.concat(" "+str2);
document.write("<br>"+res)
//Q#7
var city="Hyderabad";
document.write("City: "+city+"<br>");
var replacecity=city.replace("Hyder","Islam")
document.write("After replacement: "+replacecity+"<br>")
//Q#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br>");
var replace=message.replace(/and/g,"&")
document.write("<br>"+replace)
//Q#9
var value="472"
document.write("<br>Value: "+value+"<br>")
document.write("Type: "+typeof(value)+"<br>")
document.write("Value: "+parseInt(value)+"<br>")
document.write("Type: "+typeof(parseInt(value)))
//Q#10
var userinput=prompt("Enter any word")
document.write("<br>User input: "+userinput+"<br>");
document.write("Upper case: "+userinput.toUpperCase()+"<br>")
//Q#11
var userinputs=prompt("Enter any word")
document.write("<br>User input: "+userinputs+"<br>");
document.write("Title Case: "+userinputs.charAt(0).toUpperCase()+userinputs.slice(1)+"<br>")
//Q#12
var num="35.36";
document.write("number: "+num+"<br>")
document.write("Result: "+num.replace(".","")+"<br>");
//Q#13
var name=prompt("Enter name here");
var regex = /^[A-Za-z0-9 ]+$/
var isValid = regex.test(name);
if (isValid) {
    alert("Valid Name!");
} else {
    alert("Please enter valid Name");
}
//Q#14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("Welcome to ABC bakery! What do you want to order sir/ma'am")
B = B.toLowerCase();
var Bitems=A.indexOf(B);
if(A.indexOf(B)!= -1){
    alert(B+" is available at index of "+Bitems+" in our bakery")
}
else{
    alert(B+" is not available in our bakery")
}
//Q#15
var password=prompt("enter password")
var p  = /^[a-zA-z0-9]{6,16}$/;
if(p.test(password)){
    alert ("valid") 
  }
else{
    alert("try again! password must contain one alphabet and number and never start with number")
}

//Q#16
var a = "university of karachi";
var b = a.split("")
for(var i =0;i<b.length;i++){
document.write(b[i]+"<br>")
}
//Q#17
var input=prompt("Enter something")
document.write("<br>User input: "+input+"<br>")
document.write("Last character of input: "+ input.charAt(input.length-1))
//Q#18
var text="the quick brown fox jumps over the lazy dog."
document.write("<br>"+text+"<br>")
document.write("There are "+text.match(/the/g).length+" occurrence(s) of word 'the'")
//------------------------************************---------------------------
//chapter26-30
//Q#1
var num=prompt("enter positive integer")
document.write("<br>Number: "+num)
document.write("<br>Round off value: "+ Math.round(num))
document.write("<br>floor value: "+Math.floor(num))
document.write("<br>ceil: "+Math.ceil(num))
//Q#2
var num=prompt("enter negative integer")
document.write("<br>Number: "+num)
document.write("<br>Round off value: "+ Math.round(num))
document.write("<br>floor value: "+Math.floor(num))
document.write("<br>ceil: "+Math.ceil(num))
//Q#3
var a=-4;
var b=5
document.write("<br>Absolute value of "+a+" is: "+Math.abs(a))
document.write("<br>Absolute value of "+b+" is: "+Math.abs(b))
//Q#4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write('<br>Random dice value is ' + diceRoll+"<br>");
//Q#5
var s=Math.floor(Math.random() * 2)+1;
if(s===1){
    document.write(s)
    document.write("<br>Random coin valuue is: Tails")
}
if(s===2){
    document.write(s)
    document.write("<br>Random coin valuue is: Heads")
}
//Q#6
var random=Math.floor(Math.random() * 100)+1;
document.write("<br>Random value between 1 t0 100: "+random)
//Q#7
var weight=parseInt(prompt("enter your weight"))
document.write("<br> your weight is "+weight+" kilogram")
//Q#8
var n=7;
var secrete=parseInt(prompt("enter number between 1 to 10"));
if (secrete===n){
  alert("Congratulation!")
}
if (secrete!=n){
    alert("Try again")
  }
//------------------------************************-------------------------------  
//chapter (31-34)
//Q#1
var date=new Date();
document.write("<br>"+date)
//Q#2
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write("<br>Current month: "+months[d.getMonth()]);
//Q#3
var d2 = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("<br>Today is "+day[d2.getDay()].slice(0,3));
//Q#4
var d2 = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if(days[d2.getDay()]==="Saturday" || days[d2.getDay()]==="Sunday")
{
        document.write("<br>It's Fun Day");
}
else{
    document.write("<br>Its working day")
}
//Q#5
var d3=new Date();
if(d3.getDate()>=16){
    document.write("<br>Last days of the month")
}
if(d3.getDate()<=16){
    document.write("<br>First fifteen days of the month")
}
//Q#6
var dt=new Date();
document.write("<br>Current date: "+dt)
document.write("<br>Elapse millisecond from jan1, 1970: "+dt.getTime())
document.write("<br>Elapse minutes from jan1, 1970: "+(dt.getTime()/1000)/60)
//Q#7
var d4=new Date();
if(d4.getHours()>=7){
    
    document.write("<br>Its Pm")
}
else{
    document.write("<br>Its Am")
}
//Q#8
var LaterDate=new Date();
LaterDate.setFullYear(2020,11,31)
document.write("<br>Later Date: "+LaterDate)
//Q#9
var date2 = new Date();
var date1 = new Date(2015,6,15);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var $dayDifference = Math.ceil(timeDiff/(1000*24*3600));
document.write("<br>"+$dayDifference+" days has passed from 1st Ramdan 2015");
//Q#10
var $referencedate=new Date(2015,11,5);
var $d1=new Date(2015,0,1);
var differenceinsec=Math.abs($d1.getTime()-$referencedate.getTime());
var sec= Math.ceil(differenceinsec/1000)
document.write("<br>On reference date "+$referencedate);
document.write("<br>"+sec+" seconds passed sice beginning of 2015")
//Q#11
var Currentdate=new Date();
var before1hour=new Date();
before1hour.setHours(Currentdate.getHours()-1)
document.write("<br>Current Date: "+Currentdate+"<br>")
document.write("1 hours ago,it was: "+before1hour)
//Q#12
var Currentdate1=new Date();
var before100year=new Date();
before100year.setFullYear(Currentdate.getFullYear()-100)
document.write("<br>Current Date: "+Currentdate1+"<br>")
document.write("100 years back,it was: "+before100year)
//Q#13
var Currentdate2=new Date();
var age=prompt("Enter your age. I will tell your birthyear");
var birthyear=Currentdate2.getFullYear()-age;
document.write("<br>your age: "+age+"<br>")
document.write("Your birthyear is: "+birthyear)
//Q#14
var Customername=prompt("Enter name");
var newdate=new Date().getMonth();
document.write("<h1>K-Electric Bill</h1>")
document.write("Customer's Name: "+Customername+"<br>")
document.write("Month: "+newdate)
document.write("<br>Number of units: 410")
document.write("<br>Charges per unit: 16")
document.write("<br><br>Net amount payable (within due date)"+410*16)
document.write("<br>Late payment surcharge: 350")
document.write("<br>Gross amount payable (after due date): "+((410*16)+350))
//       --------------------------******************-------------------------
//chapter (34-38)
//Q#1
function curentdatetime(){
    var d=new Date();
    return d;
}
document.write("<br>"+ curentdatetime())
//Q#2
function greeting(firstname,lastname){
    fullname=firstname+" "+lastname;
    return fullname;
}
alert(greeting(prompt("enter first name"), prompt("enter last name")))
//Q#3
function add(a,b){
    var sum=a+b;
    return sum;
}
document.write("<br>sum of a & b: "+add(parseInt( prompt("enter value of a")),parseInt(prompt("enter value of b"))));
//Q#4
function calc(num1,num2,operator){
    if (operator==="+"){
        var add=num1+num2;
        return add;
    }
    if(operator==="-"){
        var sub=num1-num2;
        return sub;
    }
    if(operator==="*"){
        var multiply=num1*num2;
        return multiply;
    }
    if(operator==="/"){
        var div=num1/num2;
        return div;
    }
    if(operator==="%"){
        var mode=num1%num2;
        return mode;
    }
}
document.write("<br>"+calc(prompt("enter num1"),prompt("enter num2"),prompt("enter operator")))
//Q#5
function sqr(number){
    return document.write("<br>the square of number is: "+Math.sqrt(number));
}
sqr(parseInt(prompt("enter number for square")))
//Q#6
function factorialize(num){
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--; 
      result = result * num; 
    }
    return result; 
  }
document.write("<br>The factorial of given number is: "+factorialize(parseInt(prompt("enter factorial num"))))
//Q#7
function count(start,end){
   for(i=start; i<=end; i++){
       document.write("<br>"+i)
   }
}
count(parseInt (prompt("enter starting number for counting")),parseInt (prompt("enter ending number for counting")))
//Q#8
function hyp(){
    function square(){
        var p2=5;
        var b2=6;
        var per=Math.pow(p2,2);
        var base=Math.pow(b2,2)
        var add=per+base;
        return add;
    }
var h=square();
var result=Math.pow(h,2)
return result;
}
document.write("<br>Hypotneus of right triangle is: "+hyp())
//Q#9
function areaof(w,h){
    var Area=w*h;
    return document.write("<br>The Area is: "+Area)
}
areaof(prompt("enter width"),prompt("enter height"));
//Q#10
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    var a=joinArray; 
    if(a===str){
      return   document.write("<br>"+a+" is palindrome")
    }
    if(a!=str){
       return document.write("<br>"+a+" is not palindrome")
    }
}
reverseString(prompt("enter palindrome or other"));
 //Q#11
 function capitalize(input) {  
    var words = input.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    return CapitalizedWords.join(' ');  
}  
document.write("<br>"+capitalize(prompt("enter any thing")))
//Q#12  
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  var word = findLongestWord(prompt("Enter your string").split(" "));
  document.write("<br>"+word+" is the longest word");
  //Q#13
function find(string,letter){
    var letter_Count = 0;
 for (var i = 0; i < string.length; i++) 
 {
    if (string.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<br>It has "+find(prompt("enter string"),prompt("enter letter"))+" occurences");
//Q#14
function calccircumference(r){
    var c=2*3.14*r;
    return document.write("<br>the circumferences of the circle is: "+c)
}
calccircumference(prompt("enter radius for circumference"))
function calcarea(r){
    var A=3.14*Math.pow(r,2);
    return document.write("<br>the Area of the circle is: "+A);
}
calcarea(prompt("enter radius for area"));
        //-----------------***************-----------------------