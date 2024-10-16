// 0001 создаем в папке скриптов папку utils
// в папке utils создаю файлы с расширением .js, в них будут данные для приложения и игр
// импортируем нужные данные из файла - указываем путь файлу ( . одна точка значит файл в этой же папке ) ( .. две точки значит файл, к которому обращаемся в папке выше) 
import allCardsGameFindAPair from "./utils/find-a-pair.js"
import allQuestionsOneDeck from "./utils/questions.js"
import playList from "./utils/music.js"

// 0002 добавляем константы к классам, чтобы можно было с ними работать, придумываем им названия понятные
const starsEmoji = document.querySelector(".starsEmoji")
const oneDeckButtons = document.querySelector(".oneDeckButtons")
const refreshInfo = document.querySelector(".refresh-info")
const button001 = document.querySelector(".header__button001")
const isTouch = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
const dataFromEachPopupMissionsAndSets = document.querySelectorAll(".popupMissionsAndSets__set")
const popupMissionsAndSetsSets = document.querySelector(".popupMissionsAndSets__sets")
const chosenSet = document.querySelector(".popupMissionsAndSets__chosen-set")
const popupMissionsAndSets = document.querySelector(".popupMissionsAndSets")
const popupMissionsAndSetsTitle = document.querySelector(".popupMissionsAndSets__title")
const popupMissionsAndSetsDescription = document.querySelector(".popupMissionsAndSets__description")
const popupMissionsAndSetsGameFindAPair = document.querySelector(".popupMissionsAndSets__gameFindAPair")
const wordOrderGameDrunkRobot = document.querySelector(".popupMissionsAndSets__wordOrderGameDrunkRobot")
const logoSpecial = document.querySelector(".logo-special")
const gameFindAPair = document.querySelector(".gameFindAPair")
const letsSpeak = document.querySelector(".popupMissionsAndSets__letsSpeak")
const slotMachine = document.querySelector(".popupMissionsAndSets__slot-machine")
const slotMachine2 = document.querySelector(".popupMissionsAndSets__slot-machine2")
const card = document.querySelector(".template").content.querySelector(".card")
const gameFindAPairButtonSkipThese = document.querySelector(".gameFindAPairButtonSkipThese")
const gameFindAPairContainer = document.querySelector(".gameFindAPair__container")
const timer = document.querySelector(".timer")
const gameFindAPairButtonNotUsed = document.querySelector(".gameFindAPairButtonNotUsed")
const gameFindAPairButtonBackToMissions = document.querySelector(".gameFindAPairButtonBackToMissions")
const pictureR = document.querySelector(".picture-right")
const pictureL = document.querySelector(".picture-left")
const timeSeconds = document.getElementById("seconds")
const timeMiliseconds = document.getElementById("tens")
const tryAgainButton = document.querySelector(".try-again")
const scrollLeft = document.querySelector(".scroll-left")
const scrollRight = document.querySelector(".scroll-right")
const gameFindAPairInfo = document.querySelector(".gameFindAPair-info")
const headerInfo = document.querySelector(".headerInfoText")
const oneDeckButtonPrevious = document.querySelector(".oneDeckButtonPrevious")
const oneDeckButtonCheck = document.querySelector(".oneDeckButtonCheck")
const oneDeckButtonNext = document.querySelector(".oneDeckButtonNext")

// <copied
const cardForSpeakingGame = document.querySelector(".oneDeckOfCards_cardForSpeakingGame")
const topOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__topOfTheCard1Value")
const bottomOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__bottomOfTheCard1Value")
// ниже добавляли константу, чтобы при нажатии на любую часть карточки появлялся следующий вопрос - но тогда сбивается номер вопроса и поэтому удалили ее потом
const topOfTheCard1 = cardForSpeakingGame.querySelector(".oneDeckOfCards__topOfTheCard1")
// const shuffle = document.querySelector(".shuffle")
// copied>
// const MusicFromGoogleDriveDefault = new Audio("https://drive.google.com/file/d/1YlPN33KcfXRkw2BgHnNZVeb2z7NkiZKP/view?usp=sharing"); 
const audio = document.querySelector(".audio")
const missionMusicBackground = document.querySelector(".missionMusicBackground")
// так же как классы и array в java уже есть Audio
const audioIcon = document.querySelector(".audioIcon")
const audioIconOnOff = document.querySelector(".audioIconOnOff")
const missionMusicBackgroundIconButton = document.querySelector(".missionMusicBackgroundIconButton")
const helloMusicStartButton = document.querySelector(".helloMusicStartButton")
const secretButton = document.querySelector(".secretButton")
const audioTest = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
// wtf пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
// const audioIconOnOffTrack = document.querySelector(".audioIconOnOffTrack")


