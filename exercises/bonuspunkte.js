function berechneBelohnungspunkte(einkaeufe) {
    // Berechnen Sie die Gesamtanzahl der Belohnungspunkte
  
    for (let i =0; i < einkaeufe.length; i++) {
        if (einkaeufe[i] > 100 ) {
            let punkte= (einkaeufe[i] - 100) *2;
        .   console.log(punkte);
            let summe = 0;
            summe = summe + punkte;
            console.log("summe " + summe);
        }
    }

}
  
  // Test
  console.log(berechneBelohnungspunkte([120, 99, 200])); // Sollte die Gesamtanzahl der Punkte ausgeben