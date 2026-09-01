(function () {
    "use strict";

    /* =========================================================
       AIRBET88 FLOATING QUICK ACCESS
       FINAL VERSION
       - LEFT BOTTOM
       - COMPACT
       - RESPONSIVE
       - THICK + GLOSSY GLOW TEXT
    ========================================================= */

    const STYLE_ID = "airbet88-floating-final-style";
    const WIDGET_ID = "airbet88-floating-final";

    const OLD_TRIGGER_ID = "floating_action_button_trigger";
    const OLD_LIST_ID = "floating_action_button_list";


    /* =========================================================
       LINKS
    ========================================================= */

    const URLS = {

        buktiJP:
            "https://linknewshortener-ai88.com/bukti-jp",

        rtp:
            "https://linknewshortener-ai88.com/rtp-gacor",

        ayocek:
            "https://linknewshortener-ai88.com/searchingairbet88",

        point:
            "https://linknewshortener-ai88.com/point-anti-rungkad",

        vip:
            "https://membershipvipairbet88.lovable.app/"

    };


    /* =========================================================
       REMOVE OLD CUSTOM VERSION
    ========================================================= */

    [
        "airbet88-custom-floating-menu",
        "airbet88-floating-menu",
        "airbet88-floating-replacement",
        "airbet88-floating-v2",
        "airbet88-floating-v3"
    ].forEach(function (id) {

        const oldElement =
            document.getElementById(id);

        if (oldElement) {
            oldElement.remove();
        }

    });


    /* =========================================================
       PREVENT DUPLICATE
    ========================================================= */

    if (
        document.getElementById(
            WIDGET_ID
        )
    ) {
        return;
    }


    /* =========================================================
       HIDE ORIGINAL FLOATING
    ========================================================= */

    function hideOriginalFloating() {

        const trigger =
            document.getElementById(
                OLD_TRIGGER_ID
            );

        const oldList =
            document.getElementById(
                OLD_LIST_ID
            );


        if (trigger) {

            trigger.style.setProperty(
                "display",
                "none",
                "important"
            );

            trigger.style.setProperty(
                "visibility",
                "hidden",
                "important"
            );

            trigger.style.setProperty(
                "opacity",
                "0",
                "important"
            );

            trigger.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );

        }


        if (oldList) {

            oldList.style.setProperty(
                "display",
                "none",
                "important"
            );

            oldList.style.setProperty(
                "visibility",
                "hidden",
                "important"
            );

            oldList.style.setProperty(
                "opacity",
                "0",
                "important"
            );

            oldList.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );

        }


        let originalWrapper = null;


        if (trigger) {

            originalWrapper =
                trigger.closest(
                    ".floating-action-button"
                );

        }


        if (
            !originalWrapper &&
            oldList
        ) {

            originalWrapper =
                oldList.closest(
                    ".floating-action-button"
                );

        }


        if (originalWrapper) {

            originalWrapper.style.setProperty(
                "display",
                "none",
                "important"
            );

            originalWrapper.style.setProperty(
                "visibility",
                "hidden",
                "important"
            );

            originalWrapper.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );

        }

    }


    /* =========================================================
       CREATE STYLE
    ========================================================= */

    if (
        !document.getElementById(
            STYLE_ID
        )
    ) {

        const style =
            document.createElement(
                "style"
            );

        style.id =
            STYLE_ID;


        style.textContent = `

            /* =================================================
               HIDE ORIGINAL FLOATING
            ================================================= */

            #${OLD_TRIGGER_ID},
            #${OLD_LIST_ID} {

                display:
                    none !important;

                visibility:
                    hidden !important;

                opacity:
                    0 !important;

                pointer-events:
                    none !important;

            }


            /* =================================================
               ANIMATION
            ================================================= */

            @keyframes ab88FinalPulse {

                0%,
                100% {

                    box-shadow:

                        0 0 8px
                        rgba(64,255,225,.28),

                        0 0 20px
                        rgba(64,255,225,.10),

                        0 10px 28px
                        rgba(0,0,0,.42);

                }

                50% {

                    box-shadow:

                        0 0 12px
                        rgba(64,255,225,.60),

                        0 0 30px
                        rgba(64,255,225,.22),

                        0 13px 32px
                        rgba(0,0,0,.48);

                }

            }


            @keyframes ab88TextGlow {

                0%,
                100% {

                    filter:
                        brightness(1);

                }

                50% {

                    filter:
                        brightness(1.18);

                }

            }


            /* =================================================
               ROOT
            ================================================= */

            #${WIDGET_ID} {

                position:
                    fixed !important;

                left:
                    0 !important;

                right:
                    auto !important;

                top:
                    auto !important;

                bottom:
                    42px !important;

                transform:
                    none !important;

                z-index:
                    2147483646 !important;

                width:
                    auto !important;

                height:
                    auto !important;

                margin:
                    0 !important;

                padding:
                    0 !important;

                display:
                    flex !important;

                align-items:
                    flex-end !important;

                font-family:
                    Arial,
                    Helvetica,
                    sans-serif !important;

                color:
                    #ffffff !important;

                pointer-events:
                    none;

            }


            #${WIDGET_ID},
            #${WIDGET_ID} *,
            #${WIDGET_ID} *::before,
            #${WIDGET_ID} *::after {

                box-sizing:
                    border-box !important;

            }


            /* =================================================
               LEFT NAV
            ================================================= */

            #${WIDGET_ID}
            .ab88-nav {

                position:
                    relative;

                z-index:
                    30;

                display:
                    flex;

                flex-direction:
                    column;

                align-items:
                    flex-start;

                gap:
                    7px;

                margin:
                    0;

                padding:
                    0;

                pointer-events:
                    auto;

            }


            /* =================================================
               SIDE TAB
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab {

                position:
                    relative;

                width:
                    38px;

                height:
                    92px;

                margin:
                    0;

                padding:
                    0;

                border:

                    1px solid
                    rgba(80,255,230,.52);

                border-left:
                    0;

                border-radius:
                    0 12px 12px 0;

                outline:
                    none;

                overflow:
                    hidden;

                appearance:
                    none;

                -webkit-appearance:
                    none;

                cursor:
                    pointer;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                color:
                    #ffffff;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(72,255,225,.21),
                        transparent 46%
                    ),

                    linear-gradient(
                        155deg,
                        #075d58,
                        #02202a
                    );

                animation:

                    ab88FinalPulse
                    2.5s
                    ease-in-out
                    infinite;

                transition:

                    width .24s ease,
                    border-color .24s ease,
                    background .24s ease,
                    box-shadow .24s ease;

            }


            #${WIDGET_ID}
            .ab88-tab::before {

                content:
                    "";

                position:
                    absolute;

                inset:
                    0;

                background:

                    linear-gradient(
                        90deg,
                        rgba(255,255,255,.05),
                        transparent 25%,
                        rgba(78,255,229,.08),
                        transparent 75%,
                        rgba(255,255,255,.05)
                    );

                pointer-events:
                    none;

            }


            #${WIDGET_ID}
            .ab88-tab::after {

                content:
                    "";

                position:
                    absolute;

                width:
                    170%;

                height:
                    27px;

                top:
                    -45px;

                left:
                    -35%;

                transform:
                    rotate(-14deg);

                background:

                    linear-gradient(
                        180deg,
                        transparent,
                        rgba(255,255,255,.30),
                        transparent
                    );

                filter:
                    blur(1px);

                transition:
                    top .55s ease;

                pointer-events:
                    none;

            }


            #${WIDGET_ID}
            .ab88-tab:hover::after {

                top:
                    115px;

            }


            #${WIDGET_ID}
            .ab88-tab:hover,
            #${WIDGET_ID}
            .ab88-tab.active {

                width:
                    42px;

                border-color:
                    #8affef;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(110,255,238,.32),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #0a9484,
                        #04424a
                    );

                box-shadow:

                    0 0 10px
                    rgba(80,255,229,.70),

                    0 0 28px
                    rgba(80,255,229,.28),

                    0 0 42px
                    rgba(80,255,229,.10),

                    0 12px 30px
                    rgba(0,0,0,.48);

            }


            /* =================================================
               VIP TAB
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab.vip {

                border-color:

                    rgba(
                        255,
                        224,
                        111,
                        .44
                    );

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(255,219,87,.11),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #074e4a,
                        #031e29
                    );

                animation:
                    none;

                box-shadow:

                    0 0 10px
                    rgba(255,217,87,.16),

                    0 10px 27px
                    rgba(0,0,0,.42);

            }


            #${WIDGET_ID}
            .ab88-tab.vip:hover,
            #${WIDGET_ID}
            .ab88-tab.vip.active {

                border-color:
                    #ffe58a;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(255,226,122,.22),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #087269,
                        #043a42
                    );

                box-shadow:

                    0 0 10px
                    rgba(255,228,136,.62),

                    0 0 24px
                    rgba(255,211,70,.22),

                    0 0 38px
                    rgba(255,211,70,.08),

                    0 12px 30px
                    rgba(0,0,0,.46);

            }


            /* =================================================
               THICK + GLOSSY AIRBET88 TEXT
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab-text {

                position:
                    relative;

                z-index:
                    3;

                writing-mode:
                    vertical-rl;

                text-orientation:
                    upright;

                font-family:
                    "Arial Black",
                    "Arial Bold",
                    Arial,
                    Helvetica,
                    sans-serif !important;

                color:
                    #ffffff !important;

                font-size:
                    7.4px;

                line-height:
                    1;

                letter-spacing:
                    .15px;

                font-weight:
                    900 !important;

                font-style:
                    normal;

                text-transform:
                    uppercase;

                -webkit-text-stroke:

                    .28px
                    rgba(255,255,255,.50);

                paint-order:
                    stroke fill;

                text-shadow:

                    0 1px 0
                    rgba(255,255,255,.75),

                    0 -1px 0
                    rgba(0,110,100,.30),

                    0 0 2px
                    rgba(255,255,255,1),

                    0 0 5px
                    rgba(90,255,235,1),

                    0 0 9px
                    rgba(70,255,228,.95),

                    0 0 15px
                    rgba(70,255,228,.72),

                    0 0 23px
                    rgba(70,255,228,.45),

                    0 0 32px
                    rgba(70,255,228,.25);

                filter:

                    drop-shadow(
                        0 0 2px
                        rgba(79,255,229,.90)
                    );

                animation:

                    ab88TextGlow
                    2.2s
                    ease-in-out
                    infinite;

            }


            /* =================================================
               VIP TEXT GLOW
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab.vip
            .ab88-tab-text {

                color:
                    #fff2aa !important;

                -webkit-text-stroke:

                    .28px
                    rgba(255,250,220,.48);

                text-shadow:

                    0 1px 0
                    rgba(255,255,255,.78),

                    0 -1px 0
                    rgba(140,100,0,.25),

                    0 0 2px
                    rgba(255,255,255,1),

                    0 0 5px
                    rgba(255,234,142,1),

                    0 0 10px
                    rgba(255,223,105,.95),

                    0 0 16px
                    rgba(255,214,76,.72),

                    0 0 24px
                    rgba(255,207,57,.43),

                    0 0 32px
                    rgba(255,207,57,.22);

                filter:

                    drop-shadow(
                        0 0 2px
                        rgba(255,226,115,.9)
                    );

            }


            /* =================================================
               ACTIVE AIRBET88 TEXT
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab.active
            .ab88-tab-text {

                color:
                    #ffffff !important;

                -webkit-text-stroke:

                    .34px
                    rgba(255,255,255,.62);

                text-shadow:

                    0 1px 0
                    rgba(255,255,255,.90),

                    0 0 3px
                    rgba(255,255,255,1),

                    0 0 7px
                    rgba(90,255,235,1),

                    0 0 13px
                    rgba(70,255,228,1),

                    0 0 21px
                    rgba(70,255,228,.82),

                    0 0 31px
                    rgba(70,255,228,.55),

                    0 0 42px
                    rgba(70,255,228,.30);

            }


            #${WIDGET_ID}
            .ab88-tab.vip.active
            .ab88-tab-text {

                color:
                    #fff7c7 !important;

                -webkit-text-stroke:

                    .34px
                    rgba(255,250,220,.60);

                text-shadow:

                    0 1px 0
                    rgba(255,255,255,.90),

                    0 0 3px
                    rgba(255,255,255,1),

                    0 0 7px
                    rgba(255,235,145,1),

                    0 0 13px
                    rgba(255,224,106,1),

                    0 0 21px
                    rgba(255,214,78,.80),

                    0 0 31px
                    rgba(255,207,57,.50),

                    0 0 41px
                    rgba(255,207,57,.27);

            }


            /* =================================================
               POPUP
            ================================================= */

            #${WIDGET_ID}
            .ab88-popup {

                position:
                    fixed !important;

                z-index:
                    2147483647 !important;

                left:
                    48px !important;

                right:
                    auto !important;

                top:
                    auto !important;

                bottom:
                    42px !important;

                width:
                    395px;

                max-width:
                    calc(100vw - 60px);

                max-height:
                    calc(100dvh - 70px);

                margin:
                    0;

                padding:
                    0;

                overflow:
                    hidden;

                border:

                    1px solid
                    rgba(83,255,231,.25);

                border-radius:
                    22px;

                background:

                    radial-gradient(
                        circle at 94% 0%,
                        rgba(57,255,221,.12),
                        transparent 31%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(5,66,65,.99),
                        rgba(1,23,31,.995)
                    );

                box-shadow:

                    0 28px 70px
                    rgba(0,0,0,.62),

                    0 0 34px
                    rgba(61,255,224,.10),

                    inset 0 1px 0
                    rgba(255,255,255,.06);

                backdrop-filter:
                    blur(22px);

                -webkit-backdrop-filter:
                    blur(22px);

                opacity:
                    0;

                visibility:
                    hidden;

                pointer-events:
                    none;

                transform:

                    translateX(-10px)
                    scale(.975);

                transform-origin:
                    left bottom;

                transition:

                    opacity .23s ease,

                    transform
                    .30s
                    cubic-bezier(.2,.8,.2,1),

                    visibility .23s ease;

            }


            #${WIDGET_ID}
            .ab88-popup.show {

                opacity:
                    1;

                visibility:
                    visible;

                pointer-events:
                    auto;

                transform:

                    translateX(0)
                    scale(1);

            }


            /* =================================================
               TOP NEON
            ================================================= */

            #${WIDGET_ID}
            .ab88-popup::before {

                content:
                    "";

                position:
                    absolute;

                z-index:
                    3;

                top:
                    0;

                left:
                    16%;

                width:
                    68%;

                height:
                    2px;

                background:

                    linear-gradient(
                        90deg,
                        transparent,
                        #8affef,
                        #42ffdf,
                        transparent
                    );

                box-shadow:

                    0 0 8px
                    #56ffe3,

                    0 0 18px
                    rgba(53,255,220,.52);

            }


            /* =================================================
               CLOSE
            ================================================= */

            #${WIDGET_ID}
            .ab88-close {

                position:
                    absolute;

                z-index:
                    20;

                top:
                    11px;

                right:
                    11px;

                width:
                    29px;

                height:
                    29px;

                margin:
                    0;

                padding:
                    0;

                border:

                    1px solid
                    rgba(255,255,255,.28);

                border-radius:
                    50%;

                outline:
                    none;

                appearance:
                    none;

                cursor:
                    pointer;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                color:
                    #ffffff;

                font-size:
                    16px;

                line-height:
                    1;

                font-weight:
                    900;

                background:

                    linear-gradient(
                        145deg,
                        #ff4c67,
                        #ac002c
                    );

                box-shadow:

                    0 0 11px
                    rgba(255,70,98,.48),

                    0 0 22px
                    rgba(255,70,98,.14);

                transition:
                    .22s ease;

            }


            #${WIDGET_ID}
            .ab88-close:hover {

                transform:

                    rotate(90deg)
                    scale(1.07);

            }


            /* =================================================
               HEADER
            ================================================= */

            #${WIDGET_ID}
            .ab88-header {

                padding:

                    22px
                    23px
                    15px;

            }


            #${WIDGET_ID}
            .ab88-mini {

                margin:
                    0 0 7px;

                padding:
                    0;

                color:
                    #61ffe8;

                font-size:
                    8px;

                line-height:
                    1.2;

                letter-spacing:
                    1.7px;

                font-weight:
                    900;

                text-transform:
                    uppercase;

                text-shadow:

                    0 0 8px
                    rgba(74,255,228,.30);

            }


            #${WIDGET_ID}
            .ab88-title {

                margin:
                    0 0 7px;

                padding:
                    0;

                color:
                    #ffffff;

                font-size:
                    22px;

                line-height:
                    1.05;

                font-weight:
                    900;

            }


            #${WIDGET_ID}
            .ab88-title span {

                color:
                    #63f5df;

                text-shadow:

                    0 0 12px
                    rgba(69,255,226,.28);

            }


            #${WIDGET_ID}
            .ab88-desc {

                margin:
                    0;

                padding:
                    0;

                max-width:
                    300px;

                color:
                    #91bbb6;

                font-size:
                    10px;

                line-height:
                    1.5;

            }


            /* =================================================
               BODY
            ================================================= */

            #${WIDGET_ID}
            .ab88-body {

                padding:

                    0
                    18px
                    18px;

            }


            /* =================================================
               GRID
            ================================================= */

            #${WIDGET_ID}
            .ab88-grid {

                display:
                    grid;

                grid-template-columns:

                    repeat(
                        2,
                        minmax(0,1fr)
                    );

                gap:
                    8px;

            }


            /* =================================================
               MENU ITEM
            ================================================= */

            #${WIDGET_ID}
            .ab88-item {

                position:
                    relative;

                min-width:
                    0;

                min-height:
                    73px;

                margin:
                    0;

                padding:
                    10px 11px;

                border:

                    1px solid
                    rgba(87,255,232,.15);

                border-radius:
                    14px;

                outline:
                    none;

                overflow:
                    hidden;

                display:
                    flex;

                flex-direction:
                    column;

                justify-content:
                    space-between;

                cursor:
                    pointer;

                text-align:
                    left;

                text-decoration:
                    none !important;

                color:
                    #ffffff !important;

                background:

                    linear-gradient(
                        145deg,
                        rgba(13,88,82,.42),
                        rgba(2,31,39,.92)
                    );

                transition:

                    transform .22s ease,
                    border-color .22s ease,
                    background .22s ease,
                    box-shadow .22s ease;

            }


            #${WIDGET_ID}
            .ab88-item::before {

                content:
                    "";

                position:
                    absolute;

                width:
                    78px;

                height:
                    78px;

                right:
                    -46px;

                bottom:
                    -49px;

                border-radius:
                    50%;

                background:

                    rgba(
                        48,
                        255,
                        220,
                        .10
                    );

                pointer-events:
                    none;

            }


            #${WIDGET_ID}
            .ab88-item:hover {

                transform:
                    translateY(-2px);

                border-color:

                    rgba(
                        99,
                        255,
                        234,
                        .50
                    );

                background:

                    linear-gradient(
                        145deg,
                        rgba(14,121,109,.57),
                        rgba(3,43,47,.98)
                    );

                box-shadow:

                    0 8px 20px
                    rgba(0,0,0,.20),

                    0 0 16px
                    rgba(54,255,223,.07);

            }


            #${WIDGET_ID}
            .ab88-item-small {

                position:
                    relative;

                z-index:
                    3;

                color:
                    #59f6df;

                font-size:
                    7px;

                line-height:
                    1.2;

                letter-spacing:
                    .6px;

                font-weight:
                    900;

            }


            #${WIDGET_ID}
            .ab88-item-bottom {

                position:
                    relative;

                z-index:
                    3;

                display:
                    flex;

                align-items:
                    flex-end;

                justify-content:
                    space-between;

                gap:
                    5px;

            }


            #${WIDGET_ID}
            .ab88-item-name {

                min-width:
                    0;

                color:
                    #ffffff;

                font-size:
                    10px;

                line-height:
                    1.18;

                font-weight:
                    900;

                white-space:
                    normal;

            }


            #${WIDGET_ID}
            .ab88-item-desc {

                margin-top:
                    3px;

                color:
                    #779e9a;

                font-size:
                    7px;

                line-height:
                    1.25;

            }


            #${WIDGET_ID}
            .ab88-arrow {

                flex:
                    0 0 auto;

                color:
                    #5effe5;

                font-size:
                    18px;

                line-height:
                    1;

                transition:
                    transform .20s ease;

            }


            #${WIDGET_ID}
            .ab88-item:hover
            .ab88-arrow {

                transform:
                    translateX(3px);

            }


            /* =================================================
               VIP BOX
            ================================================= */

            #${WIDGET_ID}
            .ab88-vip-box {

                position:
                    relative;

                overflow:
                    hidden;

                padding:
                    17px;

                margin:
                    0 0 9px;

                border:

                    1px solid
                    rgba(255,225,112,.20);

                border-radius:
                    15px;

                background:

                    radial-gradient(
                        circle at 92% 0%,
                        rgba(255,218,82,.13),
                        transparent 38%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(12,91,83,.49),
                        rgba(3,30,38,.95)
                    );

            }


            #${WIDGET_ID}
            .ab88-vip-box::after {

                content:
                    "VIP";

                position:
                    absolute;

                right:
                    -7px;

                bottom:
                    -18px;

                color:

                    rgba(
                        255,
                        225,
                        115,
                        .035
                    );

                font-size:
                    67px;

                line-height:
                    1;

                font-weight:
                    900;

                pointer-events:
                    none;

            }


            #${WIDGET_ID}
            .ab88-vip-small {

                position:
                    relative;

                z-index:
                    2;

                margin-bottom:
                    6px;

                color:
                    #ffe17a;

                font-size:
                    7px;

                letter-spacing:
                    1.25px;

                font-weight:
                    900;

            }


            #${WIDGET_ID}
            .ab88-vip-title {

                position:
                    relative;

                z-index:
                    2;

                margin-bottom:
                    5px;

                color:
                    #ffffff;

                font-size:
                    17px;

                line-height:
                    1.2;

                font-weight:
                    900;

            }


            #${WIDGET_ID}
            .ab88-vip-desc {

                position:
                    relative;

                z-index:
                    2;

                max-width:
                    280px;

                color:
                    #91b8b4;

                font-size:
                    9px;

                line-height:
                    1.5;

            }


            /* =================================================
               VIP CTA
            ================================================= */

            #${WIDGET_ID}
            .ab88-vip-cta {

                width:
                    100%;

                min-height:
                    47px;

                margin:
                    0;

                padding:
                    0 14px;

                border:
                    0;

                border-radius:
                    13px;

                outline:
                    none;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    space-between;

                cursor:
                    pointer;

                text-decoration:
                    none !important;

                color:
                    #003d36 !important;

                font-size:
                    10px;

                line-height:
                    1.2;

                font-weight:
                    900;

                background:

                    linear-gradient(
                        105deg,
                        #a4ffef,
                        #4cebd2,
                        #19baa5
                    );

                box-shadow:

                    0 10px 24px
                    rgba(48,255,220,.16);

                transition:
                    .22s ease;

            }


            #${WIDGET_ID}
            .ab88-vip-cta:hover {

                transform:
                    translateY(-2px);

                box-shadow:

                    0 14px 29px
                    rgba(48,255,220,.23);

            }


            /* =================================================
               TABLET
            ================================================= */

            @media (max-width: 768px) {

                #${WIDGET_ID} {

                    bottom:
                        68px !important;

                }


                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        35px;

                    height:
                        88px;

                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        38px;

                }


                #${WIDGET_ID}
                .ab88-tab-text {

                    font-size:
                        7px;

                }


                #${WIDGET_ID}
                .ab88-popup {

                    left:
                        43px !important;

                    bottom:
                        68px !important;

                    width:
                        330px;

                    max-width:
                        calc(100vw - 52px);

                    max-height:
                        calc(100dvh - 95px);

                }

            }


            /* =================================================
               MOBILE
            ================================================= */

            @media (max-width: 520px) {

                #${WIDGET_ID} {

                    left:
                        0 !important;

                    top:
                        auto !important;

                    bottom:
                        61px !important;

                    transform:
                        none !important;

                }


                #${WIDGET_ID}
                .ab88-nav {

                    gap:
                        5px;

                }


                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        31px;

                    height:
                        84px;

                    border-radius:
                        0 10px 10px 0;

                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        34px;

                }


                /* =================================================
                   MOBILE TEXT
                   TETAP TEBAL + GLOW
                ================================================= */

                #${WIDGET_ID}
                .ab88-tab-text {

                    font-family:
                        "Arial Black",
                        Arial,
                        sans-serif !important;

                    font-size:
                        6.6px;

                    letter-spacing:
                        .1px;

                    font-weight:
                        900 !important;

                    -webkit-text-stroke:

                        .25px
                        rgba(255,255,255,.45);

                    text-shadow:

                        0 0 2px
                        rgba(255,255,255,1),

                        0 0 5px
                        rgba(80,255,230,1),

                        0 0 9px
                        rgba(70,255,228,.92),

                        0 0 15px
                        rgba(70,255,228,.65),

                        0 0 23px
                        rgba(70,255,228,.35);

                }


                #${WIDGET_ID}
                .ab88-tab.vip
                .ab88-tab-text {

                    color:
                        #fff2aa !important;

                    text-shadow:

                        0 0 2px
                        rgba(255,255,255,1),

                        0 0 5px
                        rgba(255,235,145,1),

                        0 0 9px
                        rgba(255,222,100,.90),

                        0 0 15px
                        rgba(255,212,72,.62),

                        0 0 23px
                        rgba(255,207,57,.34);

                }


                /* =================================================
                   MOBILE POPUP
                ================================================= */

                #${WIDGET_ID}
                .ab88-popup {

                    position:
                        fixed !important;

                    left:
                        37px !important;

                    top:
                        auto !important;

                    bottom:
                        66px !important;

                    width:

                        min(
                            285px,
                            calc(100vw - 45px)
                        );

                    max-width:
                        calc(100vw - 45px);

                    max-height:
                        calc(100dvh - 105px);

                    overflow-y:
                        auto;

                    overflow-x:
                        hidden;

                    border-radius:
                        18px;

                    scrollbar-width:
                        thin;

                    transform:

                        translateX(-8px)
                        scale(.98);

                    transform-origin:
                        left bottom;

                }


                #${WIDGET_ID}
                .ab88-popup.show {

                    transform:

                        translateX(0)
                        scale(1);

                }


                #${WIDGET_ID}
                .ab88-header {

                    padding:

                        17px
                        16px
                        11px;

                }


                #${WIDGET_ID}
                .ab88-mini {

                    padding-right:
                        32px;

                    margin-bottom:
                        5px;

                    font-size:
                        6px;

                    letter-spacing:
                        1.1px;

                }


                #${WIDGET_ID}
                .ab88-title {

                    padding-right:
                        24px;

                    margin-bottom:
                        5px;

                    font-size:
                        17px;

                    line-height:
                        1.08;

                }


                #${WIDGET_ID}
                .ab88-desc {

                    max-width:
                        230px;

                    font-size:
                        8px;

                    line-height:
                        1.4;

                }


                #${WIDGET_ID}
                .ab88-close {

                    top:
                        9px;

                    right:
                        9px;

                    width:
                        26px;

                    height:
                        26px;

                    font-size:
                        14px;

                }


                #${WIDGET_ID}
                .ab88-body {

                    padding:

                        0
                        11px
                        12px;

                }


                #${WIDGET_ID}
                .ab88-grid {

                    grid-template-columns:

                        repeat(
                            2,
                            minmax(0,1fr)
                        );

                    gap:
                        6px;

                }


                #${WIDGET_ID}
                .ab88-item {

                    min-height:
                        64px;

                    padding:
                        8px;

                    border-radius:
                        11px;

                }


                #${WIDGET_ID}
                .ab88-item-small {

                    font-size:
                        5px;

                    letter-spacing:
                        .2px;

                }


                #${WIDGET_ID}
                .ab88-item-name {

                    font-size:
                        8px;

                    line-height:
                        1.14;

                }


                #${WIDGET_ID}
                .ab88-item-desc {

                    display:
                        none;

                }


                #${WIDGET_ID}
                .ab88-arrow {

                    font-size:
                        16px;

                }


                #${WIDGET_ID}
                .ab88-vip-box {

                    padding:
                        13px;

                    margin-bottom:
                        7px;

                    border-radius:
                        12px;

                }


                #${WIDGET_ID}
                .ab88-vip-small {

                    font-size:
                        6px;

                }


                #${WIDGET_ID}
                .ab88-vip-title {

                    font-size:
                        14px;

                }


                #${WIDGET_ID}
                .ab88-vip-desc {

                    font-size:
                        8px;

                }


                #${WIDGET_ID}
                .ab88-vip-cta {

                    min-height:
                        42px;

                    padding:
                        0 12px;

                    border-radius:
                        11px;

                    font-size:
                        8px;

                }

            }


            /* =================================================
               SMALL MOBILE
            ================================================= */

            @media (max-width: 360px) {

                #${WIDGET_ID} {

                    bottom:
                        60px !important;

                }


                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        29px;

                    height:
                        80px;

                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        31px;

                }


                #${WIDGET_ID}
                .ab88-tab-text {

                    font-size:
                        6.2px;

                }


                #${WIDGET_ID}
                .ab88-popup {

                    left:
                        35px !important;

                    bottom:
                        64px !important;

                    width:
                        calc(100vw - 42px);

                    max-width:
                        calc(100vw - 42px);

                }


                #${WIDGET_ID}
                .ab88-title {

                    font-size:
                        15px;

                }


                #${WIDGET_ID}
                .ab88-item {

                    min-height:
                        61px;

                }

            }


            /* =================================================
               SHORT SCREEN
            ================================================= */

            @media (max-height: 620px) {

                #${WIDGET_ID}
                .ab88-popup {

                    max-height:
                        calc(100dvh - 90px);

                    overflow-y:
                        auto;

                }


                #${WIDGET_ID}
                .ab88-header {

                    padding-top:
                        14px;

                    padding-bottom:
                        9px;

                }


                #${WIDGET_ID}
                .ab88-item {

                    min-height:
                        58px;

                }

            }


            /* =================================================
               REDUCED MOTION
            ================================================= */

            @media
            (prefers-reduced-motion: reduce) {

                #${WIDGET_ID}
                .ab88-tab,
                #${WIDGET_ID}
                .ab88-tab-text {

                    animation:
                        none;

                }


                #${WIDGET_ID} * {

                    transition:
                        none !important;

                }

            }

        `;


        (
            document.head ||
            document.documentElement
        ).appendChild(style);

    }


    /* =========================================================
       CREATE WIDGET
    ========================================================= */

    const widget =
        document.createElement(
            "div"
        );


    widget.id =
        WIDGET_ID;


    widget.innerHTML = `

        <div class="ab88-nav">


            <button
                type="button"
                class="ab88-tab"
                data-ab88-popup="ab88-airbet-popup"
                aria-label="AIRBET88 Quick Access"
            >

                <span class="ab88-tab-text">
                    AIRBET88
                </span>

            </button>


            <button
                type="button"
                class="ab88-tab vip"
                data-ab88-popup="ab88-vip-popup"
                aria-label="AIRBET88 VIP"
            >

                <span class="ab88-tab-text">
                    VIP
                </span>

            </button>


        </div>


        <!-- =================================================
             AIRBET88 POPUP
        ================================================== -->

        <div
            class="ab88-popup"
            id="ab88-airbet-popup"
        >


            <button
                type="button"
                class="ab88-close"
                aria-label="Close"
            >
                ×
            </button>


            <div class="ab88-header">


                <div class="ab88-mini">

                    AIRBET88 QUICK ACCESS

                </div>


                <div class="ab88-title">

                    SATU MENU,

                    <span>
                        SEMUA AKSES
                    </span>

                </div>


                <div class="ab88-desc">

                    Temukan akses penting AIRBET88
                    dengan cepat tanpa perlu mencari
                    satu per satu.

                </div>


            </div>


            <div class="ab88-body">


                <div class="ab88-grid">


                    <!-- BUKTI JP -->

                    <a
                        class="ab88-item"
                        href="${URLS.buktiJP}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-item-small">
                            AIRBET88
                        </div>


                        <div class="ab88-item-bottom">

                            <div>

                                <div class="ab88-item-name">
                                    BUKTI JP
                                </div>

                                <div class="ab88-item-desc">
                                    Lihat bukti kemenangan
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>

                        </div>

                    </a>


                    <!-- RTP -->

                    <a
                        class="ab88-item"
                        href="${URLS.rtp}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-item-small">
                            LIVE INFO
                        </div>


                        <div class="ab88-item-bottom">

                            <div>

                                <div class="ab88-item-name">
                                    RTP GACOR
                                </div>

                                <div class="ab88-item-desc">
                                    Cek RTP terbaru
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>

                        </div>

                    </a>


                    <!-- AYOCEK -->

                    <a
                        class="ab88-item"
                        href="${URLS.ayocek}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-item-small">
                            OFFICIAL ACCESS
                        </div>


                        <div class="ab88-item-bottom">

                            <div>

                                <div class="ab88-item-name">
                                    AYOCEK
                                </div>

                                <div class="ab88-item-desc">
                                    Cari akses AIRBET88
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>

                        </div>

                    </a>


                    <!-- POINT -->

                    <a
                        class="ab88-item"
                        href="${URLS.point}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-item-small">
                            MEMBER BENEFIT
                        </div>


                        <div class="ab88-item-bottom">

                            <div>

                                <div class="ab88-item-name">
                                    POINT ANTI RUNGKAD
                                </div>

                                <div class="ab88-item-desc">
                                    Cek point & benefit
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>

                        </div>

                    </a>


                </div>


            </div>


        </div>


        <!-- =================================================
             VIP POPUP
        ================================================== -->

        <div
            class="ab88-popup"
            id="ab88-vip-popup"
        >


            <button
                type="button"
                class="ab88-close"
                aria-label="Close"
            >
                ×
            </button>


            <div class="ab88-header">


                <div
                    class="ab88-mini"
                    style="color:#ffe17a;"
                >

                    AIRBET88 VIP MEMBERSHIP

                </div>


                <div class="ab88-title">

                    UPGRADE KE

                    <span
                        style="color:#ffe58b;"
                    >

                        VIP & VVIP

                    </span>

                </div>


                <div class="ab88-desc">

                    Temukan benefit dan layanan
                    eksklusif khusus membership
                    AIRBET88.

                </div>


            </div>


            <div class="ab88-body">


                <div class="ab88-vip-box">


                    <div class="ab88-vip-small">

                        EXCLUSIVE MEMBERSHIP

                    </div>


                    <div class="ab88-vip-title">

                        AIRBET88 VIP & VVIP

                    </div>


                    <div class="ab88-vip-desc">

                        Dapatkan informasi lengkap
                        mengenai layanan prioritas,
                        program membership dan
                        berbagai benefit eksklusif.

                    </div>


                </div>


                <a
                    class="ab88-vip-cta"
                    href="${URLS.vip}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <span>
                        LIHAT & DAFTAR VIP
                    </span>


                    <span
                        style="
                            font-size:20px;
                            line-height:1;
                        "
                    >
                        ›
                    </span>

                </a>


            </div>


        </div>

    `;


    /* =========================================================
       APPEND
    ========================================================= */

    function appendWidget() {

        if (!document.body) {
            return false;
        }


        if (
            !document.body.contains(
                widget
            )
        ) {

            document.body.appendChild(
                widget
            );

        }


        return true;

    }


    if (!appendWidget()) {

        document.addEventListener(
            "DOMContentLoaded",
            appendWidget,
            {
                once: true
            }
        );

    }


    /* =========================================================
       CLOSE ALL
    ========================================================= */

    function closeAll() {

        widget
            .querySelectorAll(
                ".ab88-popup"
            )
            .forEach(
                function (popup) {

                    popup.classList.remove(
                        "show"
                    );

                }
            );


        widget
            .querySelectorAll(
                ".ab88-tab"
            )
            .forEach(
                function (tab) {

                    tab.classList.remove(
                        "active"
                    );

                }
            );

    }


    /* =========================================================
       OPEN / TOGGLE
    ========================================================= */

    widget
        .querySelectorAll(
            "[data-ab88-popup]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        const popupID =
                            this.getAttribute(
                                "data-ab88-popup"
                            );


                        const target =
                            widget.querySelector(
                                "#" + popupID
                            );


                        if (!target) {
                            return;
                        }


                        const alreadyOpen =
                            target.classList.contains(
                                "show"
                            );


                        closeAll();


                        if (!alreadyOpen) {

                            target.classList.add(
                                "show"
                            );


                            this.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );


    /* =========================================================
       CLOSE BUTTON
    ========================================================= */

    widget
        .querySelectorAll(
            ".ab88-close"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        closeAll();

                    }
                );

            }
        );


    /* =========================================================
       LINK CLICK
    ========================================================= */

    widget
        .querySelectorAll(
            "a"
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        setTimeout(
                            closeAll,
                            100
                        );

                    }
                );

            }
        );


    /* =========================================================
       PREVENT INNER CLICK
    ========================================================= */

    widget.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* =========================================================
       CLICK OUTSIDE
    ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !widget.contains(
                    event.target
                )
            ) {

                closeAll();

            }

        }
    );


    /* =========================================================
       ESC
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                closeAll();

            }

        }
    );


    /* =========================================================
       INITIAL HIDE
    ========================================================= */

    hideOriginalFloating();


    /* =========================================================
       RE-RENDER PROTECTION
    ========================================================= */

    let observerTimer = null;


    const observer =
        new MutationObserver(
            function () {

                clearTimeout(
                    observerTimer
                );


                observerTimer =
                    setTimeout(
                        function () {

                            hideOriginalFloating();


                            if (
                                document.body &&
                                !document.body.contains(
                                    widget
                                )
                            ) {

                                document.body.appendChild(
                                    widget
                                );

                            }

                        },
                        50
                    );

            }
        );


    observer.observe(
        document.documentElement,
        {

            childList:
                true,

            subtree:
                true

        }
    );


    /* =========================================================
       RESIZE
    ========================================================= */

    window.addEventListener(
        "resize",
        function () {

            const openedPopup =
                widget.querySelector(
                    ".ab88-popup.show"
                );


            if (!openedPopup) {
                return;
            }


            void openedPopup.offsetHeight;

        },
        {
            passive: true
        }
    );

})();