let selectCard = null
let chosenArray = null
let chooseQuestions = null
let min = 0
let max = 6
let tens = "00"
let seconds = "00"
let interval = null
let count = 0
let foundPairs = 0
let howManyTimesSkipped = 0
let pairsRemainToMatch = 0

// <copied
let value = null
let questionNumber = 0


//ниже функция для высвечивания результата и количество звезд
let howManyStarsEmoji = 5
let timeToGet5StarResult = 5
let timeToGet4StarResult = 10
let timeToGet3StarResult = 15
let timeToGet2StarResult = 20
// let timeToGet5StarResult = 120
// let timeToGet4StarResult = 140
// let timeToGet3StarResult = 170
// let timeToGet2StarResult = 210
function starResult() {
    if (seconds < timeToGet5StarResult) {
        howManyStarsEmoji = 5
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
        
    } else if (seconds > timeToGet5StarResult && seconds < timeToGet4StarResult) {
        howManyStarsEmoji = 4
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
        
    } else if (seconds > timeToGet4StarResult && seconds < timeToGet3StarResult) {
        howManyStarsEmoji = 3
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
        
    } else if (seconds > timeToGet3StarResult && seconds < timeToGet2StarResult) {
        howManyStarsEmoji = 2
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
        
    } else if (seconds > timeToGet2StarResult) {
        howManyStarsEmoji = 1
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
        
    }
}






// на старте чтобы играла музыка



// let chosenArrayQuestions = null

function shuffleDecks() {
    // let chosenQuestions =
    // вот тут остановился - нужно как-то сделать так, чтобы вопросы выбирал в зависимости от выбранной миссии
    chooseQuestions = chooseQuestions.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber = 0
    cardForSpeakingGame.classList.remove("AnOpenCard")
    cardForSpeakingGame.style.border = 'none';
}
// от прошлой
function getquestions() {
    if (questionNumber < chooseQuestions.length) {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        setTimeout(function () { cardForSpeakingGame.classList.add("AnOpenCard") }, 0);
        value = chooseQuestions[questionNumber]
        bottomOfTheCard1Value.classList.remove("Unblur")
        // обновляет blur на каждой новой карточке
        topOfTheCard1Value.textContent = value.eng
        bottomOfTheCard1Value.textContent = value.ru
        cardForSpeakingGame.style.border = "solid 4px rgb(123, 207, 255)";
        // questionNumber++
        questionNumber = questionNumber + 1

    } else {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        cardForSpeakingGame.style.border = 'none';
        shuffleDecks()
    }
}



// навешиваем событие, чтобы обновилась и перезагрузилась страница

refreshInfo.addEventListener("click", pageReloadRefresh)

function pageReloadRefresh() {

    location.reload()
}

bottomOfTheCard1Value.addEventListener("click", (event) => {
    bottomOfTheCard1Value.classList.toggle("Unblur")
    event.stopPropagation()
})

oneDeckButtonCheck.addEventListener("click", (event) => {
    bottomOfTheCard1Value.classList.toggle("Unblur")
    event.stopPropagation()
})
// проверка - если карта уже открыта, то изменения только при нажатии на кнопку, а не по карте кликая
cardForSpeakingGame.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()

    cardForSpeakingGame.classList.contains("open") ? null : getquestions()
})
// cardForSpeakingGame.addEventListener("click", getquestions)
// shuffle.addEventListener("click", shuffleDecks)

