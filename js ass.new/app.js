// 1. Display current date & time
function showDateTime() {
    const now = new Date();
    document.write("Current Date and Time: " + now + "<br>");
  }
  showDateTime();
  
  // 2. Greet user using full name
  function greetUser(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "!");
  }
  greetUser("Ali", "Khan");
  
  // 3. Add two numbers input by user
  function addNumbers() {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    return num1 + num2;
  }
  alert("Sum is: " + addNumbers());
  
  // 4. Calculator function
  function calculator(num1, num2, operator) {
    switch(operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      default: return "Invalid Operator";
    }
  }
  alert("Result: " + calculator(10, 5, '+'));
  
  // 5. Square of a number
  function square(num) {
    return num * num;
  }
  console.log("Square of 5 is:", square(5));
  
  // 6. Factorial of a number
  function factorial(n) {
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  console.log("Factorial of 5 is:", factorial(5));
  
  // 7. Display counting between two numbers
  function displayCounting(start, end) {
    for(let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  displayCounting(1, 5);
  
  // 8. Hypotenuse using nested functions
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
      return x * x;
    }
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
  }
  console.log("Hypotenuse is:", calculateHypotenuse(3, 4));
  
  // 9. Area of rectangle
  function areaRect1(width, height) {
    return width * height;
  }
  console.log("Area (values):", areaRect1(5, 10));
  
  let w = 4, h = 7;
  function areaRect2(w, h) {
    return w * h;
  }
  console.log("Area (variables):", areaRect2(w, h));
  
  // 10. Check if string is palindrome
  function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  console.log("Is 'madam' palindrome?", isPalindrome("madam"));
  
  // 11. Capitalize first letter of each word
  function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  console.log(capitalizeWords("the quick brown fox"));
  
  // 12. Find the longest word in a string
  function findLongestWord(str) {
    let words = str.split(" ");
    let longest = words[0];
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  console.log(findLongestWord("Web Development Tutorial"));
  
  // 13. Count specific letter in string
  function countLetter(str, letter) {
    let count = 0;
    for(let char of str) {
      if(char === letter) count++;
    }
    return count;
  }
  console.log("Occurrences of 'o':", countLetter("JSResourceS.com", 'o'));
  
  // 14. Circle Circumference and Area
  function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area is " + area);
  }
  calcCircumference(5);
  calcArea(5);
  