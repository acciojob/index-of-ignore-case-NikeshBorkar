function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let n=s1.length;
	let m=s2.length;
	for (let i = 0; i <= n - m; i++) {
        let match = true;
        for (let j = 0; j < m; j++) {
            let ch1 = s1.charAt(i + j).toLowerCase();
            let ch2 = s2.charAt(j).toLowerCase();
            if (ch1 !== ch2) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
	return -1;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

