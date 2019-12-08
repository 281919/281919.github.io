



addEvent(window , "load" , function(){

    
    var div = document.getElementById('calculator');
    var btn = document.getElementsByTagName('input');
    var table = document.getElementsByTagName('table');

    var arr = [];
   

      for(var i = 1 ; i < 16 ; i++ ){
        addEvent(btn[i] , 'click' , function(){
            var str = this.value;
            arr.push(str);
            var res = arr.join('');
            btn[0].setAttribute('value' , res );
        })
      }

    addEvent(btn[16] , 'click' , function(){
      var str1 = btn[0].getAttribute('value');
      var num = eval(str1);
      btn[0].setAttribute('value' , num );
      arr = [];
      arr.push(num);
    })












    
    // var fm = document.getElementById('myForm');

    // var arr = ['+' , '-' , '*' , '/'];
    
    
    // var result = fm.elements['result'];

    // var div = document.getElementById('btn');
    // var btn = div.children;


    // addEvent(btn[0] , "click" , function(event){
    //     var e = event || window.event;
    //     var num1 = parseFloat(fm.elements['num1'].value);
    //     var num2 = parseFloat(fm.elements['num2'].value);
    //     result.setAttribute('value' , num1 + num2);

    // })

    // addEvent(btn[1] , 'click' , function(){
    //     var num1 = parseFloat(fm.elements['num1'].value);
    //     var num2 = parseFloat(fm.elements['num2'].value);
    //     result.setAttribute('value' , num1 - num2);
    // })

    // addEvent(btn[2] , 'click' , function(){
    //     var num1 = parseFloat(fm.elements['num1'].value);
    //     var num2 = parseFloat(fm.elements['num2'].value);
    //     result.setAttribute('value' , num1 * num2);
    // })

    // addEvent(btn[3] , 'click' , function(){
    //     var num1 = parseFloat(fm.elements['num1'].value);
    //     var num2 = parseFloat(fm.elements['num2'].value);
    //     result.setAttribute('value' , num1 / num2);
    // })
    // for(let i = 0 ; i < 4 ; i++){
    //     addEvent(btn[i] , 'click' , function(){
    //         var num1 = fm.elements['num1'].value;
    //         var num2 = fm.elements['num2'].value;
    //         var operator = btn[i].value;
           
            
    //         var str = num1 + operator + num2;
            
    //         var nresult = eval(str);
    //         result.setAttribute('value' , nresult);
    //     })
    // }


    


});