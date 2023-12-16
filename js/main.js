var container = document.querySelector('.section-container');
var input = document.querySelector('.section-container-inpt');
var btn = document.querySelector('.section-container-btn');
var list = document.querySelector('.section-container-list');


btn.addEventListener('click',function(){

    if(input.value.trim()==""){
        input.value=""  //bu o demekdirki inputa nese daxil edib
        //  add edenden sora inputdaki yazi silinsin
        alert('burani bos saxlamaq olmaz')

      }
      else{
        var li =document.createElement('li');//li yaradiriq
        list.appendChild(li);//li-ni ul-e elave edrik
    
    
        var span= document.createElement('span');//span yaradiriq
        li.appendChild(span);//li-e span elave edrik
        span.textContent = input.value;//spana qeyd edirikki
        // inputa yazilan deyeri spana menimset
    
    
        var btnEdit = document.createElement('button');//yeni buton yaradiriq edit ucun
        btnEdit.classList.add('section-container-btn');//class adi veririkki add butonunun
        // stylerin gotursun
        li.appendChild(btnEdit);//yeni butonu li ye elave edrik ki
        // yanina cxartsn
        btnEdit.innerText='edit';//teze btn a metn veririk
         
        btnEdit.style.transform='scale(0.8)';
        btnEdit.style.backgroundColor='red';
    
        input.value = "";//esas inputa add edende icindeki
        //soz silinsin
    
        btnEdit.addEventListener('click',function(){//burada yeni btn 
            // yeni EDIt e click etdikde neynesin onu qeyd edirik
            var newValue = prompt("EDIT:",span.textContent.trim())//EDIT e click 
            // etdikde yazilan deyer prompta cxsin 
            // deyeri ekranda yeni spanda gostersin 
  
            if(newValue.trim()==""){
                li.remove()
                span.innerText=newValue;
                alert('Inputu Bos Saxlama');
            }
            
  
      })
      }
    





})





