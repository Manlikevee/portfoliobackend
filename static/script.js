document.addEventListener("DOMContentLoaded", function () {
  const browserSections = document.querySelectorAll('.browser-section');
  const headerTabs = document.querySelector('.browser-header-tabs');
  const contentTabs = document.querySelectorAll('.browser-tab-content');
  const noActiveTabMessage = document.querySelector('#noactive');
  var navLinkOverlays = document.getElementById("navlinkovalays");
  var middleLinkss = document.getElementById("aboutss");


  var swiper = new Swiper('.dashboardtabs',  {
    // Optional parameters
    centeredSlides: false,

    grabCursor: true,
    freeMode: false,
    loop: false,
    mousewheel: true,
    keyboard: {
      enabled: true
    },



    // Responsive breakpoints
    breakpoints: {

      1024: {
        slidesPerView: 6,
        spaceBetween: 0
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 0
      },
    }
    });


  function createTabElement(text, tabId) {






    const tab = document.createElement('li');
    tab.textContent = text;
    tab.setAttribute('data-tab', tabId);
    tab.classList.add('header-tab');
    tab.classList.add('mycont')
    tab.classList.add('swiper-slide')

    tab.addEventListener('click', () => {
      contentTabs.forEach(content => {
        content.style.display = 'none';
      });


      const targetTabContent = document.querySelector(`[data-browser-target="${tabId}"]`);
      targetTabContent.style.display = 'block';
      makeTabActive(tab);
      hideNoActiveTabMessage();
    });

    const closeButton = document.createElement('span');
    closeButton.textContent = 'x';
    closeButton.style.color = '#607B96';
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const tabContentToRemove = document.querySelector(`[data-browser-target="${tabId}"]`);
      const isTabActive = tabContentToRemove.classList.contains('active');
      tabContentToRemove.style.display = 'none';
      headerTabs.removeChild(tab);

      if (isTabActive) {
        const nextTab = headerTabs.firstElementChild;
        if (nextTab) {
          const nextTabId = nextTab.getAttribute('data-tab');
          const nextTabContent = document.querySelector(`[data-browser-target="${nextTabId}"]`);
          nextTabContent.style.display = 'block';
          makeTabActive(nextTab);
        } else {
          showNoActiveTabMessage();
        }
      }
    });

    tab.appendChild(closeButton);

    var swiper = new Swiper('.dashboardtabs',  {
      // Optional parameters
      centeredSlides: false,

      grabCursor: true,
      freeMode: false,
      loop: false,
      mousewheel: true,
      keyboard: {
        enabled: true
      },



      // Responsive breakpoints
      breakpoints: {

        1024: {
          slidesPerView: 6,
          spaceBetween: 0
        },
        940: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 0
        },
      }
      });


    return tab;


  }

  function makeTabActive(tabElement) {
    const activeTabs = document.querySelectorAll('.browser-header-tabs .header-tab.active');
    activeTabs.forEach(activeTab => {
      activeTab.classList.remove('active');
    });
    tabElement.classList.add('active');
    navLinkOverlays.classList.remove('navlinkactiveovalay');
     middleLinkss.classList.remove('datalistactive');
  }

  function showNoActiveTabMessage() {
    contentTabs.forEach(tabContent => {
      tabContent.style.display = 'none';
    });
    if (noActiveTabMessage) {
      noActiveTabMessage.style.display = 'block';
    }
  }

  function hideNoActiveTabMessage() {
    if (noActiveTabMessage) {
      noActiveTabMessage.style.display = 'none';
    }
  }

  if (browserSections.length > 0) {
    const firstSection = browserSections[0];
    const firstTabId = firstSection.getAttribute('data-browser-tab');
    const firstTabContent = document.querySelector(`[data-browser-target="${firstTabId}"]`);
    firstTabContent.style.display = 'block';

    const existingTab = document.querySelector(`.browser-header-tabs [data-tab="${firstTabId}"]`);
    if (existingTab) {
      makeTabActive(existingTab);
    } else {
      const firstTabElement = createTabElement(firstSection.textContent, firstTabId);
      makeTabActive(firstTabElement);
      headerTabs.appendChild(firstTabElement);
    }
  } else {
    showNoActiveTabMessage();
  }

  browserSections.forEach(section => {
    section.addEventListener('click', () => {
      contentTabs.forEach(tabContent => {
        tabContent.style.display = 'none';
      });

      const tabId = section.getAttribute('data-browser-tab');
      const targetTabContent = document.querySelector(`[data-browser-target="${tabId}"]`);
      targetTabContent.style.display = 'block';

      const existingTab = document.querySelector(`.browser-header-tabs [data-tab="${tabId}"]`);
      if (!existingTab) {
        const newTab = createTabElement(section.textContent, tabId);
        headerTabs.appendChild(newTab);
        makeTabActive(newTab);
        hideNoActiveTabMessage();
      } else {
        makeTabActive(existingTab);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const myContElement = document.querySelector('.mycont');

  if (myContElement) {
    const contentSpan = myContElement.querySelector('span');
    if (contentSpan) {
      contentSpan.innerHTML = contentSpan.innerHTML.replace(/<br>/g, ' ');
    }
  }
});


function navtoggler() {
    console.log('clicked');
    var middleLinks = document.getElementById("middlelinks");
    var navLinkOverlay = document.getElementById("navlinkovalay");

    middleLinks.classList.toggle('navlinkactive');
    navLinkOverlay.classList.toggle('navlinkactiveovalay');

    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlay.addEventListener('click', function() {
      middleLinks.classList.remove('navlinkactive');
      navLinkOverlay.classList.remove('navlinkactiveovalay');
    });

    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinks.classList.remove('navlinkactive');
        navLinkOverlay.classList.remove('navlinkactiveovalay');
      }
    });
  }



  function datatog() {
    console.log('clicked');
    var middleLinkss = document.getElementById("aboutss");
    var navLinkOverlays = document.getElementById("navlinkovalays");

    middleLinkss.classList.toggle('datalistactive');
    navLinkOverlays.classList.toggle('navlinkactiveovalay');

    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlays.addEventListener('click', function() {
      middleLinkss.classList.remove('datalistactive');
      navLinkOverlays.classList.remove('navlinkactiveovalay');
    });

    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinkss.classList.remove('datalistactive');
        navLinkOverlays.classList.remove('navlinkactiveovalays');
      }
    });
  }


  function datatogs() {
    console.log('clickedsssssss');
    var middleLinkss = document.getElementById("contact");
    var navLinkOverlays = document.getElementById("navlinkovalayss");

    middleLinkss.classList.toggle('datalistactive');
    navLinkOverlays.classList.toggle('navlinkactiveovalay');

    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlays.addEventListener('click', function() {
      middleLinkss.classList.remove('datalistactive');
      navLinkOverlays.classList.remove('navlinkactiveovalay');
    });

    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinkss.classList.remove('datalistactive');
        navLinkOverlays.classList.remove('navlinkactiveovalays');
      }
    });
  }
