function empfehleVerkehrsmittel(uhrzeit){
    // Empfehlen Sie ein Verkehrsmittel basierend auf der Uhrzeit
    function Uhrzeit(Zeit) 
        if (Zeit >= 7 && Zeit <= 9) {
          return "Öffentlich";
        } else if (Zeit >= 16 && Zeit <= 18) {
          return "Öffentlich";
        } else if (Zeit >= 10 && Zeit <= 16) {
          return "Fahrrad";
        } 
    }
  
  // Test
  console.log(empfehleVerkehrsmittel(50)); // Sollte "Öffentlicher Verkehr" ausgeben