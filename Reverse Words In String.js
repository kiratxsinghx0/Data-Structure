var reverseWords = function(s) {
    let reverseStr = s.trim().split("").reverse().join("") ;
    let left = 0;
    let right = 0 ;
    let ar = [] ;
    let i = 0
    while(i < s.length){
        if(reverseStr[i] !=  ' '){
            right = i ;
        }
        else if(reverseStr[i] == " " && i !== right) {
            ar.push(reverseStr.substring(left , right+ 1).split("").reverse().join("").trim()) ;
            right = i  + 1;
            left = i  + 1;
        }else{
            left++ ;
            right++ ;
        }
          if(i == s.length - 1){
            ar.push(reverseStr.substring(left , right+ 1).split("").reverse().join("").trim()) ;
        }
        i++ ; 
    }    
    console.log("ar::::", ar)
    return ar.join(" ") ;
};
