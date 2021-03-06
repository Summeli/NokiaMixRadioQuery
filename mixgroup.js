$( document ).delegate("#mixgroup", "pagebeforeshow", function() {     
     $('#mixheader #mixtext').text(sessionStorage.mixGroupName);
     var jqxhr = $.getJSON('http://api.ent.nokia.com/1.x/'+localStorage.country+'/mixes/groups/'+sessionStorage.mixGroupId +'/?domain=music&itempsperpage=20&startindex=0&app_id='+localStorage.appid+'&callback=?', null, null,'application/vnd.nokia.ent.radiogroups+json')
   .done(function(result) {
  
      //write the header
      $('#mixheader #mixtext').text(result.data.name);
 
      //fill the data into the listview
      $("#mixList").empty(); 
      var list = $("#mixList").listview();
      $(result.data.radiostations).each(function(index){
         $(list).append('<li><a href="index.html#mix" onclick="sessionStorage.mixId=' + this.id+ '">'
            + '<img src="' + this.thumbnails["50x50"] + '" class="ui-li-icon"/> <h3>' + this.name + '</h3></a></li>');
      });

      $("#mixList").listview('refresh');
   })
   .fail(function() { console.log( "error" ); });

});