var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
  function datatogss() {
    console.log('clicked');
    var middleLinkss = document.getElementById("projects");
    var navLinkOverlays = document.getElementById("navlinkovalayss");

    middleLinkss.classList.toggle('datalistactive');
    navLinkOverlays.classList.toggle('navlinkactiveovalay');

    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlays.addEventListener('click', function() {
      middleLinkss.classList.remove('datalistactive');
      navLinkOverlays.classList.remove('navlinkactiveovalay');
    });

    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinkss.classList.remove('datalistactive');
        navLinkOverlays.classList.remove('navlinkactiveovalays');
      }
    });
  }

// script.js
var direction;
var tilesNum = 225;
var tilesPerRow = Math.sqrt(tilesNum);
var rowStartLeft = new Array();
var rowStartTop = new Array();
var rowEndBottom = new Array();
var rowEndRight = new Array();
var emptyTiles = new Array();
var body = [3, 2, 1];
var moving;
var fruitGenerator;
var powerGenerator;
var gameDiv = document.getElementsByClassName('game')[0];
var boxDimensions = (100 / tilesPerRow).toFixed(4);
var restartButton = document.getElementById('restart_game');
var scoreSpan = document.getElementsByClassName('score')[0];
var score = 0;
var speed = 0.1;

restartButton.addEventListener("click", function() {
  restartGame();
}, false);

