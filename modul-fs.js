/* Prosty program usuwający całe ścieżki, a nie tylko pojedynczy element */
const { rm } = require('fs').promises
const { argv } = require('process')

;(async () => {
  const oldFile = argv[2]

  try {
    await rm(oldFile, {
      recursive: true,
    })
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`${oldFile} does not exist.`)
    } else {
      console.log('Unknown error:', e)
    }
  }
})()

/* Prosty program do zmiany nazwy pliku i do przenoszenia */
// const {rename} = require('fs').promises;
// const { argv } = require('process');

// (async ()=>{
//   const oldFile = argv[2]
//   const newFile = argv[3]

//   try {
//       await rename(oldFile, newFile)
//   } catch (error) {
//     if(error.code === 'ENOENT') {
//       console.log(`${oldFile} does not exist.`)
//     } else {
//       console.log('Unknown error:', e)
//     }
//   }
// })()

// const {readdir, stat} = require('fs').promises;

// async function showFilesInDirectories(directory) {
//   try{
//     const fileNames = await readdir(`${directory}`);
//     // console.log(files)
//     for (const fileName of fileNames) {
//       const fileStat = await stat(`${directory}/${fileName}`)

//       if(fileStat.isDirectory()) {
//         console.log(`${directory}/${fileName}`)
//         await showFilesInDirectories(`${directory}/${fileName}`)
//       } else {
//         console.log(`${directory}/${fileName}`)
//       }
//     }
//   } catch (error) {
//     console.log('Oh, nooooo:', error)
//   }
// };

// showFilesInDirectories('.')

// const {readFile, writeFile} = require('fs').promises;

// (async () => {
//   try{
//     const array = JSON.parse(await readFile('./data/inpuut1.json', 'utf-8'))
//     const sum = String(array.reduce((acc, current) => acc+current))

//     await writeFile('./data/sum.txt', sum)
//     console.log('Sum has been saved now')
//   } catch (error) {
//     console.log('Oh, nooooo:', error)
//   }
// })();

// const { readFile, writeFile, appendFile } = require('fs').promises;

// const FILE_PATH='hello.txt';

// (async () => {
//   try {
//     const value = Number((await readFile(FILE_PATH, 'utf8')).split('\n').splice(-1))
//     await appendFile(FILE_PATH,`${value===0 ? '1': '\n'+ value*2}`)
//    } catch(error) {
//       console.log('Sth went wrong!', error)
//     }
// })()

// const {lookup} = require('dns').promises;

// (async () => {
//     try {
//       const {address} = await lookup('google.com');
//       console.log(address);
//     } catch(err) {
//       console.log('Oh no', err);
//     }
//   })();

// const {readFile} = require('fs').promises;

// (async () => {
//   try {
//     const data = await readFile('./index.js', 'utf8');
//     console.log(data);
//   } catch(err) {
//     console.log('Oh no', err);
//   }
// })();

// readFilePromise('./inndex.js', 'utf-8').then(data => console.log(data)).catch(error => console.log('Oh, noooo!', error))

// console.log('me first')
