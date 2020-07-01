import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  initMetisMenu() {
    $('#side-menu').metisMenu();
  }

  initSlimscrollMenu() {
    $('.slimscroll-menu').slimscroll({
      height: 'auto',
      position: 'right',
      size: '5px',
      color: '#9ea5ab',
      wheelStep: 5,
      touchScrollStep: 50
    });
  }
  initSlimscroll() {
    $('.slimscroll').slimscroll({
      height: 'auto',
      position: 'right',
      size: '5px',
      color: '#9ea5ab',
      touchScrollStep: 50
    });
  }
  initLeftMenuCollapse() {
    // tslint:disable-next-line: only-arrow-functions
    $('.button-menu-mobile').on('click', function(event) {
      event.preventDefault();
      $('body').toggleClass('enlarged');
    });
  }

  initEnlarge() {
    if ($(window).width() < 1025) {
        $('body').addClass('enlarged');
    } else {
        $('body').removeClass('enlarged');
    }
  }
  initActiveMenu() {
    $('#sidebar-menu a').each(function() {
      const pageUrl = window.location.href.split(/[?#]/)[0];
      if(pageUrl !== 'login') {
        $('body').removeClass('login-layout');
      }
      if (this.href === pageUrl) {
          $(this).addClass('active');
          $(this).parent().addClass('active'); // add active to li of the current link
          $(this).parent().parent().addClass('in');
          $(this).parent().parent().prev().addClass('active'); // add active class to an anchor
          $(this).parent().parent().parent().addClass('active');
          $(this).parent().parent().parent().parent().addClass('in'); // add active to li of the current link
          $(this).parent().parent().parent().parent().parent().addClass('active');
      }
  });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.initSlimscrollMenu();
    this.initSlimscroll();
    this.initMetisMenu();
    this.initLeftMenuCollapse();
    this.initEnlarge();
    this.initActiveMenu();
  }
}