function createGrid() {
  for (var i = 1; i <= tilesNum; i++) {
    gameDiv.innerHTML = gameDiv.innerHTML + '<div class="tile" data-tile="' + i + '" style="width:' + boxDimensions + '%; height:' + boxDimensions + '%"></div>';
  }
}

function createBody() {
  for (var i = 1; i <= body.length; i++) {
    if (i == 3) {
      document.querySelector('[data-tile="' + i + '"]').classList.add("head", "body");
    } else if (i == 1 || i == 2) {
      document.querySelector('[data-tile="' + i + '"]').classList.add("body");
    }
  }
}

// Array consisting of upmost left boxes
for (var i = 1; i <= tilesNum; i += tilesPerRow) {
  rowStartLeft.push(i);
}

// Array consisting of upmost right boxes
for (var i = tilesPerRow; i <= tilesNum; i += tilesPerRow) {
  rowEndRight.push(i);
}

// Array consisting of upmost top boxes
for (var i = 1; i <= tilesPerRow; i += 1) {
  rowStartTop.push(i);
}

// Array consisting of upmost bottom boxes
for (var i = (tilesNum - tilesPerRow) + 1; i <= tilesNum; i += 1) {
  rowEndBottom.push(i);
}

window.addEventListener("keydown", control, false);

function control(e) {
  // RIGHT ARROW
  if (e.keyCode == "39") {
    if (direction != 'r' && direction != 'l') {
      changeDirection('r');
    }
  }

  // LEFT ARROW
  if (e.keyCode == "37") {
    if (direction != 'l' && direction != 'r') {
      changeDirection('l');
    }
  }

  // DOWN ARROW
  if (e.keyCode == "40") {
    if (direction != 'd' && direction != 'u') {
      changeDirection('d');
    }
  }

  // UP ARROW
  if (e.keyCode == "38") {
    if (direction != 'u' && direction != 'd') {
      changeDirection('u');
    }
  }
}

function changeDirection(d) {
  var directionDeciderNum,
    directionArrayInit,
    directionArrayOf;
  switch (d) {
    case "r":
      directionDeciderNum = 1;
      directionArrayInit = rowEndRight;
      directionArrayOf = rowStartLeft;
      break;
    case "l":
      directionDeciderNum = -1;
      directionArrayInit = rowStartLeft;
      directionArrayOf = rowEndRight;
      break;
    case "d":
      directionDeciderNum = tilesPerRow;
      directionArrayInit = rowEndBottom;
      directionArrayOf = rowStartTop;
      break;
    case "u":
      directionDeciderNum = -tilesPerRow;
      directionArrayInit = rowStartTop;
      directionArrayOf = rowEndBottom;
      break;
  }

  clearInterval(moving);

  moving = setInterval(function() {
    direction = d;
    var head = document.getElementsByClassName('head')[0];
    var nextTileNum = directionArrayInit.indexOf(parseInt(head.dataset.tile, 10)) > -1 ? directionArrayOf[directionArrayInit.indexOf(parseInt(head.dataset.tile, 10))] : parseInt(head.dataset.tile, 10) + directionDeciderNum;
    if (body.indexOf(nextTileNum) > -1) {
      scoreSpan.innerHTML = +score + ". GAME OVER";
      restartGame();
    } else {
      var nextTile = document.querySelector('[data-tile ="' + nextTileNum + '"]');

      var lastTile = document.querySelector('[data-tile ="' + body[body.length - 1] + '"]');
      body.unshift(nextTileNum);

      nextTile.classList.add("head", "body");

      // IF EATEN FRUIT
      if (nextTile.classList.contains('fruit')) {
        score += 1;
        scoreSpan.innerHTML = score;
        speed = score % 2 == 0 ? speed += 0.01 : speed;
        nextTile.classList.remove('fruit');
        clearInterval(fruitGenerator);
        generateFruit();
        fruitGen();
      }

      // IF JUST MOVING
      else {
        lastTile.classList.remove("body");
        body.pop();
      };
      head.classList.remove("head");
    }
  }, 10 / speed);
}

function generateFruit() {
  var rand;
  var fruit = document.getElementsByClassName('fruit')[0];
  if (fruit) {
    fruit.classList.remove('fruit');
  }
  do {
    rand = Math.floor(Math.random() * tilesNum);
  } while (body.indexOf(rand) > -1);
  document.querySelector('[data-tile ="' + rand + '"]').classList.add('fruit');
}

