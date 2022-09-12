let backDrop = document.getElementById('backDrop');
let backDrop2 = document.getElementById('backDrop2');


//Mobile hamburger toggle
let openMobileNav = document.getElementById('hamburger');
let navBar = document.getElementById('navBar');
let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementsByClassName('navLinks');
let link = document.querySelectorAll('.navLink');

openMobileNav.addEventListener('click', () => {
    changeIconSrc();
});

//Change hamburger icon to close menu icon
let toggle = false;

function changeIconSrc() {
    navBar.classList.toggle('open');
    backDrop2.classList.toggle('open');
    if (toggle == false) {
        hamburger.src = './images/icon-close-menu.svg';
    }

    else {
        hamburger.src = './images/icon-hamburger.svg';
    }
    toggle = !toggle;
}

//Change bookmark icon on click
let bookmark = document.getElementById('bookmark');

bookmark.addEventListener('click', () => {
    let bookmarkIcon = bookmark.firstChild;
    bookmarkIcon.src = './images/icon-bookmarked.svg';

    let bookmarkText = bookmark.lastChild;
    bookmarkText.innerText = 'Bookmarked';
    bookmarkText.style.color = '#147b74';
})

//Remove backDrop when any nav link is clicked and restor hamburger icon


if (window.innerWidth < 645) {
    link.forEach(a => {
        a.addEventListener('click', () => {
            changeIconSrc();
        })
    })
}

//Animated statistics
let backed = document.getElementById('backed');
let backers = document.getElementById('backers');
let daysLeft = document.getElementById('daysLeft');
let progressBar = document.getElementById('fill');

document.addEventListener('DOMContentLoaded', () => {
    let upto = 0;
    let upto2 = 0;
    let upto3 = 100;

    window.onscroll = scrollThrough;
    let scrollValue = 0;
    function scrollThrough() {
        if (scrollValue == 0) {
            if (window.pageYOffset > 100) {
                setInterval(update);
                scrollValue++;
            }
        }
    }

    function update() {
        if (upto < 89914) {
            backed.innerText = '$' + Math.floor((upto += (89914 / 1000))).toLocaleString();
            progBar(upto);
        }

        if (upto2 < 5007) {
            backers.innerText = Math.floor((upto2 += (5007 / 1000.9))).toLocaleString();
        }

        if (upto3 > 57) {
            daysLeft.innerText = Math.floor((upto3 -= (56 / 1300)));
        }
    }
});

function progBar(callValue) {
    if (callValue <= 100000) {
        progressBar.style.width = ((callValue / 100000) * 100) + '%';
    }

    else {
        progressBar.style.width = '100%';
    }
}

//Back Project - Select Reward
let backProject = document.getElementById('backProject');
let modal = document.getElementById('modal');
let modalClose = document.getElementById('modalClose');
let selectReward = document.querySelectorAll('.active');
let radio = document.querySelectorAll('input[name="pledge"]')


backProject.addEventListener('click', () => {
    toggleClass();
});

function toggleClass() {
    backDrop.classList.toggle('open');
    modal.style.display = 'block';
}

modalClose.addEventListener('click', () => {
    backDrop.classList.toggle('open');
    closeModal();
});

function closeModal() {
    modal.style.display = 'none';
}

selectReward.forEach(a => {
    a.addEventListener("click", () => {
        toggleClass();
        let hrefValue = a.getAttribute('href');

        if (hrefValue == "#bambooStand") {
            radio[1].checked = true;
            checkRadio();
        }

        else if (hrefValue == "#blackEdition") {
            radio[2].checked = true;
            checkRadio();
        }
    });
});

//Display field for pledge input when radio is checked
let invalid = document.querySelectorAll('input[type=number]');
let input = document.getElementById('inputNoReward');
let input1 = document.getElementById('inputBamboo');
let input2 = document.getElementById('inputBlack');
let invalidChar = /[-+]/;

invalid.forEach(inval => {
    inval.addEventListener('keydown', event => {
        if (invalidChar.test(event.key)) {
            event.preventDefault();
        }
    })
});

radio.forEach(rad => {
    rad.addEventListener('change', checkRadio);
});

function checkRadio() {
    if (radio[0].checked) {
        input.style.display = 'flex';
        input1.style.display = 'none';
        input2.style.display = 'none';
    }

    else if (radio[1].checked) {
        input1.style.display = 'flex';
        input.style.display = 'none';
        input2.style.display = 'none';
    }

    else if (radio[2].checked) {
        input2.style.display = 'flex';
        input1.style.display = 'none';
        input.style.display = 'none';
    }
}

//Update statistics and display success message

let continueBtn = document.querySelectorAll('.continue');
let bambooVal = document.getElementById('bambooVal');
let blackVal = document.getElementById('blackVal');
let bambooLeft = document.querySelectorAll('.bambooLeft');
let blackLeft = document.querySelectorAll('.blackLeft');
let val = 89914;
let val2 = 5007;
let val3 = 101;
let val4 = 64;

continueBtn.forEach(cont => {
    cont.addEventListener('click', () => {
        if (bambooVal.value !== "" && blackVal.value !== "" && bambooVal.value != 0 && blackVal.value != 0) {
            updateStat();
            successMsg();
            invalid.forEach(inval => {
                inval.style.borderColor = 'var(--clr-Light-gray)';
            });
        }
        else{
            cont.href = '#0';
            invalid.forEach(inval => {
                inval.style.borderColor = 'red';
            });
        }
    });
});

function updateStat() {
    if (radio[0].checked) {
        val2 += 1;
        backers.innerText = val2.toLocaleString();
    }

    else if (radio[1].checked) {
        val += parseFloat(bambooVal.value);
        val3 -= 1;
        if (val <= 100000) {
            calc();
        }

        else {
            val = 100000;
            backed.innerText = '$100,000+';
            progBar(val);
        }
    }

    else if (radio[2].checked) {
        val += parseFloat(blackVal.value);
        val4 -= 1;

        if (val <= 100000) {
            calc();
        }

        else {
            val = 100000;
            backed.innerText = '$100,000+';
            progBar(val);
        }
    }
}

function calc() {
    backed.innerText = '$' + val.toLocaleString();
    val2 += 1;
    backers.innerText = val2.toLocaleString();
    progBar(val);

    bambooLeft.forEach(elem => {
        if (parseFloat(elem.innerText) > 0) {
            elem.innerText = val3;
        }
    });

    blackLeft.forEach(elem => {
        if (parseFloat(elem.innerText) > 0) {
            elem.innerText = val4;
        }
    });

}

//Succcess message

let success = document.getElementById('success');
let closeSuccess = document.getElementById('closeSuccess');

function successMsg() {
    closeModal();
    success.classList.toggle('open');
}

closeSuccess.addEventListener('click', () => {
    success.classList.toggle('open');
    backDrop.classList.toggle('open');
});
