document.addEventListener('DOMContentLoaded', function(){
  // 平滑捲動
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // 複製 email
  var copyBtn = document.getElementById('copyEmail');
  if(copyBtn){
    copyBtn.addEventListener('click', function(){
      var email = 'example@example.com';
      navigator.clipboard?.writeText(email).then(function(){
        document.getElementById('copyMsg').textContent = '已複製：' + email;
      }).catch(function(){
        document.getElementById('copyMsg').textContent = '無法複製，請手動複製。';
      });
    });
  }
});
