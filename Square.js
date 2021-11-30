class Square extends Shape
{
    constructor(x,y,newLength)
    {
        super(x,y);

        var __length__;

        this.setLength = function (length)
        {
            __length__ = (length > 0)? length : 1;
        };
        this.getLength = function()
        {
            return __length__;
        };

        this.setLength(newLength);
    }

    draw() {
        super.draw();
        let offset = this.createHorizontalOffset();
        let square = "";
        for (let i = 0; i < this.getLength(); i++) {
            let line = "\n" + offset;
            for (let j = 0; j < this.getLength(); j++)
                line += "*";

            square += line;
        }

        console.log(square);
    }

    displayInfo()
    {
        return "Square " + super.displayInfo();
    }

};
