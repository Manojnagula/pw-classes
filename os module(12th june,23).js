const fs = require('fs');
// //asynchronous way of reading file

// console.log('start reading');

// fs.readFile('E:\\practise js\\4.fs\\input.txt',function(err, data){
// if(err)
// {
//     console.log('error:',err);
// }
// console.log('Data:',data.toString());
// console.log('success');
// })

// console.log('other stuff');

// //synchronous way of doing it
// console.log('start reading');


// const data = fs.readFileSync('E:\\practise js\\4.fs\\input.txt');

//  console.log('data:',data.toString());

//  console.log('other stuff');
//  //
//  //read

//  const fs = require('fs');
// const buf = new Buffer(1024);
// fs.open('E:\\practise js\\4.fs\\input.txt', 'r+', function(err, fd){
//     if (err) {
//         console.log('error in opening file');
//     } else {
//         console.log('success in opening file');
//     }
//     fs.read(fd, buf,0,buf.length,0,function(error,bytes){
//         if(error){
//             console.log('error in opening file now');
//         }
//         else{
//             console.log('file opened');
//         }
//         console.log('data:',buf.slice(0,bytes).toString())
//     })
//     fs.close(fd, function(err){
//         if(err){
//             console.log('error in closing the file')
//         }else{
//             console.log('file closed')
//         }
//     })
// });
// //write
// fs.writeFile('E:\\practise js\\4.fs\\input.txt','updated by manoj',function(err,){
//     if(err){
//         console.log('error in writing file')
//     }
//     else{
//         console.log('success in writting')
//     }
// });

// append

// fs.appendFile('E:\\practise js\\4.fs\\input.txt','  itself','utf-8',function(err){
//     if(err){
//         console.log('erron in updating');
//     }
//     else{
//       console.log('  success in appending')
//     }
// })

// append in async fashion

// try{
//     fs.appendFileSync('E:\\practise js\\4.fs\\input.txt','--pwskills');
// }catch(e){
//     console.log(e);
// }

fs.unlink('E:\\practise js\\4.fs\\input.txt',function(err){
    if(err){
        console.log('error in deleting file')
    }
    else{
    console.log('success in deleting file')
}})
