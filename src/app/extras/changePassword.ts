export class changePassword{
    constructor(
        public password:string,
        public repassword:string,
        public writecode:string,        
        public authcode:string,
    ){}
}