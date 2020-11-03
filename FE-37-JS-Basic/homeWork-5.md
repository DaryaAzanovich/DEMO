## Task #1 

##### Read

+ https://learn.javascript.ru/function-basics
+ https://learn.javascript.ru/function-expressions
+ https://learn.javascript.ru/arrow-functions-basics
+ https://learn.javascript.ru/javascript-specials
+ https://learn.javascript.ru/switch
+ https://learn.javascript.ru/while-for
+ https://learn.javascript.ru/nullish-coalescing-operator
+ 

## Task #2

##### Complete exercise

1. Lets go

+ Напишите программу для вычисления общей стоимости покупки телефона. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.

+ После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.

+ Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.

+ Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара» и «предела трат», также как и переменную для вашего «баланса банковского счета».

+ Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.

+ **Бонусная задача:** Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!
2. Написать функцию, которая принимает в виде параметров число и коэффициент, в зависимости от значения первого параметра вы столько раз добавите числа в массив (Узнать у пользователя). С помощью коэффициента увеличите или уменьшите значения в массиве.(Узнать у пользователя) В консоль вывести 2 массива, до и после применения коэффициента.

3. Написать функцию которая возвращает строку обрезанную в зависимости от 
переданных в нее значений от и до, здесь Вам нужно почитать про работу slice() или substring() для строк.

4. Дан обьект:

```
    let family = {
        amount: 5,
        familyMembers: [
            {name: 'Borya', age: 15},
            {name: 'Tolya', age: 54},
            {name: 'Anjela', age: 45},
            {name: 'Snejana', age: 14},
            {name: 'Gavriil', age: 24},
        ],
    }
```
Написать метод для объекта family который вернёт самого старого члена семьи и добавит его в объект в качестве нового свойства.

5. 

 --- Directions
 Write a function that accepts a positive number N.
 The function should console log a step shape
 with N levels using the # character.  Make sure the
 step has spaces on the right hand side!
 --- Examples
 ```
   steps(2)
       '# '
       '##'
   steps(3)
       '#  '
       '## '
       '###'
   steps(4)
       '#   '
       '##  '
       '### '
       '####'
```
6. Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

7. Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

```
    hello "john"   => "Hello, John!"
    hello "aliCE"  => "Hello, Alice!"
    hello          => "Hello, World!" # name not given
    hello ''       => "Hello, World!" # name is an empty String
```

8. Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

9. The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input

```
    [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
```

Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output

```
    ["Open", "Open", "Senior", "Open", "Open", "Senior"]
```

10. Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Examples

```
    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

11. 
```
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
```

12. Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
