// Q. 해당 코드의 프로그램은 어떤 원리를 취하고 있을까요? 팀 구성원들과 토의 하시기 바랍니다.
// Q. 제목 처럼 해당 코드는 동작과정에서의 문제는 없지만, 최종적으로는 치명적인 문제가 존재합니다. 어떤 사항이 문제가 될까요??

const http = require('http');
const fs = require('fs');

const setDomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = [];
  try {
    if (
      typeof tagName === 'string' &&
      typeof props === 'object' &&
      typeof attributeName === 'string'
    ) {
      if (getDataArr.length === 0) {
        let tempArray = [];
        tempArray.push('<');
        tempArray.push(tagName + '\u00A0' + attributeName + '="');
        for (const keys in props) {
          tempArray.push('\u00A0' + keys + ':' + props[keys] + ';');
        }
        tempArray.push('">');
        getDataArr.push(tempArray.join(''));
      }
    }
    getDataArr.push(content);
    getDataArr.push(`</${tagName}>`);
  } catch (e) {
    console.error(e, 'need checkong arguments data type');
  } finally {
    return getDataArr.join('');
  }
};

let dynamicElement = setDomComponent('div', 'hello', 'style', {
  width: '100px',
  height: '100px',
  'background-color': 'cadetblue',
});

const mainPage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  ${dynamicElement}
  </body>
  </html>
`;

const byteChecker = (string) => {
  return string.length * 2 + 'byte';
};

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(mainPage);
    response.end();
  })
  .listen(5555, () => {
    console.log(byteChecker(mainPage), 'server listening on port 5555');
  });
// test
