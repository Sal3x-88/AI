(function () {
    "use strict";

    const STYLE_ID = "airbet88-floating-menu-style";
    const WIDGET_ID = "airbet88-floating-menu";
    const OLD_TRIGGER_ID = "floating_action_button_trigger";

    /* =========================================================
       CEGAH WIDGET DUPLIKAT
    ========================================================= */

    if (document.getElementById(WIDGET_ID)) return;


    /* =========================================================
       NONAKTIFKAN FLOATING BUTTON LAMA
    ========================================================= */

    function disableOldTrigger() {
        const oldTrigger =
            document.getElementById(OLD_TRIGGER_ID);

        if (!oldTrigger) return;

        oldTrigger.style.setProperty(
            "display",
            "none",
            "important"
        );

        oldTrigger.style.setProperty(
            "visibility",
            "hidden",
            "important"
        );

        oldTrigger.style.setProperty(
            "opacity",
            "0",
            "important"
        );

        oldTrigger.style.setProperty(
            "pointer-events",
            "none",
            "important"
        );
    }


    /* =========================================================
       CSS
    ========================================================= */

    if (!document.getElementById(STYLE_ID)) {

        const style =
            document.createElement("style");

        style.id = STYLE_ID;

        style.textContent = `

            @keyframes airbet88Glow {
                0%, 100% {
                    box-shadow:
                        0 0 10px rgba(73,255,225,.25),
                        0 0 25px rgba(73,255,225,.10);
                }

                50% {
                    box-shadow:
                        0 0 15px rgba(73,255,225,.65),
                        0 0 40px rgba(73,255,225,.25);
                }
            }


            /* ===============================================
               FLOATING WRAPPER
            =============================================== */

            #${WIDGET_ID} {
                position: fixed;

                left: 0;
                top: 50%;

                transform:
                    translateY(-50%);

                z-index: 2147483646;

                display: flex;

                align-items: center;

                font-family:
                    Arial,
                    Helvetica,
                    sans-serif;
            }


            /* ===============================================
               SIDE NAV
            =============================================== */

            #${WIDGET_ID} .airbet-side-nav {
                display: flex;

                flex-direction: column;

                gap: 12px;
            }


            /* ===============================================
               SIDE BUTTON
            =============================================== */

            #${WIDGET_ID} .airbet-side-btn {
                position: relative;

                width: 46px;
                height: 145px;

                border:
                    1px solid rgba(79,255,230,.50);

                border-left: none;

                border-radius:
                    0 15px 15px 0;

                cursor: pointer;

                overflow: hidden;

                color: #d9fff9;

                background:
                    radial-gradient(
                        circle at 100% 25%,
                        rgba(79,255,230,.18),
                        transparent 50%
                    ),
                    linear-gradient(
                        155deg,
                        #075f59,
                        #021c26
                    );

                animation:
                    airbet88Glow
                    2.5s
                    ease-in-out
                    infinite;

                transition:
                    width .25s ease,
                    transform .25s ease,
                    border-color .25s ease;

                display: flex;

                justify-content: center;
                align-items: center;
            }


            #${WIDGET_ID} .airbet-side-btn:hover,
            #${WIDGET_ID} .airbet-side-btn.active {
                width: 52px;

                transform:
                    translateX(2px);

                border-color:
                    #83ffef;
            }


            #${WIDGET_ID} .airbet-side-btn.vip {
                border-color:
                    rgba(255,225,120,.55);
            }


            #${WIDGET_ID} .airbet-side-text {
                writing-mode:
                    vertical-rl;

                text-orientation:
                    upright;

                font-size: 10px;

                font-weight: 900;

                letter-spacing: 1px;

                text-shadow:
                    0 0 8px rgba(73,255,225,.75);
            }


            #${WIDGET_ID} .airbet-side-btn.vip
            .airbet-side-text {
                color: #ffe58b;

                text-shadow:
                    0 0 8px rgba(255,225,120,.65);
            }


            /* ===============================================
               POPUP
            =============================================== */

            #${WIDGET_ID} .airbet-popup {
                position: absolute;

                left: 67px;
                top: 50%;

                width: 390px;

                max-width:
                    calc(100vw - 80px);

                padding: 20px;

                border:
                    1px solid rgba(79,255,230,.25);

                border-radius: 22px;

                background:
                    radial-gradient(
                        circle at 100% 0%,
                        rgba(79,255,230,.14),
                        transparent 35%
                    ),
                    linear-gradient(
                        145deg,
                        rgba(5,61,62,.98),
                        rgba(2,20,28,.99)
                    );

                box-shadow:
                    0 25px 60px rgba(0,0,0,.55),
                    0 0 35px rgba(73,255,225,.08);

                backdrop-filter:
                    blur(20px);

                -webkit-backdrop-filter:
                    blur(20px);

                opacity: 0;

                visibility: hidden;

                pointer-events: none;

                transform:
                    translateY(-50%)
                    translateX(-15px)
                    scale(.97);

                transition:
                    opacity .25s ease,
                    transform .3s ease,
                    visibility .25s ease;
            }


            #${WIDGET_ID} .airbet-popup.show {
                opacity: 1;

                visibility: visible;

                pointer-events: auto;

                transform:
                    translateY(-50%)
                    translateX(0)
                    scale(1);
            }


            /* ===============================================
               CLOSE
            =============================================== */

            #${WIDGET_ID} .airbet-close {
                position: absolute;

                top: 12px;
                right: 12px;

                width: 31px;
                height: 31px;

                border: none;

                border-radius: 50%;

                cursor: pointer;

                color: #ffffff;

                font-size: 18px;

                font-weight: 900;

                background:
                    linear-gradient(
                        145deg,
                        #ff536c,
                        #9f0029
                    );

                box-shadow:
                    0 0 12px rgba(255,70,95,.40);
            }


            /* ===============================================
               HEADER
            =============================================== */

            #${WIDGET_ID} .airbet-mini {
                color: #5fffe6;

                font-size: 9px;

                font-weight: 900;

                letter-spacing: 2px;

                margin-bottom: 8px;
            }


            #${WIDGET_ID} .airbet-title {
                color: #ffffff;

                font-size: 23px;

                font-weight: 900;

                margin-bottom: 7px;
            }


            #${WIDGET_ID} .airbet-desc {
                color: #8eb6b2;

                font-size: 11px;

                line-height: 1.5;

                margin-bottom: 16px;

                max-width: 300px;
            }


            /* ===============================================
               MENU
            =============================================== */

            #${WIDGET_ID} .airbet-grid {
                display: grid;

                grid-template-columns:
                    repeat(2, 1fr);

                gap: 9px;
            }


            #${WIDGET_ID} .airbet-menu-item {
                min-height: 70px;

                padding: 12px;

                border:
                    1px solid rgba(79,255,230,.15);

                border-radius: 14px;

                cursor: pointer;

                color: #ffffff;

                text-align: left;

                background:
                    linear-gradient(
                        145deg,
                        rgba(17,105,95,.45),
                        rgba(3,30,39,.90)
                    );

                transition:
                    transform .2s ease,
                    border-color .2s ease,
                    background .2s ease;
            }


            #${WIDGET_ID} .airbet-menu-item:hover {
                transform:
                    translateY(-2px);

                border-color:
                    rgba(79,255,230,.55);

                background:
                    linear-gradient(
                        145deg,
                        rgba(19,145,128,.60),
                        rgba(3,40,45,.98)
                    );
            }


            #${WIDGET_ID} .airbet-menu-small {
                color: #5fffe6;

                font-size: 8px;

                font-weight: 900;

                letter-spacing: 1px;

                margin-bottom: 14px;
            }


            #${WIDGET_ID} .airbet-menu-title {
                font-size: 11px;

                font-weight: 900;
            }


            /* ===============================================
               VIP
            =============================================== */

            #${WIDGET_ID} .airbet-vip-box {
                padding: 18px;

                margin-top: 10px;

                margin-bottom: 12px;

                border-radius: 16px;

                border:
                    1px solid rgba(255,226,120,.22);

                background:
                    linear-gradient(
                        145deg,
                        rgba(15,100,90,.52),
                        rgba(3,30,38,.95)
                    );
            }


            #${WIDGET_ID} .airbet-vip-title {
                color: #ffffff;

                font-size: 18px;

                font-weight: 900;

                margin-bottom: 6px;
            }


            #${WIDGET_ID} .airbet-vip-desc {
                color: #91b8b4;

                font-size: 10px;

                line-height: 1.5;
            }


            #${WIDGET_ID} .airbet-vip-button {
                width: 100%;

                padding: 15px;

                border: none;

                border-radius: 14px;

                cursor: pointer;

                color: #003a34;

                font-size: 11px;

                font-weight: 900;

                background:
                    linear-gradient(
                        105deg,
                        #9effef,
                        #4cebd2,
                        #19b9a4
                    );

                transition:
                    transform .2s ease;
            }


            #${WIDGET_ID} .airbet-vip-button:hover {
                transform:
                    translateY(-2px);
            }


            /* ===============================================
               MOBILE
            =============================================== */

            @media (max-width: 620px) {

                #${WIDGET_ID} .airbet-side-btn {
                    width: 40px;
                    height: 120px;
                }


                #${WIDGET_ID} .airbet-side-btn:hover,
                #${WIDGET_ID} .airbet-side-btn.active {
                    width: 44px;
                }


                #${WIDGET_ID} .airbet-side-text {
                    font-size: 8px;
                }


                #${WIDGET_ID} .airbet-popup {
                    left: 53px;

                    width:
                        calc(100vw - 65px);

                    max-height:
                        85vh;

                    overflow-y:
                        auto;
                }


                #${WIDGET_ID} .airbet-grid {
                    grid-template-columns:
                        1fr;
                }

            }


            /* ===============================================
               FORCE HIDE OLD BUTTON
            =============================================== */

            #${OLD_TRIGGER_ID} {
                display: none !important;

                visibility: hidden !important;

                opacity: 0 !important;

                pointer-events: none !important;
            }

        `;

        (document.head || document.documentElement)
            .appendChild(style);
    }


    /* =========================================================
       CREATE WIDGET
    ========================================================= */

    const widget =
        document.createElement("div");

    widget.id = WIDGET_ID;

    widget.innerHTML = `

        <div class="airbet-side-nav">

            <button
                type="button"
                class="airbet-side-btn"
                data-airbet-card="airbet-main-card"
            >
                <span class="airbet-side-text">
                    AIRBET88
                </span>
            </button>


            <button
                type="button"
                class="airbet-side-btn vip"
                data-airbet-card="airbet-vip-card"
            >
                <span class="airbet-side-text">
                    VIP
                </span>
            </button>

        </div>


        <!-- AIRBET88 -->

        <div
            class="airbet-popup"
            id="airbet-main-card"
        >

            <button
                type="button"
                class="airbet-close"
            >
                ×
            </button>


            <div class="airbet-mini">
                AIRBET88 QUICK ACCESS
            </div>


            <div class="airbet-title">
                SATU MENU, SEMUA AKSES
            </div>


            <div class="airbet-desc">
                Temukan akses penting AIRBET88
                dengan cepat tanpa perlu mencari
                satu per satu.
            </div>


            <div class="airbet-grid">

                <button
                    type="button"
                    class="airbet-menu-item"
                    data-url="https://linknewshortener-ai88.com/bukti-jp"
                >

                    <div class="airbet-menu-small">
                        AIRBET88
                    </div>

                    <div class="airbet-menu-title">
                        BUKTI JP
                    </div>

                </button>


                <button
                    type="button"
                    class="airbet-menu-item"
                    data-url="https://linknewshortener-ai88.com/rtp-gacor"
                >

                    <div class="airbet-menu-small">
                        LIVE INFO
                    </div>

                    <div class="airbet-menu-title">
                        RTP GACOR
                    </div>

                </button>


                <button
                    type="button"
                    class="airbet-menu-item"
                    data-url="https://linknewshortener-ai88.com/searchingairbet88"
                >

                    <div class="airbet-menu-small">
                        OFFICIAL ACCESS
                    </div>

                    <div class="airbet-menu-title">
                        AYOCEK
                    </div>

                </button>


                <button
                    type="button"
                    class="airbet-menu-item"
                    data-url="https://linknewshortener-ai88.com/point-anti-rungkad"
                >

                    <div class="airbet-menu-small">
                        MEMBER BENEFIT
                    </div>

                    <div class="airbet-menu-title">
                        POINT ANTI RUNGKAD
                    </div>

                </button>

            </div>

        </div>


        <!-- VIP -->

        <div
            class="airbet-popup"
            id="airbet-vip-card"
        >

            <button
                type="button"
                class="airbet-close"
            >
                ×
            </button>


            <div
                class="airbet-mini"
                style="color:#ffe58b;"
            >
                AIRBET88 VIP MEMBERSHIP
            </div>


            <div class="airbet-title">
                UPGRADE KE VIP & VVIP
            </div>


            <div class="airbet-vip-box">

                <div class="airbet-vip-title">
                    AIRBET88 VIP & VVIP
                </div>


                <div class="airbet-vip-desc">
                    Dapatkan informasi lengkap mengenai
                    layanan prioritas, membership dan
                    berbagai benefit eksklusif.
                </div>

            </div>


            <button
                type="button"
                class="airbet-vip-button"
                data-url="https://membershipvipairbet88.lovable.app/"
            >
                LIHAT & DAFTAR VIP →
            </button>

        </div>

    `;


    /* =========================================================
       APPEND
    ========================================================= */

    document.body.appendChild(widget);


    /* =========================================================
       CLOSE
    ========================================================= */

    function closeAllCards() {

        widget
            .querySelectorAll(".airbet-popup")
            .forEach(function (card) {

                card.classList.remove("show");

            });


        widget
            .querySelectorAll(".airbet-side-btn")
            .forEach(function (button) {

                button.classList.remove("active");

            });

    }


    /* =========================================================
       SIDE BUTTON
    ========================================================= */

    widget
        .querySelectorAll("[data-airbet-card]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    const targetID =
                        this.getAttribute(
                            "data-airbet-card"
                        );

                    const card =
                        widget.querySelector(
                            "#" + targetID
                        );

                    if (!card) return;

                    const alreadyOpen =
                        card.classList.contains(
                            "show"
                        );

                    closeAllCards();

                    if (!alreadyOpen) {

                        card.classList.add(
                            "show"
                        );

                        this.classList.add(
                            "active"
                        );

                    }

                }
            );

        });


    /* =========================================================
       CLOSE BUTTON
    ========================================================= */

    widget
        .querySelectorAll(".airbet-close")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    closeAllCards();

                }
            );

        });


    /* =========================================================
       LINKS
    ========================================================= */

    widget
        .querySelectorAll("[data-url]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const url =
                        this.getAttribute(
                            "data-url"
                        );

                    if (!url) return;

                    window.open(
                        url,
                        "_blank",
                        "noopener,noreferrer"
                    );

                    closeAllCards();

                }
            );

        });


    /* =========================================================
       CLICK OUTSIDE
    ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (!widget.contains(event.target)) {
                closeAllCards();
            }

        }
    );


    /* =========================================================
       ESC
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeAllCards();
            }

        }
    );


    /* =========================================================
       DISABLE OLD TRIGGER
    ========================================================= */

    disableOldTrigger();


    /* =========================================================
       WEBSITE RE-RENDER PROTECTION
    ========================================================= */

    const observer =
        new MutationObserver(function () {

            disableOldTrigger();

        });


    observer.observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );

})();
