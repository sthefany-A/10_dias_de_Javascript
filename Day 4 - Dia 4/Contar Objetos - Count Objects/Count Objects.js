/*
  * Retorne uma contagem do número total de objetos 'o' satisfazendo o.x == o.y.
  *
  * Parâmetro (s):
  * objetos: uma matriz de objetos com propriedades inteiras 'x' e 'y'
 */
function getCount(objects) {
    var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
}
