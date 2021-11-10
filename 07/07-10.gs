function myFunction07_10_02() {
  const obj = [
    {name: 'Bob', favorite: ["apple", "curry", "video game"]},
    {name: 'Tom', favorite: ["orange", "noodle", "programming"]},
    {name: 'Jay', favorite: ["grape", "kimchi", "chess"]}
  ];

  console.log(JSON.stringify(obj));
}

function myFunction07_10_03() {
  let str = '[';
  str += '{"name": "Bob", "favorite": ["apple", "curry", "video game"]},';
  str += '{"name": "Tom", "favorite": ["orange", "noodle", "programming"]},';
  str += '{"name": "Jay", "favorite": ["grape", "kimchi", "chess"]}';
  str += ']';

  const persons = JSON.parse(str);
  
  console.log(persons[0].name); //Bob
  console.log(persons[1].favorite[2]); //programming
  
  const {name, favorite} = persons[2];
  console.log(name, favorite); //Jay ['grape', 'kimchi', 'chess']
}