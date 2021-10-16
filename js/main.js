//HEADER STICKY
if(document.querySelector('.home-header')){
window.onscroll = function() {stickyHeaderFunction()};
var header = document.querySelector("header");
var sticky = header.offsetTop + 100;
function stickyHeaderFunction() {
  header.style.opacity=0;
  if (window.pageYOffset > sticky) {
    header.classList.add("home-sticky-header");
    header.style.opacity=1
  } else {
    header.classList.remove("home-sticky-header");
    header.style.opacity=1

  }
}
}
//OTHER HEADER STICKY
if(document.querySelector('.other-header')){
  window.onscroll = function() {stickyHeaderFunction()};
  var header = document.querySelector("header");
  var sticky = header.offsetTop + 100;
  function stickyHeaderFunction() {
    header.style.opacity=0;
    if (window.pageYOffset > sticky) {
      header.classList.add("other-sticky-header");
      header.style.opacity=1
    } else {
      header.classList.remove("other-sticky-header");
      header.style.opacity=1
  
    }
  }
  }
//back to top
let backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
})


//HOME BANNER SEARCH CURRENT TEXT LENGTH, FILTER MENU
if(document.querySelector('#banner .left-banner .current-select')){
    let currentChoose = document.querySelector('#banner .left-banner .current-select')
    if(currentChoose.textContent.length > 10){
      currentChoose.innerHTML = currentChoose.textContent.substring(0,10) + '...' + '<img src="images/Home/Group 2.png" alt="">';
    }
    let listWrap = document.querySelector('#banner .left-banner ul')
    let listItems = [...document.querySelectorAll('#banner .left-banner ul li')]

    currentChoose.addEventListener('click',() => {
      if(listWrap.style.display == 'block'){
        listWrap.style.display = 'none'
      }else{
        listWrap.style.display = 'block'
      }
    })

    function newItemImport(){
      currentChoose.innerHTML = this.textContent + '<img src="images/Home/Group 2.png" alt="">';
      if(currentChoose.textContent.length > 10){
        currentChoose.innerHTML = currentChoose.textContent.substring(0,10) + '...' + '<img src="images/Home/Group 2.png" alt="">';
      }
      listWrap.style.display='none'
    }

    listItems.forEach(item => item.addEventListener('click', newItemImport))
}

//STASTISTIC HOME COUNTER
if(document.querySelectorAll('#statistic .statistic-card')){
  $('.num').countUp({
    'time':800,
    'delay':10
  })
}
//TOP FREELANCER
if(document.querySelector('#top-freelancer')){
  let saveBtns = [...document.querySelectorAll('.save-btn')];
  function changeBtn() {
    
    if(!this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Saved'
      this.classList.add('active')
    }else if(this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Click to Save'
      this.classList.remove('active')
    }
    
  }
  saveBtns.forEach(btnm => btnm.addEventListener('click', changeBtn))
}
//latest job save btn
if(document.querySelector('#latest-job')){
  let saveBtns = [...document.querySelectorAll('.save')];
  function changeBtn() {
    
    if(!this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Saved'
      this.classList.add('active')
    }else if(this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Click to Save'
      this.classList.remove('active')
    }
    
  }
  saveBtns.forEach(btnm => btnm.addEventListener('click', changeBtn))
}
//PACKAGE CARDS
if(document.querySelector('#package')){
  let packageBtns = [...document.querySelectorAll('#package .buy-now')]
  function changePackageCardOver() {
    this.parentElement.classList.add('active')
  }
  function changePackageCardOut() {
    this.parentElement.classList.remove('active')
  }
  packageBtns.forEach(btn => btn.addEventListener('mouseover',changePackageCardOver))
  packageBtns.forEach(btn => btn.addEventListener('mouseout',changePackageCardOut))
}

//ACTIVE HOW IT WORKS BLOCK
if(document.querySelector('#hiring-freelancing-btns')){
  let hireBlock = document.querySelector('#hiring-freelancing-btns .hire-wrap')
  let freelancingBlock = document.querySelector('#hiring-freelancing-btns .freelancing-wrap')
  let btnFreelancing = document.querySelector('#hiring-freelancing-btns .freelancing-btn')
  let btnHire = document.querySelector('#hiring-freelancing-btns .hiring-btn')

  btnHire.addEventListener('click', () => {
    hireBlock.classList.add('active');
    btnHire.classList.add('active');
    freelancingBlock.classList.remove('active');
    btnFreelancing.classList.remove('active');
  })

  btnFreelancing.addEventListener('click', () => {
    hireBlock.classList.remove('active');
    btnHire.classList.remove('active');
    freelancingBlock.classList.add('active');
    btnFreelancing.classList.add('active');
  })

}

