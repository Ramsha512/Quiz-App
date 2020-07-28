

function check(){
 var score= 0;
var right1= document.getElementById("q1-ans1")
var opt2= document.getElementById("q1-ans2")
var opt3= document.getElementById("q1-ans3")
var opt4= document.getElementById("q1-ans4")

if(right1.checked === true){
    score++
    alert("Question#01 is correct")
}
    else {
        alert("Question#01 is wrong")
    }


    var right2= document.getElementById("q2-ans1")
    var ques2= document.getElementById("q2-ans2")
    var ques2= document.getElementById("q2-ans3")
    var ques2= document.getElementById("q2-ans4")
    
    if(right2.checked === true){
        score++
        alert("Question#02 is correct")
    }
        else {
            alert("Question#02 is wrong")
        }


        var ques3= document.getElementById("q3-ans1")
        var ques3= document.getElementById("q3-ans2")
        var ques3= document.getElementById("q3-ans3")
        var right3= document.getElementById("q3-ans4")
        
        if(right3.checked === true){
            score++
            alert("Question#03 is correct")
        }
            else {
                alert("Question#03 is wrong")
            }



    

            var right4= document.getElementById("q4-ans1")
            var ques4= document.getElementById("q4-ans2")
            var ques4= document.getElementById("q4-ans3")
            var ques4= document.getElementById("q4-ans4")
            
            if(right4.checked === true){
                score++
                alert("Question#04 is correct")
            }
                else {
                    alert("Question#04 is wrong")
                }
        



                var ques5= document.getElementById("q5-ans1")
                var right5= document.getElementById("q5-ans2")
                var ques5= document.getElementById("q5-ans3")
                var ques5= document.getElementById("q5-ans4")
                
                if(right5.checked === true){
                    score++
                    alert("Question#05 is correct")
                }
                    else {
                        alert("Question#05 is wrong")
                    }
            


                    var ques6= document.getElementById("q6-ans1")
                    var right6= document.getElementById("q6-ans2")
                    var ques6= document.getElementById("q6-ans3")
                    var ques6= document.getElementById("q6-ans4")
                    
                    if(right6.checked === true){
                        score++
                        alert("Question#06 is correct")
                    }
                        else {
                            alert("Question#06 is wrong")
                        }



                        var ques7= document.getElementById("q7-ans1")
                        var right7= document.getElementById("q7-ans2")
                        var ques7= document.getElementById("q7-ans3")
                        var ques7= document.getElementById("q7-ans4")
                        
                        if(right7.checked === true){
                            score++
                            alert("Question#07 is correct")
                        }
                            else {
                                alert("Question#07 is wrong")
                            }




                            var ques8= document.getElementById("q8-ans1")
                            var ques8 = document.getElementById("q8-ans2")
                            var right8= document.getElementById("q8-ans3")
                            var ques8= document.getElementById("q8-ans4")
                            
                            if(right8.checked === true){
                                score++
                                alert("Question#08 is correct")
                            }
                                else {
                                    alert("Question#08 is wrong")
                                }




                                var ques9= document.getElementById("q9-ans1")
                                var right9 = document.getElementById("q9-ans2")
                                var ques9 = document.getElementById("q9-ans3")
                                var ques9= document.getElementById("q9-ans4")
                                
                                if(right9.checked === true){
                                    score++
                                    alert("Question#09 is correct")
                                }
                                    else {
                                        alert("Question#09 is wrong")
                                    }



                                    var ques10= document.getElementById("q10-ans1")
                                    var right10 = document.getElementById("q10-ans2")
                                    var ques10 = document.getElementById("q10-ans3")
                                    var ques10= document.getElementById("q10-ans4")
                                    
                                    if(right10.checked === true){
                                        score++
                                        alert("Question#10 is correct")
                                    }
                                        else {
                                            alert("Question#10 is wrong")
                                        }
    
    




                    swal({
                        title: "Good job!",
                        text: "Your score is"+"    "+ score,
                        icon: "success",
                        button: "Aww yiss!",
                      });
                      



}


