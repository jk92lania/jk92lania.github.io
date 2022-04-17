window.onload = function(){
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
    //   let mbti_data = ['Te', 'Ni', 'Se', 'Fi'];
      let sw_mbti = new Swiper(".sw-mbti", {
        slidesPerView: 1,
        direction: "vertical",
        spaceBetween: 0,
        autoHeight : true,
        centeredSlides : true,
        pagination: {
          el: ".sw-mbti-pg",
          clickable: true,
          type : "progressbar",
        //   renderBullet: function (index, className) {              
        //     return '<div class="' + className + '"><span class="mbti-entj">' + (mbti_data[index]) + '</span></div>';
        //   }
        },        
      });


      // skill slide
      let skill = new Swiper(".sw-skill", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
        },
        
      });

      // skill html
      let barHtml = new ProgressBar.SemiCircle(skillHtml, {
        strokeWidth: 6,
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
        from: {color: '#eeb776'},
        to: {color: '#ee7678'},
        // Set default step function for all animate calls
        step: (state, barHtml) => {
            barHtml.path.setAttribute('stroke', state.color);
          var value = Math.round(barHtml.value() * 100);
          if (value === 0) {
            barHtml.setText('');
          } else {
            barHtml.setText(value);
          }
      
          barHtml.text.style.color = state.color;
        }
      });
      barHtml.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      barHtml.text.style.fontSize = '2rem';      
      barHtml.animate(0.98);


      // skill css
      let barCss = new ProgressBar.SemiCircle(skillCss, {
        strokeWidth: 6,
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
        from: {color: '#eeb776'},
        to: {color: '#ee7678'},
        // Set default step function for all animate calls
        step: (state, barCss) => {
            barCss.path.setAttribute('stroke', state.color);
          var value = Math.round(barCss.value() * 100);
          if (value === 0) {
            barCss.setText('');
          } else {
            barCss.setText(value);
          }
      
          barCss.text.style.color = state.color;
        }
      });
      barCss.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      barCss.text.style.fontSize = '2rem';      
      barCss.animate(0.97);


      // skill js
      let barJs = new ProgressBar.SemiCircle(skillJs, {
        strokeWidth: 6,
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
        from: {color: '#eeb776'},
        to: {color: '#ee7678'},
        // Set default step function for all animate calls
        step: (state, barJs) => {
            barJs.path.setAttribute('stroke', state.color);
          var value = Math.round(barJs.value() * 100);
          if (value === 0) {
            barJs.setText('');
          } else {
            barJs.setText(value);
          }
      
          barJs.text.style.color = state.color;
        }
      });
      barJs.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      barJs.text.style.fontSize = '2rem';      
      barJs.animate(0.95);

      // skill jquery
      let barJq = new ProgressBar.SemiCircle(skillJq, {
        strokeWidth: 6,
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
        from: {color: '#eeb776'},
        to: {color: '#ee7678'},
        // Set default step function for all animate calls
        step: (state, barJq) => {
            barJq.path.setAttribute('stroke', state.color);
          var value = Math.round(barJq.value() * 100);
          if (value === 0) {
            barJq.setText('');
          } else {
            barJq.setText(value);
          }
      
          barJq.text.style.color = state.color;
        }
      });
      barJq.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      barJq.text.style.fontSize = '2rem';      
      barJq.animate(0.92);


      // portfolio slide
      let sw_profile = new Swiper(".sw-profile", {
        slidesPerView: 4,
        spaceBetween: 10,
      });


      // portfolio slide
      let sw_port = new Swiper(".sw-portfolio", {
        slidesPerView: 1,
        slidesPerGroup : 1,
        spaceBetween: 30,
        pagination: {
          el: ".sw-portfolio-pg",
          clickable: true,
        },
      });


      // life slide
      let sw_life = new Swiper(".sw-life", {
        slidesPerView: 4,
        slidesPerGroup : 4,
        spaceBetween: 10,
        pagination: {
        },
      });


      
}