function fruitGen() {
  fruitGenerator = setInterval(function() {
    generateFruit();
  }, 3000)
};

function startGame() {
  createGrid();
  createBody();
  generateFruit();
}

function restartGame() {
  scoreSpan.innerHTML = +score + ". GAME OVER";
  clearInterval(fruitGenerator);
  clearInterval(moving);
  body = [3, 2, 1];
  speed = 0.1;
  score = 0;
  document.querySelector('.game').innerHTML = "";
  direction = '';
  startGame();
}

startGame();





document.addEventListener("DOMContentLoaded", function () {
    const tabLinking = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
    var navLinkOverlay = document.getElementById("navlinkovalay");
    var middleLinks = document.getElementById("middlelinks");




    // Function to show the selected tab and hide others
    function showTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        tabLinking.forEach(link => {
            link.classList.remove("navactive");
        });

        document.getElementById(tabId).classList.add("active");

        const selectedTabLink = document.querySelector(`.tab-link[href="#${tabId}"]`);
        if (selectedTabLink) {
            selectedTabLink.classList.add("navactive");
            navLinkOverlay.classList.remove('navlinkactiveovalay');
            middleLinks.classList.remove('navlinkactive');
        }
    }

    // Check URL hash and show corresponding tab
    const currentHash = window.location.hash.slice(1);
    if (currentHash) {
        showTab(currentHash);
    } else {
        // Show the first tab by default
        tabContents[0].classList.add("active");
        tabLinking[0].classList.add("navactive");
    }

    // Add click event listeners to tab links
    tabLinking.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const tabId = this.getAttribute("href").slice(1);
            // Hide current tab content with animation
            const currentTabContent = document.querySelector(".tab-content.active");
            currentTabContent.style.opacity = 1;
            currentTabContent.style.transform = "translateX(0px)";

            setTimeout(() => {
                showTab(tabId);
                // Update URL hash without causing page jump
                history.pushState(null, null, `#${tabId}`);
            }, 300); // Wait for the animation duration (0.3s) before showing new tab content
        });
    });
});



   // script.js
const lineNumbers = document.getElementById('lineNumbers');

function generateLineNumbers() {
    const lineNumbersHTML = Array.from({ length: 25 }, (_, index) => `<div>${index + 1}</div>`).join('');
    lineNumbers.innerHTML = lineNumbersHTML;
}

// Generate line numbers on page load
generateLineNumbers();




document.addEventListener('DOMContentLoaded', function () {
    // When keyup happens on an element with id of "inputname1"
    var inputField1 = document.getElementById('inputname1');
    var yourName1 = document.getElementById('yourname1');

    inputField1.addEventListener('keyup', function () {
      // Change the text of the element with id "yourname1" to the value of the input (this element) with double quotes
      var name1 = '"' + inputField1.value.substring(0, 30) + '"';
      yourName1.textContent = name1;
    });

    // When keyup happens on an element with id of "inputname2"
    var inputField2 = document.getElementById('inputname2');
    var yourName2 = document.getElementById('yourname2');

    inputField2.addEventListener('keyup', function () {
      // Change the text of the element with id "yourname2" to the value of the input (this element) with double quotes
      var name2 = '"' + inputField2.value.substring(0, 30) + '"';
      yourName2.textContent = name2;
    });

    // When keyup happens on an element with id of "textarea"
    var textArea = document.getElementById('textarea');
    var yourTextArea = document.getElementById('yourtextarea');

    textArea.addEventListener('keyup', function () {
      // Change the text of the element with id "yourtextarea" to the value of the textarea (this element) with double quotes
      var text = '"' + textArea.value.substring(0, 100) + '"';
      yourTextArea.textContent = text;
    });
  });

/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/





function datatogsss () {
  console.log('clickedsssssss');
  var middleLinkss = document.getElementById("contact");
  var navLinkOverlaysz = document.getElementById("navlinkovalayssx");

  middleLinkss.classList.toggle('datalistactive');
  navLinkOverlaysz.classList.toggle('navlinkactiveovalay');

  // Remove class names if navlinkactiveoverlay is clicked
  navLinkOverlaysz.addEventListener('click', function() {
    middleLinkss.classList.remove('datalistactive');
    navLinkOverlaysz.classList.remove('navlinkactiveovalay');
  });

  // Remove class names if screen width is greater than 999px
  window.addEventListener('resize', function() {
    if (window.innerWidth > 999) {
      middleLinkss.classList.remove('datalistactive');
      navLinkOverlaysz.classList.remove('navlinkactiveovalays');
    }
  });
}





