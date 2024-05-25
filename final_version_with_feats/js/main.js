"use strict";

const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
  data() {
    return {
      currentContact: 0,
      newMessage: "",
      searchContact: "",
      dropdownOpenIndex: null,
      isVisible: false,
      showChatWindow: true,
      showChatList: false,
      randomResponse: "",
      darkMode: false,
      currentStatus: "",
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
        {
          name: "Luigi",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "No, non mi va",
              status: "received",
            },
          ],
        },
        {
          name: "Paolo",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Ovviamente! Non vedevo l'ora!",
              status: "received",
            },
          ],
        },
        {
          name: "Martina",
          avatar: "./img/avatar_io.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Certo",
              status: "received",
            },
          ],
        },
      ],
      randomResponses: [
        "Certo, posso aiutarti con quello!",
        "Oh, interessante! Raccontami di più.",
        "Mi dispiace, non ho informazioni su quel argomento.",
        "Wow, non me l'aspettavo!",
        "Hmm, lascia che ci pensi un attimo.",
        "Sembra una bella giornata fuori!",
        "Ah, quella è una domanda difficile!",
        "Esatto, esattamente quello che pensavo!",
        "Non ho mai pensato a questa questione in quel modo prima d'ora.",
        "Davvero? Non lo sapevo!",
        "Mi sa che ho bisogno di più informazioni per rispondere a quella domanda.",
        "Che ne dici di parlare di qualcos'altro?",
        "Oh, mi hai fatto ridere con quella!",
        "Interessante punto di vista, non ci avevo pensato!",
        "Mi dispiace, non sono abbastanza competente su questo argomento per darti una risposta accurata.",
        "Fantastico! Sono contento di sentire che tutto va bene.",
        "Potrei risponderci meglio con un po' più di contesto.",
        "Puoi ripetere, per favore? Non ho capito bene.",
        "Oh, questo è affascinante! Continua a parlarmene.",
        "È sempre bello chattare con te!",
        "Interessante, non ci avevo mai pensato in quel modo!",
        "Oh, quella è una domanda intrigante!",
        "Mi scuso, ma non ho familiarità con quell'argomento.",
        "Esatto! Concordo pienamente.",
        "Hmm, devo rifletterci su un attimo.",
        "Che bella giornata che fa oggi!",
        "Oh, ci sono così tante possibilità da considerare!",
        "Ah, quella domanda mi fa venire in mente un'idea!",
        "Mi hai proprio colto di sorpresa con questa domanda!",
        "Davvero? Non avrei mai immaginato!",
        "Mi dispiace, non posso fornire una risposta accurata in questo momento.",
        "Wow, questa è una prospettiva davvero interessante!",
        "Beh, è una questione complessa, ma ci possiamo provare insieme!",
        "È sempre un piacere parlare con te!",
        "Oh, questo mi fa venire in mente una storia da condividere!",
        "Mi dispiace, ma non ho abbastanza dati per rispondere.",
        "Certo, possiamo esplorare questo argomento insieme!",
        "È così bello avere queste conversazioni con te!",
        "Oh, mi hai messo di buon umore con questa domanda!",
        "Hmm, devo ammettere che non so molto su questo argomento.",
        "Wow, non mi aspettavo questa domanda!",
        "È una bella giornata per una chiacchierata!",
        "Hmm, interessante punto di vista!",
        "Mi dispiace, non ho abbastanza informazioni per rispondere.",
        "Ah, capisco. Continua pure!",
        "Esatto! Non potrei essere più d'accordo.",
        "Mi piace come pensi!",
        "Oh, quella domanda mi ha fatto riflettere!",
        "Certo, possiamo approfondire questo argomento.",
        "Davvero? Questo è nuovo per me!",
        "Mi piace il modo in cui guardi le cose!",
        "È sempre un piacere parlare con te!",
        "Mi scuso, potresti ripetere la domanda?",
        "Interessante! Continua pure a raccontarmi.",
        "Non sono sicuro di poter rispondere a questa domanda.",
        "Oh, questa è una buona! Continua!",
        "Hmm, devo ammettere che non ho una risposta pronta.",
        "Mi dispiace, potresti fornire più contesto?",
        "Certo, cercherò di aiutarti nel miglior modo possibile!",
        "Oh, grazie per la tua domanda! È stimolante!",
      ],
    };
  },
  computed: {
    // assegno il compito di calcolare la classe corretta da applicare alle funzioni in base al valore true o false di darkMode invece di assegnare 10 proprietá diverse
    bgStyleWindow() {
      return this.darkMode ? "bgDark" : "bgLight";
    },
    bgStyleChat() {
      return this.darkMode ? "bgDarkChat" : "bgLightChat";
    },
    bgStyleImage() {
      return this.darkMode ? "bgDarkImage" : "bgLightImage";
    },
    bgStyleAlerts() {
      return this.darkMode ? "bgDarkAlerts" : "bgLightAlerts";
    },
    bgStyleBorders() {
      return this.darkMode ? "bgDarkBorders" : "bgLightBorders";
    },
    bgStyleBordersSearch() {
      return this.darkMode ? "bgDarkBordersSearch" : "bgLightBordersSearch";
    },
    bgStyleMessageSent() {
      return this.darkMode ? "bgDarkMessagesSent" : "bgLightMessagesSent";
    },
    bgStyleMessageReceived() {
      return this.darkMode
        ? "bgDarkMessagesReceived"
        : "bgLightMessagesReceived";
    },
    bgStyleMessageBar() {
      return this.darkMode ? "bgDarkMessagesBar" : "bgLightMessagesBar";
    },
  },
  mounted() {
    // setto il valore contenuto dentro currentStatus quando monto l'app
    this.trackLastAccessTime();
  },
  methods: {
    // funzione per pushare il nuovo oggetto contenente il messaggio in array e triggerare il setTimeout per l'invio della risposta della cpu
    sendNewMessage() {
      // condizione per evitare di mandare un messaggio vuoto o solamente composto da spazi
      if (this.newMessage.trim()) {
        // inizializzo le variabili mydate e mytime
        const mydate = dt.now().setLocale("it").toFormat("dd/MM/yyyy");
        const mytime = dt.now().setLocale("it").toFormat("TT");
        // pusho dentro l'array del contatto corrente l'oggetto con il nuovo messaggio e i dati relativi
        this.contacts[this.currentContact].messages.push({
          date: `${mydate} ${mytime}`,
          message: this.newMessage,
          status: "sent",
        });
        // resetto il valore del campo del messaggio inserito dopo l'invio
        this.newMessage = "";
        // utilizzo il metodo di vue nexTick passando come argomento una funzione di callback per scrollare giú la finestra quando si aggiorna il dom
        this.$nextTick(() => {
          const chatContainer = document.getElementById("chat-container");
          chatContainer.scrollTop = chatContainer.scrollHeight;
        });
        // timeout per mostrare lo status online per un pó prima di ricevere risposta
        setTimeout(() => {
          this.currentStatus = "Online";
        }, 2000);
        // timeout per mostrare Sta scrivendo...
        setTimeout(() => {
          this.currentStatus = "Sta scrivendo...";
        }, 3000);
        // setto un timeout di 5 secondi per pushare l'oggetto con la risposta cpu
        setTimeout(() => {
          this.contacts[this.currentContact].messages.push({
            date: `${mydate} ${mytime}`,
            message: this.responseRandomizer(),
            status: "received",
          });
          // utilizzo il metodo di vue nexTick passando come argomento una funzione di callback per scrollare giú la finestra quando si aggiorna il dom
          this.$nextTick(() => {
            const chatContainer = document.getElementById("chat-container");
            chatContainer.scrollTop = chatContainer.scrollHeight;
          });
          // timeout per mostrare lo status online immediatamente dopo la fine di Sta scrivendo...
          setTimeout(() => {
            this.currentStatus = "Online";
          }, 1);
          // timeout per mostrare l'ultimo accesso dopo 5 secondi
          setTimeout(() => {
            this.currentStatus = `Ultimo accesso alle ore ${this.lastMsgTime(
              this.contacts[this.currentContact]
            )}`;
          }, 3000);
        }, 6000);
      }
    },
    // randomizzatore di risposte cpu
    responseRandomizer() {
      let length = this.randomResponses.length;
      let randomIndex = Math.floor(Math.random() * length);
      this.randomResponse = this.randomResponses[randomIndex];
      return this.randomResponse;
    },
    filterContacts() {
      // Resetto la visibilità di tutti i contatti
      this.contacts.forEach((contact) => {
        contact.visible = true;
      });
      // Nascondo i contatti che non corrispondono al input utente
      if (this.searchContact.toLowerCase()) {
        this.contacts.forEach((contact) => {
          if (
            !contact.name
              .toLowerCase()
              .includes(this.searchContact.toLowerCase())
          ) {
            contact.visible = false;
          }
        });
      }
    },
    // funzione che gestisce il dropdown
    toggleDropdown(index) {
      if (this.dropdownOpenIndex === index) {
        // chiude il dropdown se é giá aperto
        this.dropdownOpenIndex = null;
        this.isVisible = false;
      } else {
        this.dropdownOpenIndex = index;
        this.isVisible = true;
      }
    },
    // funzione per eliminare i messaggi dal dropdown menu
    deleteMessage(index) {
      this.contacts[this.currentContact].messages.splice(index, 1);
      this.isVisible = false;
      this.dropdownOpenIndex = null;
    },
    // funzione per settare la posizione del dropdown in base allo status del messaggio
    dropdownPosition(index) {
      if (
        this.contacts[this.currentContact].messages[index].status === "sent"
      ) {
        return "positionSent";
      } else {
        return "positionReceived";
      }
    },
    // funzione per nascondere l'overflow della preview
    hidePreviewOverflow(string, limit) {
      const dots = "...";
      if (string.length > limit) {
        string = string.substring(0, limit) + dots;
      }
      return string;
    },
    // funzione per prendere l'ora dell'ultimo messaggio dall'ultimo elemento dell'array dei messaggi
    lastMsgTime(contact) {
      if (contact.messages.length) {
        return contact.messages[contact.messages.length - 1].date.substring(
          11,
          16
        );
      }
    },
    // funzione per mostrare il contenuto della chat e nascondere la lista delle chat in versione mobile
    showChat(index) {
      this.showChatList = true;
      this.showChatWindow = false;
      this.currentContact = index;
      return this.currentContact;
    },
    // funzione per tornare alla lista chat da mobile
    hideChat() {
      this.showChatList = false;
      this.showChatWindow = true;
    },
    // funzione per attivare la dark mode
    switchDarkMode() {
      this.darkMode = true;
    },
    // funzione per attivare la light mode
    switchLightMode() {
      this.darkMode = false;
    },
    // funzione per aggiornare lo stato corrente dell'ultimo messaggio inviato e quindi dell'ultimo accesso
    trackLastAccessTime() {
      if (this.contacts[this.currentContact]) {
        this.currentStatus = `Ultimo accesso alle ore ${this.lastMsgTime(
          this.contacts[this.currentContact]
        )}`;
      }
    },
  },
}).mount("#app");
