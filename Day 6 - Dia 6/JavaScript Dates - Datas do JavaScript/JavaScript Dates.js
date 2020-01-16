// Os dias da semana são: "domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
function getDayName(dateString) {
    let dayName;
    // Escreva o seu codigo aqui
       
    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date(dateString);
    
    dayName = day_names[date.getDay()];
    
    return dayName;
}
