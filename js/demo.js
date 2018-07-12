$("#actionSnac").click(function(){
    let snackbar  = new SnackBar;
    snackbar.make("action", 
    [
      "Welcome to my awesome snackbar",
      "retry",
      "bottom",
      "right"
    ]);
    snackbar.show();
    snackbar.action(function(state){
      if(state){
        alert("true");
      }
      snackbar.close();
    });
  });
  
  $("#cusSnac").click(function(){
    var settings = {
      theme: "custom",
      background: 'red',
      color: 'green',
      buttonColor: 'orange',
      closeBackground: 'green',
      closeColor: 'orange'
    }
    
    let snackbar  = new SnackBar;
    snackbar.make("action", 
    [
      "Welcome to my awesome snackbar",
      "retry",
      "bottom",
      "right"
    ]);
    snackbar.settings(settings);
    snackbar.show();
    snackbar.action(function(state){
      if(state){
        alert("true");
      }
      snackbar.close();
    });
  });
  
  $("#messSnac").click(function(){
     let snackbar  = new SnackBar;
      snackbar.make("message", 
    [
      "Unable to connect the server",
      null,
      "bottom",
      "center"
    ]);
    snackbar.show(4000);
  });