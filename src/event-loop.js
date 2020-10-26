


(function(){

  setTimeout(function() {
    console.log(' 0 - setTimeout')
  },0)

  const asyncConsoleLog = function(){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve("promise resolve");
      },0)

      reject;
    })
  }

  console.log(' 1 - random console log ')

  for(let item = 2; item <4; item++){
    asyncConsoleLog().then(function(){console.log(`${item} - loop promise then`)});
  }

  for(let item = 4; item < 6; item ++){
    setTimeout(function(){console.log(`${item} loop setTimeout `)},0);
  }

  console.log(' 6 - random console log ')

  asyncConsoleLog()
    .then(function(){
      console.log(" 7 - promise then")
      return "";
    });

  return;
})()


(function(){
  setTimeout(function(){
    console.log(1);
  },1000)
  setTimeout(function(){
    console.log(2);
  },1000)
  setTimeout(function(){
    console.log(3);
  },1000)
  setTimeout(function(){
    console.log(4);
  },1000)

  // set timeout time is the minimum time the function is going to be called;
  // setTimeout method if a function aform web API, not part of JS itself;
  
})();

// reference to really good souce explaining that event loop is
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// EVENT LOOP EXPLAINED
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D