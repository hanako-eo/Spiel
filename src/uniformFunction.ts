export default (a: (...params: any) =>any) =>{
    function toArrowFunction(_: string, _f: string, funcArgs: string, accolade: string, arrowFuncArgs: string, first_character: string){
        return `(${funcArgs || arrowFuncArgs}) =>${accolade || first_character}`
    }
    let aRet = false
    let av = a.toString().replace(/(function)? *[A-z0-9_$] *\(([^\r]+)?\) *({)|\(([^\r]+)?\) *=> *([^\{]|{)/g, toArrowFunction).replace(/{ *return */g, () =>{
        aRet = true
        return ""
    })
    if(aRet) av = av.split("").reverse().join("").replace(/}/, "").split("").reverse().join("")
    return av
}
