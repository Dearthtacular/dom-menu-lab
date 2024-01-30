// Task 5.0
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// Task 1.0 - 1.3
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = ('<h1>SEI Rocks!</h1>');
mainEl.setAttribute('class', 'flex-ctr');

// Task 2.0 - 2.3
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute('class', 'flex-around');

// Task 3.1
const navEl = document.querySelector('#top-menu');
menuLinks.forEach(function (link) {
  const aEl = document.createElement('a');
  console.log(aEl)
  aEl.innerText = link.text;
  aEl.setAttribute('href', link.href);
  navEl.appendChild(aEl);
})

// Task 4.0 - 4.5
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Task 5.1
let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.tagName !== 'A') {
    return
  }
  console.log(link.textContent);

  // Task 5.3
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // Task 5.4
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Task 5.5
  link.classList.add('active');

  // // Task 5.6
  // Below is the answer from the given solutions to the lab for 
  // task 5.5.  I kinda admitted defeat and used it temporarily 
  // in order to complete the rest of the lab.  I returned Monday 
  // to retool the answer in a context that I understand better 
  // (self-study with for loops a few years ago).  I now have a 
  // better grasp on what the .find method was doing, and what
  // is actually being returned to the variable linkState;  

  // const linkState = menuLinks.find(function (subLinkObj) {
  //   return subLinkObj.text === link.textContent;
  // })
  // showingSubMenu = 'subLinks' in linkState;

  let linkState = null

  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].text === link.textContent) {
      linkState = menuLinks[i];
    };
  };

  if (linkState.subLinks) {
    showingSubMenu = true
  } else {
    showingSubMenu = false
  }

  // showingSubMenu = 'subLinks' in linkState;

  // Task 5.7
  if (showingSubMenu) {
    buildSubMenu(linkState.subLinks);
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});

// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  })
};

// Task 6.0
subMenuEl.addEventListener('click', function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.tagName !== 'A') {
    return
  }
  console.log()

  // Task 6.1
  showingSubMenu = false
  subMenuEl.style.top = '0';

  //  Task 6.2
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Task 6.3
  mainEl.innerHTML = (`<h1>${link.text}</h1>`)
})

const topMenuLinks = document.querySelectorAll('#top-menu a');