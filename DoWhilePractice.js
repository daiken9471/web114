let username;

do{
    username = prompt(`Enter username`)?.trim()?? "Guest"  //  ? after prompt handles undefined prompt entry
                                                           //  ?? after trim() changes "undefined" to "guest"
}
while (username === "" || username === null)


alert(`Hello ${username}`)