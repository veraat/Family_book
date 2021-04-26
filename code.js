var images= [
    "Me.jpg",
    "vikas.jpg",
    "Shivali.jpg",
    "Dadi.jpg",
    "Dadu.jpg",
];
var names= [
    "Veraat Gupta",
    "Vikas Gupta ( My Farther )",
    "Shivali Mehra ( My Mother )",
    "Kamla Gupta ( My Grandmother )",
    "S.K Gupta ( My GrandFarther)"

];

var i = 0;
function move() {

    if(i == 5 )
    {
        i=0;
    }

    document.getElementById("Photo").src = images[i];
    document.getElementById("Names").innerHTML = names[i];
    i++;
}