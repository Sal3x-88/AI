(function () {
    "use strict";

    /* =========================================================
       AIRBET88 FLOATING MENU
       FINAL COMPACT LEFT VERSION
    ========================================================= */

    const STYLE_ID = "airbet88-floating-v3-style";
    const WIDGET_ID = "airbet88-floating-v3";

    const OLD_TRIGGER_ID = "floating_action_button_trigger";
    const OLD_LIST_ID = "floating_action_button_list";


    /* =========================================================
       URL
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
       Kalau sebelumnya pernah pasang script versi lama
    ========================================================= */

    [
        "airbet88-custom-floating-menu",
        "airbet88-floating-menu",
        "airbet88-floating-replacement",
        "airbet88-floating-v2",
        "airbet88-floating-v3"
    ].forEach(function (id) {

        const old =
            document.getElementById(id);

        if (
            old &&
            id !== WIDGET_ID
        ) {
            old.remove();
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


        /*
         * Sembunyikan wrapper bawaan hanya jika
         * tidak berisi widget baru kita.
         */

        const originalWrapper =
            trigger
                ? trigger.closest(
                    ".floating-action-button"
                )
                : null;


        if (
            originalWrapper &&
            !originalWrapper.contains(
                document.getElementById(
                    WIDGET_ID
                )
            )
        ) {

            originalWrapper.style.setProperty(
                "display",
                "none",
                "important"
            );

        }

    }


    /* =========================================================
       STYLE
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
               ORIGINAL FLOATING OFF
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

            @keyframes ab88TabPulse {

                0%,
                100% {

                    box-shadow:

                        0 0 8px
                        rgba(65,255,225,.30),

                        0 0 20px
                        rgba(65,255,225,.12),

                        0 12px 28px
                        rgba(0,0,0,.45);

                }


                50% {

                    box-shadow:

                        0 0 12px
                        rgba(65,255,225,.65),

                        0 0 28px
                        rgba(65,255,225,.22),

                        0 12px 32px
                        rgba(0,0,0,.50);

                }

            }



            /* =================================================
               MAIN WIDGET
            ================================================= */

            #${WIDGET_ID} {

                position:
                    fixed !important;

                left:
                    0 !important;

                top:
                    50% !important;

                transform:
                    translateY(-50%) !important;

                z-index:
                    2147483646 !important;

                display:
                    flex !important;

                align-items:
                    center !important;

                width:
                    auto !important;

                height:
                    auto !important;

                margin:
                    0 !important;

                padding:
                    0 !important;

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
               SIDE NAV
            ================================================= */

            #${WIDGET_ID}
            .ab88-side-nav {

                position:
                    relative;

                z-index:
                    30;

                display:
                    flex;

                flex-direction:
                    column;

                gap:
                    10px;

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
                    42px;

                height:
                    138px;

                margin:
                    0;

                padding:
                    0;

                border:

                    1px solid
                    rgba(
                        84,
                        255,
                        231,
                        .48
                    );

                border-left:
                    0;

                border-radius:
                    0 15px 15px 0;

                outline:
                    none;

                overflow:
                    hidden;

                cursor:
                    pointer;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                color:
                    #dffff9;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(73,255,225,.18),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #075d58,
                        #02212b
                    );

                animation:

                    ab88TabPulse
                    2.5s
                    ease-in-out
                    infinite;

                transition:

                    width .25s ease,
                    transform .25s ease,
                    border-color .25s ease,
                    background .25s ease;
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
                    26px;

                top:
                    -45px;

                left:
                    -35%;

                transform:
                    rotate(-13deg);

                background:

                    linear-gradient(
                        180deg,
                        transparent,
                        rgba(255,255,255,.23),
                        transparent
                    );

                transition:
                    top .55s ease;

                pointer-events:
                    none;
            }



            #${WIDGET_ID}
            .ab88-tab:hover::after {

                top:
                    155px;
            }



            #${WIDGET_ID}
            .ab88-tab:hover,
            #${WIDGET_ID}
            .ab88-tab.active {

                width:
                    46px;

                border-color:
                    #87ffef;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(100,255,235,.29),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #098c7e,
                        #043e47
                    );
            }



            /* =================================================
               VIP TAB
            ================================================= */

            #${WIDGET_ID}
            .ab88-tab.vip {

                border-color:

                    rgba(
                        255,
                        223,
                        111,
                        .44
                    );

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(255,219,87,.12),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #07524e,
                        #031e29
                    );

                animation:
                    none;

                box-shadow:

                    0 0 10px
                    rgba(255,217,86,.15),

                    0 12px 28px
                    rgba(0,0,0,.43);
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
                        rgba(255,223,111,.20),
                        transparent 47%
                    ),

                    linear-gradient(
                        155deg,
                        #087369,
                        #043b42
                    );

                box-shadow:

                    0 0 10px
                    rgba(255,229,138,.48),

                    0 0 23px
                    rgba(255,210,70,.15),

                    0 13px 30px
                    rgba(0,0,0,.48);
            }



            /* =================================================
               SIDE TEXT
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

                color:
                    #dffff9;

                font-size:
                    9px;

                line-height:
                    1;

                letter-spacing:
                    1px;

                font-weight:
                    900;

                text-transform:
                    uppercase;

                text-shadow:

                    0 0 5px
                    rgba(75,255,227,.95),

                    0 0 11px
                    rgba(75,255,227,.60),

                    0 0 20px
                    rgba(75,255,227,.25);
            }



            #${WIDGET_ID}
            .ab88-tab.vip
            .ab88-tab-text {

                color:
                    #ffe57d;

                text-shadow:

                    0 0 5px
                    rgba(255,225,113,.90),

                    0 0 11px
                    rgba(255,210,65,.38);
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
                    52px !important;

                top:
                    50% !important;

                width:
                    395px;

                max-width:
                    calc(100vw - 66px);

                max-height:
                    calc(100dvh - 80px);

                margin:
                    0;

                padding:
                    0;

                overflow:
                    hidden;

                border-radius:
                    22px;

                border:

                    1px solid
                    rgba(85,255,231,.25);

                background:

                    radial-gradient(
                        circle at 94% 0%,
                        rgba(57,255,221,.12),
                        transparent 32%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(5,66,65,.99),
                        rgba(1,24,31,.995)
                    );

                box-shadow:

                    0 28px 70px
                    rgba(0,0,0,.64),

                    0 0 35px
                    rgba(61,255,224,.11),

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

                    translateY(-50%)
                    translateX(-12px)
                    scale(.975);

                transform-origin:
                    left center;

                transition:

                    opacity .24s ease,

                    transform
                    .30s
                    cubic-bezier(.2,.8,.2,1),

                    visibility .24s ease;
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

                    translateY(-50%)
                    translateX(0)
                    scale(1);
            }



            /* =================================================
               TOP NEON LINE
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
                    rgba(53,255,220,.55);
            }



            /* =================================================
               CLOSE BUTTON
            ================================================= */

            #${WIDGET_ID}
            .ab88-close {

                position:
                    absolute;

                z-index:
                    20;

                top:
                    12px;

                right:
                    12px;

                width:
                    30px;

                height:
                    30px;

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

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                cursor:
                    pointer;

                color:
                    #ffffff;

                font-size:
                    17px;

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
                    rgba(255,70,98,.50),

                    0 0 23px
                    rgba(255,70,98,.15);

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

                    23px
                    24px
                    16px;
            }



            #${WIDGET_ID}
            .ab88-mini-title {

                margin:
                    0 0 8px;

                padding:
                    0;

                color:
                    #61ffe8;

                font-size:
                    9px;

                line-height:
                    1.2;

                letter-spacing:
                    1.8px;

                font-weight:
                    900;
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
                    23px;

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

                    0 0 14px
                    rgba(69,255,226,.22);
            }



            #${WIDGET_ID}
            .ab88-desc {

                margin:
                    0;

                padding:
                    0;

                max-width:
                    305px;

                color:
                    #91bbb6;

                font-size:
                    10px;

                line-height:
                    1.55;
            }



            /* =================================================
               BODY
            ================================================= */

            #${WIDGET_ID}
            .ab88-body {

                padding:

                    0
                    19px
                    19px;
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
                        minmax(0, 1fr)
                    );

                gap:
                    9px;
            }



            /* =================================================
               MENU CARD
            ================================================= */

            #${WIDGET_ID}
            .ab88-menu-item {

                position:
                    relative;

                min-width:
                    0;

                min-height:
                    76px;

                margin:
                    0;

                padding:
                    11px 12px;

                border:

                    1px solid
                    rgba(87,255,232,.15);

                border-radius:
                    15px;

                outline:
                    none;

                overflow:
                    hidden;

                display:
                    flex;

                flex-direction:
                    column;

                align-items:
                    stretch;

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
                        rgba(13,88,82,.43),
                        rgba(2,31,39,.92)
                    );

                transition:

                    transform .23s ease,
                    border-color .23s ease,
                    background .23s ease,
                    box-shadow .23s ease;
            }



            #${WIDGET_ID}
            .ab88-menu-item::before {

                content:
                    "";

                position:
                    absolute;

                width:
                    80px;

                height:
                    80px;

                right:
                    -45px;

                bottom:
                    -50px;

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
            .ab88-menu-item:hover {

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
                        rgba(14,121,109,.58),
                        rgba(3,43,47,.98)
                    );

                box-shadow:

                    0 8px 20px
                    rgba(0,0,0,.22),

                    0 0 16px
                    rgba(54,255,223,.07);
            }



            #${WIDGET_ID}
            .ab88-menu-small {

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
                    .65px;

                font-weight:
                    900;
            }



            #${WIDGET_ID}
            .ab88-menu-bottom {

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
                    6px;
            }



            #${WIDGET_ID}
            .ab88-menu-name {

                min-width:
                    0;

                color:
                    #ffffff;

                font-size:
                    10px;

                line-height:
                    1.2;

                font-weight:
                    900;

                white-space:
                    normal;
            }



            #${WIDGET_ID}
            .ab88-menu-description {

                margin-top:
                    3px;

                color:
                    #759f9a;

                font-size:
                    7px;

                line-height:
                    1.3;
            }



            #${WIDGET_ID}
            .ab88-arrow {

                flex:
                    0 0 auto;

                color:
                    #5effe5;

                font-size:
                    19px;

                line-height:
                    1;

                transition:
                    transform .22s ease;
            }



            #${WIDGET_ID}
            .ab88-menu-item:hover
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
                    18px;

                margin:
                    0 0 10px;

                border:

                    1px solid
                    rgba(255,225,112,.20);

                border-radius:
                    16px;

                background:

                    radial-gradient(
                        circle at 92% 0%,
                        rgba(255,218,82,.13),
                        transparent 38%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(12,91,83,.50),
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
                    68px;

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
                    8px;

                letter-spacing:
                    1.3px;

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
                    285px;

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
                    48px;

                margin:
                    0;

                padding:
                    0 15px;

                border:
                    0;

                border-radius:
                    14px;

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

                    0 10px 25px
                    rgba(48,255,220,.16);

                transition:
                    .22s ease;
            }



            #${WIDGET_ID}
            .ab88-vip-cta:hover {

                transform:
                    translateY(-2px);

                box-shadow:

                    0 14px 30px
                    rgba(48,255,220,.23);
            }



            /* =================================================
               TABLET
            ================================================= */

            @media
            (
                max-width: 768px
            ) {

                #${WIDGET_ID}
                .ab88-popup {

                    width:
                        335px;

                    max-width:
                        calc(100vw - 58px);

                    left:
                        47px !important;
                }


                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        38px;

                    height:
                        125px;
                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        41px;
                }

            }



            /* =================================================
               MOBILE
            ================================================= */

            @media
            (
                max-width: 520px
            ) {

                #${WIDGET_ID} {

                    left:
                        0 !important;

                    top:
                        50% !important;
                }



                /* SIDE BUTTON LEBIH KECIL */

                #${WIDGET_ID}
                .ab88-side-nav {

                    gap:
                        8px;
                }


                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        34px;

                    height:
                        118px;

                    border-radius:
                        0 12px 12px 0;
                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        37px;

                    transform:
                        none;
                }


                #${WIDGET_ID}
                .ab88-tab-text {

                    font-size:
                        7px;

                    letter-spacing:
                        0;
                }



                /* =============================================
                   POPUP MOBILE

                   LEFT 41px:
                   benar-benar dekat sisi kiri.

                   max-height:
                   sisakan ruang atas/bawah supaya
                   tidak ketutup navbar bawah.
                ============================================= */

                #${WIDGET_ID}
                .ab88-popup {

                    left:
                        41px !important;

                    top:
                        50% !important;

                    width:
                        min(
                            285px,
                            calc(100vw - 49px)
                        );

                    max-width:
                        calc(100vw - 49px);

                    max-height:
                        calc(100dvh - 130px);

                    border-radius:
                        18px;

                    overflow-y:
                        auto;

                    overflow-x:
                        hidden;

                    scrollbar-width:
                        thin;

                    transform:

                        translateY(-50%)
                        translateX(-8px)
                        scale(.98);
                }


                #${WIDGET_ID}
                .ab88-popup.show {

                    transform:

                        translateY(-50%)
                        translateX(0)
                        scale(1);
                }



                /* HEADER COMPACT */

                #${WIDGET_ID}
                .ab88-header {

                    padding:

                        18px
                        17px
                        12px;
                }


                #${WIDGET_ID}
                .ab88-mini-title {

                    padding-right:
                        34px;

                    font-size:
                        7px;

                    letter-spacing:
                        1.2px;

                    margin-bottom:
                        6px;
                }


                #${WIDGET_ID}
                .ab88-title {

                    padding-right:
                        25px;

                    font-size:
                        18px;

                    line-height:
                        1.08;

                    margin-bottom:
                        6px;
                }


                #${WIDGET_ID}
                .ab88-desc {

                    font-size:
                        8px;

                    line-height:
                        1.45;

                    max-width:
                        230px;
                }


                #${WIDGET_ID}
                .ab88-close {

                    top:
                        10px;

                    right:
                        10px;

                    width:
                        27px;

                    height:
                        27px;

                    font-size:
                        15px;
                }



                /* BODY */

                #${WIDGET_ID}
                .ab88-body {

                    padding:

                        0
                        12px
                        13px;
                }



                /* =============================================
                   TETAP 2 KOLOM DI MOBILE
                   supaya popup tidak panjang ke bawah.
                ============================================= */

                #${WIDGET_ID}
                .ab88-grid {

                    grid-template-columns:

                        repeat(
                            2,
                            minmax(0,1fr)
                        );

                    gap:
                        7px;
                }



                #${WIDGET_ID}
                .ab88-menu-item {

                    min-height:
                        67px;

                    padding:
                        9px;

                    border-radius:
                        12px;
                }


                #${WIDGET_ID}
                .ab88-menu-small {

                    font-size:
                        6px;

                    letter-spacing:
                        .25px;
                }


                #${WIDGET_ID}
                .ab88-menu-name {

                    font-size:
                        8px;

                    line-height:
                        1.15;
                }


                #${WIDGET_ID}
                .ab88-menu-description {

                    display:
                        none;
                }


                #${WIDGET_ID}
                .ab88-arrow {

                    font-size:
                        17px;
                }



                /* VIP */

                #${WIDGET_ID}
                .ab88-vip-box {

                    padding:
                        14px;

                    border-radius:
                        13px;

                    margin-bottom:
                        8px;
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
                        43px;

                    border-radius:
                        12px;

                    font-size:
                        8px;
                }

            }



            /* =================================================
               VERY SMALL MOBILE
            ================================================= */

            @media
            (
                max-width: 360px
            ) {

                #${WIDGET_ID}
                .ab88-tab {

                    width:
                        31px;

                    height:
                        110px;
                }


                #${WIDGET_ID}
                .ab88-tab:hover,
                #${WIDGET_ID}
                .ab88-tab.active {

                    width:
                        33px;
                }


                #${WIDGET_ID}
                .ab88-popup {

                    left:
                        37px !important;

                    width:
                        calc(100vw - 44px);

                    max-width:
                        calc(100vw - 44px);
                }


                #${WIDGET_ID}
                .ab88-title {

                    font-size:
                        16px;
                }


                #${WIDGET_ID}
                .ab88-menu-item {

                    min-height:
                        63px;
                }

            }



            /* =================================================
               SHORT SCREEN
            ================================================= */

            @media
            (
                max-height: 620px
            ) {

                #${WIDGET_ID}
                .ab88-popup {

                    max-height:
                        calc(100dvh - 80px);

                    overflow-y:
                        auto;
                }


                #${WIDGET_ID}
                .ab88-header {

                    padding-top:
                        15px;

                    padding-bottom:
                        10px;
                }


                #${WIDGET_ID}
                .ab88-menu-item {

                    min-height:
                        60px;
                }

            }



            /* =================================================
               REDUCE MOTION
            ================================================= */

            @media
            (
                prefers-reduced-motion:
                reduce
            ) {

                #${WIDGET_ID}
                .ab88-tab {

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

        <!-- =================================================
             SIDE MENU
        ================================================== -->

        <div class="ab88-side-nav">


            <button
                type="button"
                class="ab88-tab"
                data-ab88-popup="ab88-main-popup"
                aria-label="AIRBET88 Menu"
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
            id="ab88-main-popup"
        >


            <button
                type="button"
                class="ab88-close"
                aria-label="Close"
            >
                ×
            </button>



            <div class="ab88-header">


                <div class="ab88-mini-title">

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



                    <!-- ======================================
                         BUKTI JP
                    ======================================= -->

                    <a
                        class="ab88-menu-item"
                        href="${URLS.buktiJP}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-menu-small">
                            AIRBET88
                        </div>


                        <div class="ab88-menu-bottom">


                            <div>

                                <div class="ab88-menu-name">
                                    BUKTI JP
                                </div>


                                <div class="ab88-menu-description">
                                    Lihat bukti kemenangan
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>


                        </div>

                    </a>



                    <!-- ======================================
                         RTP
                    ======================================= -->

                    <a
                        class="ab88-menu-item"
                        href="${URLS.rtp}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-menu-small">
                            LIVE INFO
                        </div>


                        <div class="ab88-menu-bottom">


                            <div>

                                <div class="ab88-menu-name">
                                    RTP GACOR
                                </div>


                                <div class="ab88-menu-description">
                                    Cek RTP terbaru
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>


                        </div>

                    </a>



                    <!-- ======================================
                         AYOCEK
                    ======================================= -->

                    <a
                        class="ab88-menu-item"
                        href="${URLS.ayocek}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-menu-small">
                            OFFICIAL ACCESS
                        </div>


                        <div class="ab88-menu-bottom">


                            <div>

                                <div class="ab88-menu-name">
                                    AYOCEK
                                </div>


                                <div class="ab88-menu-description">
                                    Cari akses AIRBET88
                                </div>

                            </div>


                            <span class="ab88-arrow">
                                ›
                            </span>


                        </div>

                    </a>



                    <!-- ======================================
                         POINT ANTI RUNGKAD
                    ======================================= -->

                    <a
                        class="ab88-menu-item"
                        href="${URLS.point}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div class="ab88-menu-small">
                            MEMBER BENEFIT
                        </div>


                        <div class="ab88-menu-bottom">


                            <div>

                                <div class="ab88-menu-name">
                                    POINT ANTI RUNGKAD
                                </div>


                                <div class="ab88-menu-description">
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
                    class="ab88-mini-title"
                    style="
                        color:#ffe17a;
                    "
                >

                    AIRBET88 VIP MEMBERSHIP

                </div>



                <div class="ab88-title">

                    UPGRADE KE

                    <span
                        style="
                            color:#ffe58b;
                        "
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
       APPEND TO BODY
       
       Sengaja BODY, bukan ke floating wrapper lama.
       Supaya position fixed benar-benar berdasarkan viewport.
    ========================================================= */

    (
        document.body ||
        document.documentElement
    ).appendChild(widget);



    /* =========================================================
       ELEMENTS
    ========================================================= */

    const tabs =
        widget.querySelectorAll(
            "[data-ab88-popup]"
        );


    const popups =
        widget.querySelectorAll(
            ".ab88-popup"
        );


    const closeButtons =
        widget.querySelectorAll(
            ".ab88-close"
        );



    /* =========================================================
       CLOSE ALL
    ========================================================= */

    function closeAll() {


        popups.forEach(
            function (popup) {

                popup.classList.remove(
                    "show"
                );

            }
        );


        tabs.forEach(
            function (tab) {

                tab.classList.remove(
                    "active"
                );

            }
        );

    }



    /* =========================================================
       OPEN POPUP
    ========================================================= */

    tabs.forEach(
        function (tab) {


            tab.addEventListener(
                "click",
                function (event) {


                    event.preventDefault();

                    event.stopPropagation();


                    const popupID =
                        this.getAttribute(
                            "data-ab88-popup"
                        );


                    const popup =
                        widget.querySelector(
                            "#" + popupID
                        );


                    if (!popup) {
                        return;
                    }


                    const isOpen =
                        popup.classList.contains(
                            "show"
                        );


                    closeAll();


                    if (!isOpen) {


                        popup.classList.add(
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

    closeButtons.forEach(
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
       CLOSE AFTER LINK CLICK
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
       PREVENT CLICK INSIDE
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
       ESC CLOSE
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
       WATCH WEBSITE RE-RENDER

       Website kadang render floating bawaan lagi.
       Observer akan menyembunyikannya kembali.
    ========================================================= */

    const observer =
        new MutationObserver(
            function () {


                hideOriginalFloating();


                /*
                 * Kalau website tanpa sengaja memindahkan
                 * widget kita, masukkan lagi ke BODY.
                 */

                if (
                    !document.body.contains(
                        widget
                    )
                ) {

                    document.body.appendChild(
                        widget
                    );

                }


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
       ORIENTATION / RESIZE

       Kalau HP diputar / ukuran berubah,
       popup tetap aman.
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


            /*
             * Browser otomatis hitung ulang CSS.
             * Ini hanya memaksa layout repaint.
             */

            void openedPopup.offsetHeight;


        },
        {
            passive:
                true
        }
    );


})();
