// 1. Announcement _____________________________________________________________

// const regExp = /something/;
// const _regExp = new regExp(`${something}`);

//2. Flags _____________________________________________________________________

//i - ignoreCase;
// console.log('I hate JavaScript'.match(/hate/));
// console.log(/love/i.test('LOVE'));

//g - global search;
// console.log('I love (hate), love JS'.match(/love/g));

//m - multy string search;
// const str = `1 dog
// 2 dog
// 3 dog`
// console.log(str.match(/^\d/gm));

// 3. Methods __________________________________________________________________

//str.match(regexp);
//const mySearch = 'I love JavaScript'.match(/like/g) || [];
//mySearch[0];

// console.log('I love JS'.replace(/love/, 'hate'));

//regexp.test(str);

// 4. Latter classes ___________________________________________________________

// \d - any Number;
// \w - lat. latter, number, _
// \s - space;
// \D - any character expect \d;
// \W - any character expect \w;
// \S - any character expect \s;
// . - any character expect \n;

// console.log(/./test('\n'));
// console.log(/\d/.test('h 1'));
// console.log(/\D/.test('1'));

// 5. Anchors __________________________________________________________________

//^ - start string;
//$ - end string;
// - \b boundary word;
 
// console.log(/^\d\d/.test('25 May'));
// console.log(/\d\d$/.test('May 5'));
// console.log(/\d$/.test('May 5'));

// console.log(/\bJava\b/.test('Java!'));
// console.log(/\bJava\b/.test('JavaScript'));

// 6. Special simbol ___________________________________________________________

// [ \ ^ $ ( ) . | ? * + / 

//const myReg = new RegExp('\\^\\$\\.', 'i');

// 7. Sets and rangers _________________________________________________________

// [auh] - any simbol from brackets; 
// [0-9] - any numbers from brackets, (\d);
// [a-z];
// [A-Z];
// [^a-z];
// [^0-9], (\D);

//8. Quantifiers

// {n} - exact value;
// {n1, n2} - from n1 to n2;
// {n,} - more or equal n2;

// console.log(/\d{4}/.test('Round 2222 21321323 2'));
// console.log('Round 2222 21321323 2'.match(/\d{4,}/));

// + {1,}
// ? {0,1}
// * {0,}

//9. Greed and laziness ________________________________________________________

//???????????????????????????;