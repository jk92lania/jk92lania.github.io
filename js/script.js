window.onload = function () {
  // gotop button hide
  let topmenu = $('.topmenu');

  let header_h = $('.header').height();
  let visual_h = $('.visual').height();  
  
  
  $(window).scroll(function(){
    if( $(this).scrollTop() > parseInt(visual_h) ) {
      topmenu.fadeIn();
    }else {
      topmenu.fadeOut();

    }
  })


  // gotop button action
  topmenu.click(function(){
    $('html').animate({
      scrollTop : 0
    }, 400);
  });

  // about slide
  let sw_about = new Swiper(".sw-about", {
    slidesPerView:3,
    slidesPerColumn: 2,
    spaceBetween: 10,    
    // observer: true,
    // observeParents: true,
  });

  // mbti 그래프
  let mbti_e_value = 0.64;
  let mbti_i_value = 0.46;
  let mbti_n_value = 0.78;
  let mbti_s_value = 0.37;
  let mbti_f_value = 0.12;
  let mbti_t_value = 1.0;
  let mbti_p_value = 0.65;
  let mbti_j_value = 0.44;

  let mbti_bar_e = new ProgressBar.Line(mbtiE, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
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

  mbti_bar_e.animate(mbti_e_value); // Number from 0.0 to 1.0
  console.log(mbti_bar_e);

  let mbti_bar_i = new ProgressBar.Line(mbtiI, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_i) => {
      mbti_bar_i.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_i.animate(mbti_i_value); // Number from 0.0 to 1.0


  let mbti_bar_n = new ProgressBar.Line(mbtiN, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_n) => {
      mbti_bar_n.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_n.animate(mbti_n_value); // Number from 0.0 to 1.0


  let mbti_bar_s = new ProgressBar.Line(mbtiS, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_s) => {
      mbti_bar_s.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_s.animate(mbti_s_value); // Number from 0.0 to 1.0


  let mbti_bar_f = new ProgressBar.Line(mbtiF, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_f) => {
      mbti_bar_f.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_f.animate(mbti_f_value); // Number from 0.0 to 1.0


  let mbti_bar_t = new ProgressBar.Line(mbtiT, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_t) => {
      mbti_bar_t.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_t.animate(mbti_t_value); // Number from 0.0 to 1.0


  let mbti_bar_p = new ProgressBar.Line(mbtiP, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_p) => {
      mbti_bar_p.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_p.animate(mbti_p_value); // Number from 0.0 to 1.0


  let mbti_bar_j = new ProgressBar.Line(mbtiJ, {
    strokeWidth: 2,
    color: '#76b7ee',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    from: {
      color: '#76b7ee'
    },
    to: {
      color: '#ee7678'
    },
    // Set default step function for all animate calls
    step: (state, mbti_bar_j) => {
      mbti_bar_j.path.setAttribute('stroke', state.color);

    }
  });

  mbti_bar_j.animate(mbti_j_value); // Number from 0.0 to 1.0


  // mbti slide
  //   let mbti_data = ['Te', 'Ni', 'Se', 'Fi'];
  let sw_mbti = new Swiper(".sw-mbti", {
    slidesPerView: 1,
    direction: "vertical",
    spaceBetween: 0,
    autoHeight: true,
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
    slidesPerView: 4,
    spaceBetween: 10,
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
      color: '#eeb776'
    },
    to: {
      color: '#ee7678'
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
      color: '#eeb776'
    },
    to: {
      color: '#ee7678'
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
      color: '#eeb776'
    },
    to: {
      color: '#ee7678'
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
  barJs.animate(0.95);

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
      color: '#eeb776'
    },
    to: {
      color: '#ee7678'
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
  barJq.animate(0.92);

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
      color: '#eeb776'
    },
    to: {
      color: '#ee7678'
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


  // skill slide
  let skill = new Swiper(".sw-skill", {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',

  });


  // portfolio data
  let sw_pf_data = [
    {
      'name': '팔공티',
      'imgurl': 'images/port_pal_001.jpg',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/palgongtea/',
      'git': 'https://github.com/jk92lania/palgongtea',
      'origin': 'http://www.palgongtea.co.kr/',
      'study': '개인제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '삼양맛샵',
      'imgurl': 'images/port_deli_001.jpg',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/sydeliciousshop/',
      'git': 'https://github.com/jk92lania/sydeliciousshop',
      'origin': 'https://sydeliciousshop.com/',
      'study': '개인제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '포트폴리오',
      'imgurl': 'images/port_prot_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'git': 'https://github.com/jk92lania/portfolio',
      'study': '개인제작 클론 코딩',
      'day': '20'
    },
    {
      'name': '생명보험협회',
      'imgurl': 'images/port_klia_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'mobile': 'Mobile',
      'work': 'https://jk92lania.github.io/klia/',
      'git': 'https://github.com/jk92lania/klia',
      'origin': 'https://www.klia.or.kr/',
      'study': '스터디용 제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '산청군청',
      'imgurl': 'images/port_san_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/sancheong/',
      'git': 'https://github.com/jk92lania/sancheong',
      'origin': 'https://www.sancheong.go.kr/www/index.do',
      'study': '스터디용 제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '한살림',
      'imgurl': 'images/port_han_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/hansalim/',
      'git': 'https://github.com/jk92lania/hansalim',
      'origin': 'https://shop.hansalim.or.kr/shopping/spMain.do',
      'study': '스터디용 제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '풀무원',
      'imgurl': 'images/port_gre_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/greenjuice/',
      'git': 'https://github.com/jk92lania/greenjuice',
      'origin': 'https://greenjuice.pulmuone.com/',
      'study': '스터디용 제작 클론 코딩',
      'day': '10'
    },
    {
      'name': '부산대학교병원',
      'imgurl': 'images/port_pnuh_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/pnuh/',
      'git': 'https://github.com/jk92lania/pnuh',
      'origin': 'https://www.pnuh.or.kr/pnuh/main/main.do?rbsIdx=1',
      'study': '스터디용 제작 클론 코딩',
      'day': '10'
    },
    {
      'name': 'stx건설',
      'imgurl': 'images/port_stx_001.png',
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'pc': 'PC',
      'work': 'https://jk92lania.github.io/stxconst/',
      'git': 'https://github.com/jk92lania/stxconst',
      'origin': 'http://www.stxconst.co.kr/',
      'study': '스터디용 제작 클론 코딩',
      'day': '6'
    },
  ];

  let sw_pf_total = sw_pf_data.length;
  let sw_pf_html = '';
  for (let i = 0; i < sw_pf_total; i++) {
    let temp_data = sw_pf_data[i];
    sw_pf_html += '<div class="swiper-slide">';
    sw_pf_html += '<div class="portfolio-box">';

    sw_pf_html += '<div class="kor-pattern">';
    sw_pf_html += '<div class="kp-sqr kp-1"></div>';
    sw_pf_html += '<div class="kp-sqr kp-2"></div>';
    sw_pf_html += '<div class="kp-sqr kp-3"></div>';
    sw_pf_html += '<div class="kp-nieun kp-4"></div>';
    sw_pf_html += '<div class="kp-nieun kp-5"></div>';
    sw_pf_html += '<div class="kp-nieun kp-6"></div>';
    sw_pf_html += '<div class="kp-line kp-7"></div>';
    sw_pf_html += '<div class="kp-line kp-8"></div></div>';

    sw_pf_html += '<div class="kor-pattern kp-right-bottom">';
    sw_pf_html += '<div class="kp-sqr kp-1"></div>';
    sw_pf_html += '<div class="kp-sqr kp-2"></div>';
    sw_pf_html += '<div class="kp-sqr kp-3"></div>';
    sw_pf_html += '<div class="kp-nieun kp-4"></div>';
    sw_pf_html += '<div class="kp-nieun kp-5"></div>';
    sw_pf_html += '<div class="kp-nieun kp-6"></div></div>';

    sw_pf_html += '<div class="pf-box-img"><img src=\"';
    sw_pf_html += temp_data.imgurl;
    sw_pf_html += '\" alt="포트폴리오"></div>';

    sw_pf_html += '<div class="pf-box-txt">';
    sw_pf_html += '<div class="pf-box-txt-bg pf-bg-1"></div>';
    sw_pf_html += '<div class="pf-box-txt-bg pf-bg-2"></div>';
    sw_pf_html += '<h3 class="pf-box-name">';
    sw_pf_html += temp_data.name;
    sw_pf_html += '</h3>';

    sw_pf_html += '<p class="pf-box-info"><span>';
    sw_pf_html += temp_data.study;
    sw_pf_html += '</span>제작 기간 :';
    sw_pf_html += temp_data.day;
    sw_pf_html += '일</p>';
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
    slidesPerView: 3,
    slidesPerColumn: 4,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 16,
    spaceBetween: 30,
    pagination: {
      el: ".sw-portfolio-pg",
      clickable: true,
    },
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
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    pagination: {
      el: ".sw-life-pg",
      clickable: true,
    },
  });



}