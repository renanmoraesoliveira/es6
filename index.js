class Message{
    constructor(text = '', created = Date.now()){
        this.text = text;
        this.created = created;
    }

    get created(){
        return this._created;
    }

    set created(created){
        if (!created || isNaN(created)){
            throw new Error('Invalid created');
        }
        this._created = created;
    }
    toString(){
        return `Message created at: ${this.created} - Text: ${this.text}`;
    }
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday Message', Date.now() - 86400);

console.log(emptyMessage);
console.log(textMessage);
console.log(String(emptyMessage));
console.log(String(textMessage));
