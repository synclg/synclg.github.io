$(() => {
    let currentlySelectedPage = getParameterByName('page');
    currentlySelectedPage = currentlySelectedPage == null ? 1 : currentlySelectedPage;

    $(`.pagination .page-item:nth-of-type(${currentlySelectedPage})`).addClass('active');
    setTimeout(function () {
        initPage();
    }, 400)
});



//Normally it will come from the back end as json
//A front-end framework custom made or Vue, Angluar or React will handle the visualisation here
//in this case mocked js data will be used here from the js and the template will be built on the place
//pagination will be handled by the server and the items in the json will be for the current page

function initPage() {
    let viewsObj = {
        'board-game-list':
            ['roleplaying-games.html', 'strategy-games.html', 'cooperative-games.html',
                'games-in-bulgarian.html', 'card-games.html', 'family-games.html', 'childrens-games.html'],
        'menu-views':
            ['cold-warm-drinks.html', 'sweets.html', 'shakes.html', 'alcholol-beverages.html']
    };

    let dataForPage = getDataForPage();

    let fileName = window.location.href.split('/').pop();
    for(let fileDir in viewsObj) {
        if(viewsObj[fileDir].indexOf(fileName) != -1) {
            $(`#${fileDir} li:nth-of-type(${viewsObj[fileDir].indexOf(fileName) + 1})`)
                .addClass('highlighted-item');

            let dataForCurrentPage = dataForPage[fileName];
            let dataContainer = $('.board-game-card-container');

            dataForCurrentPage.forEach(function (data) {
                buildCard(data, dataContainer);
            });

            break;
        }
    }
}


// A function that builds a card with
// the template given the data and the element to attach to
function buildCard(data, elToAttachTo) {
    let elementToBeAttached = $(`<div class="card-style-1 card-style">
    <div class="wrapper">
        <div class="header">
            <ul class="menu-content">
                <li>
                    <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li><a href="#" class="fa fa-heart-o"><span>${Math.floor(Math.random() * Math.floor(100))}</span></a></li>
                <li><a href="#" class="fa fa-comment-o"><span>${Math.floor(Math.random() * Math.floor(50))}</span></a></li>
            </ul>
        </div>
        <div class="data">
            <div class="content">
                <h1 class="title"><a href="#">${data.bgTitle}</a></h1>
                <p class="text">${smallerText(data.bgDescription, 150)}</p>
                <a href="views/index.html" class="button">Прочетете повече</a>
            </div>
        </div>
    </div>
</div>`)

    elementToBeAttached.find('.wrapper').css('background', `url(${data.bgImgPath}) center/cover no-repeat`);
    elToAttachTo.append(elementToBeAttached);
}

function smallerText(text, length) {
    let rawText = text.trim();
    return rawText.length > length
        ? rawText.substr(0, length) + '...' : rawText;
}

