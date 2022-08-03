/* ==========
 * Split Navigation for Squarespace
 * This Code is licensed by Will-Myers.com 
========== */
(function(){ 
  moveStylesheet()

  let header = document.querySelector('#header'),
      navList = header.querySelector('.header-display-desktop .header-nav-list'),
      headerStyles = window.getComputedStyle(header),
      rightNavLinkCount = headerStyles.getPropertyValue('--right-nav-links'),
      rightNavLinks = navList.querySelectorAll(`:scope > *:nth-of-type(n+${navList.children.length - parseInt(rightNavLinkCount) + 1})`),
      headerActionsRight = header.querySelector('.header-actions--right');

  //Add Unique Targeting Class
  header.classList.add('wm-split-nav')
  
  //Add New Nav
  let newNav = `<div class="header-nav"><div class="header-nav-wrapper header-nav-wrapper--right"><nav class="header-nav-list header-nav-list--right"></nav></div></div>`;
  headerActionsRight.insertAdjacentHTML('afterbegin', newNav);
  newNav = headerActionsRight.querySelector('.header-nav-list--right');
  rightNavLinks.forEach(link => newNav.append(link));
  
  //Calculating widths
  let titleWidth = parseInt(headerStyles.getPropertyValue('--site-title-width')),
      sideWidth = (100 - titleWidth) / 2,
      titleNavWidth = 100 - sideWidth,
      innerTitleWidth = parseFloat(titleWidth / titleNavWidth).toFixed(2),
      innerNavWidth = parseFloat(sideWidth / titleNavWidth).toFixed(2);
  
  header.style.setProperty('--sideWidth', `${sideWidth}%`)
  header.style.setProperty('--titleNavWidth', `${titleNavWidth}%`)
  header.style.setProperty('--innerTitleWidth', `${innerTitleWidth * 100}%`)
  header.style.setProperty('--innerNavWidth', `${innerNavWidth * 100}%`)
  
  
  //Move Stylesheet
  function moveStylesheet() {
    let stylesheet = document.querySelector('#wm-split-nav-css');
    if (!stylesheet) return;
    document.head.prepend(stylesheet);
  }
  
}())