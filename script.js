(function () {
    var canvas = $('#canvas');

    if (!canvas[0].getContext) {
        $("#error").show();
        return false;
    }

    var width = canvas.width();
    var height = canvas.height();

    canvas.attr("width", width);
    canvas.attr("height", height);

    // --- دالة التصغير التلقائي للشاشات الصغيرة (الآيفون وسفاري) ---
    function adjustScale() {
        var winWidth = $(window).width();
        var wrapWidth = 1100;
        var wrapHeight = 680;

        if (winWidth < wrapWidth) {
            var scale = winWidth / wrapWidth;
            $('#wrap').css({
                'transform': 'scale(' + scale + ')',
                'transform-origin': 'top left'
            });
            $('#main').css('height', (wrapHeight * scale) + 'px');
        } else {
            $('#wrap').css({
                'transform': 'scale(1)',
                'transform-origin': 'top center'
            });
            $('#main').css('height', wrapHeight + 'px');
        }
    }

    // تفعيل التصغير عند تحميل الصفحة وعند تدوير شاشة الهاتف
    $(window).on('resize', adjustScale);
    adjustScale();
    // -------------------------------------------------------------

    // --- دالة الوقت المخصصة (لفرض الأرقام الإنجليزية والنص الإندونيسي) ---
    window.timeElapse = function (date) {
        var current = new Date();
        var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

        var days = Math.floor(seconds / (3600 * 24));
        seconds = seconds % (3600 * 24);

        var hours = Math.floor(seconds / 3600);
        if (hours < 10) { hours = "0" + hours; }
        seconds = seconds % 3600;

        var minutes = Math.floor(seconds / 60);
        if (minutes < 10) { minutes = "0" + minutes; }
        seconds = seconds % 60;

        if (seconds < 10) { seconds = "0" + seconds; }

        // النص يعرض الآن: أيام، ساعات، دقائق، ثوانٍ باللغة الإندونيسية وأرقام 1,2,3
        var result = '<span class="digit">' + days + '</span> Hari <span class="digit">' + hours + '</span> Jam <span class="digit">' + minutes + '</span> Menit <span class="digit">' + seconds + '</span> Detik';

        $("#clock").html(result);
    };
    // -------------------------------------------------------------

    var opts = {
        seed: {
            x: width / 2 - 20,
            color: "rgb(190, 26, 37)",
            scale: 2
        },
        branch: [
            [535, 680, 570, 250, 500, 200, 30, 100, [
                [540, 500, 455, 417, 340, 400, 13, 100, [
                    [450, 435, 434, 430, 394, 395, 2, 40]
                ]],
                [550, 445, 600, 356, 680, 345, 12, 100, [
                    [578, 400, 648, 409, 661, 426, 3, 80]
                ]],
                [539, 281, 537, 248, 534, 217, 3, 40],
                [546, 397, 413, 247, 328, 244, 9, 80, [
                    [427, 286, 383, 253, 371, 205, 2, 40],
                    [498, 345, 435, 315, 395, 330, 4, 60]
                ]],
                [546, 357, 608, 252, 678, 221, 6, 100, [
                    [590, 293, 646, 277, 648, 271, 2, 80]
                ]]
            ]]
        ],
        bloom: {
            num: 700,
            width: 1080,
            height: 650,
        },
        footer: {
            width: 1200,
            height: 5,
            speed: 10,
        }
    };

    var tree = new Tree(canvas[0], width, height, opts);
    var seed = tree.seed;
    var foot = tree.footer;
    var hold = 1;

    canvas.click(function (e) {
        var offset = canvas.offset(), x, y;

        // التعديل ليحسب موقع الضغطة بشكل صحيح بعد تصغير الشاشة
        var wrap = $('#wrap')[0];
        var transformMatrix = window.getComputedStyle(wrap).transform;
        var scaleValue = 1;
        if (transformMatrix !== 'none') {
            scaleValue = parseFloat(transformMatrix.split('(')[1].split(',')[0]);
        }

        x = (e.pageX - offset.left) / scaleValue;
        y = (e.pageY - offset.top) / scaleValue;

        if (seed.hover(x, y)) {
            hold = 0;
            canvas.unbind("click");
            canvas.unbind("mousemove");
            canvas.removeClass('hand');

            var music = document.getElementById('myMusic');
            var typeSound = document.getElementById("typeSound");
            var dingSound = document.getElementById("dingSound");

            if (music) { music.play().catch(e => console.log(e)); }
            if (typeSound) { typeSound.load(); }
            if (dingSound) { dingSound.load(); }

            // المؤقتات (تم الاحتفاظ بها كما هي)
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.3; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 1500);
                }
            }, 12600);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 14000);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2700);
                }
            }, 15400);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 18200);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2600);
                }
            }, 19600);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 22000);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2800);
                }
            }, 23500);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 26200);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2800);
                }
            }, 27800);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 31000);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2600);
                }
            }, 32600);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 35600);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2500);
                }
            }, 37000);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 39500);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2000);
                }
            }, 41000);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 43000);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2700);
                }
            }, 44700);
            setTimeout(() => {
                if (dingSound) {
                    dingSound.volume = 0.6; dingSound.play().catch(e => console.log(e));
                    setTimeout(() => { dingSound.pause(); dingSound.currentTime = 0; }, 800);
                }
            }, 47400);
            setTimeout(() => {
                if (typeSound) {
                    typeSound.volume = 0.4; typeSound.play().catch(e => console.log(e));
                    setTimeout(() => { typeSound.pause(); typeSound.currentTime = 0; }, 2100);
                }
            }, 48700);
        }
    }).mousemove(function (e) {
        var offset = canvas.offset(), x, y;
        var wrap = $('#wrap')[0];
        var transformMatrix = window.getComputedStyle(wrap).transform;
        var scaleValue = 1;
        if (transformMatrix !== 'none') {
            scaleValue = parseFloat(transformMatrix.split('(')[1].split(',')[0]);
        }
        x = (e.pageX - offset.left) / scaleValue;
        y = (e.pageY - offset.top) / scaleValue;

        canvas.toggleClass('hand', seed.hover(x, y));
    });

    var seedAnimate = eval(Jscex.compile("async", function () {
        seed.draw();
        while (hold) {
            $await(Jscex.Async.sleep(10));
        }
        while (seed.canScale()) {
            seed.scale(0.95);
            $await(Jscex.Async.sleep(10));
        }
        while (seed.canMove()) {
            seed.move(0, 2);
            foot.draw();
            $await(Jscex.Async.sleep(10));
        }
    }));

    var growAnimate = eval(Jscex.compile("async", function () {
        do {
            tree.grow();
            $await(Jscex.Async.sleep(10));
        } while (tree.canGrow());
    }));

    var flowAnimate = eval(Jscex.compile("async", function () {
        do {
            tree.flower(2);
            $await(Jscex.Async.sleep(10));
        } while (tree.canFlower());
    }));

    var moveAnimate = eval(Jscex.compile("async", function () {
        tree.snapshot("p1", 240, 0, 610, 680);
        while (tree.move("p1", 500, 0)) {
            foot.draw();
            $await(Jscex.Async.sleep(10));
        }
        foot.draw();
        tree.snapshot("p2", 500, 0, 610, 680);

        if (window.innerWidth > 768) {
            canvas.parent().css("background", "url(" + tree.toDataURL('image/png') + ")");
        }
        canvas.css("background", "transparent");
        $await(Jscex.Async.sleep(300));
        canvas.css("background", "none");
    }));

    var jumpAnimate = eval(Jscex.compile("async", function () {
        while (true) {
            tree.ctx.clearRect(0, 0, width, height);
            tree.jump();
            foot.draw();
            $await(Jscex.Async.sleep(25));
        }
    }));

    var textAnimate = eval(Jscex.compile("async", function () {
        var together = new Date();
        together.setFullYear(2025, 9, 17);
        together.setHours(0);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);

        $("#code").show().typewriter();
        $("#clock-box").fadeIn(500);
        while (true) {
            window.timeElapse(together);
            $await(Jscex.Async.sleep(1000));
        }
    }));

    var runAsync = eval(Jscex.compile("async", function () {
        $await(seedAnimate());
        $await(growAnimate());
        $await(flowAnimate());
        $await(moveAnimate());

        textAnimate().start();

        $await(jumpAnimate());
    }));

    runAsync().start();
})();