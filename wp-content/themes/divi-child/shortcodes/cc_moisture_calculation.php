<?php

function cc_moisture_calculator()
{
    ob_start();
    ?>
<div class="print-wrap">


    <form><input type="button" value="Print Test" name="Print" class="print-results btn btn-primary"
            onclick="printit()"></form>

</div>
<div id="pad">
    <form id="vaporEmissionTests_1" method="post" action="#" class="cccalc">
        <table align="center" border="1" cellspacing="0" cellpadding="0">
            <tbody>
                <tr class="headerrow">
                    <td><span>Step One</span></td>
                    <td colspan="4"><span>Step Two</span></td>
                    <td colspan="2"><span>Optional</span></td>
                    <td colspan="3"><span>Results</span></td>
                </tr>
                <tr class="desktop">
                    <td class="dark em-input"> <span>Test #</span></td>
                    <td class="dark em-input"><span>Start Date</span> </td>
                    <td class="dark em-input"><span>Start Time</span> </td>
                    <td colspan="2" class="dark em-input"><span>Start Weight</span> </td>
                    <td colspan="2" class="dark em-input"><span>PH Results</span> </td>

                   <!--  <td rowspan="4" class="darkresult total-time">
                        <label for="totaltime_1"><span>Total Time</span></label>
                        <input name="totaltime_1" type="text" id="totaltime_1" size="3" readonly="readonly">
                    </td>

                    <td rowspan="4" class="darkresult weight-gain">
                        <label for="totalweightgain_1"><span>Weight Gain</span></label>
                        <input name="totalweightgain_1" type="text" id="totalweightgain_1" size="3" readonly="readonly">
                    </td>

                    <td rowspan="4" class="darkresult vapor-missions">
                        <label for="vaporemissions_1"><span>Vapor Emissions</span></label>
                        <input name="vaporemissions_1" type="text" id="vaporemissions_1" size="3" readonly="readonly">
                    </td> -->

                    <td rowspan="4">
                        <div class="darkresult total-time">
                        <label for="totaltime_1"><span>Total Time</span></label>
                        <input name="totaltime_1" type="text" id="totaltime_1" size="3" readonly="readonly">
                        </div>
                        <div class="darkresult weight-gain">
                        <label for="totalweightgain_1"><span>Weight Gain</span></label>
                        <input name="totalweightgain_1" type="text" id="totalweightgain_1" size="3" readonly="readonly">
                        </div>
                        <div class="darkresult vapor-missions">
                        <label for="vaporemissions_1"><span>Vapor Emissions</span></label>
                        <input name="vaporemissions_1" type="text" id="vaporemissions_1" size="3" readonly="readonly">
                        <span>lbs per 24hrs</span>
                        </div>
                        
                    </td>

                </tr>

                <tr>

                    <td class="dark test-number">
                        <input name="testnumber_1" type="text" id="testnumber_1" size="1" readonly="readonly" value="1">
                    </td>

                    <td class="dark start-date">
                        <input name="startdate_1" type="text" id="startdate_1" value="01/09/2009" size="5"
                            maxlength="10" class="required date form_1_runner hasDatepicker">
                    </td>

                    <td class="dark start-hours">
                        <input name="starthour_1" type="text" id="starthour_1" size="1" value="12"
                            class="hours number form_1_runner">
                        <input name="startmin_1" type="text" id="startmin_1" size="1" value="00"
                            class="mins number form_1_runner">
                        <select name="startampm_1" id="startampm_1" class="form_1_runner">
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </td>

                    <td colspan="2" class="dark start-weight">
                        <input name="startweight_1" type="text" id="startweight_1" size="1"
                            class="required numberform_1_runner" value="0">
                    </td>

                    <td colspan="2" class="dark ph-results">
                        <input name="phresults_1" type="text" id="phresults_1" size="1" class="form_1_runner">
                    </td>

                </tr>

                <tr>
                    <td class="dark em-input"><span>Location</span></td>
                    <td class="dark em-input"><span>End Date</span> </td>
                    <td class="dark em-input"><span>End Time</span></td>
                    <td colspan="2" class="dark em-input"><span>End Weight</span> </td>
                    <td colspan="2" class="dark em-input"><span>HVAC <br> Operational </span></td>
                </tr>

                <tr>
                    <td class="dark localtiontd">
                        <input name="location_1" type="text" id="location_1" size="10" class="form_1_runner">
                    </td>

                    <td class="dark end-date">
                        <input name="enddate_1" type="text" id="enddate_1" value="01/09/2009" size="5" maxlength="10"
                            class="required date form_1_runner hasDatepicker">
                    </td>

                    <td class="dark end-hours">
                        <input name="endhour_1" type="text" id="endhour_1" size="1" value="12"
                            class="hours number form_1_runner">
                        <input name="endmin_1" type="text" id="endmin_1" size="1" value="00"
                            class="mins number form_1_runner">
                        <select name="endampm_1" id="endampm_1" class="form_1_runner">
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </td>

                    <td colspan="2" class="dark end-weight">
                        <input name="endweight_1" type="text" id="endweight_1" size="1" value="0"
                            class="required number form_1_runner">
                    </td>

                    <td colspan="2" class="dark radio">
                        <div class="radio-wrapper"><input name="hvac_1" id="hvacNo_1" type="radio" value="no"
                                class="form_1_runner"> Yes
                        </div>
                        <div class="radio-wrapper"><input name="hvac_1" id="hvacYes_1" type="radio" value="yes"
                                class="form_1_runner"> No
                        </div>
                    </td>

                </tr>
                <tr class="mobile">
                    <td class="dark em-input"> <span>Test #</span></td>
                    <td class="dark em-input"><span>Start Date</span> </td>
                    <td class="dark em-input"><span>Start Time</span> </td>
                    <td colspan="2" class="dark em-input"><span>Start Weight</span> </td>
                    <td colspan="2" class="dark em-input"><span>PH Results</span> </td>

                    <td rowspan="4" class="darkresult total-time">
                        <label for="totaltime_1"><span>Total Time</span></label>
                        <input name="totaltime_1" type="text" id="totaltime_1" size="3" readonly="readonly">
                    </td>

                    <td rowspan="4" class="darkresult weight-gain">
                        <label for="totalweightgain_1"><span>Weight Gain</span></label>
                        <input name="totalweightgain_1" type="text" id="totalweightgain_1" size="3" readonly="readonly">
                    </td>

                    <td rowspan="4" class="darkresult vapor-missions">
                        <label for="vaporemissions_1"><span>Vapor Emissions</span></label>
                        <input name="vaporemissions_1" type="text" id="vaporemissions_1" size="3" readonly="readonly">
                        <p>lbs per 24hrs</p>
                    </td>
                   

                </tr>

            </tbody>

        </table>

        <span style="color:red" id="validationError_1"></span>

    </form>

</div>
<div style="clear: both;">&nbsp;</div>
<div class="addtest"><a id="btnAddTest" href="#">
        <input type="submit" alt="Add Test" value="Add Test" class="btn btn-success" height="38" width="114">
    </a></div>
<div  class="hidden_element" style="clear: both;">&nbsp;</div>
<?php
return ob_get_clean();
}

add_shortcode('cc_moisture_calculation', 'cc_moisture_calculator');