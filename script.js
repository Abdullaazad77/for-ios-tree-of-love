(function () {
    var canvas = $('#canvas');


    if (!canvas[0].getContext) {
        $("#error").show();
        return false;
    }

    function resizeCanvas() {

        let w = $("#wrap").width();

        let h = $("#wrap").height();

        canvas.attr("width", w);

        canvas.attr("height", h);

    }

    resizeCanvas();

    $(window).on("resize", resizeCanvas);

    var width = canvas[0].width;

    var height = canvas[0].height;
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
    }

    var tree = new Tree(canvas[0], width, height, opts);
    var seed = tree.seed;
    var foot = tree.footer;
    var hold = 1;

    canvas.click(function (e) {
        var offset = canvas.offset(), x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        if (seed.hover(x, y)) {
            hold = 0;
            canvas.unbind("click");
            canvas.unbind("mousemove");
            canvas.removeClass('hand');

            // تشغيل الموسيقى
            var music = document.getElementById('myMusic');

            if (music) {
                music.play();

            }

            //الى من تسكن قلبي 
            const startDelaySeconds = 12.6; // وقت تأخير بداية التشغيل
            const stopAfterSeconds = 1.5; // مدة التشغيل قبل التوقف
            // نحدد المؤقت لتشغيل الصوت بعد startDelaySeconds
            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.3; // بين 0 (صامت) و 1 (أعلى صوت)
                sound.play();

                // بعد تشغيل الصوت، نحدد مؤقت التوقف بعد stopAfterSeconds
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0; // إعادة الصوت لبدايته
                }, stopAfterSeconds * 1000);

            }, startDelaySeconds * 1000);

            //دونك
            const startDelaySecondsD = 14;
            const stopAfterSecondsD = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD * 1000);

            }, startDelaySecondsD * 1000);



            //منذ غيابك خفت نور الدنيه 
            const startDelaySeconds1 = 15.4;
            const stopAfterSeconds1 = 2.7;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds1 * 1000);


            }, startDelaySeconds1 * 1000);


            //دونك
            const startDelaySecondsD1 = 18.2;
            const stopAfterSecondsD1 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD1 * 1000);

            }, startDelaySecondsD1 * 1000);

            //برَدَ قلبي من دونكِ.كل لـيلٍ
            const startDelaySeconds2 = 19.6;
            const stopAfterSeconds2 = 2.6;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds2 * 1000);


            }, startDelaySeconds2 * 1000);

            //دونك
            const startDelaySecondsD2 = 22;
            const stopAfterSecondsD2 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD2 * 1000);

            }, startDelaySecondsD2 * 1000);

            //شتاق لصوتكِ،لضحكتكِ،وحتى لصمتكِ.           

            const startDelaySeconds3 = 23.5;
            const stopAfterSeconds3 = 2.8;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds3 * 1000);

            }, startDelaySeconds3 * 1000);

            //دونك
            const startDelaySecondsD3 = 26.2;
            const stopAfterSecondsD3 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD3 * 1000);

            }, startDelaySecondsD3 * 1000);

            //نتِ أكثر من ذكرى،أنتِ حياة في صدر          
            const startDelaySeconds4 = 27.8;
            const stopAfterSeconds4 = 2.8;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds4 * 1000);

            }, startDelaySeconds4 * 1000);

            //دونك
            const startDelaySecondsD4 = 31;
            const stopAfterSecondsD4 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD4 * 1000);

            }, startDelaySecondsD4 * 1000);


            //و كان العناق حروفًا،لكتبتُه ألف مر
            const startDelaySeconds5 = 32.6;
            const stopAfterSeconds5 = 2.6;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds5 * 1000);

            }, startDelaySeconds5 * 1000);

            //دونك
            const startDelaySecondsD5 = 35.6;
            const stopAfterSecondsD5 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD5 * 1000);

            }, startDelaySecondsD5 * 1000);

            //نتِ الجرح الذي لا أريد له شفا
            const startDelaySeconds6 = 37;
            const stopAfterSeconds6 = 2.5;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds6 * 1000);

            }, startDelaySeconds6 * 1000);

            //دونك
            const startDelaySecondsD6 = 39.5;
            const stopAfterSecondsD6 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD6 * 1000);
            }, startDelaySecondsD6 * 1000);

            //النظرة التي تُحيين
            const startDelaySeconds7 = 41;
            const stopAfterSeconds7 = 2;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds7 * 1000);

            }, startDelaySeconds7 * 1000);

            //دونك
            const startDelaySecondsD7 = 43;
            const stopAfterSecondsD7 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD7 * 1000);
            }, startDelaySecondsD7 * 1000);

            //حتاجكِ... كما تحتاج الروح نبض
            const startDelaySeconds8 = 44.7;
            const stopAfterSeconds8 = 2.7;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds8 * 1000);

            }, startDelaySeconds8 * 1000);

            //دونك
            const startDelaySecondsD8 = 47.4;
            const stopAfterSecondsD8 = 0.8;
            setTimeout(() => {
                const sound = document.getElementById("dingSound");
                sound.volume = 0.6;
                sound.play();
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSecondsD8 * 1000);
            }, startDelaySecondsD8 * 1000);

            //وأحبكِ... في كل حي
            const startDelaySeconds9 = 48.7;
            const stopAfterSeconds9 = 2.1;

            setTimeout(() => {
                const sound = document.getElementById("typeSound");
                sound.volume = 0.4;
                sound.play();

                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, stopAfterSeconds9 * 1000);

            }, startDelaySeconds9 * 1000);
        }
    }).mousemove(function (e) {
        var offset = canvas.offset(), x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
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
        var ctx = tree.ctx;
        while (true) {
            tree.ctx.clearRect(0, 0, width, height);
            tree.jump();
            foot.draw();
            $await(Jscex.Async.sleep(25));
        }
    }));

    var textAnimate = eval(Jscex.compile("async", function () {
        var together = new Date();
        together.setFullYear(2023, 6, 25);
        together.setHours(0);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);

        $("#code").show().typewriter();
        $("#clock-box").fadeIn(500);
        while (true) {
            timeElapse(together);
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