//OTHER BANNER INPUT
if(document.querySelector('#banner-other-input .current-select')){
  let currentChoose = document.querySelector('#banner-other-input .current-select')
  if(currentChoose.textContent.length > 10){
    currentChoose.innerHTML = currentChoose.textContent.substring(0,10) + '...' + '<img src="images/Home/Group 2.png" alt="">';
  }
  let listWrap = document.querySelector('#banner-other-input  ul')
  let listItems = [...document.querySelectorAll('#banner-other-input ul li')]

  currentChoose.addEventListener('click',() => {
    if(listWrap.style.display == 'block'){
      listWrap.style.display = 'none'
    }else{
      listWrap.style.display = 'block'
    }
  })

  function newItemImport(){
    currentChoose.innerHTML = this.textContent + '<img src="images/Home/Group 2.png" alt="">';
    if(currentChoose.textContent.length > 10){
      currentChoose.innerHTML = currentChoose.textContent.substring(0,10) + '...' + '<img src="images/Home/Group 2.png" alt="">';
    }
    listWrap.style.display='none'
  }

  listItems.forEach(item => item.addEventListener('click', newItemImport))
}

//BROWSE JOB INPUT
if(document.querySelector('#latest-job .search-result')){
  let currentChooseLeft = document.querySelector('#latest-job .search-result .sort-left .current')
  if(currentChooseLeft.textContent.length > 20){
    currentChooseLeft.innerHTML = '<img src="images/Home/Group 2.png" alt="">' + currentChooseLeft.textContent.substring(0,20) + '...';
  }
  let listWrapLeft = document.querySelector('#latest-job .search-result .sort-left  ul')
  let listItemsLeft = [...document.querySelectorAll('#latest-job .search-result .sort-left ul li')]

  currentChooseLeft.addEventListener('click',() => {
    if(listWrapLeft.style.display == 'block'){
      listWrapLeft.style.display = 'none'
    }else{
      listWrapLeft.style.display = 'block'
    }
  })

  function newItemImportLeft(){
    currentChooseLeft.innerHTML =  '<img src="images/Home/Group 2.png" alt="">' + this.textContent;
    if(currentChooseLeft.textContent.length > 20){
      currentChooseLeft.innerHTML = '<img src="images/Home/Group 2.png" alt="">' + currentChooseLeft.textContent.substring(0,20) + '...';
    }
    listWrapLeft.style.display='none'
  }

  listItemsLeft.forEach(item => item.addEventListener('click', newItemImportLeft))



  let currentChooseRight = document.querySelector('#latest-job .search-result .sort-right .current')
  if(currentChooseRight.textContent.length > 20){
    currentChooseRight.innerHTML = '<img src="images/Home/Group 2.png" alt="">' + currentChooseRight.textContent.substring(0,20) + '...';
  }
  let listWrapRight = document.querySelector('#latest-job .search-result .sort-right  ul')
  let listItemsRight = [...document.querySelectorAll('#latest-job .search-result .sort-right ul li')]

  currentChooseRight.addEventListener('click',() => {
    if(listWrapRight.style.display == 'block'){
      listWrapRight.style.display = 'none'
    }else{
      listWrapRight.style.display = 'block'
    }
  })

  function newItemImportRight(){
    currentChooseRight.innerHTML =  '<img src="images/Home/Group 2.png" alt="">' + this.textContent;
    if(currentChooseRight.textContent.length > 20){
      currentChooseRight.innerHTML = '<img src="images/Home/Group 2.png" alt="">' + currentChooseRight.textContent.substring(0,20) + '...';
    }
    listWrapRight.style.display='none'
  }

  listItemsRight.forEach(item => item.addEventListener('click', newItemImportRight))
}


