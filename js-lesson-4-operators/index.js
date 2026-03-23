// 1-Aritmatik Operatorler (+,-,*,/,++,--,%)
let num1=13;
let num2=42;
let result1=num1+num2;
let result2=num1-num2;
let result3=num1*num2;
let result4=num1/num2;
let result5=num2%num1;
// 2-Atama Operatorleri(+=,-=,/=,*=,%=)
result1=num2;
result1=num2+4;
result1 +=num1;
result5 %=num2;
// 3-Karşılaştırma Operatorleri(==,!=,===,<,>,<=,>=)
result1 = num1!=num2;
result2 = num1==num2;
result3 =10==="10"//tip kontrolu yapar int,string vs
result4=num1 <= num2;
result5=num1 >= num2;
// 4-Mantıksal Operatorler(&&, ||,!)
result1 = (num1 < num2) && (num1 == 13);
result2 = (num1 > num2) || (num2 == 42);
result3 = !(num1 > num2);


console.log(result1+" "+result2+" "+result3+" "+result4+" "+result5)
