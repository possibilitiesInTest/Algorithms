


const buildString = function(string) {
    const builtString = [];
    for(let p = 0; p < string.length; p++) {
        if(string[p] !== '#') {
            builtString.push(string[p]);
        } else {
            builtString.pop();
        }
    }
    
    return builtString;
}

var backspaceCompare = function(S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    
    if(finalS.length !== finalT.length) {
        return false
    } else {
        for(let p = 0; p < finalS.length; p++) {
            if(finalS[p] !== finalT[p]) {
                return false
            }
        }
    }
    
    return true;
};