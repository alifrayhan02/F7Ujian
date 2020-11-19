// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}
// Init App
var app = new Framework7({
    dialog: {
        buttonOk:'Ya',
        buttonCancel:'Tidak',
    },
    id: 'io.framework7.testapp',
    root: '#app',
    theme: 'md',
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    popup: {
        closeOnEscape: true,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
    smartSelect: {
        openIn: 'popup',
        popupCloseLinkText	:'Tutup',
        closeOnSelect	:true,
        popupSwipeToClose: true,
        virtualList: false,
    },
    initOnDeviceReady:true,
        view:{
        pushState:true,
    },
    touch: {
        mdTouchRipple:false,
    }

});
app.views.main.router.navigate('/homepage/');
//$('.introduction').css('min-height', 'calc(100vh - 58px)' )

var notifikasiLinkSmartWarning = app.notification.create({
    icon: '<i class="fas fa-exclamation-circle text-color-yellow"></i>',
    title: '<p class="text-color-yellow">Absensi</p>',
    titleRightText: 'Sekarang',
    subtitle: 'Fulan ijin tidak masuk',
    text: 'Jumat, 8 November 2020 Fulan ijin tidak masuk sekolah',
    closeTimeout: 20000,
    swipeToClose:true,
    closeButton: true,
    closeOnClick: true,
    on: {
      close: function () {
        var toastBottom1 = app.toast.create({
            text: 'Notifikasi ditutup',
            closeTimeout: 3000,
        });
        toastBottom1.open();
      },
    },
});


$(document).on('page:init', function (e) {
    /* background image to cover */
    $('.background').each(function () {
        var imagewrap = $(this);
        var imagecurrent = $(this).find('img').attr('src');
        if (imagecurrent != undefined || imagecurrent != null) {
            imagewrap.css('background-image', 'url("' + imagecurrent + '")');
            $(this).find('img').remove();
        }

    });


    $('.page-content').on('scroll', function () {
        /* header active on scroll more than 50 px*/
        if ($(this).scrollTop() >= 30) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active')
        }
    });
});



document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


$('#edit').on('click', function(e) {
    document.getElementById("edit_hari").innerHTML += "<a>"+ "Susu" +"</a>";
})



$(document).on('page:init', '.page[data-name="homepage"]', function (e) {

    /* chart js */
    var ctx = document.getElementById("linechart").getContext('2d');

    var gradient2 = ctx.createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'rgba(151, 94, 251, 0.40)');
    gradient2.addColorStop(1, 'rgba(91, 168, 255, 0.40)');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            datasets: [{
                label: ' Used MB',
                backgroundColor: gradient2,
                data: [65, 70, 60, 90, 75, 100, 130, 120, 150],
                borderColor: "rgba(151, 94, 251, 0.40)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderWidth: 2,
                borderDashOffset: 1,
                borderJoinStyle: 'bevel',
                pointBorderColor: "#ffffff",
                pointBackgroundColor: "#7b65f4",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "#000000",
                pointHoverBorderColor: "#ffffff",
                pointHoverBorderWidth: 0,
                pointRadius: 2,
                pointHitRadius: 6,
                    }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js  Line Chart',
            },
            legend: {
                display: false,
                labels: {
                    fontColor: "#888888"
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        fontColor: "#888888",
                        beginAtZero: true,
                    },
                    gridLines: {
                        color: "rgba(160,160,160,0.1",
                        zeroLineColor: "rgba(160,160,160,0.15)"
                    }
                        }],
                xAxes: [{
                    display: false,
                    ticks: {
                        fontColor: "#888888"
                    },
                    gridLines: {
                        color: "rgba(160,160,160,0.1)",
                        zeroLineColor: "rgba(160,160,160,0.15)"
                    }
                        }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    });
});
