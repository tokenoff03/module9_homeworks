const parser = new DOMParser();
const xmlString = `
    <list>
        <student>
            <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
//Длинные имена конечно, но за то понятно :)
const xmlDOM = parser.parseFromString(xmlString, `text/xml`);
const listNode = xmlDOM.querySelector(`list`);
const studentFirst = listNode.firstElementChild;
const studentSecond = listNode.lastElementChild;

const firstStudNameNode = studentFirst.querySelector(`name`);
const firstStudFirstName = firstStudNameNode.querySelector(`first`).textContent;
const firstStudSecondName = firstStudNameNode.querySelector(`second`).textContent;
const firstStudAge = Number(studentFirst.querySelector(`age`).textContent);
const firstStudProf = studentFirst.querySelector(`prof`).textContent;
const firstStudLang = firstStudNameNode.getAttribute(`lang`);

const secondStudNameNode = studentSecond.querySelector(`name`);
const secondStudFirstName = secondStudNameNode.querySelector(`first`).textContent;
const secondStudSecondName = secondStudNameNode.querySelector(`second`).textContent;
const secondStudAge = Number(studentSecond.querySelector(`age`).textContent);
const secondStudProf = studentSecond.querySelector(`prof`).textContent;
const secondStudLang = secondStudNameNode.getAttribute(`lang`);

let list = [
    {
        name: firstStudFirstName,
        age: firstStudAge,
        prof: firstStudProf,
        lang: firstStudLang
    },
    {
        name: secondStudFirstName,
        age: secondStudAge,
        prof: secondStudProf,
        lang: secondStudLang
    }
]

const result = {
    list: list
};
console.log(result);
