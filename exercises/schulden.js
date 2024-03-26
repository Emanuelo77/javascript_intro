function berechneRueckzahlungsDauer(schulden, monatlicheRate) {
    // Berechnen Sie die Dauer der Schuldenrückzahlung
   const monate=  Math.ceil(schulden / monatlicheRaten);
   return monate;  
}
  
  // Test
  console.log(berechneRueckzahlungsDauer(1000, 88)); // Sollte die Anzahl der Monate ausgeben, bis die Schulden zurückgezahlt sind