function getDataForPage() {
    return {
        'roleplaying-games.html': [
            {
                bgImgPath: 'images/board-games/stuffed-fables.jpg',
                bgTitle: 'STUFFED FABLES',
                bgDescription: 'Stuffed Fables е отчасти приказка, отчасти настолна игра, в която участниците поемат ролята на плюшковци! Играта съдържа книжка, която едновременно служи за учене на правилата, но съдържа и различните игрални табла, през които ще преминете в различните глави от историята ѝ. Приключението ще пренесе плюшените ви герои както в предизвикателни битки, така и до запознанства с интересни персонажи.'
            },
            {
                bgImgPath: 'images/board-games/metro33.jpg',
                bgTitle: 'METRO 2033',
                bgDescription: 'Metro 2033 вселената се пренася на масата ви! Играта по едноименния роман ви поставя в позицията на лидери на фракции, враждуващи за малкото ресурси на московското метро. Точките за победа в играта се печелят както от контрола над станциите на метрото, така и чрез изпълнение на задачи от героя ви. И всичко това докато отблъсквате мистериозните атаки, идващи от дълбините на тунелите'
            },
            {
                bgImgPath: 'images/board-games/talisman.jpg',
                bgTitle: 'TALISMAN - THE WOODLANDS Expansion',
                bgDescription: 'The unearthly Woodland is the home of the fae, and beneath its watchful boughs, you\'ll uncover treasures and threats beyond your wildest dreams. You\'ll find new Alternative Endings as five new characters join the quest for the Crown of Command, but will your path through the Woodland lead you to your destiny, or does your fate hold something far different in store?'
            },
            {
                bgImgPath: 'images/board-games/battlestar-gallactica.jpg',
                bgTitle: 'BATTLESTAR GALACTICA',
                bgDescription: 'Battlestar Galactica: The Board Game is an exciting game of mistrust, intrigue, and the struggle for survival which places each player in the role of one of ten of their favorite characters from the show. Each playable character has their own abilities and weaknesses, and all must work together in order for humanity to have any hope of survival. However, one or more players in every game is secretly a Cylon, and wants the humans to perish.'
            },
            {
                bgImgPath: 'images/board-games/descent.jpg',
                bgTitle: 'DESCENT 2nd EDITION',
                bgDescription: 'Trolls and ogres are two of the largest and most belligerent monsters in Terrinoth. Only their age-old hatred for each other has safeguarded the innocent from their depredations. Now, this ancient war has been supplanted by a budding alliance. In Visions of Dawn, you can lead an army of ogres and trolls to rampage across the land, or you can be one of the noble few to stand in their way.'
            },
            {
                bgImgPath: 'images/board-games/titan.jpg',
                bgTitle: 'TITAN',
                bgDescription: 'В Titan влизате в ролята на титан, предвождащ армия от митични чудовища, с помощта на които се опитвате да елиминирате останалите участници. Играта разполага с две табла - едно игрално и едно, предназначено за битки. Те са ключови за победата в Titan, защото чрез тях подсилвате титана си и се подготвяте за по-големи сражения.'
            }
        ],
        'strategy-games.html': [
            {
                bgImgPath: 'images/board-games/descent-madness.jpg',
                bgTitle: 'DESCENT: JOURNEYS IN THE DARK',
                bgDescription: 'Descent: Journeys in the Dark е асиметрична настолна игра, в която един от вас поема ролята на злия повелител, срещу който ще се опълчат до четирима герои. Всяка игра представлява различна мисия, в която повелителят контролира силите на злото, а героите се опитват да спрат неговите планове. Мисиите образуват кампания, в която вашите герои се развиват и придобиват нови предмети и умения.'
            },
            {
                bgImgPath: 'images/board-games/explorers.jpg',
                bgTitle: 'EXPLORERS OF THE NORTH SEA',
                bgDescription: 'Explorers of the North Sea сте капитани на викингски кораби, които целят да открият и завземат нови земи по море. Чрез корабите си транспортирате екипажа до тези места и изпълнявате различни цели. В процеса на игра създавате игралното табло от плочки, които държите в ръката си, след което експлоатирате богатствата на новооткритите на тях острови.'
            },
            {
                bgImgPath: 'images/board-games/explorers2.jpg',
                bgTitle: 'RAIDERS OF THE NORTH SEA',
                bgDescription: 'Raiders of the North Sea сте викингски воини, стремящи се да спечелят благоволението на вожда си чрез типични викингски неща - плячкосване, унищожаване на селища и носене на дарове. Разширението Hall of Heroes добавя компоненти за пети играч, както и нов ресурс - медовина, и всички съмнителни приключенци и задачи, които тя привлича!'
            },
            {
                bgImgPath: 'images/board-games/war-of-mine.jpg',
                bgTitle: 'WAR OF MINE - THE BOARD GAME',
                bgDescription: 'During day time you will take shelter in a ruined tenement house, which you will care about and manage by: removing rubble, searching through various rooms (often behind barricaded doors), you will build beds, improvised workshops, stoves, tools, water filters, small animal traps, you will cultivate an improvised vegetable garden, fix the tenements’ shelled facilities, reinforce the security of your shelter and should winter come, you’ll try to keep it warm.'
            }
        ]
    };
}

