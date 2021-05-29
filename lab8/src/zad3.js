class Fraction {
    constructor(numerator,denumerator){
        this.numerator=numerator;
        this.denumerator=denumerator
    }
    multiplyBy(wart){
        if( typeof wart === 'number'){
            this.numerator = this.numerator * wart
        }
        else{
            this.numerator = this.numerator * wart.numerator
            this.denumerator = this.denumerator * wart.denumerator
        }
    }
    print(){console.log(this.numerator+"/"+this.denumerator)}
    static multiply(x,y){
        const num= x.numerator * y.numerator
        const denum= x.denumerator * y.denumerator
        return new Fraction(num,denum)
    }
}

const newfract= new Fraction(1,2)
const secondfract= new Fraction(3,5)
newfract.multiplyBy(secondfract)
newfract.print()
newfract.multiplyBy(2)
newfract.print()
console.log(Fraction.multiply(newfract,secondfract))