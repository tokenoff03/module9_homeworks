const jsonString = `
    {
        "list": [
            {
                "name": "Petr",
                "age": "20",
                "prof": "mechanic"
            },
            {
                "name": "Vova",
                "age": "60",
                "prof": "pilot"
            }
        ]
   }
`;
//Вроде бы все правильно.
const data = JSON.parse(jsonString);
const list = data.list;

const result = {
    list: list
};
console.log(result);