document.addEventListener('DOMContentLoaded', function () {
  const filterForm = document.getElementById('filter-form');
  const items = document.querySelectorAll('.myherocard');

  filterForm.addEventListener('change', function () {
      const selectedCategories = Array.from(filterForm.querySelectorAll('input[name="category"]:checked'))
          .map(input => input.value);

      items.forEach(item => {

          if (selectedCategories.includes(item.dataset.category)) {
              item.style.display = 'flex';
              console.log('dis')
          } else {
              item.style.display = 'none';
              console.log('das')
          }
      });
  });
});


function toggletabdetail(value) {
    const client = document.getElementById('client')
    const websiteurl = document.getElementById('websiteurl')

   const pload = document.getElementById('projectloading')
  const details = document.getElementById('projectdetail');
  const protab = document.getElementById('allpro');
  const dettab = document.getElementById('prodet');
  const alltabs = document.getElementById('majortabs')
  const veesides = document.getElementById('veesidebar')
  // Add or remove classes to show/hide elements
  details.classList.add('showdata');
  veesides.style.display='none';

  details.classList.remove('hidedata');
  alltabs.classList.remove('showdata');
  protab.classList.remove('hidedata');
  alltabs.classList.add('hidedata')
protab.classList.add('hidetab')
dettab.classList.add('showtab');
protab.classList.remove('showtab')

// This will log 12 to the console

if (value) {
 pload.style.display='flex';
  websiteurl.innerHTML = "";
console.log(value);
fetch(`/projectdetail/${value}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('API request failed');
                    alert('An error occurred');
                }
                return response.json();
            })
            .then(data => {
                const projectDetails = data.useraccountdata;
                console.log(projectDetails)
                document.getElementById('ttle').textContent = projectDetails.title;
                document.getElementById('description').textContent = projectDetails.description;
                client.textContent = projectDetails.client
                var liveurl = projectDetails.liveurl;
                var link = document.createElement("a");
                // Set the href attribute based on the value of liveurl
                if (liveurl === "#") {
                  // If liveurl is "#" (inactive link), set the href to "javascript:void(0)"
                  link.href = "javascript:void(0)";
                } else {
                  // If liveurl is a valid URL, set the href and target attributes accordingly
                  link.href = liveurl;
                  link.target = "_blank";
                }
                link.textContent = liveurl; // Set the link text
          
var container = document.getElementById("allimg");

// Clear the existing content of the container
container.innerHTML = '';
                const userimgData = data.userimg
                userimgData.forEach(function (imageInfo) {
  // Create the HTML structure for each image and append it to the container using innerHTML
  container.innerHTML += `
    <div class="image-box">
      <img class="gImg glightbox" src="${imageInfo.image}" alt="" loading="lazy" data-glightbox="type: image">
    </div>
  `;
});

const lightbox = GLightbox({
  selector: '.glightbox' // This selector should match the class used for your lightbox links
});
                 pload.style.display='none';
                // Update other HTML elements with the response data as needed
            })
            .catch(error => {
                console.error('An error occurred:', error);
                   pload.style.display='none';
                alert('An error occurred');
            });
}
}

function toggletaball() {
  const alltabs = document.getElementById('majortabs')
  const details = document.getElementById('projectdetail')
  const protab = document.getElementById('allpro')
  const dettab = document.getElementById('prodet')
  const veesides = document.getElementById('veesidebar');
  veesides.style.display = 'flex'
  details.classList.add('hidedata')
dettab.classList.add('hidetab')
details.classList.remove('showdata');
dettab.classList.remove('showtab');
alltabs.classList.add('showdata')
protab.classList.add('showtab')
alltabs.classList.remove('hidedata')
protab.classList.remove('hidetab')



dettab.classList.remove('showtab');
protab.classList.add('showtab')
}


const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  width: "85vw",
  height: "68vh"
});
