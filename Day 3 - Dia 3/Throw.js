/*
  * Complete a função isPositive.
  * Se 'a' for positivo, retorne "SIM".
  * Se 'a' for 0, gere um erro com a mensagem "Zero Error"
  * Se 'a' for negativo, gere um erro com a mensagem "Erro negativo"
*/
function isPositive(a) {
    if (a > 0)
        {
            return "YES";
        }
    else if (a === 0)
        {
            throw new Error("Zero Error");
        }
    else if (a < 0)
        {
            throw new Error("Negative Error");
        }
}
