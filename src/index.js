module.exports = function check(str, bracketsConfig) {
    const stack = [];
    for (let i = 0; i < str.length; i++){
        for (const el of bracketsConfig) {
          if(el[1] === str[i]){
            const lastInStack = stack.length > 0 ? stack[stack.length-1] : undefined;
            if(el[0] === el[1] && (lastInStack != el[0] || lastInStack == undefined)){    
            } else if(lastInStack != el[0] || lastInStack == undefined){        
                return false;
            } else {
                stack.pop();
                continue;
            }
          }
          if(el[0] === str[i]){
            stack.push(str[i]);
          }
        }
      }
      return stack.length === 0;
}
