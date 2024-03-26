function tageBisLeer{reservoirLiter,taeglicherVerbrauch
//Berechnen Sie, wie viele Tage das Wasser noch reicht
const Tage = reservoirLiter / taeglicherVerbrauch;
return '${tage} Tage bis das Reservoir leer ist';

}

//Test
console.log(tageBisLeer(100,10));// Sollte"10 Tage bis das Reservoir leer ist"ausgeben
