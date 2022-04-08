var contacts = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
    },
    {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
    },
    {
    "firstName": "Richard ",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
    },
    {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
    ];
    function lookUpProfile(name, prop){
    // Only change code below this line
    if (contacts.firstname=name) {
        vIndx=contacts.findIndex((item)=>item=name);
        if (contacts.likes=prop) {
            vIndx1=contacts.findIndex((item)=>item=prop);
            vString=contacts[vIndx][prop];
            //vString=contacts[0].likes;
            return vString;
        } else {
            return "No such property";
        } 
    } else {
        return "No such property";
    }
    // Only change code above this line
    }
    console.log(lookUpProfile("John","likes")); // Change this line
    console.log(lookUpProfile("Jane","lastName"));
    console.log(lookUpProfile("Rob","number"));
    console.log(lookUpProfile("Rob","JavaScript"));
    console.log(lookUpProfile("John","address"));
    module.exports = lookUpProfile;