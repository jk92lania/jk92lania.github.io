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
            }, function(){
                if(index == 0) {
                    mindmap_menu_focus.css('border-color', '#ee7678');
                    mindmap_wrap.eq(index).css('border-color', '#ee7678');
                }else if(index == 1) {
                    mindmap_menu_focus.css('border-color', '#eeb776');
                    mindmap_wrap.eq(index).css('border-color', '#eeb776');
                }else if(index == 2) {
                    mindmap_menu_focus.css('border-color', '#76b7ee');
                    mindmap_wrap.eq(index).css('border-color', '#76b7ee');
                }else {
                    mindmap_menu_focus.css('border-color', '#eee');
                    mindmap_wrap.eq(index).css('border-color', '#eee');
                }
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

    let mindmap_data_fan = [
        {
            'imgurl' : 'mindmap_fan_01.png',
            'alt' : '판타지',
            'title' : 'Harry Potter'
        },{
            'imgurl' : 'mindmap_fan_02.png',
            'alt' : '판타지',
            'title' : 'Alice'
        },{
            'imgurl' : 'mindmap_fan_03.png',
            'alt' : '판타지',
            'title' : '연금술'
        },{
            'imgurl' : 'mindmap_fan_04.jpg',
            'alt' : '판타지',
            'title' : 'Lotto'
        },{
            'imgurl' : 'mindmap_fan_05.png',
            'alt' : '판타지',
            'title' : '디즈니'
        },{
            'imgurl' : 'mindmap_fan_06.png',
            'alt' : '판타지',
            'title' : '그리스 로마 신화'
        }
    ];
    let mindmap_data_playlist = [
        {
            'txt' : '붉은색 푸른색 그 사이 3초의 짧은 시간',
            'title' : '신호등 - 이무진'
        },{
            'txt' : '떨려오는 별빛 반짝이는데 넌 어디를 보고 있는지',
            'title' : '밤 - 여자친구'
        },{
            'txt' : '느낌이 오잖아 떨리고 있잖아 언제까지 눈치만 볼 거니',
            'title' : '내 손을 잡아 - 아이유'
        },{
            'txt' : '결코 이루지 못 할 꿈을 향해 멈추지마 달려가',
            'title' : 'fly to high - 윤하'
        },{
            'txt' : '거친 바람에도 흔들리지 않아 손잡아 이루리',
            'title' : '이루리 - 우주소녀'
        },{
            'txt' : '안녕 난 무명성 지구인이야 반가워',
            'title' : '무명성 지구인 - 이승윤'
        }
    ];
    let mindmap_data_media = [
        {
            'imgurl' : 'http://img.youtube.com/vi/moFB-j5iY2E/mqdefault.jpg',
            'alt' : '미디어',
            'title' : 'HaHa Ha'
        },{
            'imgurl' : 'http://img.youtube.com/vi/4sqksT3ded8/mqdefault.jpg',
            'alt' : '미디어',
            'title' : '스트릿 우먼 파이터'
        },{
            'imgurl' : 'http://img.youtube.com/vi/DnQ09ZZCjCs/mqdefault.jpg',
            'alt' : '미디어',
            'title' : '백종원의 요리비책'
        },{
            'imgurl' : 'http://img.youtube.com/vi/Wst37xabObk/mqdefault.jpg',
            'alt' : '미디어',
            'title' : '새덕후 Korean Birder'
        },{
            'imgurl' : 'http://img.youtube.com/vi/geeYXWldPYI/mqdefault.jpg',
            'alt' : '미디어',
            'title' : '소년심판'
        },{
            'imgurl' : 'http://img.youtube.com/vi/r1gp8Qx5YPQ/mqdefault.jpg',
            'alt' : '미디어',
            'title' : 'odg'
        }
    ];
    let mindmap_data_goal = [
        {
            'classname' : 'fas fa-thumbs-up fa-5x',
            'color' : 'ee7678',
            'title' : 'Good'
        },{
            'classname' : 'fas fa-battery-full fa-5x',
            'color' : 'ee7678',
            'title' : '에너지가 가득 찬'
        },{
            'classname' : 'fas fa-brush fa-5x',
            'color' : 'ee7678',
            'title' : '미래를 그리는'
        },{
            'classname' : 'fas fa-carrot fa-5x',
            'color' : 'ee7678',
            'title' : '당근이지(ok)'
        },{
            'classname' : 'fas fa-crown fa-5x',
            'color' : 'ee7678',
            'title' : 'queen'
        },{
            'classname' : 'fab fa-sketch fa-5x',
            'color' : 'ee7678',
            'title' : 'diamond'
        }
    ];
    
    let mindmap_data_mine = [
        {
            'imgurl' : 'mindmap_mine_01.png',
            'alt' : 'mine',
            'title' : '가족'
        },{
            'imgurl' : 'mindmap_mine_02.png',
            'alt' : 'mine',
            'title' : '애완동물'
        },{
            'imgurl' : 'mindmap_mine_03.png',
            'alt' : 'mine',
            'title' : '집'
        },{
            'imgurl' : 'mindmap_mine_04.jpg',
            'alt' : 'mine',
            'title' : '액세사리'
        },{
            'imgurl' : 'mindmap_mine_05.png',
            'alt' : 'mine',
            'title' : '기억'
        },{
            'imgurl' : 'mindmap_mine_06.jpg',
            'alt' : 'mine',
            'title' : '잠'
        }
    ];
    let mindmap_data_water = [
        {
            'imgurl' : 'mindmap_water_01.jpg',
            'alt' : 'mine',
            'title' : '거품목욕'
        },{
            'imgurl' : 'mindmap_water_02.jpg',
            'alt' : 'mine',
            'title' : '료칸'
        },{
            'imgurl' : 'mindmap_water_03.jpg',
            'alt' : 'mine',
            'title' : '온천'
        },{
            'imgurl' : 'mindmap_water_04.png',
            'alt' : 'mine',
            'title' : '계곡'
        },{
            'imgurl' : 'mindmap_water_05.png',
            'alt' : 'mine',
            'title' : '족욕'
        },{
            'imgurl' : 'mindmap_water_06.png',
            'alt' : 'mine',
            'title' : '커피'
        }
    ];
    let mindmap_data_myself = [
        {
            'txt' : '때로는 포기가 아닌 체념도 필요하다. 그 사람의 인생은 본인이 해결하는 것이다'
        },{
            'txt' : '타인의 감정은 타인의 것이고, 그 사람의 감정을 떠안지 말라'
        },{
            'txt' : '불안을 감내하는 것이 인간의 성숙'
        },{
            'txt' : '모든 것을 다할 수는 없다. 시간은 제한적이고, 나는 하나이다.'
        },{
            'txt' : '잘못한 일은 바로 인정한다. 인정한다고 나는 죽지 않는다. 실패하지 않는다.'
        },{
            'txt' : '세운 원칙은 지킨다. 변경이 필요하다면 치열하게 고민한다. 지킬 수 없는 원칙은 만들지 않는다.'
        }
    ];
    let mindmap_data_comm = [
        {
            'txt' : '\'솔직히 말해봐\' 대신 \'너의 의견은 어때?\' 라고 말하기'
        },{
            'txt' : '거울을 보고 말하는 연습하기'
        },{
            'txt' : '상대방의 의사를 묻기'
        },{
            'txt' : '틀리다와 다르다는 구분하기, 다름을 인정하기'
        },{
            'txt' : '경청'
        },{
            'txt' : '대화에 완벽한 것은 없다'
        }
    ];
    let mindmap_data_empathy = [
        {
            'txt' : '힘들다는 말에 부정적이라면 다른 사람의 힘듦을 공감하지 못한다. 힘든 마음 그 자체를 인정하라.'
        },{
            'txt' : '내가 행복해야 다른 이에게도 나눌 수 있다.'
        },{
            'txt' : '공감능력이 부족하다고 스스로를 비하하는 것은, 오히려 스스로에게 공감하지 못하게 된다'
        },{
            'txt' : '눈치를 본다고 공감이 생기지 않는다'
        },{
            'txt' : '이해하지 못했다면 이해하기 위해 무슨 상황인지 이해하기 위해 질문하라.'
        },{
            'txt' : '감정에 공감하는 것과 행동에 동의하는 것은 별개이다.'
        }
    ];
    let mindmap_data_view = [
        {
            'imgurl' : 'mindmap_view_01.jpg',
            'alt' : '풍경'
        },{
            'imgurl' : 'mindmap_view_02.jpg',
            'alt' : '풍경'
        },{
            'imgurl' : 'mindmap_view_03.jpg',
            'alt' : '풍경'
        },{
            'imgurl' : 'mindmap_view_04.jpg',
            'alt' : '풍경'
        },{
            'imgurl' : 'mindmap_view_05.jpg',
            'alt' : '풍경'
        },{
            'imgurl' : 'mindmap_view_06.jpg',
            'alt' : '풍경'
        }
    ];
    let mindmap_data_illu = [
        {
            'imgurl' : 'mindmap_illu_01.png',
            'alt' : '일러스트',
        },{
            'imgurl' : 'mindmap_illu_02.png',
            'alt' : '일러스트',
        },{
            'imgurl' : 'mindmap_illu_03.png',
            'alt' : '일러스트',
        },{
            'imgurl' : 'mindmap_illu_04.png',
            'alt' : '일러스트',
        },{
            'imgurl' : 'mindmap_illu_05.png',
            'alt' : '일러스트',
        },{
            'imgurl' : 'mindmap_illu_06.png',
            'alt' : '일러스트',
        }
    ];
    let mindmap_data_bucket = [
        {
            'imgurl' : 'mindmap_bucket_01.png',
            'alt' : '버킷리스트',
            'title' : '스카이 다이빙'
        },{
            'imgurl' : 'mindmap_bucket_02.jpg',
            'alt' : '버킷리스트',
            'title' : '겨울 기차'
        },{
            'imgurl' : 'mindmap_bucket_03.jpg',
            'alt' : '버킷리스트',
            'title' : '스쿠버 다이빙'
        },{
            'imgurl' : 'mindmap_bucket_04.jpg',
            'alt' : '버킷리스트',
            'title' : '소금사막'
        },{
            'imgurl' : 'mindmap_bucket_05.jpg',
            'alt' : '버킷리스트',
            'title' : '특별한 호텔'
        },{
            'imgurl' : 'mindmap_bucket_06.png',
            'alt' : '버킷리스트',
            'title' : '디즈니랜드'
        }
    ];

    mindmap_item_big.each(function(index, item){
        let temp;
        if(index >= 0 && index <= 2) {
            mindmap_item_arm.each(function(index, item){
                temp = '<div class="mindmap-page mindmap-page-1">';
                temp += '<img src=\"images/';
                temp += mindmap_data_fan[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_fan[index].alt;
                temp += '\">';
                temp += '<span>';
                temp += mindmap_data_fan[index].title;
                temp += '</span>';
                temp += '</div>';

                temp += '<div class="mindmap-page mindmap-page-2">';                
                temp += '<p>';
                temp += mindmap_data_playlist[index].txt;
                temp += '</p>';
                temp += '<span>';
                temp += mindmap_data_playlist[index].title;
                temp += '</span>';
                temp += '</div>'; 

                temp += '<div class="mindmap-page mindmap-page-3">';
                temp += '<img src=\"';
                temp += mindmap_data_media[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_media[index].alt;
                temp += '\">';
                temp += '<span>';
                temp += mindmap_data_media[index].title;
                temp += '</span>';
                temp += '</div>';

                $(this).html(temp);    
            });
        } else if(index >= 3 && index <= 5) {
            mindmap_item_love.each(function(index, item){
                temp = '<div class="mindmap-page mindmap-page-1">';
                temp += '<i class=\"';
                temp += mindmap_data_goal[index].classname;
                temp += '\" style=\"color : ';
                temp += mindmap_data_goal[index].color;
                temp += ';\"></i>';
                temp += '<span>';
                temp += mindmap_data_goal[index].title;
                temp += '</span>';
                temp += '</div>';  

                temp += '<div class="mindmap-page mindmap-page-2">';
                temp += '<img src=\"images/';
                temp += mindmap_data_mine[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_mine[index].alt;
                temp += '\">';
                temp += '<span>';
                temp += mindmap_data_mine[index].title;
                temp += '</span>';
                temp += '</div>';   

                temp += '<div class="mindmap-page mindmap-page-3">';
                temp += '<img src=\"images/';
                temp += mindmap_data_water[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_water[index].alt;
                temp += '\">';
                temp += '<span>';
                temp += mindmap_data_water[index].title;
                temp += '</span>';
                temp += '</div>'; 

                $(this).html(temp);                  
            });
        } else if(index >= 6 && index <= 8) {
            mindmap_item_uni.each(function(index, item){                
                temp = '<div class="mindmap-page mindmap-page-1">';                
                temp += '<p>';
                temp += mindmap_data_myself[index].txt;
                temp += '</p>';                
                temp += '</div>';

                temp += '<div class="mindmap-page mindmap-page-2">';                
                temp += '<p>';
                temp += mindmap_data_comm[index].txt;
                temp += '</p>';                
                temp += '</div>';

                temp += '<div class="mindmap-page mindmap-page-3">';                
                temp += '<p>';
                temp += mindmap_data_empathy[index].txt;
                temp += '</p>';                
                temp += '</div>';
                
                $(this).html(temp); 
            });
        }else {
            mindmap_item_life.each(function(index, item){
                temp = '<div class="mindmap-page mindmap-page-1">';
                temp += '<img src=\"images/';
                temp += mindmap_data_view[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_view[index].alt;
                temp += '\">';
                temp += '</div>';

                temp += '<div class="mindmap-page mindmap-page-2">';
                temp += '<img src=\"images/';
                temp += mindmap_data_illu[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_illu[index].alt;
                temp += '\">';
                temp += '</div>';

                temp += '<div class="mindmap-page mindmap-page-3">';
                temp += '<img src=\"images/';
                temp += mindmap_data_bucket[index].imgurl;
                temp += '\" alt=\"';
                temp += mindmap_data_bucket[index].alt;
                temp += '\">';
                temp += '<span>';
                temp += mindmap_data_bucket[index].title;
                temp += '</span>';
                temp += '</div>';

                $(this).html(temp); 
            });
        }
    });

    mindmap_item_big.each(function(index, item){
        $(this).mouseenter(function(){
            mindmap_item.each(function(index, item){
                $(this).find('.mindmap-page').removeClass("mindmap-page-active");
            });
            if(index >= 0 && index <= 2 ) {
                if(index == 0) {
                    mindmap_item_arm.find('.mindmap-page-1').addClass("mindmap-page-active");
                } else if(index == 1) {
                    mindmap_item_arm.find('.mindmap-page-2').addClass("mindmap-page-active");
                } else {
                    mindmap_item_arm.find('.mindmap-page-3').addClass("mindmap-page-active");
                }
            } else if(index >= 3 && index <= 5 ) {
                if(index == 3) {
                    mindmap_item_love.find('.mindmap-page-1').addClass("mindmap-page-active");
                } else if(index == 4) {
                    mindmap_item_love.find('.mindmap-page-2').addClass("mindmap-page-active");
                } else {
                    mindmap_item_love.find('.mindmap-page-3').addClass("mindmap-page-active");
                }
            } else if(index >= 6 && index <= 8 ) {
                if(index == 6) {
                    mindmap_item_uni.find('.mindmap-page-1').addClass("mindmap-page-active");
                } else if(index == 7) {
                    mindmap_item_uni.find('.mindmap-page-2').addClass("mindmap-page-active");
                } else {
                    mindmap_item_uni.find('.mindmap-page-3').addClass("mindmap-page-active");
                }
            }else  {
                if(index == 9) {
                    mindmap_item_life.find('.mindmap-page-1').addClass("mindmap-page-active");
                } else if(index == 10) {
                    mindmap_item_life.find('.mindmap-page-2').addClass("mindmap-page-active");
                } else {
                    mindmap_item_life.find('.mindmap-page-3').addClass("mindmap-page-active");
                }
            }
        }); 
    });
    mindmap_wrap.mouseleave(function(){
        mindmap_item.each(function(index, item){
            // $(this).html("");
            $(this).find('.mindmap-page').removeClass("mindmap-page-active");
        });
    });


    // mbti 그래프
    let mbti_e_value = 0.53;
    let mbti_i_value = 0.46;
    let mbti_n_value = 0.58;
    let mbti_s_value = 0.27;
    let mbti_f_value = 0.12;
    let mbti_t_value = 1.0;
    let mbti_p_value = 0.45;
    let mbti_j_value = 0.44;

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


      // mbti slide
      let mbti_data = ['Te', 'Ni', 'Se', 'Fi'];
      let sw_mbti = new Swiper(".sw-mbti", {
        slidesPerView: 1,
        direction: "vertical",
        spaceBetween: 30,
        pagination: {
          el: ".sw-mbti-pg",
          clickable: true,
          renderBullet: function (index, className) {              
            return '<div class="' + className + '"><span class="mbti-entj">' + (mbti_data[index]) + '</span></div>';
          }
        },        
      });


      // portfolio slide
      let sw_port = new Swiper(".sw-portfolio", {
        slidesPerView: 3,
        slidesPerGroup : 3,
        spaceBetween: 30,
        pagination: {
          el: ".sw-portfolio-pg",
          clickable: true,
        },
      });


      
}