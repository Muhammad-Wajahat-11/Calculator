var string = document.getElementById('screen').value;
var buttons = document.getElementsByClassName('button');
var string = "";
var per = document.getElementById('per')


Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.getElementById('screen').value = string;
        } else if (e.target.innerHTML == "C") {
            string = ""
            document.getElementById('screen').value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1)
            document.getElementById('screen').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.getElementById('screen').value = string;
        }

        // function calculatePercentage() {
        //     return (buttons * per) / 100;
        // }
    })
})
