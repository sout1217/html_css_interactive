var prev_button, next_button

var disk_inner

var pageNum = 0

var totalNum = 0

var album ;

var pointBtnAll

var contentWrap

var bgArray = []

bgArray[0] = ["#0272a4", "#f6a564"]
bgArray[1] = ["red", "black"]
bgArray[2] = ["#b7c0c9", "#285c5a"]

window.onload = function() {

    prev_button = document.querySelectorAll('button')[0]
    next_button = document.querySelectorAll('button')[1]

    contentWrap = document.querySelector('.contentWrap')
    disk_inner = document.querySelectorAll('.disk_inner')

    album = document.querySelectorAll('.album')

    totalNum = album.length

    console.log(album.length)

    prev_button.addEventListener('click', function () {
        console.log('prev button')
        if (pageNum > 0) {
            pageNum--;
        } else {
            pageNum = totalNum -1
        }
        pageChangeFunc()
    })

    next_button.addEventListener('click', function () {
        console.log('next button')

        if (pageNum < totalNum-1) {
            pageNum++
        } else {
            pageNum = 0
        }
        pageChangeFunc()
    })

    // 최초실행
    // pageNum =
    pageChangeFunc()

    function pageChangeFunc() {

        let bgG = `linear-gradient(120deg, ${bgArray[pageNum][0]}, ${bgArray[pageNum][1]})`

        document.querySelector('.contentWrap').style.background = bgG

        console.log('album =', album.length)
        console.log('totalNum =', totalNum)


        for (let i = 0; i < totalNum; i++) {
            if (pageNum == i) {
                // 현재 컨텐츠 페이지
                album[i].classList.add('active')
            } else {
                album[i].classList.remove('active')
            }

        }
        // album[pageNum].classList.add('active')
        disk_inner[pageNum].style.background =bgArray[pageNum][1]
    }
}