var fullJustify = function (words, maxWidth) {
    let tempArr = []
    let tempStr = "";
    let arrToReturn = [];
    for (let i = 0; i < words.length; i++) {
        // if (i !== words.length - 1) {
            if (words[i].length + tempStr.length + tempArr.length <= maxWidth) {
                tempArr.push(words[i]);
                tempStr += words[i];
                console.log("tempArr :", tempArr)
                console.log("tempStr :", tempStr)
                if(i == words.length - 1){
                    tempStr =  tempArr.join(" ") ;
                    arrToReturn.push(tempStr + (" ").repeat(maxWidth - tempStr.length))
                }
            }
            else {
                let totalSpaces = maxWidth - tempStr.length;
                let totalWords = tempArr.length - 1;
                tempStr = ""
                for (let j = 0; j < tempArr.length; j++) {
                    if (j !== tempArr.length - 1) {
                        let spacesToAdd = Math.ceil(totalSpaces / totalWords);
                        tempStr = tempStr + tempArr[j] + (" ").repeat(spacesToAdd);
                        totalSpaces -= spacesToAdd;
                        totalWords--
                    }
                    else {
                        tempStr = tempStr + tempArr[j];
                        if (tempStr.length !== maxWidth) {
                            tempStr = tempStr + (" ").repeat(maxWidth - tempStr.length)
                        }
                        arrToReturn.push(tempStr);
                        tempStr = "";
                        tempArr = [];
                        tempArr.push(words[i]);
                        tempStr += words[i];
                         if(i == words.length - 1){
                    tempStr =  tempArr.join(" ") ;
                    arrToReturn.push(tempStr + (" ").repeat(maxWidth - tempStr.length))
                }
                    }
                }
            }
        // } else {

        // }
    }
    return arrToReturn;
};
