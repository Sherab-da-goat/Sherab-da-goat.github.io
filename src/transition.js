import barba from '@barba/core';

barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });
  barba.init({
    views: [{
      namespace: 'home',
      beforeEnter() {
        // update the menu based on user navigation
        menu.update();
      },
      afterEnter() {
        // refresh the parallax based on new page content
        parallax.refresh();
      }
    }]
  });