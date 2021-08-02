var dict = {
    "benchpress" : {
        desc : "The quintessential chest exercise. Place your hands around shoulder width apart on the bar. Unrack the barbell by pushing it upward and slightly forward. Complete a rep by bringing the bar down to your chest, and pushing the bar back up until your arms are extended. Arch your back slightly for more power.",
        reps : "3-5 sets, 8-12 reps per set.",
    },
    "deadlift" : {
        desc : "The quintessential back exercise. Conventional: Place your feet hip width apart on the floor, toes parallel, facing forward. With the barbell at your feet, grab the bar with both hands around shoulder width apart. With your back straight, bring your butt down and pull the weight up. TIP: Try to feel this exercise in your hamstrings.",
        reps : "3-5 sets, 4-8 reps per set.",
    },
    "squat" : {
        desc : "The quintessential leg exercise. Place your legs around shoulder width apart. Unrack the barbell, placing the weight evenly on your back. Take a deep breath and, with your back straight, squat down until your knees are bent at a 90 degree angle. Then, stand back up straight, using your legs to drive the weight back up.",
        reps : "3-5 sets, 4-8 reps per set.",
    },
}


function element(id){
    return document.getElementById(id);
}
function stripWhiteSpace(string){   //made a function to strip all white space from the search string.
    let length = string.length;
    for(let i = 0; i < length; i++){
        if(string[i] === " "){
            string = string.slice(0,i) + string.slice(i+1, length);
            length--;
            i--;
        }
    }
    return string;
}

function searchscript(){
    const keys = Object.keys(dict);
    let search = element("searchbar").value; //search = string in the search bar
    search = stripWhiteSpace(search.toLowerCase());
    for(let i = 0; i < keys.length; i++){
        if(search === keys[i]){
            element("searchresults").innerHTML = dict[keys[i]].desc;
            element("searchreps").innerHTML = dict[keys[i]].reps;
            return;
        }

        if(i === keys.length - 1){
            element("searchresults").innerHTML = "There are no exercises of that name.";
            return;
        }
    }

}
//when enter is hit (13 keycode), run the search script
element("searchbar").addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        searchscript();
    }
});
