var ctr = 1;
jQuery(".calci_table_test").on("click", ".button-add", function (event) {
  event.preventDefault();
  ctr++;
  var tfa_TestLocation = "tfa_TestLocation" + ctr;
  var tfa_Depth = "tfa_Depth" + ctr;
  var tfa_ConcreteRH = "tfa_ConcreteRH" + ctr;
  var tfa_ConcreteTemp = "tfa_ConcreteTemp" + ctr;
  var tfa_AirTemp = "tfa_AirTemp" + ctr;
  var tfa_AirRH = "tfa_AirRH" + ctr;
  var tfa_Notes = "tfa_Notes" + ctr;
  var newTr =
    '<table border="1" id="myTable' +
    ctr +
    '"><tr id="tfa_Test"  class="alternate-0 rh-test-heading"><th colspan="8">Test' + ctr +'</th></tr><tr class="headerRow"><th>Location</th><th>Depth</th><th>Concrete RH</th><th>Concrete Temp</th><th>Air Temp</th><th>Air RH</th><th>Notes</th><th>Action</th></tr><tr id="tfa_Test" class="repeat alternate-0"><td class="rh-location"><div id="tfa_TestLocation-D" class="oneField"><input type="text" id=' +
    tfa_TestLocation +
    ' size="10" /></span></div></td><td class="rh-depth"><div id="tfa_Depth-D" class="oneField"><input type="text" id=' +
    tfa_Depth +
    ' size="6" /></td><td class="rh-concrete"><div id="tfa_ConcreteRH-D" class="oneField"><input type="text" id=' +
    tfa_ConcreteRH +
    ' size="8" /></div></td><td class="rh-concrete-temp"><div id="tfa_ConcreteTemp-D" class="oneField"><input type="text" id=' +
    tfa_ConcreteTemp +
    ' size="8" /></div></td><td class="rh-air-temp"><div id="tfa_AirTemp-D" class="oneField"><input type="text" id=' +
    tfa_AirTemp +
    ' size="8"/></div></td><td class="rh-air-rh"><div id="tfa_AirRH-D" class="oneField"><input type="text" id=' +
    tfa_AirRH +
    ' size="8"/></div></td><td class="rh-notes"><div id="tfa_Notes-D" class="oneField"><input type="text" id=' +
    tfa_AirRH +
    ' size="10"/></div></td><td class="button-rmm"> <span id="btnrmm"> Remove </span></td></tr></table>';
  jQuery(".calci_table").append(newTr);
});

jQuery(".calci_table").on("click", ".button-rmm", function () {
  if (ctr > 1) {
    jQuery("#myTable" + ctr + "").remove();
    ctr--;
    return false;
  }
});
