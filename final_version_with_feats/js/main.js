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
      ],
    };
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
        // setto un timeout di 1 secondo per pushare l'oggetto con la risposta cpu
        setTimeout(() => {
          this.contacts[this.currentContact].messages.push({
            date: `${mydate} ${mytime}`,
            message: "ok",
            status: "received",
          });
        }, 1000);
      }
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
  },
}).mount("#app");
