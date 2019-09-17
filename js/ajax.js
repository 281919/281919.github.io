



window.onload = function() {
  // var xhr = new XMLHttpRequest();
  // xhr.open("get", "./data/menu.text", false);
  // xhr.send();

  // if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
  //   var menu = JSON.parse(xhr.responseText);
  //   console.log(menu);
  //   var menuContent = menu.list;
  // } else {
  //   alert("请求无响应" + xhr.status);
  // }
  var menu = {
    status: 1,
    result: {
      totalmenu: 13,
      list: [
        {
          menuContent:["家用电器" , "电器" ],
          submenu:[
            {
              subItem0: "电视",
              subItem1: "超薄电视"
            }
          ]
        },
        {
          menuContent:["手机" , "运营商" , "数码" ],
          submenu:[

          ]
        },
        {
          menuContent:["电脑" , "办公" ],
          submenu:[]
        },
        {
          menuContent:["家居" , "家具" , "家装" , "厨具" ],
          submenu:[]
        },
        {
          menuContent:["男装" , "女装" , "童装" , "内衣" ],
          submenu:[]
        },
        {
          menuContent:["美妆" , "个护清洁" , "宠物"],
          submenu:[]
        },
        {
          menuContent:["女鞋" , "箱包" , "钟表" , "珠宝" ],
          submenu:[]
        },
        {
          menuContent:["男鞋" , "运动" , "户外" ],
          submenu:[]
        },
        {
          menuContent:["房产" , "汽车" , "汽车用品"  ],
          submenu:[]
        },
        {
          menuContent:["母婴" , "玩具乐器" ],
          submenu:[]
        },
        {
          menuContent:["食品" , "酒类" , "生鲜" , "特产" ],
          submenu:[]
        },
        {
          menuContent:["艺术" , "礼品鲜花" , "农资绿植"],
          submenu:[]
        },
        {
          menuContent:["医药保健" , "计生情趣"],
          submenu:[]
        },
        {
          menuContent:["图书" , "文娱" , "电子书" ],
          submenu:[]
        },
        {
          menuContent:["机票" , "酒店" , "旅游" , "生活" ],
          submenu:[]
        },
        {
          menuContent:["理财" , "众筹" , "白条" , "保险" ],
          submenu:[]
        },
        {
          menuContent:["安装" , "维修" , "清洗" , "二手" ],
          submenu:[]
        }
        
      ]
    }
  }



  var test = document.getElementById('test');
  var list = menu.result.list;
  var ul = test.children[0];
  var lis = ul.children;
  for (let j = 0 ; j < list.length ; j++) {
    for (let i = 0 ; i < list[j].menuContent.length ; i++ ) {
      var span = document.createElement("span");
      span.innerHTML = list[j].menuContent[i];
      lis[j].appendChild(span);
      if (i != list[j].menuContent.length - 1){
        var text = document.createTextNode(" / ");
        lis[j].appendChild(text);
      }
    }
  }
  


  

 

}
