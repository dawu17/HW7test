
function reverse_word() {
    for (i = arguments.length - 1; i > -1; i--) {
        this.push(arguments[i]);
    }
    return this.join(" ");

}


var userword = document.getElementById('inputwords').value;

//sentence = "This is a test".split(" ");
reverse_word.apply([],userword);