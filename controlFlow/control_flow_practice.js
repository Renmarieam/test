let role = "Subscriber";
let roleMessage;

if (role === "Employee") {
 roleMessage = "You have authorized access to Dietary services."
} else if (role === "Enrolled Memeber"){
    roleMessage = "You have authorized acces to Dietary services and one-on-one interaction with a dietician."
} else if (role === "Subscriber"){
    roleMessage = " You have partial access to Dietary services."
} else {
    roleMessage = "You need to enroll or subscribe."
}

console.log("Your current role is " + role + "." + roleMessage);