class SnackBar{
  constructor(){
    this.class = 'snackbar';
  }
  make(data){
     var snack_class = this.class+" "+data.type+" ";
    
    if(!data.position){
      data["position"] = {
        vertical: 'bottom',
        horizontal: 'center'
      }
    }
    
    if(!data.theme){
      data.theme = 'default';
    }
    
    snack_class += data.position.vertical+" "+data.position.horizontal;

    var snack_html = 
       ' <div class="'+snack_class+'" theme="'+data.theme+'">'+
       ' <div class="wrap">'+
          '<div class="text">'+data.message+'</div>'+
          '<button><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64"><path d="M28.9 31.8L0.6 60.1c-0.8 0.8-0.8 2.1 0 2.8 0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6l28.5-28.5 28.5 28.5c0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6 0.8-0.8 0.8-2.1 0-2.8L35.1 31.8 63.4 3.4c0.8-0.8 0.8-2.1 0-2.8 -0.8-0.8-2.1-0.8-2.8 0L32 29.2 3.4 0.6c-0.8-0.8-2.1-0.8-2.8 0 -0.8 0.8-0.8 2.1 0 2.8L28.9 31.8z"/></svg></button>'+
          '<button>'+data.actionButton+'</button>'+
       '</div>'+
     '</div>';
    $("snackbar").html(snack_html);
    if(data.theme = "custom" && data.style){
       this.theme(data.style);
    }
  }

  show(time){
    $(".snackbar").addClass("slideUp");
    var timer;
    if(time != null){
       timer = setInterval(function(){
          clearInterval(timer);
          $(".snackbar").addClass("slideDown");
       },time);
      $(".snackbar button:nth-child(2)").click(function(){
         clearInterval(timer);
         $(".snackbar").addClass("slideDown");
      });
    }
  }
  
  close(){
    $(".snackbar").addClass("slideDown");
  }
  
  action(callback){
    $(".snackbar button:nth-child(2)").click(function(){
      callback(false);
    });
    $(".snackbar button:nth-child(3)").click(function(){
      callback(true);
    });
  }
  
  theme(style){
    $("."+this.class+" > div").css({
          "background": style.background,
          "color": style.color
    });
    $("."+this.class+" button:nth-child(3)").css({
           "color": style.buttonColor
    });
    $("."+this.class+" button:nth-child(2)").css({
           "background": style.closeBackground
    });
    $("."+this.class+" button svg").css({
           "fill": style.closeColor
     });
  }
}
