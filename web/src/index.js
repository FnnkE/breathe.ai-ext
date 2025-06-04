 function switchTab(evt, tabNum) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    if (!tabcontent[i].className.includes(" hidden")) {
        tabcontent[i].className += " hidden";
    }    
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" bg-zinc-800 rounded-t-xl", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("tab"+tabNum).className = "tab_content grid";
  evt.currentTarget.className += " bg-zinc-800 rounded-t-xl";
} 

function vertSwitchTab(evt, tabNum) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    if (!tabcontent[i].className.includes(" hidden")) {
        tabcontent[i].className += " hidden";
    }    
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" bg-zinc-800 rounded-xl", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("tab"+tabNum).className = "tab_content grid";
  evt.currentTarget.className += " bg-zinc-800 rounded-xl";
} 