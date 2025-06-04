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
    tablinks[i].className = tablinks[i].className.replace(" bg-zinc-800", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("tab" + tabNum).className = "tab_content grid";
  evt.currentTarget.className += " bg-zinc-800";
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
    tablinks[i].className = tablinks[i].className.replace(" bg-zinc-800", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("tab" + tabNum).className = "tab_content grid";
  evt.currentTarget.className += " bg-zinc-800";
}

function saveData() {
  const fname = document.getElementById('fname').value;
  localStorage.setItem('fname', fname);
  const mname = document.getElementById('mname').value;
  localStorage.setItem('mname', mname);
  const lname = document.getElementById('lname').value;
  localStorage.setItem('lname', lname);
  const sname = document.getElementById('sname').value;
  localStorage.setItem('sname', sname);
  const pname = document.getElementById('pname').value;
  localStorage.setItem('pname', pname);

  const dob = document.getElementById('dob').value;
  localStorage.setItem('dob', dob);
  const age = document.getElementById('age').value;
  localStorage.setItem('age', age);
  const height = document.getElementById('height').value;
  localStorage.setItem('height', height);
  const weight = document.getElementById('weight').value;
  localStorage.setItem('weight', weight);
  const gender = document.getElementById('gender').value;
  localStorage.setItem('gender', gender);
  const plang = document.getElementById('plang').value;
  localStorage.setItem('plang', plang);
  const slang = document.getElementById('slang').value;
  localStorage.setItem('slang', slang);

  const addr = document.getElementById('addr').value;
  localStorage.setItem('addr', addr);
  const apt = document.getElementById('apt').value;
  localStorage.setItem('apt', apt);
  const city = document.getElementById('city').value;
  localStorage.setItem('city', city);
  const state = document.getElementById('state').value;
  localStorage.setItem('state', state);
  const zip = document.getElementById('zip').value;
  localStorage.setItem('zip', zip);

  const hphone = document.getElementById('hphone').value;
  localStorage.setItem('hphone', hphone);
  const wphone = document.getElementById('wphone').value;
  localStorage.setItem('wphone', wphone);
  const cphone = document.getElementById('cphone').value;
  localStorage.setItem('cphone', cphone);

  // Insurance
  const pcomp = document.getElementById('pcomp').value;
  localStorage.setItem('pcomp', pcomp);
  const ppolicy = document.getElementById('ppolicy').value;
  localStorage.setItem('ppolicy', ppolicy);
  const pgroup = document.getElementById('pgroup').value;
  localStorage.setItem('pgroup', pgroup);
  const psub = document.getElementById('psub').value;
  localStorage.setItem('psub', psub);
  const pdob = document.getElementById('pdob').value;
  localStorage.setItem('pdob', pdob);
  const paddr = document.getElementById('paddr').value;
  localStorage.setItem('paddr', paddr);
  const papt = document.getElementById('papt').value;
  localStorage.setItem('papt', papt);
  const pcity = document.getElementById('pcity').value;
  localStorage.setItem('pcity', pcity);
  const pstate = document.getElementById('pstate').value;
  localStorage.setItem('pstate', pstate);
  const pzip = document.getElementById('pzip').value;
  localStorage.setItem('pzip', pzip);
  const scomp = document.getElementById('scomp').value;

  localStorage.setItem('scomp', scomp);
  const spolicy = document.getElementById('spolicy').value;
  localStorage.setItem('spolicy', spolicy);
  const sgroup = document.getElementById('sgroup').value;
  localStorage.setItem('sgroup', sgroup);
  const ssub = document.getElementById('ssub').value;
  localStorage.setItem('ssub', ssub);
  const sdob = document.getElementById('sdob').value;
  localStorage.setItem('sdob', sdob);
  const saddr = document.getElementById('saddr').value;
  localStorage.setItem('saddr', saddr);
  const sapt = document.getElementById('sapt').value;
  localStorage.setItem('sapt', sapt);
  const scity = document.getElementById('scity').value;
  localStorage.setItem('scity', scity);
  const sstate = document.getElementById('sstate').value;
  localStorage.setItem('sstate', sstate);
  const szip = document.getElementById('szip').value;
  localStorage.setItem('szip', szip);



  window.location.href = './profile.html';
}