//FREELANCER DETAILS SAVE
if(document.querySelector('#freelancer-details')){
  let saveBtns = [...document.querySelectorAll('.save-btn')];
  function changeBtn() {
    
    if(!this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Saved'
      this.classList.add('active')
    }else if(this.className.includes('active')){
      this.innerHTML = '<i class="fas fa-heart"></i>Click to Save'
      this.classList.remove('active')
    }
    
  }
  saveBtns.forEach(btnm => btnm.addEventListener('click', changeBtn))
}
//freelancer-details SEARCH CURRENT TEXT LENGTH, FILTER MENU
if(document.querySelector('#freelancer-details .current')){
  let currentChoose = document.querySelector('#freelancer-details .current')
  if(currentChoose.textContent.length > 15){
    currentChoose.innerHTML = currentChoose.textContent.substring(0,15) + '...' + '<img src="images/Home/Group 2.png" alt="">';
  }
  let listWrap = document.querySelector('#freelancer-details ul')
  let listItems = [...document.querySelectorAll('#freelancer-details ul li')]

  currentChoose.addEventListener('click',() => {
    if(listWrap.style.display == 'block'){
      listWrap.style.display = 'none'
    }else{
      listWrap.style.display = 'block'
    }
  })

  function newItemImport(){
    currentChoose.innerHTML = this.textContent + '<img src="images/Home/Group 2.png" alt="">';
    if(currentChoose.textContent.length > 15){
      currentChoose.innerHTML = currentChoose.textContent.substring(0,15) + '...' + '<img src="images/Home/Group 2.png" alt="">';
    }
    listWrap.style.display='none'
  }

  listItems.forEach(item => item.addEventListener('click', newItemImport))
}
//LOGIN REGISTER BLOCK DISPLAY
if(document.querySelector('#exampleModalLong')){
  let loginRegisterWrap = document.querySelector('#exampleModalLong')
  let loginBlock = document.querySelector('#exampleModalLong .login-block')
  let registerBlock = document.querySelector('#exampleModalLong .register-block')
  let signUpBtn = document.querySelector('#exampleModalLong .small-text .sign-up-btn')
  let signInBtn = document.querySelector('#exampleModalLong .small-text .sign-in-btn')

  let loginBtn = document.querySelector('.btns-wrap .login-btn')
  let registerBtn = document.querySelector('.btns-wrap .register-btn')

  signInBtn.addEventListener('click', () => {
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
    loginBlock.classList.add('active-block')
    registerBlock.classList.remove('active-block')
  })
  loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
    loginBlock.classList.add('active-block')
    registerBlock.classList.remove('active-block')
  })

  signUpBtn.addEventListener('click', () => {
    loginBtn.classList.remove('active')
    registerBtn.classList.add('active')
    loginBlock.classList.remove('active-block')
    registerBlock.classList.add('active-block')
  })
  registerBtn.addEventListener('click', () => {
    loginBtn.classList.remove('active')
    registerBtn.classList.add('active')
    loginBlock.classList.remove('active-block')
    registerBlock.classList.add('active-block')
  })
}

//INNER HEADER
if(document.querySelector('#top-header .notification-wrap')){
  //NOTIFICATION
  let notfBtn = document.querySelector('#top-header .notif-icon')
  let notfWrap = document.querySelector('#top-header .notification-wrap')

  notfBtn.addEventListener('click', () => {
    if(notfWrap.style.display == '' || notfWrap.style.display == 'none'){
      notfWrap.style.display = 'block';
    }else if(notfWrap.style.display = 'block'){
      notfWrap.style.display = 'none'
    }
  })

  //MESSAGES
  let emlBtn = document.querySelector('#top-header .email-icon')
  let emlWrap = document.querySelector('#top-header .email-wrap')

  emlBtn.addEventListener('click', () => {
    if(emlWrap.style.display == '' || emlWrap.style.display == 'none'){
      emlWrap.style.display = 'block';
    }else if(emlWrap.style.display = 'block'){
      emlWrap.style.display = 'none'
    }
  })

  //PROFILE
  let prfBtn = document.querySelector('#top-header .profile-icon')
  let prfWrap = document.querySelector('#top-header .profile-wrap')

  prfBtn.addEventListener('click', () => {
    if(prfWrap.style.display == '' || prfWrap.style.display == 'none'){
      prfWrap.style.display = 'block';
    }else if(prfWrap.style.display = 'block'){
      prfWrap.style.display = 'none'
    }
  })
}
//SIDE MENU
if(document.querySelector('#inner-menu-right')){
  let dispInnerUl = document.querySelector('.display-inner-ul');
  let innerUl = document.querySelector('.inner-ul')

  dispInnerUl.addEventListener('click', () => {
    if(innerUl.style.display == '' || innerUl.style.display == 'none'){
      innerUl.style.display = 'block';
      dispInnerUl.classList.add('active')
    }else if(innerUl.style.display = 'block'){
      innerUl.style.display = 'none'
      dispInnerUl.classList.remove('active')
    }
  })

  let sideDisBtn = document.querySelector('#side-menu-display-btn');
  let sideMenu = document.querySelector('#inner-menu-right');
  let extSideBtn = document.querySelector('.ext-side-menu-btn')

  sideDisBtn.addEventListener('click', () => {
    sideMenu.style.left = '0';
  })

  extSideBtn.addEventListener('click', () => {
    sideMenu.style.left = '-265px';
  })
}
//MESSAGES
if(document.querySelector('#messages')){
  let displayBtn = document.querySelector('#messages .display-messages-btn');
  let messagesWrap = document.querySelector('#messages .left-secition')
  let closeBtn = document.querySelector('#messages .close-messages')

  displayBtn.addEventListener('click', () => messagesWrap.style.display = "block")
  closeBtn.addEventListener('click', () => messagesWrap.style.display = "none")
}

