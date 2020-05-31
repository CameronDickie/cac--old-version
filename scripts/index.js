var page = new Vue({
    el: "#page",
    data: {
        message: 'Hello Vue!'
    }
});
var dateInfo = new Vue({
    el: "#date",
    //adding v-bind:tagname='message' will let vue display message content on mouseover 
    data: {
        message: "You loaded this page on " + new Date().toLocaleDateString()
    }
})
var seenContent = new Vue({
    el: "#viewed",
    data: {
        seen: true
    }
})

page.message = "Is this data being updated?"
seenContent.seen = false;