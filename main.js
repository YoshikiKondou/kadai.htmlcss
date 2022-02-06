const menu = document.querySelector('.jsc-hamburger')
menu.addEventListener('click', function() {
  POTEPANCAMP.HAMBURGER_MENU.init()
  POTEPANCAMP.HAMBURGER_MENU.toggleMenu()
})

var POTEPANCAMP = POTEPANCAMP || {};
POTEPANCAMP.HAMBURGER_MENU = {
  init: function () {
    if (!this.setParams()) return;
    this.prepare();
    this.bindEvents();
  },
  setParams: function () {
    this.$hamburgerMenu = $('.jsc-hamburger');
    this.$hamburgerList = $('.jsc-hamburger-list');
    this.$siteHeader = $('.site-header');
    this.siteHeaderHeight = this.$siteHeader.outerHeight();
    this.hamburgerListHeight = this.$hamburgerList.outerHeight();
    this.scrollMenu();
    if (this.$hamburgerMenu.length == 0) return false;
    return true;
  },
  prepare: function () {},
  bindEvents: function () {
    this.$hamburgerMenu.on('click', $.proxy(this.toggleMenu, this));
  },
  toggleMenu: function () {
    this.$hamburgerMenu.toggleClass('is-active');
    this.$hamburgerList.toggleClass('is-active');
    var self = this;
    $(window).resize(function () {
      self.scrollMenu();
    });
  },
  scrollMenu: function () {
    var self = this;
    if (window.innerHeight < self.siteHeaderHeight + self.hamburgerListHeight) {
      self.$hamburgerList.addClass('is-scroll');
    } else {
      self.$hamburgerList.removeClass('is-scroll');
    }
  }
};