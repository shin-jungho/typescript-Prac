// 기본 매개변수
const sendGreeting = (message = 'hello', userName = 'there') => console.log(`${message}, ${userName}`);
sendGreeting();
sendGreeting('good morning');
sendGreeting('good afternoon', 'jenny');