oneDeckButtonNext.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()
    cardForSpeakingGame.classList.contains("open") ? null : getquestions()

})

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
function nextCardsGameFindAPairCheatUsed() {

    gameFindAPairContainer.innerHTML = ""
    howManyTimesSkipped++;
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6

        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0

        gameFindAPairInfo.textContent = `осталось найти пар: ${pairsRemainToMatch}`
        renderCards("ru")
        renderCards("eng")

        // console.log(chosenArray.length)
        // console.log(max)
        // console.log(pairsRemainToMatch)


    }
}
function nextCards() {
    gameFindAPairContainer.innerHTML = ""
    // pairsRemainToMatch =  - count;
    // очистили контейнер
    // howManyTimesSkipped++;
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6

        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0

        // gameFindAPairInfo.textContent = `осталось найти пар: ${pairsRemainToMatch}`
        renderCards("ru")
        renderCards("eng")

        // console.log(chosenArray.length)
        // console.log(max)
        // console.log(pairsRemainToMatch)


    }
}
// уточнить у Andrew про set в скобках - что это

function chooseSet(text, set) {
    logoSpecial.classList.add("hidden")
    // refreshInfo.classList.add("visible")
    tryAgainButton.classList.add("hidden")
    oneDeckButtons.classList.remove("visible")
    popupMissionsAndSetsTitle.textContent = "/ю чОуз/ You chose Вы выбрали:"
    popupMissionsAndSetsTitle.classList.add("greyText")
    popupMissionsAndSetsDescription.textContent = " Что будем делать? :"
    popupMissionsAndSetsSets.classList.add("hide")
    wordOrderGameDrunkRobot.classList.add("show")
    popupMissionsAndSetsGameFindAPair.classList.add("show")
    slotMachine.classList.add("show")
    slotMachine2.classList.add("show")
    letsSpeak.classList.add("show")
    chosenSet.classList.add("show")
    chosenSet.textContent = text
    headerInfo.classList.remove("visible")
}
function startGameQuestions() {


    oneDeckButtons.classList.add("visible")
    // renderCards("ru")
    // renderCards("eng")
    headerInfo.classList.remove("visible")
    popupMissionsAndSets.classList.add("close")
    // logoSpecial.classList.add("hidden")
    cardForSpeakingGame.classList.remove("hiddenDeck")
    // popupMissionsAndSetsGameFindAPair.classList.add("open")
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
    headerInfo.classList.remove("visible")
    gameFindAPairButtonBackToMissions.disabled = false;
    gameFindAPairButtonNotUsed.disabled = true;
    howManyTimesSkipped = 0


    pairsRemainToMatch = chosenArray.length
    foundPairs = 0

    gameFindAPairInfo.textContent = `найдено пар: ${foundPairs} / ${chosenArray.length}`
    headerInfo.textContent = `читов использовано: ${howManyTimesSkipped}`
    button001.classList.add("hidden")
    popupMissionsAndSets.classList.add("close")
    logoSpecial.classList.add("hidden")
    gameFindAPair.classList.add("open")
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

dataFromEachPopupMissionsAndSets.forEach((set) => {

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
        gameFindAPairContainer.append(someCard)
    }
}
// обращаемся к нужным массивам с данными
function getArray(set) {
    chosenArray = null
    chooseQuestions = null

    // выбираем какие слова будут на карточках для поиска пар gameFindAPair и
    // рандомно перемешиваем через готовую функцию
    chosenArray = allCardsGameFindAPair[set].sort(function () {
        return Math.random() - 0.5;
    });

    // Выбираем какие вопросы будут в колоде карт speaking и
    // рандомно перемешиваем через готовую функцию
    chooseQuestions = allQuestionsOneDeck[set].sort(function () {
        return Math.random() - 0.5;
    });

    // можем посмотреть в консоли перемешанные краточки
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
            count === max - min ? nextCards() : null
            foundPairs++;
            // foundPairsOutOfSix++;
            pairsRemainToMatch--




            gameFindAPairInfo.textContent = `найдено пар: ${foundPairs} / ${chosenArray.length}`
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
    starResult()
    headerInfo.textContent = `читов использовано: ${howManyTimesSkipped}`
    headerInfo.classList.add("visible")
    tryAgainButton.classList.remove("hidden")
    // oneDeckButtons.classList.remove("hidden")
    popupMissionsAndSets.classList.remove("close")
    gameFindAPair.classList.remove("open")
    popupMissionsAndSetsTitle.textContent = `Результат: ${timer.textContent} seconds`


    // else {
    //     howManyStarsEmoji = howManyStarsEmoji + 1
    //     console.log(howManyStarsEmoji)
    //     console.log(timer.textContent)
    //     console.log(seconds)
    //     starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    // }


    // popupMissionsAndSetsTitle.textContent = `${chosenSet.textContent} пройдена : ${timer.textContent}`
    popupMissionsAndSetsDescription.innerHTML = "Еще разок?"
    // попробуете побить рекорд
    // popupMissionsAndSetsDescription.innerHTML = `Сможешь лучше? ${chosenSet.textContent}`
    timeMiliseconds.textContent = "00"
    timeSeconds.textContent = "00"
    popupMissionsAndSetsSets.classList.remove("hide")
    wordOrderGameDrunkRobot.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    slotMachine2.classList.remove("show")
    letsSpeak.classList.remove("show")
    chosenSet.classList.remove("show")
    tryAgainButton.textContent = `Yes! ${chosenSet.textContent}`
    const AudioWinner = new Audio("https://zvukitop.com/wp-content/uploads/2021/03/zvuk-tadam-na-trube.mp3");
    AudioWinner.volume = 0.075;
    AudioWinner.play()


    min = 0
    max = 6
    tens = "00";
    seconds = "00";
    gameFindAPairContainer.innerHTML = ""
    count = 0
}



function scroll(direction) {
    popupMissionsAndSetsSets.scrollBy(direction, 0)
}
// При нажатии запускаем событие "навешиваем событие"
wordOrderGameDrunkRobot.addEventListener("click", startGameRobotBender)

slotMachine.addEventListener("click", startGameSlotMachine)
// wordOrderGameDrunkRobot.addEventListener("onclick", () => {
// location.href="https://vismyfriend.github.io/Bender/"
// })
popupMissionsAndSetsGameFindAPair.addEventListener("click", startGameFindPairs)
letsSpeak.addEventListener("click", startGameQuestions)
gameFindAPairButtonSkipThese.addEventListener("click", nextCardsGameFindAPairCheatUsed)
tryAgainButton.addEventListener("click", startGameFindPairs)
foundPairs = 0
howManyTimesSkipped = 0
gameFindAPairButtonNotUsed.addEventListener("click", () => {
    coverCards(pictureR)
})




gameFindAPairButtonBackToMissions.addEventListener("click", () => {
    // coverCards(pictureL)
    pageReloadRefresh()
})

oneDeckButtonPrevious.addEventListener("click", pageReloadRefresh)


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
        audio.volume = 0

    }



}
const audiomissionMusicBackground = new Audio("https://audio.jukehost.co.uk/wDqy560srBF4ZvgkwI8wAqNcgK9I0cW0");

helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)
function helloMusicStartButtonInvisible() {
    // const audiomissionMusicBackground = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    audiomissionMusicBackground.volume = 0.4;
    audiomissionMusicBackground.play()
    audiomissionMusicBackground.loop = false;
    helloMusicStartButton.classList.add("invisible")
    audioIconOnOff.classList.add("visible")
    // wtf пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
    // audioIconOnOffTrack = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    // missionMusicBackgroundIconButton.classList.add("off")

}
const audioIconOnOffTrack = new Audio("https://audio.jukehost.co.uk/JHNeJtC076ydQwBp3vBmLGiMTMpExydO");
audioIconOnOffTrack.loop = false;

audioIconOnOff.addEventListener("click", () => {
    audioIconOnOff.classList.toggle("off")

    audiomissionMusicBackground.pause()


    // console.log(audioIconOnOffTrack.volume);
    // console.log(audioIconOnOffTrack);

    //1
    if (audioIconOnOffTrack.volume == 0) {
        //3 0.4
        audioIconOnOffTrack.volume = 0.4
        audioIconOnOffTrack.play()

        //2 0     5 0
    } else {
        audioIconOnOffTrack.volume = 0
        audioIconOnOffTrack.pause()

    }
})

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
        missionMusicBackground.volume = 0

    }



}


