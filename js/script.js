window.onload = function(){
    // mindmap tapMenu
    let mindmap_menu = $('.mindmap-menu-list li a');
    let mindmap_menu_pos = [];
    let mindmap_menu_focus = $('.mindmap-menu-focus');
    let mindmap_wrap = $('.mindmap-wrap');
    setPos();    
    mindmap_menu_focus.css('left', mindmap_menu_pos[0]);
    window.onresize = function(event){
        setPos();
    };
    mindmap_menu.each(function(index, item){        
        mindmap_menu_focus.css('left', mindmap_menu_pos[0]);
       $(this).click(function(event){
           event.preventDefault();
            mindmap_wrap.removeClass('mindmap-wrap-active');
            mindmap_wrap.eq(index).addClass('mindmap-wrap-active');           
            mindmap_menu_focus.stop().animate({
                left : mindmap_menu_pos[index]
            });
        });
    });
    function setPos() {
        mindmap_menu.each(function(index, item){
            if(index == 0) {
                // mindmap_menu_pos[index] = mindmap_menu.position().left + 214;
                mindmap_menu_pos[index] = $('.mindmap-menu-list li').eq(index).position().left - 10;
                
            } else if(index == 1) {
                // mindmap_menu_pos[index] = mindmap_menu.position().left + 470;
                mindmap_menu_pos[index] = $('.mindmap-menu-list li').eq(index).position().left - 10;
                
            } else if(index == 2) {
                // mindmap_menu_pos[index] = mindmap_menu.position().left + 725;
                mindmap_menu_pos[index] = $('.mindmap-menu-list li').eq(index).position().left - 10;
                
            } else {
                // mindmap_menu_pos[index] = mindmap_menu.position().left + 982;
                mindmap_menu_pos[index] = $('.mindmap-menu-list li').eq(index).position().left - 10;

            }
        });
    }


    // mindmap wrap
    let mindmap_item_big = $('.mindmap-wrap .item-big');
    let mindmap_item = $('.mindmap-wrap .item');
    let mindmap_item_arm = $('.mindmap-wrap-arm .item');
    let mindmap_item_love = $('.mindmap-wrap-love .item');
    let mindmap_item_uni = $('.mindmap-wrap-uni .item');
    let mindmap_item_life = $('.mindmap-wrap-life .item');
    mindmap_item_big.each(function(index, item){
        $(this).mouseenter(function(){
            // console.log(index);
            if(index == 0) {
                mindmap_item_arm.each(function(index, item){
                    $(this).html("fantasy" + index);
                });
            } else if(index == 1) {
                mindmap_item_arm.each(function(index, item){
                    $(this).html("playlist" + index);
                });
            } else if(index == 2) {
                mindmap_item_arm.each(function(index, item){
                    $(this).html("channel" + index);
                });
            }else if(index == 3) {
                mindmap_item_love.each(function(index, item){
                    $(this).html("headway" + index);
                });
            }else if(index == 4) {
                mindmap_item_love.each(function(index, item){
                    $(this).html("love2" + index);
                });
            }else if(index == 5) {
                mindmap_item_love.each(function(index, item){
                    $(this).html("love3" + index);
                });
            }else if(index == 6) {
                mindmap_item_uni.each(function(index, item){
                    $(this).html("uni1" + index);
                });
            }else if(index == 7) {
                mindmap_item_uni.each(function(index, item){
                    $(this).html("uni2" + index);
                });
            }else if(index == 8) {
                mindmap_item_uni.each(function(index, item){
                    $(this).html("uni3" + index);
                });
            }else if(index == 9) {
                mindmap_item_life.each(function(index, item){
                    $(this).html("life1" + index);
                });
            }else if(index == 10) {
                mindmap_item_life.each(function(index, item){
                    $(this).html("life2" + index);
                });
            }else if(index == 11) {
                mindmap_item_life.each(function(index, item){
                    $(this).html("life3" + index);
                });
            }
        });        
    });
    mindmap_wrap.mouseleave(function(){
        mindmap_item.each(function(index, item){
            $(this).html("");
        });
    });


    // mbti 그래프
    let mbti_e_value = 0.67;
    let mbti_i_value = 0.33;
    let mbti_n_value = 0.58;
    let mbti_s_value = 0.27;
    let mbti_f_value = 0.12;
    let mbti_t_value = 1.0;
    let mbti_p_value = 0.44;
    let mbti_j_value = 1.00;

    let mbti_bar_e = new ProgressBar.Line(mbtiE, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_e) => {
            mbti_bar_e.path.setAttribute('stroke', state.color);
        //   var value = Math.round(mbti_bar_e.value() * 100);
        //   if (value === 0) {
        //     mbti_bar_e.setText('');
        //   } else {
        //     mbti_bar_e.setText(value);
        //   }
      
        //   mbti_bar_e.text.style.color = state.color;
        }
      });
    //   mbti_bar_e.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    //   mbti_bar_e.text.style.fontSize = '2rem';
      
      mbti_bar_e.animate(mbti_e_value);  // Number from 0.0 to 1.0
      console.log(mbti_bar_e);
    
      let mbti_bar_i = new ProgressBar.Line(mbtiI, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_i) => {
            mbti_bar_i.path.setAttribute('stroke', state.color);
        
        }
      });
      
    mbti_bar_i.animate(mbti_i_value);  // Number from 0.0 to 1.0
      
    
    let mbti_bar_n = new ProgressBar.Line(mbtiN, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_n) => {
            mbti_bar_n.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_n.animate(mbti_n_value);  // Number from 0.0 to 1.0
    
    
      let mbti_bar_s = new ProgressBar.Line(mbtiS, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_s) => {
            mbti_bar_s.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_s.animate(mbti_s_value);  // Number from 0.0 to 1.0
      
      
      let mbti_bar_f = new ProgressBar.Line(mbtiF, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_f) => {
            mbti_bar_f.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_f.animate(mbti_f_value);  // Number from 0.0 to 1.0
      
      
      let mbti_bar_t = new ProgressBar.Line(mbtiT, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_t) => {
            mbti_bar_t.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_t.animate(mbti_t_value);  // Number from 0.0 to 1.0
      
      
      let mbti_bar_p = new ProgressBar.Line(mbtiP, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_p) => {
            mbti_bar_p.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_p.animate(mbti_p_value);  // Number from 0.0 to 1.0
      
      
      let mbti_bar_j = new ProgressBar.Line(mbtiJ, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,        
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, mbti_bar_j) => {
            mbti_bar_j.path.setAttribute('stroke', state.color);
        
        }
      });
      
      mbti_bar_j.animate(mbti_j_value);  // Number from 0.0 to 1.0


      new Swiper(".sw-portfolio", {
        slidesPerView: 3,
        slidesPerGroup : 3,
        spaceBetween: 30,
        pagination: {
          el: ".sw-portfolio-pg",
          clickable: true,
        },

      });
}