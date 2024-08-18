// passwordService.ts
export default function generatePass(){
    let password:string = '';
    let characters:string = 'Aa@0987654321abcdefghiFGHIJKLMOP!PedoMellonAMinno';
    let passwordLength = 8;
    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    //console.log('senha:' + password);
    return password;
}