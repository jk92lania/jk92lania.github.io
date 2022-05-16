window.onload = function () {
  // gotop button hide
  let quickmenu = $('.quickmenu');
  let topmenu = $('.topmenu');
  let header_h = $('.header').height();
  let visual_h = $('.visual').height();
  let port_top = $('.portfolio').offset().top - header_h;
  let skill_top = $('.skill').offset().top - header_h;
  let about_top = $('.about').offset().top - header_h;
  let life_top = $('.life').offset().top - header_h;
  let gnbLink = $('.gnb li a');
  let gnbLinkPos = [ about_top, port_top, skill_top, life_top];

  function makeTop() {
    port_top = $('.portfolio').offset().top - header_h;
    skill_top = $('.skill').offset().top - header_h;
    about_top = $('.about').offset().top - header_h;
    life_top = $('.life').offset().top - header_h;
    gnbLinkPos = [ about_top, port_top, skill_top, life_top];
  }

  $(window).scroll(function () {
    let nowTop = $(this).scrollTop();
    if (nowTop > parseInt(visual_h)) {
      topmenu.removeClass('topmenu-hide');
    } else {
      topmenu.removeClass('topmenu-hide');
      topmenu.addClass('topmenu-hide');
    }

    animateNowPos(nowTop);   
  })

  quickmenu.mouseenter(function(){
    $('.quickmenu-icon').removeClass('quickmenu-icon-active');
    $('.quickmenu-icon').addClass('quickmenu-icon-active');
  });
  quickmenu.mouseleave(function(){
    $('.quickmenu-icon').removeClass('quickmenu-icon-active');
  });

  function animateNowPos(_nowTop) {
    $.each(gnbLink, function(index, item) {
      if(_nowTop >=  parseInt(gnbLinkPos[index])) {
        gnbLink.removeClass('gnb-a-active');
        gnbLink.eq(index).addClass('gnb-a-active');
      }else if(_nowTop < parseInt(gnbLinkPos[0])) {
        gnbLink.removeClass('gnb-a-active');
      }        

    });
  }

  // gotop button action
  quickmenu.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 400);
  });

  $.each(gnbLink, function(index, item) {
    $(this).click(function(event){
      event.preventDefault();
      $('html').animate({
        scrollTop : gnbLinkPos[index]
      }, 400);
    });
  });



  // about slide
  let sw_about;
  let sw_about_obj = {
    loop : true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 1,

      },
    }

  };

  sw_about = new Swiper('.sw-about', sw_about_obj);


  // mbti 그래프
  let mbti_e_value = 17.2;
  let mbti_i_value = 16.4;
  let mbti_n_value = 7.8;
  let mbti_s_value = 23.5;
  let mbti_f_value = 37.4;
  let mbti_t_value = 51.6;
  let mbti_p_value = 6;
  let mbti_j_value = 4.2;


  let mbti_chart = bb.generate({
    
    data: {
      x: "x",
      columns: [
        ["x", "외향", "내향", "감각", "직관", "사고", "감정", "판단", "인식"],
        ["ENTJ", mbti_e_value, mbti_i_value, mbti_n_value, mbti_s_value, mbti_t_value, mbti_f_value, mbti_j_value, mbti_p_value]
      ],
      type: "radar", // for ESM specify as: radar()
      colors : {
        ENTJ : "#4D7080"
      },
      labels: true
    },
    radar: {
      axis: {
        max: 50,
        text: {
          position: {
            x: -20,
            y: -15
          }
        }        
      },
      level: {
        depth: 4
      },
      direction: {
        clockwise: true
      }, 
      width : {
        ratio : 0.9
      },    
    },
    
    bindto: "#mbtiChart"
  });

  setTimeout(function(){
    mbti_chart.data.colors({            
      ENTJ: d3.rgb("#A3C0CC").darker(1)
    });
  }, 2000);

 

  // mbti slide
  //   let mbti_data = ['Te', 'Ni', 'Se', 'Fi'];
  let sw_mbti = new Swiper(".sw-mbti", {
    slidesPerView: 1,
    // direction: "vertical",
    spaceBetween: 0,
    // autoHeight: true,
    centeredSlides: true,
    pagination: {
      el: ".sw-mbti-pg",
      clickable: true,
      type: "progressbar",
      //   renderBullet: function (index, className) {              
      //     return '<div class="' + className + '"><span class="mbti-entj">' + (mbti_data[index]) + '</span></div>';
      //   }
    },
  });


  // profile slide
  let sw_profile = new Swiper(".sw-profile", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      1000: {
        slidesPerView: 4,

      },
      640: {
        slidesPerView: 3,

      },
    }
  });

  // skill html
  let barHtml = new ProgressBar.Circle(skillHtml, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barHtml) => {
      barHtml.path.setAttribute('stroke', state.color);
      var value = Math.round(barHtml.value() * 100);
      if (value === 0) {
        barHtml.setText('');
      } else {
        // barHtml.setText(value);
      }

      barHtml.text.style.color = state.color;
    }
  });
  barHtml.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barHtml.text.style.fontSize = '2rem';
  barHtml.animate(0.98);


  // skill css
  let barCss = new ProgressBar.Circle(skillCss, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barCss) => {
      barCss.path.setAttribute('stroke', state.color);
      var value = Math.round(barCss.value() * 100);
      if (value === 0) {
        barCss.setText('');
      } else {
        // barCss.setText(value);
      }

      barCss.text.style.color = state.color;
    }
  });
  barCss.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barCss.text.style.fontSize = '2rem';
  barCss.animate(0.97);


  // skill js
  let barJs = new ProgressBar.Circle(skillJs, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barJs) => {
      barJs.path.setAttribute('stroke', state.color);
      var value = Math.round(barJs.value() * 100);
      if (value === 0) {
        barJs.setText('');
      } else {
        // barJs.setText(value);
      }

      barJs.text.style.color = state.color;
    }
  });
  barJs.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barJs.text.style.fontSize = '2rem';
  barJs.animate(0.85);

  // skill jquery
  let barJq = new ProgressBar.Circle(skillJq, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barJq) => {
      barJq.path.setAttribute('stroke', state.color);
      var value = Math.round(barJq.value() * 100);
      if (value === 0) {
        barJq.setText('');
      } else {
        // barJq.setText(value);
      }

      barJq.text.style.color = state.color;
    }
  });
  barJq.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barJq.text.style.fontSize = '2rem';
  barJq.animate(0.62);

  // skill 반응형
  let barRes = new ProgressBar.Circle(skillRs, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barRes) => {
      barRes.path.setAttribute('stroke', state.color);
      var value = Math.round(barRes.value() * 100);
      if (value === 0) {
        barRes.setText('');
      } else {
        // barRes.setText(value);
      }

      barRes.text.style.color = state.color;
    }
  });
  barRes.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barRes.text.style.fontSize = '2rem';
  barRes.animate(0.91);

  // skill github
  let barGit = new ProgressBar.Circle(skillGit, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barGit) => {
      barGit.path.setAttribute('stroke', state.color);
      var value = Math.round(barGit.value() * 100);
      if (value === 0) {
        barGit.setText('');
      } else {
        // barRes.setText(value);
      }

      barGit.text.style.color = state.color;
    }
  });
  barGit.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barGit.text.style.fontSize = '2rem';
  barGit.animate(0.75);

  // skill scss
  let barScss = new ProgressBar.Circle(skillScss, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barScss) => {
      barScss.path.setAttribute('stroke', state.color);
      var value = Math.round(barScss.value() * 100);
      if (value === 0) {
        barScss.setText('');
      } else {
        // barRes.setText(value);
      }

      barScss.text.style.color = state.color;
    }
  });
  barScss.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barScss.text.style.fontSize = '2rem';
  barScss.animate(0.70);

  // skill vue
  let barVue = new ProgressBar.Circle(skillVue, {
    strokeWidth: 3,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {
      color: '#CDBAA4'
    },
    to: {
      color: '#806E59'
    },
    // Set default step function for all animate calls
    step: (state, barVue) => {
      barVue.path.setAttribute('stroke', state.color);
      var value = Math.round(barVue.value() * 100);
      if (value === 0) {
        barVue.setText('');
      } else {
        // barRes.setText(value);
      }

      barVue.text.style.color = state.color;
    }
  });
  barVue.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barVue.text.style.fontSize = '2rem';
  barVue.animate(0.30);


  // skill slide
  let skill = new Swiper(".sw-skill", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 0,
    slidesPerColumnFill: 'row',
    breakpoints: {
      800: {
        slidesPerView: 4,
        slidesPerColumn: 2,

      },
      640: {
        slidesPerView: 3,
        slidesPerColumn: 2,

      },
    },
    pagination : {
      el : ".sw-skill-pg",
      clickable : true
    },

  });


  // portfolio data
  let sw_pf_data = [{
      'name': '팔공티',
      'imgurl': 'images/port_pal_003.png',
      'imgurlbefore': 'images/port_pal_009.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/palgongtea/',
      'git': 'https://github.com/jk92lania/palgongtea',
      'origin': 'http://www.palgongtea.co.kr/',
      'study': '개인',
      'day': '8',
      'info' : '100% 개인 작업하였습니다. 표작성 및 swiper 배치 등에 대해 배워나갔습니다.'
    },
    {
      'name': '삼양맛샵',
      'imgurl': 'images/port_deli_003.png',
      'imgurlbefore': 'images/port_deli_006.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/sydeliciousshop/',
      'git': 'https://github.com/jk92lania/sydeliciousshop',
      'origin': 'https://sydeliciousshop.com/',
      'study': '개인',
      'day': '6',
      'info' : '100% 개인 작업하였습니다. swiper 동작시 애니메이션 등 이벤트를 추가하는 방법에 대해 공부하였습니다.'
    },
    {
      'name': '포트폴리오',
      'imgurl': 'images/port_prot_003.png',
      'imgurlbefore': 'images/port_prot_006.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'git': 'https://github.com/jk92lania/portfolio',
      'study': '개인',
      'day': '20',
      'info' : '100% 개인 작업하였습니다. 배운 것을 토대로 제작하였습니다. 반응형 추가중입니다.'
    },
    {
      'name': '생명보험협회',
      'imgurl': 'images/port_klia_002.png',
      'imgurlbefore': 'images/port_klia_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/klia/',
      'git': 'https://github.com/jk92lania/klia',
      'origin': 'https://www.klia.or.kr/',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작하였습니다. 원페이지 제작방법을 배웠습니다.'
    },
    {
      'name': '산청군청',
      'imgurl': 'images/port_san_002.png',
      'imgurlbefore': 'images/port_san_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/sancheong/',
      'git': 'https://github.com/jk92lania/sancheong',
      'origin': 'https://www.sancheong.go.kr/www/index.do',
      'study': '스터디용',
      'day': '10',
      'info' : '수업을 들으며 제작하였습니다. swiper 변형된 배치에 대해 배웠습니다.'
    },
    {
      'name': '한살림',
      'imgurl': 'images/port_han_002.png',
      'imgurlbefore': 'images/port_han_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/hansalim/',
      'git': 'https://github.com/jk92lania/hansalim',
      'origin': 'https://shop.hansalim.or.kr/shopping/spMain.do',
      'study': '스터디용',
      'day': '8',
      'info' : '수업을 들으며 제작하였습니다. 장바구니 계산 및 json 방식에 대해 배워나갔습니다.'
    },
    {
      'name': '풀무원',
      'imgurl': 'images/port_gre_002.png',
      'imgurlbefore': 'images/port_gre_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/greenjuice/',
      'git': 'https://github.com/jk92lania/greenjuice',
      'origin': 'https://greenjuice.pulmuone.com/',
      'study': '스터디용',
      'day': '4',
      'info' : '수업을 들으며 제작하였습니다. js를 이용한 class 추가, 제거 및 slide 제작에 대해 배워나갔습니다.'
    },
    {
      'name': '부산대학교병원',
      'imgurl': 'images/port_pnuh_002.png',
      'imgurlbefore': 'images/port_pnuh_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/pnuh/',
      'git': 'https://github.com/jk92lania/pnuh',
      'origin': 'https://www.pnuh.or.kr/pnuh/main/main.do?rbsIdx=1',
      'study': '스터디용',
      'day': '6',
      'info' : '수업을 들으며 제작하였습니다. 헤더 제작, 슬라이드 더보기 제작하는 방법에 대해 배워나갔습니다.'
    },
    {
      'name': 'stx건설',
      'imgurl': 'images/port_stx_002.png',
      'imgurlbefore': 'images/port_stx_004.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/stxconst/',
      'git': 'https://github.com/jk92lania/stxconst',
      'origin': 'http://www.stxconst.co.kr/',
      'study': '스터디용',
      'day': '3',
      'info' : '수업을 들으며 제작하였습니다. 헤더 제작 등에 대해 배워나갔습니다.'
    },
  ];

  let sw_pf_total = sw_pf_data.length;
  let sw_pf_html = '';
  for (let i = 0; i < sw_pf_total; i++) {
    let temp_data = sw_pf_data[i];
    sw_pf_html += '<div class="swiper-slide">';
    sw_pf_html += '<div class="portfolio-box">';

    sw_pf_html += '<div class="pf-box-img"><img src=\"';
    sw_pf_html += temp_data.imgurlbefore;
    sw_pf_html += '\" alt="포트폴리오">';
    sw_pf_html += `<img src="${temp_data.imgurl}" alt="포트폴리오">`
    sw_pf_html +='</div>';

    sw_pf_html += '<div class="pf-box-txt">';
    sw_pf_html += '<div class="pf-box-txt-bg pf-bg-1"></div>';
    sw_pf_html += '<div class="pf-box-txt-bg pf-bg-2"></div>';
    sw_pf_html += '<h3 class="pf-box-name">';
    sw_pf_html += temp_data.name;
    sw_pf_html += '</h3>';

    sw_pf_html += '<p class="pf-box-info"><span>';
    sw_pf_html += `<i>${temp_data.study}</i> 제작 클론 코딩`;
    sw_pf_html += '</span>제작 기간 : <i>';
    sw_pf_html += temp_data.day;
    sw_pf_html += '</i> 일';
    sw_pf_html += `<em>${temp_data.info}</em>`;
    sw_pf_html += '</p>';
    sw_pf_html += '</div>';

    sw_pf_html += '<div class="pf-nav mt-10">';
    if (temp_data.work) {
      sw_pf_html += '<button class="pf-btn pf-work" type="button" onclick="window.open(\'';
      sw_pf_html += temp_data.work;
      sw_pf_html += '\')">work</button>';
    }
    if (temp_data.git) {
      sw_pf_html += '<button class="pf-btn pf-git" type="button" onclick="window.open(\'';
      sw_pf_html += temp_data.git;
      sw_pf_html += '\')">git</button>';
    }
    if (temp_data.origin) {
      sw_pf_html += '<button class="pf-btn pf-ori" type="button" onclick="window.open(\'';
      sw_pf_html += temp_data.origin;
      sw_pf_html += '\')">origin</button>';
    }
    sw_pf_html += '</div>';

    sw_pf_html += '<div class="pf-label-list clearfix">';
    if (temp_data.html) {
      sw_pf_html += '<span class="pf-box-label label-html">html</span>';
    }
    if (temp_data.css) {
      sw_pf_html += '<span class="pf-box-label label-css">css</span>';
    }
    if (temp_data.js) {
      sw_pf_html += '<span class="pf-box-label label-js">js</span>';
    }
    if (temp_data.pc) {
      sw_pf_html += '<span class="pf-box-label label-pc">';
      sw_pf_html += temp_data.pc;
      sw_pf_html += '</span> ';
    }
    if (temp_data.mobile) {
      sw_pf_html += '<span class="pf-box-label label-mobile">';
      sw_pf_html += temp_data.mobile;
      sw_pf_html += '</span> ';
    }
    sw_pf_html += '</div>';


    sw_pf_html += '</div></div>';
  }
  let sw_pf_wrapper = $('.sw-portfolio .swiper-wrapper');
  sw_pf_wrapper.html(sw_pf_html);


  // portfolio slide
  let sw_port = new Swiper(".sw-portfolio", {
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
      el: ".sw-portfolio-pg",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerColumn: 4,
        slidesPerGroup: 3,
      },
      800: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
      },
    }
  });

  // all portfolio
  let all_pf_close = $('.all-pf-close');
  let btn_all = $('.sw-protfolio-all');
  let all_pf = $('.all-portfolio');
  btn_all.click(function () {
    all_pf.stop().slideDown();
  });
  all_pf_close.click(function () {
    all_pf.stop().slideUp();
  });

  let sw_all_html = '';
  for (let i = 0; i < sw_pf_total; i++) {
    let temp_data = sw_pf_data[i];
    sw_all_html += '<div class="swiper-slide">';
    sw_all_html += '<div class="all-pf-box">';

    sw_all_html += '<div class="all-pf-img"><img src=\"';
    sw_all_html += temp_data.imgurl;
    sw_all_html += '\" alt="포트폴리오"></div>';

    sw_all_html += '<div class="pf-nav all-pf-nav">';
    if (temp_data.work) {
      sw_all_html += '<button class="pf-btn pf-work" type="button" onclick="window.open(\'';
      sw_all_html += temp_data.work;
      sw_all_html += '\')">work</button>';
    }
    if (temp_data.git) {
      sw_all_html += '<button class="pf-btn pf-git" type="button" onclick="window.open(\'';
      sw_all_html += temp_data.git;
      sw_all_html += '\')">git</button>';
    }
    if (temp_data.origin) {
      sw_all_html += '<button class="pf-btn pf-ori" type="button" onclick="window.open(\'';
      sw_all_html += temp_data.origin;
      sw_all_html += '\')">origin</button>';
    }
    sw_all_html += '</div>';


    sw_all_html += '<div class="all-pf-txt">';
    sw_all_html += '<h3 class="all-pf-name">';
    sw_all_html += temp_data.name;
    sw_all_html += '</h3>';

    sw_all_html += '<div class="all-pf-label-list pf-label-list clearfix">';
    if (temp_data.html) {
      sw_all_html += '<span class="pf-box-label label-html">html</span>';
    }
    if (temp_data.css) {
      sw_all_html += '<span class="pf-box-label label-css">css</span>';
    }
    if (temp_data.js) {
      sw_all_html += '<span class="pf-box-label label-js">js</span>';
    }
    if (temp_data.pc) {
      sw_all_html += '<span class="pf-box-label label-pc">';
      sw_all_html += temp_data.pc;
      sw_all_html += '</span> ';
    }
    if (temp_data.mobile) {
      sw_all_html += '<span class="pf-box-label label-mobile">';
      sw_all_html += temp_data.mobile;
      sw_all_html += '</span> ';
    }
    sw_all_html += '</div></div>';


    sw_all_html += '</div></div>';
  }
  let sw_all_wrapper = $('.sw-all .swiper-wrapper');
  sw_all_wrapper.html(sw_all_html);



  // all portfolio slide
  let sw_all = new Swiper(".sw-all", {
    slidesPerView: 3,
    slidesPerGroup: 6,
    slidesPerColumn: 2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
  });


  // life slide
  let sw_life = new Swiper(".sw-life", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    pagination: {
      el: ".sw-travel-pg",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });


  $('.pdf').click(function(event){
      event.preventDefault();
      //저장 영역 div id
    html2canvas($('#wrap')[0] ,{	
      //logging : true,		// 디버그 목적 로그
      //proxy: "html2canvasproxy.php",
      allowTaint : true,	// cross-origin allow 
      useCORS: true,		// CORS 사용한 서버로부터 이미지 로드할 것인지 여부
      scale : 2,		// 기본 96dpi에서 해상도를 두 배로 증가
      
      
    }).then(function(canvas) {	
      // 캔버스를 이미지로 변환
      var imgData = canvas.toDataURL('image/png');

      var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
      var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var margin = 10; // 출력 페이지 여백설정
      var doc = new jsPDF('p', 'mm');
      var position = 0;

      // 첫 페이지 출력
      doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // 한 페이지 이상일 경우 루프 돌면서 출력
      while (heightLeft >= 20) {			// 35
      position = heightLeft - imgHeight;
      position = position - 20 ;		// -25

      doc.addPage();
      doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      }

      // 파일 저장
      doc.save('jukyeong.pdf');
    });

  });

  makeTop();

}