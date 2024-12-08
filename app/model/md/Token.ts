class Token{
    readInFromString(content:string):void{}
    parseAsHtml():string{return "";}
}

class TokenMap{
    tokenList:Token[] = new Array;
    readInFromString(content:string):void{
        
    }
    parseAsHtml():string{
        let s = "";
        for(const token of this.tokenList){
            s += token.parseAsHtml();
        }
        return s;
    }
}

class ContentText extends Token{
    text = "";
    readInFromString(text: string): void {
        this.text = text;
    }
    parseAsHtml(): string {
        return this.text;
    }
}

class RawText extends Token{
    tokenmap = new TokenMap();
    readInFromString(content: string): void {
        
    }
    parseAsHtml(): string {
        return this.tokenmap.parseAsHtml();
    }
}

class Bold extends RawText{
    parseAsHtml(): string {
        return `<strong>`
         + super.parseAsHtml()
         +`</strong>`;
    }
}

class Italic extends RawText{
    parseAsHtml(): string {
        return `<em>`+
        + super.parseAsHtml()
        +`</em>`;
    }
}

class InlineCodeSpace extends ContentText{
    parseAsHtml(): string {
        return `<code>`
        +super.parseAsHtml()
        +`</code>`;
    }
}

class Title extends RawText{
    level = 0;
    parseAsHtml(): string {
        return `<h${this.level}>`
        + super.parseAsHtml()
        + `</h${this.level}>`
    }
}

class HorizontalRule extends ContentText{
    parseAsHtml(): string {
        return `<hr>`;
    }
}

class Strikethrough extends RawText{
    parseAsHtml(): string {
        return `<s>`
        + super.parseAsHtml()
        +`</s>`;
    }
}