(function ($, global, app) {

  var $noteStringField = $('#noteString');
  var $listDom = $('#noteList');

  // noteStringField.addEventListener('keyup', addNote);
  $noteStringField.on('keyup', app.view.addNote );


  // //삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
  $listDom.on('click', '.delete', function(event){

    //console.log('delete');

    var $deleteBtn = $(event.target);
    var id = $deleteBtn.parent().data('id');

    app.collection.remove( id );

  });
   
   $listDom.on('click', '.toggle-checked', function(event){
      var $checkBtn = $(event.target);
      var id = $checkBtn.parent().data('id');
      
      app.collection.check( id );
   });
   

  // //처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
  var initData = app.util.storage.load();
  if(initData) {
    console.log(initData)
    app.collection.set( initData );
  }

})(jQuery, window, MyNote);
