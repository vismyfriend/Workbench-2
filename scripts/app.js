// 0001 создаем в папке скриптов папку utils и в ней файлы с расширением .js, в них будут данные для приложения игры и страницы и импортируем данные из файла - указываем путь  файлу 
import allCards from "./utils/ques-answ.js"
import allQuestions from "./utils/questions.js"
import playList from "./utils/music.js"

// 0002 добавляем константы
// const buttons006007008 = document.querySelector(".buttons006-007-008")
const buttonsSix = document.querySelector(".buttons-006-007-008")
const refreshInfo = document.querySelector(".refresh-info")
const button001 = document.querySelector(".header__button001")
const isTouch = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
const allSets = document.querySelectorAll(".popup__set")
const popup = document.querySelector(".popup")
const popupTitle = document.querySelector(".popup__title")
const popupDescription = document.querySelector(".popup__description")
const popupSets = document.querySelector(".popup__sets")
const findAPair = document.querySelector(".popup__find-a-pair")
const checkMemory = document.querySelector(".popup__check-memory")
const slotMachine = document.querySelector(".popup__slot-machine")
const p004questions = document.querySelector(".popup__p004-questions")
const chosenSet = document.querySelector(".popup__chosen-set")
const logoSpecial = document.querySelector(".logo-special")
const pool = document.querySelector(".pool")
const card = document.querySelector(".template").content.querySelector(".card")
const next = document.querySelector(".next")
const poolContainer = document.querySelector(".pool__container")
const timer = document.querySelector(".timer")
const buttonCoverR = document.querySelector(".cover-r")
const buttonCoverL = document.querySelector(".cover-l")
const pictureR = document.querySelector(".picture-right")
const pictureL = document.querySelector(".picture-left")
const timeSeconds = document.getElementById("seconds")
const timeMiliseconds = document.getElementById("tens")
const tryAgainButton = document.querySelector(".try-again")
const scrollLeft = document.querySelector(".scroll-left")
const scrollRight = document.querySelector(".scroll-right")

// <copied
const cardQuestion = document.querySelector(".card1_question1")
const cardValueQuestion = cardQuestion.querySelector(".card1__value1")
const cardHintQuestion = cardQuestion.querySelector(".card1__hint1")
// ниже я добавил константу, чтобы при нажатии на любую часть карточки появлялся следующий вопрос - но тогда сбивается номер вопроса
const cardTop = cardQuestion.querySelector(".card1__top1")
// const shuffle = document.querySelector(".shuffle")
// copied>
// const MusicFromGoogleDriveDefault = new Audio("https://drive.google.com/file/d/1YlPN33KcfXRkw2BgHnNZVeb2z7NkiZKP/view?usp=sharing"); 
const audio = document.querySelector(".audio")
const missionMusicBackground = document.querySelector(".missionMusicBackground")
// так же как классы и array в java уже есть Audio
const audioIcon = document.querySelector(".audioIcon")
const missionMusicBackgroundIconButton = document.querySelector(".missionMusicBackgroundIconButton")
const helloMusicStartButton = document.querySelector(".helloMusicStartButton")
const secretButton = document.querySelector(".secretButton")

let selectCard = null
let chosenArray = null
let chooseQuestions = null
let min = 0
let max = 6
let tens = "00"
let seconds = "00"
let interval = null
let count = 0

// <copied
let value = null
let questionNumber = 0

// на старте чтобы играла музыка





// let chosenArrayQuestions = null

function shuffleDecks() {
    // let chosenQuestions =
    // вот тут остановился - нужно как-то сделать так, чтобы вопросы выбирал в зависимости от выбранной миссии
    chooseQuestions = chooseQuestions.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber = 0
    cardQuestion.classList.remove("open1")
    cardQuestion.style.border = 'none';
}
// от прошлой
function getquestions() {
    if (questionNumber < chooseQuestions.length) {
        cardQuestion.classList.remove("open1")
        setTimeout(function () { cardQuestion.classList.add("open1") }, 0);
        value = chooseQuestions[questionNumber]
        cardHintQuestion.classList.remove("show1")
        // обновляет blur на каждой новой карточке
        cardValueQuestion.textContent = value.eng
        cardHintQuestion.textContent = value.ru
        cardQuestion.style.border = "solid 4px rgb(123, 207, 255)";
        // questionNumber++
        questionNumber = questionNumber + 1
        // console.log(questionNumber)
    } else {
        cardQuestion.classList.remove("open1")
        cardQuestion.style.border = 'none';
        shuffleDecks()
    }
}
refreshInfo.addEventListener("click", mainScreen)
function mainScreen() {
    location.reload()
}

cardHintQuestion.addEventListener("click", (event) => {
    cardHintQuestion.classList.toggle("show1")
    event.stopPropagation()
})
// проверка - если карта уже открыта, то изменения только при нажатии на кнопку, а не по карте кликая
cardQuestion.addEventListener("click", () => {
            const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
            AudioNextQuestionCard.volume = 0.2
            AudioNextQuestionCard.play()
    cardQuestion.classList.contains("open") ? null : getquestions()
})
// cardQuestion.addEventListener("click", getquestions)
// shuffle.addEventListener("click", shuffleDecks)


