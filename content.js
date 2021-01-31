window.addEventListener('load', main, false);

function main (evt) {
  console.log('running content script');

  var vidContainerClass = ".col-md-8.col-sm-7"
  var adsContainerClass =  ".col-md-4.col-sm-5"
  var maxWidthClass = "col-lg-12 col-md-12 col-sm-12"

  var checkForElementTimer = setInterval(checkForElementAndRun, 1000);

  function checkForElementAndRun () {
    console.log('running check in interval')
    if (document.querySelector(adsContainerClass) != null) {
      var adsContainer = document.querySelector(adsContainerClass);
      var vidContainer = document.querySelector(vidContainerClass);

      adsContainer.parentNode.removeChild(adsContainer);
      vidContainer.className = maxWidthClass;
      clearInterval(checkForElementTimer);
    }
  }
}
