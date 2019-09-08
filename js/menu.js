var vm = new Vue ({
  el: "#wrap",
  data:{
    menuContent = []
  },
  mounted:function(){
    this.$nextTick(function(){
      this.menuView()
    })
   },
   methods:{
     menuView: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("get", "./data/menu.text", false);
      xhr.send();
    
      if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
        var menu = JSON.parse(xhr.responseText);
        var menuContent = JSON.parse(xhr.responseText).list;
      } else {
        alert("请求无响应" + xhr.status);
      }
     }
   }

})