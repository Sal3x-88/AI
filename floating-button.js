(function () {
    "use strict";

    /* =========================================================
       AIRBET88 FLOATING MENU REPLACEMENT
    ========================================================= */

    const STYLE_ID = "airbet88-custom-floating-style";
    const MENU_ID = "airbet88-custom-floating-menu";

    const TRIGGER_ID = "floating_action_button_trigger";
    const LIST_ID = "floating_action_button_list";

    let initialized = false;


    /* =========================================================
       LINKS
    ========================================================= */

    const LINKS = {
        instagram: "https://linknewshortener-ai88.com/igofficialai",
        point: "https://linknewshortener-ai88.com/point-anti-rungkad",
        apk: "https://linknewshortener-ai88.com/apkairbet88",
        rtp: "https://linknewshortener-ai88.com/rtp-gacor",
        bukti: "https://linknewshortener-ai88.com/bukti-jp",
        vip: "https://membershipvipairbet88.lovable.app"
    };


    /* =========================================================
       ICONS
    ========================================================= */

    const ICONS = {
        instagram:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/RS_b3a7967b-1807-412a-97ee-5a61bee129b3_638961647863728474.png",

        point:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/RS_033fe1cc-929d-4499-9810-334384d551b1_638961129099775246.png",

        apk:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/VIN_c8cefc35-4dc4-47c0-b905-86ebe4dd97da_638837793425915866.png",

        rtp:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/RS_22466002-6bd4-4ac5-ac06-8cf1a2e12557_638961647863884654.png",

        bukti:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/VIN_1a159763-c3ab-4cfb-bf35-bd21eb19d5dd_638837793426072213.png",

        vip:
            "https://api-hub-cdn.imgnxb.com/cms/AB8/floatingactionbutton/RS_5646f027-5cb8-4a67-8680-278f2a5591a3_638961129100087370.png"
    };


    /* =========================================================
       CREATE STYLE
    ========================================================= */

    function createStyle() {

        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement("style");

        style.id = STYLE_ID;

        style.textContent = `

            /* =================================================
               HIDE ORIGINAL
            ================================================= */

            #${TRIGGER_ID},
            #${LIST_ID} {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }


            .floating-action-button {
                overflow: visible !important;
            }


            /* =================================================
               WRAPPER
            ================================================= */

            #${MENU_ID} {
                position: relative !important;

                display: flex !important;
                align-items: center !important;

                font-family:
                    Arial,
                    Helvetica,
                    sans-serif !important;

                z-index: 2147483646 !important;

                box-sizing: border-box !important;
            }


            #${MENU_ID} *,
            #${MENU_ID} *::before,
            #${MENU_ID} *::after {
                box-sizing: border-box !important;
            }


            /* =================================================
               LEFT NAV
            ================================================= */

            #${MENU_ID} .ab-nav {
                position: relative;

                z-index: 30;

                display: flex;
                flex-direction: column;

                gap: 10px;
            }


            /* =================================================
               TAB
            ================================================= */

            #${MENU_ID} .ab-tab {
                position: relative;

                width: 47px;
                height: 145px;

                padding: 0;

                border:
                    1px solid rgba(73,255,225,.52);

                border-radius:
                    0 16px 16px 0;

                cursor: pointer;

                overflow: hidden;

                display: flex;
                align-items: center;
                justify-content: center;

                color: #dffff9;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(73,255,225,.18),
                        transparent 45%
                    ),

                    linear-gradient(
                        150deg,
                        rgba(8,112,101,.98),
                        rgba(2,24,33,.99)
                    );

                box-shadow:

                    0 0 12px
                    rgba(73,255,225,.24),

                    0 10px 30px
                    rgba(0,0,0,.40),

                    inset 0 1px 0
                    rgba(255,255,255,.10);

                transition:
                    .28s cubic-bezier(.2,.8,.2,1);
            }


            #${MENU_ID} .ab-tab::before {

                content: "";

                position: absolute;

                inset: 0;

                background:

                    linear-gradient(
                        180deg,
                        transparent,
                        rgba(100,255,235,.09),
                        transparent
                    );

                pointer-events: none;
            }


            #${MENU_ID} .ab-tab::after {

                content: "";

                position: absolute;

                width: 160%;
                height: 28px;

                left: -30%;
                top: -45px;

                transform:
                    rotate(-15deg);

                background:

                    linear-gradient(
                        180deg,
                        transparent,
                        rgba(255,255,255,.25),
                        transparent
                    );

                transition:
                    .55s ease;
            }


            #${MENU_ID} .ab-tab:hover::after {
                top: 165px;
            }


            #${MENU_ID} .ab-tab:hover {

                width: 53px;

                transform:
                    translateX(3px);

                border-color:
                    rgba(125,255,238,.95);

                box-shadow:

                    0 0 10px
                    rgba(73,255,225,.65),

                    0 0 30px
                    rgba(73,255,225,.25),

                    0 14px 35px
                    rgba(0,0,0,.45);
            }


            #${MENU_ID} .ab-tab.active {

                width: 54px;

                transform:
                    translateX(3px);

                border-color:
                    #8cfff0;

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(118,255,237,.30),
                        transparent 47%
                    ),

                    linear-gradient(
                        150deg,
                        #0a9786,
                        #06434a
                    );

                box-shadow:

                    0 0 10px
                    rgba(113,255,237,.8),

                    0 0 32px
                    rgba(73,255,225,.37),

                    0 16px 40px
                    rgba(0,0,0,.5);
            }


            #${MENU_ID} .ab-tab.vip {

                border-color:
                    rgba(255,225,119,.55);

                background:

                    radial-gradient(
                        circle at 100% 20%,
                        rgba(255,217,84,.12),
                        transparent 45%
                    ),

                    linear-gradient(
                        150deg,
                        #075c56,
                        #021f2b
                    );
            }


            #${MENU_ID} .ab-tab.vip:hover,
            #${MENU_ID} .ab-tab.vip.active {

                border-color:
                    #ffe58a;

                box-shadow:

                    0 0 9px
                    rgba(255,229,138,.65),

                    0 0 25px
                    rgba(255,210,70,.20),

                    0 0 35px
                    rgba(73,255,225,.15);
            }


            /* =================================================
               TAB TEXT
            ================================================= */

            #${MENU_ID} .ab-tab-text {

                position: relative;

                z-index: 3;

                writing-mode:
                    vertical-rl;

                text-orientation:
                    upright;

                font-size: 10px;

                line-height: 1;

                letter-spacing: 1px;

                font-weight: 900;

                color: #dffff9;

                text-shadow:

                    0 0 5px
                    rgba(75,255,226,.9),

                    0 0 12px
                    rgba(75,255,226,.45);
            }


            #${MENU_ID} .ab-tab.vip
            .ab-tab-text {

                color: #ffe58b;

                text-shadow:

                    0 0 6px
                    rgba(255,226,120,.80),

                    0 0 15px
                    rgba(255,213,80,.35);
            }


            /* =================================================
               POPUP
            ================================================= */

            #${MENU_ID} .ab-popup {

                position: absolute;

                left: 68px;

                top: 50%;

                width: 410px;

                max-width:
                    calc(100vw - 90px);

                transform:

                    translateY(-50%)
                    translateX(-18px)
                    scale(.97);

                opacity: 0;

                visibility: hidden;

                pointer-events: none;

                padding: 0;

                overflow: hidden;

                border-radius: 24px;

                border:

                    1px solid
                    rgba(81,255,230,.23);

                background:

                    radial-gradient(
                        circle at 95% 0%,
                        rgba(60,255,224,.14),
                        transparent 32%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(6,55,57,.985),
                        rgba(1,17,25,.99)
                    );

                backdrop-filter:
                    blur(22px);

                -webkit-backdrop-filter:
                    blur(22px);

                box-shadow:

                    0 30px 70px
                    rgba(0,0,0,.65),

                    0 0 40px
                    rgba(73,255,225,.10),

                    inset 0 1px 0
                    rgba(255,255,255,.05);

                transition:

                    opacity .25s ease,

                    transform .32s
                    cubic-bezier(.2,.8,.2,1),

                    visibility .25s;
            }


            #${MENU_ID} .ab-popup.show {

                opacity: 1;

                visibility: visible;

                pointer-events: auto;

                transform:

                    translateY(-50%)
                    translateX(0)
                    scale(1);
            }


            #${MENU_ID} .ab-popup::before {

                content: "";

                position: absolute;

                top: 0;
                left: 18%;

                width: 64%;
                height: 2px;

                background:

                    linear-gradient(
                        90deg,
                        transparent,
                        #93fff0,
                        #3cffe0,
                        transparent
                    );

                box-shadow:

                    0 0 8px #55ffe4,

                    0 0 18px
                    rgba(73,255,225,.50);
            }


            /* =================================================
               CLOSE
            ================================================= */

            #${MENU_ID} .ab-close {

                position: absolute;

                z-index: 20;

                top: 13px;
                right: 13px;

                width: 31px;
                height: 31px;

                padding: 0;

                border-radius: 50%;

                border:

                    1px solid
                    rgba(255,255,255,.25);

                cursor: pointer;

                display: flex;

                justify-content: center;
                align-items: center;

                color: #ffffff;

                font-size: 17px;
                font-weight: 900;

                line-height: 1;

                background:

                    linear-gradient(
                        145deg,
                        #ff4f69,
                        #9b0027
                    );

                box-shadow:

                    0 0 12px
                    rgba(255,69,96,.45);

                transition:
                    .25s ease;
            }


            #${MENU_ID} .ab-close:hover {

                transform:

                    rotate(90deg)
                    scale(1.08);
            }


            /* =================================================
               HEADER
            ================================================= */

            #${MENU_ID} .ab-header {

                padding:

                    25px
                    25px
                    18px;
            }


            #${MENU_ID} .ab-small {

                color: #5fffe6;

                font-size: 9px;

                letter-spacing: 2px;

                font-weight: 900;

                margin-bottom: 9px;
            }


            #${MENU_ID} .ab-title {

                color: #ffffff;

                font-size: 24px;

                line-height: 1.05;

                font-weight: 900;

                margin-bottom: 8px;
            }


            #${MENU_ID} .ab-title span {

                color: #6cffe8;

                text-shadow:

                    0 0 12px
                    rgba(73,255,225,.30);
            }


            #${MENU_ID} .ab-description {

                max-width: 310px;

                color: #91b8b4;

                font-size: 11px;

                line-height: 1.55;
            }


            /* =================================================
               BODY
            ================================================= */

            #${MENU_ID} .ab-body {

                padding:

                    0
                    18px
                    18px;
            }


            /* =================================================
               MENU GRID
            ================================================= */

            #${MENU_ID} .ab-grid {

                display: grid;

                grid-template-columns:

                    repeat(
                        2,
                        minmax(0,1fr)
                    );

                gap: 9px;
            }


            /* =================================================
               ITEM
            ================================================= */

            #${MENU_ID} .ab-item {

                position: relative;

                min-height: 77px;

                padding: 11px;

                border-radius: 15px;

                border:

                    1px solid
                    rgba(80,255,231,.14);

                cursor: pointer;

                overflow: hidden;

                display: flex;

                align-items: center;

                gap: 10px;

                text-decoration: none !important;

                color: #ffffff !important;

                background:

                    linear-gradient(
                        145deg,
                        rgba(15,95,87,.43),
                        rgba(3,29,38,.92)
                    );

                transition:

                    transform .25s ease,
                    border-color .25s ease,
                    background .25s ease;
            }


            #${MENU_ID} .ab-item:hover {

                transform:
                    translateY(-3px);

                border-color:
                    rgba(91,255,232,.55);

                background:

                    linear-gradient(
                        145deg,
                        rgba(16,133,119,.60),
                        rgba(3,41,46,.98)
                    );
            }


            /* =================================================
               ICON
            ================================================= */

            #${MENU_ID} .ab-icon {

                flex: 0 0 auto;

                width: 36px;
                height: 36px;

                display: flex;

                align-items: center;
                justify-content: center;

                border-radius: 12px;

                border:

                    1px solid
                    rgba(99,255,234,.17);

                background:

                    rgba(
                        64,
                        255,
                        225,
                        .06
                    );

                box-shadow:

                    inset 0 0 12px
                    rgba(73,255,225,.04);
            }


            #${MENU_ID} .ab-icon img {

                display: block !important;

                width: 24px !important;
                height: 24px !important;

                object-fit: contain !important;

                max-width: none !important;

                filter: none !important;
            }


            #${MENU_ID} .ab-info {

                min-width: 0;

                flex: 1;
            }


            #${MENU_ID} .ab-label {

                color: #59fce3;

                font-size: 7px;

                letter-spacing: .7px;

                font-weight: 900;

                margin-bottom: 4px;
            }


            #${MENU_ID} .ab-name {

                color: #ffffff;

                font-size: 10px;

                line-height: 1.2;

                font-weight: 900;
            }


            #${MENU_ID} .ab-arrow {

                flex:
                    0 0 auto;

                color: #63ffe8;

                font-size: 20px;

                font-weight: 400;

                transition:
                    transform .25s ease;
            }


            #${MENU_ID} .ab-item:hover
            .ab-arrow {

                transform:
                    translateX(3px);
            }


            /* =================================================
               VIP CONTENT
            ================================================= */

            #${MENU_ID} .ab-vip-box {

                position: relative;

                overflow: hidden;

                padding: 20px;

                margin-bottom: 11px;

                border-radius: 17px;

                border:

                    1px solid
                    rgba(255,224,111,.21);

                background:

                    radial-gradient(
                        circle at 95% 0%,
                        rgba(255,221,98,.14),
                        transparent 37%
                    ),

                    linear-gradient(
                        145deg,
                        rgba(13,99,89,.50),
                        rgba(3,30,38,.95)
                    );
            }


            #${MENU_ID} .ab-vip-box::after {

                content: "VIP";

                position: absolute;

                right: -8px;
                bottom: -20px;

                font-size: 75px;

                font-weight: 900;

                color:
                    rgba(255,225,120,.04);
            }


            #${MENU_ID} .ab-vip-small {

                position: relative;

                z-index: 3;

                color: #ffe27b;

                font-size: 8px;

                font-weight: 900;

                letter-spacing: 1.5px;

                margin-bottom: 7px;
            }


            #${MENU_ID} .ab-vip-title {

                position: relative;

                z-index: 3;

                color: #ffffff;

                font-size: 19px;

                font-weight: 900;

                margin-bottom: 6px;
            }


            #${MENU_ID} .ab-vip-description {

                position: relative;

                z-index: 3;

                max-width: 285px;

                color: #96bbb7;

                font-size: 10px;

                line-height: 1.55;
            }


            #${MENU_ID} .ab-vip-button {

                width: 100%;

                min-height: 52px;

                border: 0;

                border-radius: 14px;

                cursor: pointer;

                display: flex;

                align-items: center;

                justify-content:
                    space-between;

                padding:
                    0 16px;

                color: #003d36;

                font-size: 11px;

                font-weight: 900;

                text-decoration: none !important;

                background:

                    linear-gradient(
                        105deg,
                        #a6fff0,
                        #4cebd2,
                        #1ab9a5
                    );

                box-shadow:

                    0 10px 27px
                    rgba(73,255,225,.17);

                transition:
                    .25s ease;
            }


            #${MENU_ID} .ab-vip-button:hover {

                transform:
                    translateY(-2px);

                box-shadow:

                    0 15px 32px
                    rgba(73,255,225,.25);
            }


            /* =================================================
               MOBILE
            ================================================= */

            @media
            (max-width: 600px) {

                #${MENU_ID} .ab-tab {

                    width: 41px;
                    height: 120px;

                    border-radius:
                        0 13px 13px 0;
                }


                #${MENU_ID} .ab-tab:hover,
                #${MENU_ID} .ab-tab.active {

                    width: 45px;
                }


                #${MENU_ID} .ab-tab-text {

                    font-size: 8px;

                    letter-spacing: 0;
                }


                #${MENU_ID} .ab-popup {

                    left: 54px;

                    width:
                        calc(100vw - 66px);

                    max-height:
                        86vh;

                    overflow-y:
                        auto;

                    border-radius:
                        20px;
                }


                #${MENU_ID} .ab-header {

                    padding:

                        21px
                        17px
                        15px;
                }


                #${MENU_ID} .ab-title {

                    font-size:
                        20px;
                }


                #${MENU_ID} .ab-body {

                    padding:

                        0
                        14px
                        14px;
                }


                #${MENU_ID} .ab-grid {

                    grid-template-columns:
                        1fr;
                }


                #${MENU_ID} .ab-item {

                    min-height:
                        62px;
                }

            }

        `;

        (
            document.head ||
            document.documentElement
        ).appendChild(style);
    }


    /* =========================================================
       CLOSE ALL
    ========================================================= */

    function closeAll(menu) {

        menu
            .querySelectorAll(".ab-popup")
            .forEach(function (popup) {

                popup.classList.remove("show");

            });


        menu
            .querySelectorAll(".ab-tab")
            .forEach(function (button) {

                button.classList.remove("active");

            });

    }


    /* =========================================================
       CREATE NEW MENU
    ========================================================= */

    function createMenu(wrapper) {

        if (
            !wrapper ||
            document.getElementById(MENU_ID)
        ) {
            return;
        }


        const menu =
            document.createElement("div");

        menu.id = MENU_ID;


        menu.innerHTML = `

            <!-- =============================================
                 SIDE NAV
            ============================================== -->

            <div class="ab-nav">

                <button
                    type="button"
                    class="ab-tab"
                    data-popup="ab-airbet-popup"
                >

                    <span class="ab-tab-text">
                        AIRBET88
                    </span>

                </button>


                <button
                    type="button"
                    class="ab-tab vip"
                    data-popup="ab-vip-popup"
                >

                    <span class="ab-tab-text">
                        VIP
                    </span>

                </button>

            </div>



            <!-- =============================================
                 AIRBET POPUP
            ============================================== -->

            <div
                class="ab-popup"
                id="ab-airbet-popup"
            >

                <button
                    type="button"
                    class="ab-close"
                >
                    ×
                </button>


                <div class="ab-header">

                    <div class="ab-small">
                        AIRBET88 QUICK ACCESS
                    </div>


                    <div class="ab-title">

                        SATU MENU,
                        <span>
                            SEMUA AKSES
                        </span>

                    </div>


                    <div class="ab-description">

                        Temukan akses penting AIRBET88
                        dengan cepat melalui satu menu.

                    </div>

                </div>


                <div class="ab-body">


                    <div class="ab-grid">


                        <!-- INSTAGRAM -->

                        <a
                            class="ab-item"
                            href="${LINKS.instagram}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.instagram}"
                                    alt="Instagram AIRBET88"
                                >

                            </div>


                            <div class="ab-info">

                                <div class="ab-label">
                                    SOCIAL MEDIA
                                </div>

                                <div class="ab-name">
                                    INSTAGRAM
                                </div>

                            </div>


                            <div class="ab-arrow">
                                ›
                            </div>

                        </a>



                        <!-- APK -->

                        <a
                            class="ab-item"
                            href="${LINKS.apk}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.apk}"
                                    alt="APK AIRBET88"
                                >

                            </div>


                            <div class="ab-info">

                                <div class="ab-label">
                                    OFFICIAL APP
                                </div>

                                <div class="ab-name">
                                    APK AIRBET88
                                </div>

                            </div>


                            <div class="ab-arrow">
                                ›
                            </div>

                        </a>



                        <!-- RTP -->

                        <a
                            class="ab-item"
                            href="${LINKS.rtp}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.rtp}"
                                    alt="RTP AIRBET88"
                                >

                            </div>


                            <div class="ab-info">

                                <div class="ab-label">
                                    LIVE INFO
                                </div>

                                <div class="ab-name">
                                    RTP GACOR
                                </div>

                            </div>


                            <div class="ab-arrow">
                                ›
                            </div>

                        </a>



                        <!-- BUKTI JP -->

                        <a
                            class="ab-item"
                            href="${LINKS.bukti}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.bukti}"
                                    alt="Bukti JP"
                                >

                            </div>


                            <div class="ab-info">

                                <div class="ab-label">
                                    AIRBET88
                                </div>

                                <div class="ab-name">
                                    BUKTI JP
                                </div>

                            </div>


                            <div class="ab-arrow">
                                ›
                            </div>

                        </a>



                        <!-- POINT -->

                        <a
                            class="ab-item"
                            href="${LINKS.point}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.point}"
                                    alt="Point Anti Rungkad"
                                >

                            </div>


                            <div class="ab-info">

                                <div class="ab-label">
                                    MEMBER BENEFIT
                                </div>

                                <div class="ab-name">
                                    POINT ANTI RUNGKAD
                                </div>

                            </div>


                            <div class="ab-arrow">
                                ›
                            </div>

                        </a>



                        <!-- VIP -->

                        <a
                            class="ab-item"
                            href="${LINKS.vip}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div class="ab-icon">

                                <img
                                    src="${ICONS.vip}"
                                    alt="VIP AIRBET88"
                                >

                            </div>


                            <div class="ab-info">

                                <div
                                    class="ab-label"
                                    style="color:#ffe27d"
                                >
                                    EXCLUSIVE
                                </div>

                                <div class="ab-name">
                                    VIP & VVIP
                                </div>

                            </div>


                            <div
                                class="ab-arrow"
                                style="color:#ffe27d"
                            >
                                ›
                            </div>

                        </a>


                    </div>

                </div>

            </div>



            <!-- =============================================
                 VIP POPUP
            ============================================== -->

            <div
                class="ab-popup"
                id="ab-vip-popup"
            >

                <button
                    type="button"
                    class="ab-close"
                >
                    ×
                </button>


                <div class="ab-header">

                    <div
                        class="ab-small"
                        style="color:#ffe27d"
                    >
                        AIRBET88 VIP MEMBERSHIP
                    </div>


                    <div class="ab-title">

                        UPGRADE KE
                        <span
                            style="color:#ffe58b"
                        >
                            VIP & VVIP
                        </span>

                    </div>


                    <div class="ab-description">

                        Nikmati akses membership
                        dan berbagai benefit eksklusif
                        AIRBET88.

                    </div>

                </div>


                <div class="ab-body">


                    <div class="ab-vip-box">

                        <div class="ab-vip-small">
                            EXCLUSIVE MEMBERSHIP
                        </div>


                        <div class="ab-vip-title">
                            AIRBET88 VIP & VVIP
                        </div>


                        <div class="ab-vip-description">

                            Temukan informasi membership,
                            layanan prioritas dan berbagai
                            benefit khusus member VIP.

                        </div>

                    </div>


                    <a
                        class="ab-vip-button"
                        href="${LINKS.vip}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span>
                            LIHAT & DAFTAR VIP
                        </span>

                        <span
                            style="
                                font-size:22px;
                                line-height:1;
                            "
                        >
                            ›
                        </span>

                    </a>


                </div>

            </div>

        `;


        /* =====================================================
           INSERT INTO ORIGINAL WRAPPER
        ===================================================== */

        wrapper.appendChild(menu);


        /* =====================================================
           TAB EVENTS
        ===================================================== */

        menu
            .querySelectorAll("[data-popup]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();


                        const popupID =
                            this.getAttribute(
                                "data-popup"
                            );


                        const popup =
                            menu.querySelector(
                                "#" + popupID
                            );


                        if (!popup) {
                            return;
                        }


                        const isOpen =
                            popup.classList.contains(
                                "show"
                            );


                        closeAll(menu);


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

            });


        /* =====================================================
           CLOSE
        ===================================================== */

        menu
            .querySelectorAll(".ab-close")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();

                        closeAll(menu);

                    }
                );

            });


        /* =====================================================
           LINK CLICK
        ===================================================== */

        menu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeAll(menu);

                    }
                );

            });


        /* =====================================================
           PREVENT INNER CLICK
        ===================================================== */

        menu.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );


        /* =====================================================
           OUTSIDE CLICK
        ===================================================== */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !menu.contains(
                        event.target
                    )
                ) {

                    closeAll(menu);

                }

            }
        );


        /* =====================================================
           ESC
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeAll(menu);

                }

            }
        );

    }


    /* =========================================================
       INITIALIZE
    ========================================================= */

    function initialize() {

        const trigger =
            document.getElementById(
                TRIGGER_ID
            );


        const oldList =
            document.getElementById(
                LIST_ID
            );


        let wrapper =
            null;


        if (trigger) {

            wrapper =
                trigger.closest(
                    ".floating-action-button"
                );

        }


        if (!wrapper && oldList) {

            wrapper =
                oldList.closest(
                    ".floating-action-button"
                );

        }


        if (!wrapper) {

            wrapper =
                document.querySelector(
                    ".floating-action-button"
                );

        }


        if (!wrapper) {
            return false;
        }


        createStyle();


        /*
         * Jangan remove element lama.
         * Cukup sembunyikan supaya JS bawaan
         * website tidak error.
         */

        if (trigger) {

            trigger.style.setProperty(
                "display",
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

        }


        createMenu(wrapper);

        initialized = true;

        return true;
    }


    /* =========================================================
       TRY NOW
    ========================================================= */

    initialize();


    /* =========================================================
       OBSERVER
       
       Floating bawaan kadang baru muncul setelah
       React/Vue/API selesai render.
    ========================================================= */

    const observer =
        new MutationObserver(
            function () {

                /*
                 * Kalau menu belum terbentuk
                 * coba initialize lagi.
                 */

                if (
                    !document.getElementById(
                        MENU_ID
                    )
                ) {

                    initialize();

                }


                /*
                 * Pastikan original selalu hidden
                 * walaupun website render ulang.
                 */

                const trigger =
                    document.getElementById(
                        TRIGGER_ID
                    );


                const list =
                    document.getElementById(
                        LIST_ID
                    );


                if (trigger) {

                    trigger.style.setProperty(
                        "display",
                        "none",
                        "important"
                    );

                }


                if (list) {

                    list.style.setProperty(
                        "display",
                        "none",
                        "important"
                    );

                }

            }
        );


    observer.observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );

})();
