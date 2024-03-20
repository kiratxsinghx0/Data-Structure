/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0] ;
    let mainPrefix = ''
    for(let i =1 ; i < strs.length ; i++){
    for(let j = 0 ; j <prefix.length ; j++){
        if(strs[i][j] == prefix[j]){
            mainPrefix = mainPrefix += strs[i][j]
        }
        else if(j == 0){
            return "";
        }
        else if(strs[i][j] !== prefix[j]){
            break ;
        }
    }
    prefix = mainPrefix ;
    mainPrefix = ""
    }
    return prefix ;
};
