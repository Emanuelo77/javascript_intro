10 Punkte pro Aufgabe

Aufgabe 1: Blockgültige Variablen
Ziel : Erstellen Sie eine Schleife mit letund versuchen Sie, nach der Schleife auf die Schleifenvariable zuzugreifen. Erklären Sie das Verhalten der Variablen.

// Schreiben Sie hier den Code für die Schleife
// Versuchen Sie dann, auf die Schleifenvariable außerhalb der Schleife zuzugreifen
Aufgabe 2: Funktionsbereichsbezogene Variablen
Ziel : Erstellen Sie eine Funktion, die eine mit vardeklarierte Variable verwendet. Versuchen Sie, vor und nach dem Aufruf der Funktion auf diese Variable zuzugreifen. Erklären Sie das Verhalten der Variablen.

// Definieren Sie eine Funktion, die eine mit `var` deklarierte Variable verwendet
// Testen Sie den Zugriff auf diese Variable außerhalb der Funktion
Aufgabe 3: Konstanten mitconst
Ziel : Deklarieren Sie eine Konstante mit constund versuchen Sie, ihren Wert zu ändern. Erklären Sie das Verhalten der Variablen.

// Deklarieren Sie eine Konstante mit `const` und weisen Sie ihr einen Wert zu
// Versuchen Sie, den Wert der Konstante zu ändern
Aufgabe 4: Temporale Totzone
Ziel : Demonstrieren Sie das Verhalten der „temporalen toten Zone“ (TDZ) mit einer letoder constdeklarierten Variablen, indem Sie versuchen, auf sie zuzugreifen, bevor sie deklariert wird. Erklären Sie das Verhalten der Variablen.

// Versuchen Sie, auf eine Variable zuzugreifen, bevor sie mit `let` oder `const` deklariert wird
Aufgabe 5: varin Schleifen
Ziel : Verwenden Sie eine mit vardeklarierte Schleifenvariable in einer forSchleife und erstellen Sie innerhalb der Schleife eine Funktion, die auf diese Variable zugreift. Überprüfen Sie den Wert der Variable innerhalb dieser Funktion. Erklären Sie das Verhalten der Variablen.

// Erstellen Sie eine for-Schleife mit `var`
// Definieren Sie innerhalb der Schleife eine Funktion, die auf die Schleifenvariable zugreift
// Rufen Sie die Funktion innerhalb der Schleife auf
Aufgabe 6: Blockübergreifende Funktionen
Ziel : Erstellen Sie einen Codeblock (z. B. eine if-Anweisung), der eine Funktion mit letoder constdefiniert. Versuchen Sie, außerhalb des Blocks auf diese Funktion zuzugreifen. Erklären Sie das Verhalten der Variablen.

// Erstellen Sie einen Codeblock, in dem Sie eine Funktion mit `let` oder `const` definieren
// Versuchen Sie, außerhalb des Blocks auf die Funktion zuzugreifen
Aufgabe 7: Globale Variablen
Ziel : Deklarieren Sie eine Variable mit varund eine mit letoder constim globalen Scope. Zugriff auf beide über das globale Objekt window(im Browser). Erklären Sie das Verhalten der Variablen.

// Deklarieren Sie eine globale Variable mit `var`
// Deklarieren Sie eine globale Variable mit `let` oder `const`
// Versuchen Sie, auf beide Variablen über das `window`-Objekt zuzugreifen
Aufgabe 8: Einkaufslisten-Filter
Szenario : Sie entwickeln eine Einkaufslisten-App. Schreiben Sie eine Funktion, die eine Liste von Preisen filtert und nur die Artikel zurückgibt, die weniger als 10 Euro kosten und deren Preise gerade Zahlen sind.

// Beispiel:
// Eingabe: [5, 12, 7, 9, 20, 25]
// Ausgabe: [20]
Aufgabe 9: Alter-Verifikationssystem
Szenario : Sie arbeiten an einer Website, die altersbeschränkte Inhalte anbietet. Implementieren Sie eine Funktion, die eine Liste von Benutzern (repräsentiert durch Objekte mit nameund alter) überprüft und alle Benutzer zurückgibt, die alt genug sind, um auf die Inhalte zuzugreifen (18 Jahre und älter).

// Beispiel:
// Eingabe: [{name: "Max", alter: 22}, {name: "Anna", alter: 16}]
// Ausgabe: [{name: "Max", alter: 22}]
Aufgabe 10: Einfacher Palindrom-Checker für Benutzernamen
Szenario : Für ein neues Social-Media-Netzwerk sollen Usernamen, die Palindrome sind, besonders hervorgehoben werden. Entwickeln Sie eine Funktion, die einen Benutzernamen überprüft und entscheidet, ob dieser ein Palindrom ist.

// Beispiel:
// Eingabe: "Anna"
// Ausgabe: true
Aufgabe 11: Punktezähler
Szenario : Sie erstellen ein Spiel, bei dem Spieler Punkte sammeln können. Implementieren Sie eine Funktion, die die Gesamtpunktzahl eines Spielers berechnet, wobei alle gesammelten Punkte (eine Reihe von Zahlen) summiert werden.

// Beispiel:
// Eingabe: [10, 20, 30]
// Ausgabe: 60
Aufgabe 12: Filter für einzigartige Produkte
Szenario : In einem Online-Shop sollen aus einer Liste von Produktnamen diejenigen herausgefiltert werden, die nur einmal vorkommen, da diese für eine Sonderaktion ausgewählt werden sollen. Implementieren Sie eine Funktion, die diese Filterung vornimmt.

// Beispiel:
// Eingabe: ["T-Shirt", "Hose", "T-Shirt", "Mütze"]
// Ausgabe: ["Hose", "Mütze"]
Aufgabe 13: Katalogstruktur-Ebenen zählen
Szenario : Sie arbeiten an einem Content-Management-System und benötigen eine Funktion, die die Tiefe der Verschachtelung in der Kategoriestruktur zählt. Jedes Objekt kann Kategorien enthalten, die weitere Unterkategorien haben.

// Beispiel:
// Eingabe: {Kleidung: {Herren: {Hosen: {}, Hemden: {}}, Damen: {Kleider: {}, Röcke: {}}}}
// Ausgabe: 3
Aufgabe 14: Besucherzählung für Veranstaltungen
Szenario : Für ein Veranstaltungsmanagement-Tool müssen Sie eine Funktion schreiben, die die Anzahl der Besucher zählt, deren Alter innerhalb eines bestimmten Bereichs liegt, um die Zielgruppe besser zu verstehen.

// Beispiel:
// Eingabe: [22, 34, 15, 17, 18, 45], min = 18, max = 35
// Ausgabe: 3
