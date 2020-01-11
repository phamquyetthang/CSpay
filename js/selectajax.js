function chonnhamang(mmv){
     $.ajax({
          success : function(){
               if(mmv===1){
                    $('.khac_nha_mang').html(
                         '<h3>Mã thẻ</h3>'+
                         '<input type="text" name="card_id" placeholder="Nhập mã thẻ" pattern="[0-9]{13,15}" title="Mã thẻ không hợp lệ ( chú ý độ dài, ký tự chữ cái và ký tự đặc biệt)" required/>'+
                         '<h3>Mã số siri</h3>'+
                         '<input type="text" name="card_siri" placeholder="Nhập mã siri" pattern="[0-9]{11,14}" title="Mã thẻ không hợp lệ ( chú ý độ dài, ký tự chữ cái và ký tự đặc biệt)" required/>'+
                         '<h3>Chọn mệnh giá</h3>'+
                         '<select name="card_scope">'+
                              '<option value="0">Chọn mệnh giá</option>'+
                              '<option value="10000">10000đ</option>'+
                              '<option value="10000">20000đ</option>'+
                              '<option value="10000">50000đ</option>'+
                              '<option value="10000">100000đ</option>'+
                              '<option value="10000">200000đ</option>'+
                              '<option value="10000">500000đ</option>'+
                         '</select>'
                         );
               }else if(mmv===2){
                    $('.khac_nha_mang').html(
                         '<h3>Mã thẻ</h3>'+
                         '<input type="text" name="card_id" placeholder="Nhập mã thẻ" pattern="[0-9]{14}" title="Mã thẻ không hợp lệ ( chú ý độ dài, ký tự chữ cái và ký tự đặc biệt)" required/>'+
                         '<h3>Mã số siri</h3>'+
                         '<input type="text" name="card_siri" placeholder="Nhập mã siri" pattern="[0-9]{14}" title="Mã thẻ không hợp lệ ( chú ý độ dài, ký tự chữ cái và ký tự đặc biệt)" required/>'+
                         '<h3>Chọn mệnh giá</h3>'+
                         '<select name="card_scope">'+
                              '<option value="0">Chọn mệnh giá</option>'+
                              '<option value="10000">10000đ</option>'+
                              '<option value="10000">20000đ</option>'+
                              '<option value="10000">50000đ</option>'+
                              '<option value="10000">100000đ</option>'+
                              '<option value="10000">200000đ</option>'+
                              '<option value="10000">500000đ</option>'+
                         '</select>'
                         );
               }else if(mmv===3){
                    $('.khac_nha_mang').html(
                         '<h3>Mã thẻ</h3>'+
                         '<input type="text" name="card_id" placeholder="Nhập mã thẻ" required/>'+
                         '<h3>Mã số siri</h3>'+
                         '<input type="text" name="card_siri" placeholder="Nhập mã siri" required/>'+
                         '<h3>Chọn mệnh giá</h3>'+
                         '<select name="card_scope">'+
                              '<option value="0">Chọn mệnh giá</option>'+
                              '<option value="50000">50.000đ</option>'+
                              '<option value="100000">100.000đ</option>'+
                              '<option value="200000">200.000đ</option>'+
                              '<option value="500000">500.000đ</option>'+
                              '<option value="1000000">1.000.000đ</option>'+
                              '<option value="2000000">2.000.000đ</option>'+
                              '<option value="5000000">5.000.000đ</option>'+
                         '</select>'
                         );
               }
          }
      });
}