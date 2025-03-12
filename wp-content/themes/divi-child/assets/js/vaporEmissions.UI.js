/* Javascript in this file
 * relates to all the UI elements for the vapor tests
 */

var currentTestNumber = 1;

$(document).ready(function () {
  //setup some classes for form validaiton
  jQuery.validator.addClassRules({
    mins: {
      required: true,
      number: true,
      minlength: 2,
      maxlength: 2,
      range: [0, 59],
    },
    hours: {
      required: true,
      number: true,
      minlength: 1,
      maxlength: 2,
      range: [1, 12],
    },
  });

  //setup the event that should be fired when a user clicks the add test buttton
  $("#btnAddTest").click(function () {
    currentTestNumber++;
    addVaporTest(currentTestNumber);
  });

  //add the test to the page
  addVaporTest(currentTestNumber);

  $(".ccctest").hide();
});

function addVaporTest(testNumber) {
  $("#pad").append(GetTestTemplate(testNumber));

  $(".date").datepicker();

  $("#vaporEmissionTests_" + testNumber).validate({
    messages: {
      required: "field required",
    },
  });

  var formRunner = function () {
    try {
      if (
        $("#vaporEmissionTests_" + testNumber)
          .validate()
          .form()
      )
        vapourTestRunner(testNumber);
    } catch (e) {
      $("#validationError_" + testNumber).text(e);
    }
  };

  $(".form_" + testNumber + "_runner").change(formRunner);
  $(".form_" + testNumber + "_runner").keyup(formRunner);
  $(".form_" + testNumber + "_runner").click(formRunner);

  $("#btnRemoveTest_" + testNumber).click(function () {
    $("#vaporEmissionTests_" + testNumber).remove();
  });

  var startDate = new Date();
  $("#startdate_" + testNumber).val(americanDate(startDate));

  var endDate = startDate.setDate(startDate.getDate() + 3);
  $("#enddate_" + testNumber).val(americanDate(new Date(endDate)));
}

