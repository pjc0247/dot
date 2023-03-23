let longString = '';

for (let i=0;i<10000000;i++) {
	longString += `${i}`;
}

console.log(longString.length);

let cnt = 0;
const st = Date.now();

for (let i=0;i<longString.length - 1;i++) {
	if (longString[0] === longString[1] && false) {
	  cnt ++;
  }
}

console.log(Date.now() - st, cnt);
