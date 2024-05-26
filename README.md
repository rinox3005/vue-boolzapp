Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

BONUS 1: cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente non sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono.

BONUS 2: inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano

BONUS 3: in caso di messaggio troppo lungo, visualizzare nella preview della lista contatti solo una parte del messaggio e nascondere il resto

BONUS 4: evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

BONUS 5: in versione mobile mostrare subito l'elenco di chat e la barra di ricerca per mantenere attive tutte le funzionalitá, al click su una chat specifica mostrare quella conversazione, inserire pulsante per tornare indietro alla lista delle chat

BONUS 6: visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto

BONUS 7: predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc

BONUS 8: fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick)

BONUS 9: aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

BONUS 10: sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto

BONUS 11: aggiungere nella barra di ricerca un'icona X che viene mostrata solo quando si inizia a ricercare un contatto. Al click resettare la ricerca e mostrare tutti i contatti.
