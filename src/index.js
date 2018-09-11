/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  if(preferences.length > 2){
    var love_triangles = 0;
    
   for(var n = 0; n < preferences.length; n++){
    if(preferences[n] != n+1){  
    var k = preferences[n];
       if(preferences[k-1] != n+1 && preferences[k-1] != k){
           var m = preferences[k-1];
           if(preferences[m-1] == n+1){
               love_triangles++;
           }
       }
   }
  }
    return love_triangles/3;
}else return 0;
};
