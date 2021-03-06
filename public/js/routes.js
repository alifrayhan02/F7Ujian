var routes = [
  // Index page
  {
    path: '/',
    componentUrl: 'index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  {
    path: '/iklan/',
    componentUrl: './pages/iklan.html',
    name: 'about',
  },
  {
    path: '/geolocation/',
    componentUrl: './pages/geolocation.html',
    name: 'location',
  },
  {
    path: '/reset/',
    componentUrl: './pages/reset.html',
    name: 'reset',
  },
  {
    path: '/scanqr/',
    componentUrl: './pages/scanqr.html',
    name: 'qr',
  },
  {
    path: '/notif/',
    componentUrl: './pages/notif.html',
    name: 'notif',
  },
  {
    path: '/url/',
    componentUrl: './pages/url.html',
    name: 'url',
  },
  {
    path: '/audio/',
    componentUrl: './pages/audio.html',
    name: 'audio',
  },
  {
    path: '/download/',
    componentUrl: './pages/download.html',
    name: 'download',
  },
  {
    path: '/video/',
    componentUrl: './pages/video.html',
    name: 'video',
  },
  {
    path: '/upload/',
    componentUrl: './pages/upload.html',
    name: 'upload',
  },
  {
    path: '/uuid/',
    componentUrl: './pages/uuid.html',
    name: 'uuid',
  },
  {
    path: '/isi_toko/',
    url: './pages/isi_toko.html',
    name: 'isi_toko',
  },
  {
    path: '/pusat-bantuan/',
    componentUrl: './pages/guru/bantuan/pusat-bantuan.html',
    name: 'pusat-bantuan',
  },
  {
    path: '/nilai-home/',
    componentUrl: './pages/guru/page/nilai/nilai-home.html',
    name: 'nilai-home',
  },
  {
    path: '/nila-tambah/',
    componentUrl: './pages/guru/page/nilai/nila-tambah.html',
    name: 'nila-tambah',
  },
  {
    path: '/nilai-daftar/',
    componentUrl: './pages/guru/page/nilai/nilai-daftar.html',
    name: 'nilai-daftar',
  },
  {
    path: '/laporan-nilai-harian/',
    componentUrl: './pages/guru/page/nilai/laporan_nilai/laporan-nilai-harian.html',
    name: 'laporan-nilai-harian',
  },
  {
    path: '/laporan-nilai-bulanan/',
    componentUrl: './pages/guru/page/nilai/laporan_nilai/laporan-nilai-bulanan.html',
    name: 'laporan-nilai-bulanan',
  },
  {
    path: '/laporan-nilai-siswa/',
    componentUrl: './pages/guru/page/nilai/laporan_nilai/laporan-nilai-siswa.html',
    name: 'laporan-nilai-siswa',
  },
  {
    path: '/laporan-nilai-siswa-detail/',
    componentUrl: './pages/guru/page/nilai/laporan_nilai/laporan-nilai-siswa-detail.html',
    name: 'nilai_persiswa',
  },
  {
    path: '/home_absensi/',
    componentUrl: './pages/guru/page/absensi/home_absensi.html',
    name: 'home_absensi',
  },
  {
    path: '/input_absensi/',
    componentUrl: './pages/guru/page/absensi/input_absensi.html',
    name: 'home_absensi',
  },
  {
    path: '/input_absensi/',
    componentUrl: './pages/guru/page/absensi/input_absensi.html',
    name: 'input_absensi',
  },
  {
    path: '/absensi_pelajaran/',
    componentUrl: './pages/guru/page/absensi/absensi_pelajaran.html',
    name: 'absensi_pelajaran',
  },
  {
    path: '/laporan_absensi/',
    componentUrl: './pages/guru/page/absensi/laporan_absensi/laporan_absensi.html',
    name: 'laporan_absensi',
  },
  {
    path: '/laporan_persiswa/',
    componentUrl: './pages/guru/page/absensi/laporan_absensi/laporan_persiswa.html',
    name: 'laporan_persiswa',
  },
  {
    path: '/laporan_perbulan/',
    componentUrl: './pages/guru/page/absensi/laporan_absensi/laporan_perbulan.html',
    name: 'laporan_perbulan',
  },
  {
    path: '/laporan_setiapSiswa/',
    componentUrl: './pages/guru/page/absensi/laporan_absensi/laporan_setiapSiswa.html',
    name: 'laporan_setiapSiswa',
  },
  {
    path: '/tambah_event/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/tambah-event.html',
    name: 'tambah_event',
  },
  {
    path: '/edit_event/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/edit_event.html',
    name: 'edit_event',
  },
  {
    path: '/edit_pelajaran/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/edit_pelajaran.html',
    name: 'edit_pelajaran',
  },
  {
    path: '/edit_jadwalGuru/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/edit_jadwalGuru.html',
    name: 'edit_jadwalGuru',
  },
  {
    path: '/edit_jadwalRuangan/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/edit_jadwalRuangan.html',
    name: 'edit_jadwalRuangan',
  },
  {
    path: '/tambah_pelajaran/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/tambah_pelajaran.html',
    name: 'tambah_pelajaran',
  },
  {
    path: '/tambah_jadwalGuru/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/tambah_jadwalGuru.html',
    name: 'tambah_jadwalGuru',
  },
  {
    path: '/tambah_jadwalRuangan/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/tambah_jadwalRuangan.html',
    name: 'tambah_jadwalRuangan',
  },
  {
    path: '/langkah/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/langkah.html',
    name: 'langkah',
  },
  {
    path: '/kalender_akademik/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/kalender-akademik.html',
    name: 'kalender_akademik',
  },
  {
    path: '/kelas/',
    componentUrl: './pages/kelas.html',
    name: 'kelas',
  },
  {
    path: '/jadwalRuang/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/jadwalRuang.html',
    name: 'jadwalRuang',
  },
  {
    path: '/jadwalGuru/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/jadwalGuru.html',
    name: 'jadwalGuru',
  },
  {
    path: '/jadwal_pelajaran/',
    url: './pages/jadwal_pelajaran.html',
    name: 'jadwal_pelajaran',
  },
  {
    path: '/jadwal_kelas/',
    url: './pages/jadwal_kelas.html',
    name: 'jadwal_kelas',
  },
  {
    path: '/jadwal_guru/',
    componentUrl: './pages/jadwal_pelajaran/jadwal_guru/jadwal_guru.html',
    name: 'jadwal_guru',
  },
  {
    path: '/jadwal_siswa/',
    componentUrl: './pages/jadwal_pelajaran/jadwal_siswa/jadwal_siswa.html',
    name: 'jadwal_siswa',
  },
  {
    path: '/jadwal/detail-jadwal/',
    componentUrl: './pages/guru/page/jadwal/detail-jadwal.html',
    name: 'detail-jadwal',
  },
  {
    path: '/jadwal/jadwal-harian/',
    componentUrl: './pages/guru/page/jadwal/jadwal-harian.html',
    name: 'jadwal-harian',
  },
  {
    path: '/penjadwalan/',
    componentUrl: './pages/jadwal_pelajaran/penjadwal/penjadwalan.html',
    name: 'jadwal',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-bg"></div>\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="if-not-md">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-bg"></div>\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="if-not-md">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: './pages/accordion.html',
  },
  // framework page
  {
    path: '/framework/',
    url: './pages/framework.html',
  },
  // signin page
  {
    path: '/signin/',
    url: './pages/signin.html',
  },
  // signup page
  {
    path: '/signup/',
    url: './pages/signup.html',
  },
  // forgotpassword page
  {
    path: '/forgotpassword/',
    url: './pages/forgotpassword.html',
  },
  // resetpassword page
  {
    path: '/resetpassword/',
    url: './pages/resetpassword.html',
  },
  // otp page
  {
    path: '/otp/',
    url: './pages/otp.html',
  },
  // home page
  {
    path: '/homepage/',
    componentUrl: './pages/guru/page/guru-home.html',
  },
  // thankyou page
  {
    path: '/thankyou/',
    url: './pages/thankyou.html',
  },

  // notications page
  {
    path: '/noticationslist/',
    url: './pages/notificationlist.html',
  },
  {
    path: '/notificationdetails/',
    url: './pages/notificationdetails.html',
  },
  // setting page
  {
    path: '/setting/',
    url: './pages/setting.html',
  },
  // history page
  {
    path: '/history/',
    url: './pages/history.html',
  },
  // all page
  {
    path: '/allpages/',
    url: './pages/pages.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages/action-sheet.html',
  },
  {
    path: '/appbar/',
    componentUrl: './pages/appbar.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './pages/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './pages/badge.html',
  },
  {
    path: '/buttons/',
    url: './pages/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './pages/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './pages/cards.html',
  },
  {
    path: '/cards-expandable/',
    url: './pages/cards-expandable.html',
  },
  {
    path: '/checkbox/',
    componentUrl: './pages/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './pages/chips.html',
  },
  {
    path: '/color-picker/',
    componentUrl: './pages/color-picker.html',
  },
  {
    path: '/contacts-list/',
    url: './pages/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './pages/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './pages/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './pages/dialog.html',
  },
  {
    path: '/elevation/',
    url: './pages/elevation.html',
  },
  {
    path: '/fab/',
    url: './pages/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './pages/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './pages/form-storage.html',
  },
  {
    path: '/gauge/',
    componentUrl: './pages/gauge.html',
  },
  {
    path: '/grid/',
    url: './pages/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './pages/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './pages/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './pages/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './pages/lazy-load.html',
  },
  {
    path: '/list/',
    url: './pages/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './pages/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './pages/login-screen-page.html',
  },
  {
    path: '/menu/',
    componentUrl: './pages/menu.html',
  },
  {
    path: '/messages/',
    componentUrl: './pages/messages.html',
  },
  {
    path: '/navbar/',
    url: './pages/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './pages/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './pages/notifications.html',
  },
  {
    path: '/panel/',
    url: './pages/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './pages/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './pages/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './pages/popup.html',
  },
  {
    path: '/popover/',
    url: './pages/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './pages/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './pages/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './pages/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './pages/range.html',
  },
  {
    path: '/searchbar/',
    url: './pages/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './pages/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './pages/sheet-modal.html',
  },
  {
    path: '/skeleton/',
    componentUrl: './pages/skeleton.html',
  },
  {
    path: '/smart-select/',
    url: './pages/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './pages/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './pages/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './pages/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './pages/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './pages/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './pages/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './pages/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './pages/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './pages/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './pages/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './pages/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './pages/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './pages/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './pages/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './pages/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './pages/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './pages/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './pages/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './pages/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './pages/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './pages/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './pages/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './pages/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './pages/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './pages/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './pages/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './pages/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './pages/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './pages/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './pages/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: './pages/toast.html',
  },
  {
    path: '/toggle/',
    url: './pages/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './pages/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './pages/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './pages/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './pages/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './pages/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/tooltip/',
    componentUrl: './pages/tooltip.html',
  },
  {
    path: '/treeview/',
    componentUrl: './pages/treeview.html',
  },
  {
    path: '/timeline/',
    url: './pages/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './pages/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './pages/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './pages/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './pages/virtual-list.html',
  },
  {
    path: '/virtual-list-vdom/',
    componentUrl: './pages/virtual-list-vdom.html',
  },
  {
    path: '/vi/',
    componentUrl: './pages/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/master-detail/',
    url: './pages/master-detail-master.html',
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        templateUrl: './pages/master-detail-detail.html',
      },
    ]
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
