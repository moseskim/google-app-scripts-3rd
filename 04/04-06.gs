function myFunction04_06_01() {
  const members  = ['Bob', 'Tom', 'Jay'];
  for (const member of members) {
    console.log(member);
  }
  
  for (const char of 'Hello') {
    console.log(char);
  }
}

function myFunction04_06_02() {
  const members  = ['Bob', 'Tom', 'Jay'];
  for (let i = 0; i < 3; i++) {
    console.log(`${i}: ${members[i]}`);
  }  
  
  for (let i = 0; i < 5; i++) {
    console.log(`${i}: ${'Hello'[i]}`);
  }  
}

