function regexVar() {
     /*
     * Declare uma variável de objeto RegExp denominada 're'
     * Ele deve corresponder a uma sequência que começa e termina com a mesma vogal (por exemplo, {a, e, i, o, u})
     */
    
    var re = RegExp(/^([aeiou]).*\1$/);
    
     /*
     * Não remova a declaração de devolução
     */
    return re;
}