//STATISTIC
if(document.querySelector('#dashboard')){
  let ctx = document.getElementById('myChart').getContext('2d');
  let bckSts = ctx.createLinearGradient(0, 0, 0, 400);

  bckSts.addColorStop(0, '#F72A85');
  bckSts.addColorStop(1, '#F72A850A');

  let firstSixMonths = ['January', 'February', 'March', 'April', 'May', 'June']
  let lastSixMonths = ['July ', 'August ', 'September', 'October ', 'November', 'December']

  let firstSixMonthsData = [500, 250, 500, 220, 340, 310]
  let lastSixMonthsData = [260, 450, 204, 420, 40, 110]

  let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: firstSixMonths,
          datasets: [{
              
              backgroundColor: bckSts,
              borderColor: 'transparent',
              data: firstSixMonthsData
          }]
      },

      // Configuration options go here
      options: {
        events: ['click'],
        legend: {
          display: false,
      }
      }
  });

  let displayUl = document.querySelector('.choose-wrap .choose')
  let chooseUl = document.querySelector('.choose-wrap ul')

  displayUl.addEventListener('click', () => {
    if(chooseUl.style.display == '' || chooseUl.style.display == 'none'){
      chooseUl.style.display = 'block';
      
    }else if(chooseUl.style.display = 'block'){
      chooseUl.style.display = 'none'
      
    }
  })

  let chooseLi = [...document.querySelectorAll('.choose-wrap ul li')]

  function setNewValues(){
    displayUl.innerHTML = this.textContent + '<img src="images/Dashboard/Group 278.png" alt="">';
    if(this.getAttribute('data-target') == 'first'){
      chart.data.labels = firstSixMonths
      chart.data.datasets[0].data = firstSixMonthsData
      chart.update();
    }else if(this.getAttribute('data-target') == 'last'){
      chart.data.labels = lastSixMonths
      chart.data.datasets[0].data = lastSixMonthsData
      chart.update()
    }
  }
  chooseLi.forEach(item => item.addEventListener('click', setNewValues))
}



if(document.querySelector('#latest-job #price-range')){
  let priceRange = document.querySelector('#latest-job form #price-range');
  let minValue = document.querySelector('#latest-job .price-range-values .min-value');
  let maxValue = document.querySelector('#latest-job .price-range-values .max-value');

  noUiSlider.create(priceRange, {
    start: [0, 3000],
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 0,
        'max': 3000
    }
  });

  let leftHandle = document.querySelector('#latest-job form #price-range .noUi-handle-lower')
  let rightHandle = document.querySelector('#latest-job form #price-range .noUi-handle-upper')

  leftHandle.addEventListener('mousemove', () => {
    minValue.textContent = Math.round(Number(leftHandle.getAttribute('aria-valuetext')))
  })
  rightHandle.addEventListener('mousemove', () => {
    maxValue.textContent = Math.round(Number(rightHandle.getAttribute('aria-valuetext')))
  })
}