let profilePics = document.getElementsByClassName("profilePic");
let counter = 0;

for (let element = 0; element < profilePics.length; element ++) {
    addEventListener("click", function() {
        counter ++;
        if (counter >= 6) {
            window.open("https://youtube.com/clip/UgkxxjvuSZVthrEBCzGVc3pRQazHWPRoYpOa", "_blank")
            counter = 0;
        }
    })
}