// copied>


function startTimer() {
    tens++;
    if (tens <= 9) {
        timeMiliseconds.textContent = "0" + tens;
    }
    if (tens > 9) {
        timeMiliseconds.textContent = tens;
    }
    if (tens > 99) {
        seconds++;
        timeSeconds.textContent = "0" + seconds;
        tens = 0;
        timeMiliseconds.textContent = "0" + 0;
    }
    if (seconds > 9) {
        timeSeconds.textContent = seconds;
    }
}

function nextCards() {
    poolContainer.innerHTML = ""
    // очистили контейнер
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6
        count = 0
        renderCards("ru")
        renderCards("eng")
    }
}
function chooseSet(text, set) {
    logoSpecial.classList.add("hidden")
    refreshInfo.classList.add("visible")
    tryAgainButton.classList.add("hidden")
    buttonsSix.classList.add("hidden")
    popupTitle.textContent = "/ю чОуз/ You chose Вы выбрали:"
    popupTitle.classList.add("greyText")
    popupDescription.textContent = " Что будем делать? :"
    popupSets.classList.add("hide")
    checkMemory.classList.add("show")
    findAPair.classList.add("show")
    slotMachine.classList.add("show")
    p004questions.classList.add("show")
    chosenSet.classList.add("show")
    chosenSet.textContent = text
}
function startGameQuestions() {
    // renderCards("ru")
    // renderCards("eng")

    popup.classList.add("close")
    // logoSpecial.classList.add("hidden")
    cardQuestion.classList.remove("hidden1")
    // pool.classList.add("open")
    interval = setInterval(startTimer, 10);
}
function chooseSong(set) {
    // const song = playList[set]
    // if (!!song) {
    //     audio.src = song;
    //     console.log(audio.paused,song);
    //     audio.play()
    //  console.log("проверка")
    const MissionSong = playList[set]
    audio.src = MissionSong
     
    // }
}
function startGameFindPairs() {
    renderCards("ru")
    renderCards("eng")
    buttonCoverL.disabled = true;
    buttonCoverR.disabled = true;
    button001.classList.add("hidden")
    popup.classList.add("close")
    logoSpecial.classList.add("hidden")
    pool.classList.add("open")
    interval = setInterval(startTimer, 10);
    audio.play()
    missionMusicBackground.volume = 0;
    missionMusicBackgroundIconButton.classList.add("off")
    missionMusicBackgroundIconButton.classList.add("hidden")
    audioIcon.classList.add("visible")

}

function startGameRobotBender() {
    location.href = "https://vismyfriend.github.io/Bender/"
    button001.classList.add("hidden")
}
function startGameSlotMachine() {
    location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
    button001.classList.add("hidden")

}

allSets.forEach((set) => {
   
    set.addEventListener("click", (evt) => {
        getArray(evt.target.dataset.set)
        chooseSong(evt.target.dataset.set)
        chooseSet(evt.target.textContent, evt.target.dataset.set)

    })
})
//НИже функция для Бильярда - ПОдбор пары
function renderCards(lang) {
    let array = readyArray()
    // console.log(min,max)
    let shuffle = array.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i = 0; i < shuffle.length; i++) {
        const someCard = card.cloneNode(true)
        someCard.textContent = shuffle[i][lang]
        someCard.classList.add(lang)
        someCard.addEventListener("click", match)
        someCard.dataset.id = shuffle[i].id
        poolContainer.append(someCard)
    }
}
// получаем массив и ниже рандомно перемешиваем через готовую функцию
// для колоды карт 2 колоды
function getArray(set) {
    chosenArray = null
    chooseQuestions = null
    chosenArray = allCards[set].sort(function () {
        return Math.random() - 0.5;
    });
    chooseQuestions = allQuestions[set].sort(function () {
        return Math.random() - 0.5;
    });
    // перемешанные краточки
    // console.log(chooseQuestions)
}
function readyArray() {
    return chosenArray.slice(min, max)
}
function match(evt) {
    if (!!selectCard) {
        if (selectCard.dataset.id === evt.target.dataset.id && selectCard !== evt.target) {
            selectCard.classList.add("delete")
            evt.target.classList.add("delete")
            count++
            // console.log(count)
            count === max - min ? nextCards() : null
        }
        selectCard.classList.remove("select")
        selectCard = null
    } else {
        evt.target.classList.add("select")
        selectCard = evt.target
    }
}

function coverCards(picture) {
    picture.classList.contains("again") ?
        picture.classList.remove("shown", "again") :
        picture.classList.contains("shown") ?
            picture.classList.add("again") :
            picture.classList.add("shown")
}
function uncoverCards(picture) {
    picture.classList.remove("shown", "again")
}


