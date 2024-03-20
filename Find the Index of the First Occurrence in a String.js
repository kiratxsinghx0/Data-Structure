var strStr = function (haystack, needle) {
    if (haystack.indexOf(needle) == -1) {
        return -1;
    }
    else {
        for (let i = 0; i <= haystack.length  - needle.length; i++) {
           for(let j = 0 ; j < needle.length ; j++){
               if(haystack[j + i] !== needle[j] ){
                   break ;
               }
               if(j == needle.length -1){
                   return i ;
               }
           }
        }
    }
};
