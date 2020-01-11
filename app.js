var a = (p) =>console.log("Bonjour")
var b = function(p){return console.log("Bonjour")}
function toArrowFunction(_, funcArgs, accolade, arrowFuncArgs, first_character){
    return `(${funcArgs || arrowFuncArgs}) =>${accolade || first_character}`
}
console.log(
    a.toString().replace(/function *\(([^\r]+)?\) *({)|\(([^\r]+)?\) *=> *([^\{]|{)/g, toArrowFunction), 
    b.toString().replace(/function *\(([^\r]+)?\) *({)|\(([^\r]+)?\) *=> *([^\{]|{)/g, toArrowFunction).replace(/{ *return */, () =>{
        
    })
)
