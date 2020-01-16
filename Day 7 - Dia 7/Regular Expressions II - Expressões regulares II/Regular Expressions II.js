function regexVar() {
    /*
     * Declare uma variável de objeto RegExp denominada 're'
     * Ele deve corresponder a uma sequência que comece com 'Sr.', 'Sra.', 'Senhora', 'Dr.' ou 'Er.', 
     * seguido de uma ou mais letras.
     */
    
      var re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
  
     /*
     * Não remova a declaração de devolução
     */
    return re;
}


     
