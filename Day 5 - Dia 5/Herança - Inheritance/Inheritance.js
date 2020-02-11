/*
  * Escreva um código que adicione um método 'area' ao protótipo da classe Rectangle
*/
    Rectangle.prototype.area = function() {
        return(this.w*this.h);
    };

/*
  * Crie uma classe Square que herda de Rectangle e implemente seu construtor de classe
*/
   
    class Square extends Rectangle {
        constructor(s) {
            super(s);
            this.h = s;
            this.w = s;
        }
    };
