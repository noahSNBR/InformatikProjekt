import React from 'react'

export default function Vergleich() {
    return (
        <>
            <h1> Vergleich </h1>
            <p>
                Hier vergleichen wir den Megesort mit dem Quicksort, vorab: Mergesort und Quicksort
                basieren beide auf dem Teilen-und-Einnehmen Prinzip, was bedeutet, dass diese
                Algorithmen gar nicht so fern von einander sind, sondern viel gemeinsam haben. <br />
                Anders als der Quicksort, ist der Mergesort ein stabiler Algorithmus. Der Mergesort
                schneidet im Fenster Performance bei größeren und komplexeren Datenpaketen,
                wesentlich besser ab. Der Mergesort ist dagegen kein In-place-Agorithmus. Das heißt,
                dass dieser Algorithmus nicht ausschließlich stabile Sortierungen liefert. Das schont
                den Speicher weniger, wenn er nicht bei den richtigen Anwendungszwecken zum
                Einsatz kommt. <br />
                Ein weiterer Konkurrent des Quicksort ist der Bubblesort. Aber wenn man alles
                Zusmmenfasst, ist der Quicksort effizienter als der Bubblesort, da dieser den
                gegebenen Array in viele einzelne Arrays zerlegt, indem er immer Zweierpaare aus
                dem Array nimmt, und diese Vergleicht und dann in der korrekten Rheinfolge wieder
                zusammensetzt. Dies spielt der Quicksort aus, indem es das Pivotelement nutzt, um
                Performance beizubehalten. <br />
                Man kann abschließend sagen, dass zwar jeder Algorithmus, um das Problem von
                Sortierungen in Arrays zu lösen, seine Vor- und Nachteile basierend auf den genauen
                Anwendungsbereich hat, aber man kann mit Sicherheit sagen, dass die heutige
                Computertechnik rasant voranschreitet, und somit der Quicksort durch seine
                Funktionsweise ein Spitzenreiter der Algorithmen ist. Und nicht ohne Grund, einer der
                führenden Algorithmen unserer Zeit ist.
            </p>
        </>
    )
}
