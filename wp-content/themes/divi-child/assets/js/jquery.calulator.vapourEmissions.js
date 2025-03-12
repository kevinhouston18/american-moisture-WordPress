// <reference path="jquery-1.2.6-vsdoc.js" />
//$().ke
function VapourTest(testNumber,
                    location,
                    startDetail,
                    endDetail,
                    phResults,
                    hvacOperational)
{
    // validation
    if(isNaN(testNumber))
        throw 'testNumber must be an integer';

    if(startDetail.Weight > endDetail.Weight)
        throw 'Start weight is greater than End weight. No weight gain has been detected.';     
    
        
    return {
        TestNumber : testNumber,
        Location : '',

        StartDetail : startDetail, 
        EndDetail : endDetail,

        PhResults : phResults,
        HvacOperational : hvacOperational,

        TotalHours : function(){
            var anHour=1000*60*60;
            return RoundNumber(Math.ceil(this.EndDetail.ActualDateTime.getTime() - this.StartDetail.ActualDateTime.getTime()) / anHour, 2);
        },
        WeightGain : function(){
            return RoundNumber(this.EndDetail.Weight - this.StartDetail.Weight, 2);
            },
        VapourEmissions : function(){
            return RoundNumber((this.WeightGain() * Number(117.707)) / this.TotalHours(), 2);
            //throw 'VaporEmissions has not been implemented';
        }      
    }
}

function VapourCalculationDetail(date, hours, mins, amPm, weight)
{
    hours = parseInt(hours);
    mins = parseInt(mins);
    
    if(hours > 12 || hours < 1)
        throw '12 hour clock : hours value needs to be between 1 and 12';

    if(mins > 59 || mins < 0)
        throw 'minutes needs to be between 00 and 59';

    //  dateformat = 'mm/dd/yyyy'
    var x = new String(date);
    var ddmmyyyy = {
                    dd: x.substr(3, 2),
                    mm: x.substr(0, 2),
                    yyyy: x.substr(6, 4)
                 }
        
    if(hours == 12 && amPm == 'am')
         hours = '00';
    
    if(amPm == 'pm' && hours != 12)
        hours = hours + 12;
        
    if(isNaN(weight))
        throw 'Weight supplied is not a number.';            

                         
    hours = hours.length == 1 ? hours+'0' : hours;
    mins = mins.length == 1 ? mins+'0' : mins;
                      
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dateString = monthNames[ddmmyyyy.mm -1] + ' ' + ddmmyyyy.dd + ', ' + ddmmyyyy.yyyy + ' ' + hours + ':' + mins + ':00';                 
    var detailDate = new Date(dateString);
    
    //validation
    //
    return {
        Date: date,
        TimeHH: hours,
        TimeMM: mins,
        TimeAmPm: amPm,
        Weight: weight,
        ActualDateTime: detailDate
    }
}

// helpers
function RoundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

/*
Unit tests Emission calc 
 1* can create a vapour Test
 2* can create a vapour test with the correct test number
 3* statweight > endweight throws an error
 4* weight gain calculation is correct
 5* total time throws and error if start date is later than end date
 6* totalHours calculation is correct
 7* vapourEmission caluclation is correct
*/

/*   VapourCalculationDetail Tests
    1* can create VapourCalculationDetail
    2* date not valid date throws and error 
    3* valid date - no error
    4* hours not between 0 & 12 throws an error
    5* valid hours - no error
    6* mins not between 0 & 59 throws an error
    7* valid mins - no error
    8* invalid amPm throws error
    9* wieght not numeric throws an error
*/


function vapourTestRunner(testNumber)
{
    $('#validationError_' + testNumber).text('');
    $('#totaltime_'+testNumber).val('');
    $('#totalweightgain_'+testNumber).val('');
    $('#vaporemissions_'+testNumber).val('');             
    
    var startDetail, endDetail, vapourTester;
    
    startDetail = VapourCalculationDetail
                    (   $('#startdate_'+testNumber).val(), 
                        $('#starthour_'+testNumber).val(), 
                        $('#startmin_'+testNumber).val(), 
                        $('#startampm_'+testNumber).val(), 
                        $('#startweight_'+testNumber).val());
                        
    endDetail = VapourCalculationDetail
                    (   $('#enddate_'+testNumber).val(), 
                        $('#endhour_'+testNumber).val(), 
                        $('#endmin_'+testNumber).val(), 
                        $('#endampm_'+testNumber).val(), 
                        $('#endweight_'+testNumber).val());                                

    vapourTester = VapourTest
                    (   testNumber, 
                        $('#location_'+testNumber).val(),
                        startDetail, 
                        endDetail, 
                        $('#phresults_'+testNumber).val(), 
                        $('#hvac_'+testNumber).val());
                        
    if(vapourTester.TotalHours() < 0)
    {
        $('#validationError_'+testNumber).text('Start Date Must be before the end date');
        return;
    }
                        
    if(vapourTester.TotalHours() < 60 || vapourTester.TotalHours() > 72)
    {
        $('#validationError_'+testNumber).text('The Total Time Must be Between 60 and 72 hours, Your Current Total Time is : ' + vapourTester.TotalHours() + ' hours');
        return;
    }                                

    if(vapourTester.WeightGain() < 0)
    {
        $('#validationError_'+testNumber).text('Weight gain must be a positive integer (end weight must be more than start weight)');
        return;
    }                                

    $('#totaltime_'+testNumber).val(vapourTester.TotalHours());
    $('#totalweightgain_'+testNumber).val(vapourTester.WeightGain());
    $('#vaporemissions_'+testNumber).val(vapourTester.VapourEmissions());
    
}


/*

1.	Repeat behavior / Add test functionality
My client would like the calculator to handle multiple tests/calculations. 
Would it be possible to have an 'add test' button at the bottom of the form to add another test directly below 
the first one and so on? Here is an example: http://www.americanmoisturetest.com/cart/index.php/rh-meter-calculator

2.	Test #
Each time a new test is added the 'Test #' field would automatically number the test (1, 2, 3...)

3.	Weight Gain 
The formula to calculate weight gain is: (endweight - startweight) = weightgain

4.	Total Time
Total time will take two dates (xx/xx/xxxx) and time (xx:xx am/pm) and return the difference in time between the two in total hours.  
Output formatted as x.x hours. The total time needs  to be within 60-72 hours so there needs to be some kind of validation on this field. You can see an example of this by viewing the current calculator: http://www.americanmoisturetest.com/calculator.htm

5.	Vapor Emissions
The formula to calculate total vapor emissions: ((weightgain x 117.707) / totalhours) = vaporemission

6.	Optional Fields
Location, PH Result & HVAC Operational are all optional fields not used for any calculations.


*/

