// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (let i = 0; i <= 3; i++) {
    let arr = (musicians[i] + ' plays ' + instruments[i]);
 arr.push(i);
 
    console.log(arr)
  }
}
theBeatlesPlay();