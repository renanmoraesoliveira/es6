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

        if(Message.prototype.hasOwnProperty.call(this, '_created')){
            throw new Error('Created already defined');
        }

        this._created = created;
    }
    toString(){
        return `Message created at: ${this.created} - Text: ${this.text}`;
    }
}

class ImageMessage extends Message{
    constructor(text = '', created = Date.now(),
                url = '', thumbnail = ''){
       super(text, created);
       this.url = url;
       this.thumbnail = thumbnail;
    }
    toString(){
        return `Photo${super.toString()}, url: ${this.url}, thumbnail: ${this.thumbnail}`;
    }
}

var text = 'Some Text';
var created = Date.now();

var duckTypeMessage = {
    text,
    created
};

var emptyMessage = new Message();
var textMessage = new Message('Yesterday Message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(textMessage);
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));
console.log(duckTypeMessage);

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);