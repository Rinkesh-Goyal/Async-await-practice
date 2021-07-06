// async function test(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise;

//     console.log( result);
// }

// test();
// console.log('hello');

// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       console.log(resolve);
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
// }
  
//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     console.log(result);
//   }
  
//   f();

//   class Waiter {
//     async wait() {
//       return await Promise.resolve(1);
//     }
//   }
  
//   new Waiter()
//     .wait()
//     .then(alert);


//     async function f() {

//         try {
//           let response = await fetch('http://no-such-url');
//           let user = await response.json();
//         } catch(err) {
//           alert(err); 
//         }
//     }
      
//     f();


//     async function f() {
//         let response = await fetch('http://no-such-url');
//     }
      
      
//     f().catch(alert);



    // async function loadJson(url) {
    //     let response = await fetch(url);
    //     if(response.status === 200) return await response.json();
    //     throw new Error(response.status);


    //     // return fetch(url)
    //     //   .then(response => {
    //     //     if (response.status == 200) {
    //     //       return response.json();
    //     //     } else {
    //     //       throw new Error(response.status);
    //     //     }
    //     //   });
    //   }
      
    //   loadJson('no-such-user.json')
    //     .catch(alert); // Error: 404


    //     class HttpError extends Error {
    //         constructor(response) {
    //           super(`${response.status} for ${response.url}`);
    //           this.name = 'HttpError';
    //           this.response = response;
    //         }
    //       }
          
    //       async function loadJson(url) {
    //         let response = await fetch(url);
    //         console.log(response.status)
    //         if(response.status === 200) return await response.json();
    //         throw new HttpError(response);
            
            
            
    //         // return fetch(url)
    //         //   .then(response => {
    //         //     if (response.status == 200) {
    //         //       return response.json();
    //         //     } else {
    //         //       throw new HttpError(response);
    //         //     }
    //         //   });
    //       }
    //     //   function demoGithubUser() {
    //     //     let name = prompt("Enter a name?", "iliakan");
          
    //     //     return loadJson(`https://api.github.com/users/${name}`)
    //     //       .then(user => {
    //     //         alert(`Full name: ${user.name}.`);
    //     //         return user;
    //     //       })
    //     //       .catch(err => {
    //     //         if (err instanceof HttpError && err.response.status == 404) {
    //     //           alert("No such user, please reenter.");
    //     //           return demoGithubUser();
    //     //         } else {
    //     //           throw err;
    //     //         }
    //     //       });
    //     //   }
    //       // Ask for a user name until github returns a valid user
    //       async function demoGithubUser() {
    //           let user;

    //         while(true){
    //             let name = prompt("Enter a name?", "iliakan");
          
    //             try{
    //                 user=await loadJson(`https://api.github.com/users/${name}`)
    //                 // console.log(user);
    //                 break;
    //             }catch(err){
    //                 // console.log(err.response.status)
    //                 if (err instanceof HttpError && err.response.status == 404) {
    //                     alert("No such user, please reenter.");
    //             }else {
    //               throw err;
    //             }
    //         }
            
    //       }
    //       alert(`Full name: ${user.name}.`);
    //             return user;
          
    //     }
    // demoGithubUser();


    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
      
        return 10;
      }
      
      function f() {
        // ...what should you write here?
        // we need to call async wait() and wait to get 10
        // remember, we can't use "await"

        wait().then(alert);
      }

      f();