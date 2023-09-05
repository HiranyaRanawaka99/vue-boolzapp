//dalla libreria luxon
var DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
    data() {
        return {
            contacts,
            activeContact: 0,
            activeMesssage: 0,
            sendNewMessages:
            {
                message: '',
                status: 'sent',
            },
            autoReplyMessage:
            {
                message: 'ok',
                status: 'received',
            },
            filteredName: '',
        }
    },
    methods: {
        clickContact(index) {
            this.activeContact = index;
        },
        enterNewMessage() {
            const copysendNewMessages = { ...this.sendNewMessages };
            this.contacts[this.activeContact].messages.push(copysendNewMessages);
            this.sendNewMessages.message = '';

            setTimeout(this.autoReply, 1000);
        },
        autoReply() {
            const copyAutoReply = { ...this.autoReplyMessage };
            this.contacts[this.activeContact].messages.push(copyAutoReply);
        },
        searchContact() {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.filteredName.toLowerCase());
            })
        },
        deleteMessage(index) {
            this.contacts[this.activeContact].messages.splice(index, 1);
        },



        timeToText(timeString) {
            // console.log(DateTime.fromISO(timeString));

            const messageTime = DateTime.fromISO(timeString);
        }

    },
    // per data dinamici
    computed: {
        singleActiveContact() {
            return this.contacts[this.activeContact];
        },
    },



    mounted() {
        // console.log(DateTime.now());
    },

}).mount('#app')