function finishGame() {
    clearInterval(interval)
    uncoverCards(pictureL)
    uncoverCards(pictureR)
    tryAgainButton.classList.remove("hidden")
    buttonsSix.classList.remove("hidden")
    popup.classList.remove("close")
    pool.classList.remove("open")
    popupTitle.textContent = `Результат: ${timer.textContent} seconds`
    // popupTitle.textContent = `${chosenSet.textContent} пройдена : ${timer.textContent}`
    popupDescription.innerHTML = "Сможешь лучше?"
    // попробуете побить рекорд
    // popupDescription.innerHTML = `Сможешь лучше? ${chosenSet.textContent}`
    timeMiliseconds.textContent = "00"
    timeSeconds.textContent = "00"
    popupSets.classList.remove("hide")
    checkMemory.classList.remove("show")
    findAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    p004questions.classList.remove("show")
    chosenSet.classList.remove("show")
    tryAgainButton.textContent = `Yes! ${chosenSet.textContent}`


    min = 0
    max = 6
    tens = "00";
    seconds = "00";
    poolContainer.innerHTML = ""
    count = 0
}



function scroll(direction) {
    popupSets.scrollBy(direction, 0)
}
// При нажатии запускаем событие "навешиваем событие"
checkMemory.addEventListener("click", startGameRobotBender)

slotMachine.addEventListener("click", startGameSlotMachine)
// checkMemory.addEventListener("onclick", () => {
// location.href="https://vismyfriend.github.io/Bender/"
// })
findAPair.addEventListener("click", startGameFindPairs)
p004questions.addEventListener("click", startGameQuestions)
next.addEventListener("click", nextCards)
tryAgainButton.addEventListener("click", startGameFindPairs)

buttonCoverR.addEventListener("click", () => {
    coverCards(pictureR)
})
buttonCoverL.addEventListener("click", () => {
    coverCards(pictureL)
})

if (isTouch()) {
    scrollLeft.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("touchend", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("touchend", () => {
        clearInterval(interval)
    })
} else {
    scrollLeft.addEventListener("mouseup", () => {
        clearInterval(interval)
    })

    scrollLeft.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("mouseup", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
}

// то,что ниже отсюда я перенес в начало игры find pairs
// function chooseSong(set) {
//     const song = playList[set]
//     if (!!song) {
//         audio.src = song;
//         console.log(audio.paused,song);
//         audio.play()
//      console.log("проверка")
//      console.log(set)
//     }

// }
audioIcon.addEventListener("click", audioOnOff)
function audioOnOff() {

    audioIcon.classList.toggle("off")
  
    // audio.classList.add("off") музыка выключается не через стили


        audio.play()
        audio.loop = true;
    
 
    if (audio.volume == 0) {
        audio.volume = 0.7
      
    } else {
        audio.volume= 0

    }
    


}

helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)
function helloMusicStartButtonInvisible() {
    const audiomissionMusicBackground = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    audiomissionMusicBackground.volume = 0.4;
    audiomissionMusicBackground.play()
    audiomissionMusicBackground.loop = false;
    helloMusicStartButton.classList.add("invisible")
    // missionMusicBackgroundIconButton.classList.add("off")
   
}
// helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)
// function helloMusicStartButtonInvisible() {
//     missionMusicBackground.play()
//     missionMusicBackground.loop = false;
//     helloMusicStartButton.classList.add("invisible")
//     missionMusicBackgroundIconButton.classList.add("off")
   
// if (missionMusicBackground.volume == 0) {
//     missionMusicBackground.volume = 0.7
  
// } else {
//     missionMusicBackground.volume= 0

// }
// }

// function GoogleDriveMusicCheck() {
//     MusicFromGoogleDriveDefault.play()
// }

missionMusicBackgroundIconButton.addEventListener("click", missionBackgroundMusicOnOff)
function missionBackgroundMusicOnOff() {

    missionMusicBackgroundIconButton.classList.toggle("off")
  
    // audio.classList.add("off") музыка выключается не через стили

        missionMusicBackground.play()
        missionMusicBackground.loop = true;
    
 
    if (missionMusicBackground.volume == 0) {
        missionMusicBackground.volume = 0.7
      
    } else {
        missionMusicBackground.volume= 0

    }
    


}

secretButton.addEventListener("click", special)
function special() {
    
        // const special = new Audio("../audio/HelloTest.mp3");
        
        // const special = new Audio("https://zvukitop.com/wp-content/uploads/2021/03/zvuk-tadam-i-aplodismenty.mp3");
        const special = new Audio("https://audio.jukehost.co.uk/7OUIbrRYhzrmgaexf3EGoQ3r4FgrlAm9");
        // const special = new Audio("https://disk.yandex.com/d/SQWNr3QHNOtFIg");
        // const special = new Audio("https://www.dropbox.com/s/izkudiigqhhscca/Icanlikethis.mp3");
        special.volume = 0.3
        special.play()
        
      }

    