function GetTestTemplate(testNumber) {
  var rtnTemplate =
    '        <div id="pad">'+
    '        <form id="vaporEmissionTests_' +
    testNumber +
    '" method="post" action="#" class="cccalc ccctest">' +
    '        <table align="center" border="1"  border="1" cellspacing="0" cellpadding="0">' +
    '         <tr class="headerrow">' +
    "            <td><span>Step One </span></td>" +
    '            <td colspan="4"><span>Step Two </span></td>' +
    '            <td colspan="2"><span>Optional</span></td>' +
    '            <td colspan="3"><span>Results</span></td>' +
    "          </tr>" +
    
    "          <tr class='desktop'>" +
    '            <td class="dark em-input"><span>Test #</span></td>' +
    '            <td class="dark em-input"><span>Start Date </span></td>' +
    '            <td class="dark em-input"><span>Start Time </span></td>' +
    '            <td colspan="2" class="dark em-input"><span>Start Weight </span></td>' +
    '            <td colspan="2" class="dark em-input"><span>PH Results</span> </td>' +

    '<td rowspan="4">'+
    '<div class="darkresult total-time">'+
    ' <label for="totaltime_' + testNumber + '"><span>Total Time</span></label><input name="totaltime_' +
     testNumber + 
     '" type="text" id="totaltime_' + testNumber + '" size="3" readonly="readonly">' +
    '</div>'+
    "<div class='darkresult weight-gain'>"+
    ' <label for="totalweightgain_' + testNumber + '"><span>Weight Gain</span></label><input name="totalweightgain_' + testNumber + '" type="text" id="totalweightgain_' + testNumber + '" size="3" readonly="readonly">' +
    "</div>"+
    "<div class='darkresult vapor-missions'>"+
    ' <label for="vaporemissions_' + testNumber + '"><span>Vapor Emissions</span></label><input name="vaporemissions_' + testNumber + '" type="text" id="vaporemissions_' + testNumber + '" size="3" readonly="readonly">' +
    '<span>lbs per 24hrs</span>'+
    "</div>"+  
    '</td>'+
    "          </tr>" +
    "          <tr>" +
    '            <td class="dark test-number"><input name="testnumber_' +
    testNumber +
    '" type="text" id="testnumber_' +
    testNumber +
    '" size="1" readonly="readonly" value="' +
    testNumber +
    '"></td>' +
    '            <td class="dark start-date"><input name="startdate_' +
    testNumber +
    '" type="text" id="startdate_' +
    testNumber +
    '" value="01/09/2009" size="5" maxlength="10" class="required date form_' +
    testNumber +
    '_runner"/></td>' +
    '            <td class="dark start-hours"><input name="starthour_' +
    testNumber +
    '" type="text" id="starthour_' +
    testNumber +
    '" size="1" value="12" class="hours number form_' +
    testNumber +
    '_runner">' +
    '		        <input name="startmin_' +
    testNumber +
    '" type="text" id="startmin_' +
    testNumber +
    '" size="1" value="00" class="mins number form_' +
    testNumber +
    '_runner">	 ' +
    '		        <select name="startampm_' +
    testNumber +
    '" id="startampm_' +
    testNumber +
    '" class="form_' +
    testNumber +
    '_runner">' +
    '		  	        <option value="am">AM</option>' +
    '		  	        <option value="pm">PM</option>' +
    "		        </select> </td>" +
    '           <td colspan="2" class="dark start-weight"><input name="startweight_' +
    testNumber +
    '" type="text" id="startweight_' +
    testNumber +
    '" size="1" class="required numberform_' +
    testNumber +
    '_runner" value="0"></td>' +
    '            <td colspan="2" class="dark ph-results"><input name="phresults_' +
    testNumber +
    '" type="text" id="phresults_' +
    testNumber +
    '" size="1" class="form_' +
    testNumber +
    '_runner"></td>' +
    "            </tr>" +
    "          <tr>" +
    '            <td class="dark em-input"><span>Location</span></td>' +
    '            <td class="dark em-input"><span>End Date</span> </td>' +
    '            <td class="dark em-input"><span>End Time</span></td>' +
    '            <td colspan="2" class="dark em-input"><span>End Weight </span></td>' +
    '            <td colspan="2" class="dark em-input"><span>HVAC <br> Operational </span></td>' +
    "            </tr>" +
    "          <tr>" +
    '            <td class="dark localtiontd"><input name="location_' +
    testNumber +
    '" type="text" id="location_' +
    testNumber +
    '" size="10" class="form_' +
    testNumber +
    '_runner"></td>' +
    '            <td class="dark end-date"><input name="enddate_' +
    testNumber +
    '" type="text" id="enddate_' +
    testNumber +
    '" value="01/09/2009" size="5" maxlength="10" class="required date form_' +
    testNumber +
    '_runner"/></td>' +
    '            <td class="dark end-hours"><input name="endhour_' +
    testNumber +
    '" type="text" id="endhour_' +
    testNumber +
    '" size="1" value="12" class="hours number form_' +
    testNumber +
    '_runner">' +
    '              <input name="endmin_' +
    testNumber +
    '" type="text" id="endmin_' +
    testNumber +
    '" size="1" value="00" class="mins number form_' +
    testNumber +
    '_runner">' +
    '              <select name="endampm_' +
    testNumber +
    '" id="endampm_' +
    testNumber +
    '" class="form_' +
    testNumber +
    '_runner">' +
    '                <option value="am">AM</option>' +
    '                <option value="pm">PM</option>' +
    "              </select></td>" +
    '            <td colspan="2" class="dark end-weight"><input name="endweight_' +
    testNumber +
    '" type="text" id="endweight_' +
    testNumber +
    '" size="1" value="0" class="required number form_' +
    testNumber +
    '_runner"></td>' +
    '            <td colspan="2" class="dark radio"><div class="radio-wrapper"><input name="hvac_' +
    testNumber +
    '" id="hvacNo_' +
    testNumber +
    '" type="radio" value="no" class="form_' +
    testNumber +
    '_runner">' +
    "              Yes</div>" +
    '                <div class="radio-wrapper"><input name="hvac_' +
    testNumber +
    '" id="hvacYes_' +
    testNumber +
    '" type="radio" value="yes" class="form_' +
    testNumber +
    '_runner">' +
    "                No</div></td>" +
    "            </tr>" +
    "          <tr class='mobile'>" +
    '            <td class="dark em-input"><span>Test #</span></td>' +
    '            <td class="dark em-input"><span>Start Date </span></td>' +
    '            <td class="dark em-input"><span>Start Time </span></td>' +
    '            <td colspan="2" class="dark em-input"><span>Start Weight </span></td>' +
    '            <td colspan="2" class="dark em-input"><span>PH Results</span> </td>' +
    '            <td rowspan="4" class="darkresult total-time">' +
    '	          <label for="totaltime_' +
    testNumber +
    '"><span>Total Time</span></label><input name="totaltime_' +
    testNumber +
    '" type="text" id="totaltime_' +
    testNumber +
    '" size="3" readonly="readonly">' +
    '              <label for="totalweightgain_' +
    testNumber +
    '"></label>' +
    '              <label for="vaporemissions_' +
    testNumber +
    '"></label>' +
    "	          </td>" +
    '            <td rowspan="4" class="darkresult weight-gain"><label for="totalweightgain_' +
    testNumber +
    '"><span>Weight Gain</span></label>' +
    '              <input name="totalweightgain_' +
    testNumber +
    '" type="text" id="totalweightgain_' +
    testNumber +
    '" size="3" readonly="readonly"></td>' +
    '            <td rowspan="4" class="darkresult vapor-missions"><label for="vaporemissions_' +
    testNumber +
    '"><span>Vapor Emissions</span></label>' +
    '              <input name="vaporemissions_' +
    testNumber +
    '" type="text" id="vaporemissions_' +
    testNumber +
    '" size="3" readonly="readonly"></td>' +
    "          </tr>" +
    "<tr>" +
    "<td colspan='12' align='right'>" +
    (testNumber == 1
      ? ""
      : '        <input type="button" class="removebtn" value="Remove test" id="btnRemoveTest_' +
        testNumber +
        '"/>') +
    "</td>" +
    "</tr>";
  "        </table>" +
    '        <span style="color:red" id="validationError_' +
    testNumber +
    '"></span>' +
    (testNumber == 1
      ? ""
      : '        <input type="button" class="removebtn" value="Remove test" id="btnRemoveTest_' +
        testNumber +
        '"/>') +
    "        <!-- -->" +
    "        </form>"+
    '</div>';
  return rtnTemplate;
}

function americanDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();

  mm = mm.toString().length == 1 ? "0" + mm : mm;
  dd = dd.toString().length == 1 ? "0" + dd : dd;

  var rtnDate = mm + "/" + dd + "/" + yyyy;

  return rtnDate;
}
