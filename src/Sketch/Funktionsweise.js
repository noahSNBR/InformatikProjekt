export default function Funktionsweise() {
    return (
        <>
            <h1> Die Funktionsweise </h1>
            <p>
                Vorweg sei gesagt, dass Quicksort durch den englischen Mathematiker und
                Informatiker „Sir Charles Anthony Richard Hoare“. Der grundgedanke bestand darin,
                das Gesamtfeld in zwei Teilfelder zu zerlegen mit Hilfe des Pivotelements, auf welches
                ich gleich noch eigehe. <br />
                Ganz grundlegend gehört der Quicksort zu den rekursiven und nicht instabilen
                Sortieralgorithmen. Der Quicksort arbeitet nachdem sogenannten „Divide-andConquer“ Prinzip, was soviel heißt, wie Teile-und-herrsche.
                Als erstes ist es wichtig, zu verstehen, was das Pivotelement ist. Dies heißt übersetzt
                Angelpunkt, dies gilt als Ausgangspunkt, wo der Algorithmus mit seiner eigentlichen
                Arbeit erst beginnt. Um das Pivotelement zu bestimmen wählt, was je nach
                Programmiersprache, System oder Konfiguration variiert, ist entweder das erste, letzte,
                das in der Mitte oder sogar ein zufällig ausgewähltes Element ein. <br />
                Als nächstes wird das Pivotelement in die Mitte des Arrays gesetzt, und dann werden
                die restlichen Werte sortiert. Sie werden nach links sortiert, wenn sie kleiner als das
                aktuelle Vergleichselement sind, dementsprechend auch nach, rechts, wenn das
                Element größer ist.Dabei muss man die Elemente immer der ursprünglichen
                Reihenfolge nach von links nach rechts in ihrem Bereich einordnen. <br />
                Es gibt durchaus auch verschiedene Varianten und Abwandlungen des Quicksorts.
                Allerdings unterscheiden sich die meisten Varianten unterscheiden sich allerdings fast
                ausschließlich in der Handhabung des Pivotelements. Es wird auf die Aufgaben,
                Anforderungen und gedachten nutzen optimiert, um den Zweck möglichst gut zu
                erfüllen. Der Hauptanwendungsbereich des Quicksort liegt dabei, Datenbanken zu
                verwalten, Textverarbeitungsprogramme zu strukturieren, oder Compiler zu
            </p>
        </>
    )
}