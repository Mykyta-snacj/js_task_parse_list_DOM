'use strict';

const list = document.querySelector('ul');

const listOfObj = [];

for (let i = 0; i < list.children.length; i++) {
  const value = list.children[i].attributes['data-salary'].value.replace(
    /,/g,
    '.',
  );

  listOfObj.push({ salary: Number(value.substring(1)), el: list.children[i] });
}

const sortedList = listOfObj.sort((a, b) => b.salary - a.salary);

for (const key of sortedList) {
  list.append(key.el);
}
