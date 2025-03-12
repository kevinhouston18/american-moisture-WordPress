<?php
function rh_meter_calculator()
{

    // Things that you want to do.
    ob_start();
    ?>
<div class="print-wrapper">

    <form><input type="button" value="Print Test" name="Print" class="print-results" onclick="printit()"></form>
</div>
<form id="id2541067" class="labelsLeftAligned hintsTooltip rhcalc" action="" method="post">
    <div class="calci_table">
        <table border="1" id="myTable">
            <tbody>
                <tr id="tfa_Test"  class="repeat alternate-0 rh-test-heading">
                    <th colspan="7">Test 1</th>
                </tr>
                <tr class="headerRow">
                    <!-- <th colspan="2">&nbsp;</th> -->

                    <th>Location</th>
                    <th>Depth</th>
                    <th>Concrete RH</th>
                    <th>Concrete Temp</th>
                    <th>Air Temp</th>
                    <th>Air RH</th>
                    <th>Notes</th>
                </tr>
                <tr id="tfa_Test" class="repeat alternate-0">
                    <!-- <th colspan="2">Test</th> -->

                    <td class="rh-location">
                        <div id="tfa_TestLocation-D" class="oneField">
                            <input id="tfa_TestLocation" class="wForm2" type="text" size="10" value=""
                                name="tfa_TestLocation">
                        </div>
                    </td>
                    <td class="rh-depth">
                        <div id="tfa_Depth-D" class="oneField"><input id="tfa_Depth" class="wForm2" type="text" size="6"
                                value="" name="tfa_Depth">
                        </div>
                    </td>
                    <td class="rh-concrete">
                        <div id="tfa_ConcreteRH-D" class="oneField"><input id="tfa_ConcreteRH" class="wForm2"
                                type="text" size="8" value="" name="tfa_ConcreteRH">
                        </div>
                    </td>
                    <td class="rh-concrete-temp">
                        <div id="tfa_ConcreteTemp-D" class="oneField"><input id="tfa_ConcreteTemp" class="wForm2"
                                type="text" size="8" value="" name="tfa_ConcreteTemp">
                        </div>
                    </td>
                    <td class="rh-air-temp">
                        <div id="tfa_AirTemp-D" class="oneField"><input id="tfa_AirTemp" class="wForm2" type="text"
                                size="8" value="" name="tfa_AirTemp">
                        </div>
                    </td>
                    <td class="rh-air-rh">
                        <div id="tfa_AirRH-D" class="oneField"><input id="tfa_AirRH" class="wForm2" type="text" size="8"
                                value="" name="tfa_AirTemp">
                        </div>
                    </td>
                    <td class="rh-notes">
                        <div id="tfa_Notes-D" class="oneField"><input id="tfa_Notes" class="wForm2" type="text" size="8"
                                value="" name="tfa_AirTemp"></div>
                    </td>
                   <!--  <td id="btnAdd" class="button-add"><a id="tfa_Test-wfDL">
                            <input type="submit" alt="Add Test" value="Add Test" class="btn btn-success">
                        </a>
                    </td> -->
                </tr>
            </tbody>
        </table>
    </div>

    <div class="actions">&nbsp;</div>
</form>
<div class="calci_table_test">
                <div id="btnAdd" class="button-add"><a id="tfa_Test-wfDL">
                        <input type="submit" alt="Add Test" value="Add Test" class="btn btn-success" height="38" width="114">
                    </a>
                </div>
</div>
<div class="hidden_element" style="clear: both;">&nbsp;</div>
<?php
return ob_get_clean();

}
add_shortcode('rh_meter_calculation', 'rh_meter_calculator');