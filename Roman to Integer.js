var romanToInt = function (s) {
    let hashMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let totalSum = 0 ;
    for(let i = s.length - 1 ; i >= 0 ; i-- ){
        if(hashMap.get(s[i]) > hashMap.get(s[i - 1 ])){
            totalSum = totalSum + hashMap.get(s[i]) - hashMap.get(s[i - 1 ])
            i-- ;
        }
        else{
            totalSum = totalSum + hashMap.get(s[i])
        }
    }
    return totalSum ;
};
