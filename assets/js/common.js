$(function() {
    page.init();
});

var page = {
    init: function() {
        this.common();

        this.overview.phone();
        this.overview.scroll();

        this.community.slide();
        this.community.calendar.init();
        this.community.scroll();

        this.magazine.article();
        this.magazine.scroll();
    },
    common: function() {
        //모바일 메뉴
        $("#header .btn_mobile").on("click", function() {
            $("#header").addClass("active");
            return false;
        });
        $("#header .btn_close").on("click", function() {
            $("#header").removeClass("active");
            return false;
        });

        $("#footer .btn_top").on("click", function() {
            $("html,body").animate({ scrollTop:0 }, 200);
            return false;
        });
    },
    overview: {
        phone: function() {
            var wordSplit = [["빠","업"],["과","한"],["둘","응"]];
            $(".overview_phone .phone_wrap .title_box .title").each(function(key) {
                var titleStr = $(this).text();
                var idx = titleStr.length;
                var titleMain = $('<h3 class="title main"></h3>');
                var titleOver = $('<h3 class="title over"></h3>');
                while (idx--) {
                    var word = titleStr.charAt(idx);
                    titleMain.prepend('<span class="word">' + word + '</span>');
                    titleOver.prepend('<span class="word">' + word + '</span>');
                    if(wordSplit[key].indexOf(word) > -1) {
                        titleMain.prepend('<span class="br"></span>');
                        titleOver.prepend('<span class="br"></span>');
                    }
                }

                $(this).parent().append([titleMain, titleOver]);
                $(this).remove();
            });
        },
        scroll: function() {
            if($("#content.content_overview").length == 0) return;

            //overview
            //top
            var overViewTop = $(".overview_top");
            var overViewTopHeight = overViewTop.height() - 200;
            var overViewTopText = $(".overview_top .top_text");
            var overViewTopTitle = $(".overview_top .title");
            var overViewTopsTitle = $(".overview_top .stitle");
            var overViewToplObj = $(".overview_top .obj.l1, .overview_top .obj.r2, .overview_top .obj.l3");

            //expand
            var overViewExpand = $(".overview_expand");
            var overViewExpandHeight = overViewExpand.height();
            var overViewExpandBg = $(".overview_expand .expand_bg");
            var overViewExpandBgDefWidth = 400;
            var overViewExpandTitle = $(".overview_expand .title");
            var overViewExpandWrap = $(".overview_expand .expand_wrap");

            //phone
            var overViewPhone = $(".overview_phone");
            var overViewPhoneWrap = $(".overview_phone .phone_wrap");
            var overViewPhoneHeight = overViewPhone.height() / 3;
            var overViewPhoneTitle = $(".overview_phone .phone_1 .title.over .word");
            var overViewPhoneTitlem = $(".overview_phone .phone_1 .title.main .word");
            var overViewPhoneTitleLength = overViewPhoneTitle.length;
            var overViewPhoneTitle2 = $(".overview_phone .phone_2 .title.over .word");
            var overViewPhoneTitle2m = $(".overview_phone .phone_2 .title.main .word");
            var overViewPhoneTitle2Length = overViewPhoneTitle2.length;
            var overViewPhoneTitle3 = $(".overview_phone .phone_3 .title.over .word");
            var overViewPhoneTitle3m = $(".overview_phone .phone_3 .title.main .word");
            var overViewPhoneTitle3Length = overViewPhoneTitle3.length;
            var overViewPhoneCaseBox = $(".overview_phone .phone_wrap .phone_case .case_box");
            var overViewPhoneCase1 = $(".overview_phone.phone_1_end .phone_1");
            var overViewPhoneCase2 = $(".overview_phone.phone_1_end .phone_2");
            var overViewPhoneCase3 = $(".overview_phone.phone_1_end .phone_3");

            //slide
            var overViewSlide = $(".overview_slide.community");
            var overViewSlideWrap = $(".overview_slide .slide_wrap");
            var overViewSlideHeight = overViewSlide.height();
            var overViewSlideCommunityBack = $(".overview_slide.community .slide_back");
            var overViewSlideCommunityFront = $(".overview_slide.community .slide_front");
            var overViewSlideCommunityFrontTitle = $(".overview_slide.community .slide_front .title");

            var overViewGo = $(".overview_go.community");
            var overViewGoHeight = overViewGo.height();
            var overViewGoObj = $(".overview_go.community .obj");

            var overViewSlideMagazine = $(".overview_slide.magazine");
            var overViewSlideMagazineHeight = overViewSlideMagazine.height();
            var overViewSlideMagazineBack = $(".overview_slide.magazine .slide_back");
            var overViewSlideMagazineFront = $(".overview_slide.magazine .slide_front");
            var overViewSlideMagazineFrontTitle = $(".overview_slide.magazine .slide_front .title");

            var overViewGoMagazine = $(".overview_go.magazine");
            var overViewGoMagazineHeight = overViewGoMagazine.height();
            var overViewGoMagazineObj = $(".overview_go.magazine .obj");

            var overViewBot = $(".overview_bottom");
            var overViewBotChar = $(".overview_bottom .char");
            var overViewBotHeight = overViewBot.height();
            var scrollMargin = navigator.maxTouchPoints > 1 ? 50 : 0;
            // var scrollMargin = 0;

            $(window).on("resize", function() {
                var getWidth = $(window).width();
                var getHeight = $(window).height() + 50;
                overViewTopHeight = overViewTop.height() - 200;
                overViewExpandHeight = overViewExpand.height();
                overViewPhoneHeight = overViewPhone.height() / 3;
                overViewSlideHeight = overViewSlide.height();
                overViewGoHeight = overViewGo.height();
                overViewSlideMagazineHeight = overViewSlideMagazine.height();
                overViewGoMagazineHeight = overViewGoMagazine.height();
                overViewBotHeight = overViewBot.height();
                if(getWidth <= 600) {
                    overViewExpandBgDefWidth = 200;
                }
                // overViewPhoneWrap.css("height", getHeight);
                // overViewExpandWrap.css("height", getHeight);
                // overViewSlideWrap.css("height", getHeight);

                // if(getWidth <= 600) {
                //     overViewPhoneCase1.css("height", 1500 + getHeight);
                //     overViewPhoneCase2.css("height", 3000 + getHeight);
                //     overViewPhoneCase3.css("height", 4500 + getHeight);
                // }
                // else {
                //     overViewPhoneCase1.removeAttr("style");
                //     overViewPhoneCase2.removeAttr("style");
                //     overViewPhoneCase3.removeAttr("style");
                // }
            }).trigger("resize");

            const scroll = new Lenis();
            scroll.on("scroll", function(e) {
                var scrollWidth = $(window).width();
                var scrollHeight = $(window).height() + scrollMargin;
                var scrollTop = e.animatedScroll;
                var scrollBot = scrollTop + scrollHeight;

                //top
                if(scrollTop < overViewTopHeight) {
                    overViewTop.removeClass("end");
                    var overViewTopPercent = 1 - (scrollTop / overViewTopHeight * 0.5);
                    var overViewTopTitleScale = 12 * overViewTopPercent;
                    var overViewTopsTitleScale = 3.5 * overViewTopPercent;
                    if(overViewTopTitleScale < 8) overViewTopTitleScale = 8;
                    if(overViewTopsTitleScale < 2.35) overViewTopsTitleScale = 2.35;
                    var overViewTopOpacityPercent = 1 - ((scrollTop - (scrollHeight / 2)) / (overViewTopHeight - (scrollHeight / 2)) * 1.2);
                    if(overViewTopTitleOpacity < 0.2) overViewTopTitleOpacity = 0;
                    var overViewTopTitleOpacity = overViewTopOpacityPercent;
                    overViewTopText.css({ opacity:overViewTopTitleOpacity });
                    overViewTopTitle.css({ fontSize:overViewTopTitleScale + "em" });
                    overViewTopsTitle.css({ fontSize:overViewTopsTitleScale + "em" });

                    overViewExpandBg.css("height", scrollHeight / 2);
                }

                //expand
                overViewExpand.removeClass("end active");
                if(scrollTop >= overViewTopHeight && scrollTop < overViewTopHeight + overViewExpandHeight) {
                    overViewTop.addClass("end");
                    overViewExpand.addClass("active");
                    var scrollTopNext = scrollTop - overViewTopHeight;

                    var overViewExpandPercent = scrollTopNext / (overViewExpandHeight - scrollHeight);
                    if(overViewExpandPercent > 1) overViewExpandPercent = 1;
                    var overViewExpandTitleOpacity = (overViewExpandPercent - 0.3) * 2 * 0.7;
                    var overViewExpandTitleBottom = ((overViewExpandPercent * 100) - 30) * 0.7;
                    if(overViewExpandTitleBottom > 50) overViewExpandTitleBottom = 50;
                    overViewExpandTitle.css({ bottom:overViewExpandTitleBottom + "%", opacity:overViewExpandTitleOpacity });

                    var overViewExpandBgWidth = (scrollWidth - overViewExpandBgDefWidth) * overViewExpandPercent + overViewExpandBgDefWidth;
                    var overViewExpandBgDef = scrollHeight * 0.5;
                    var overViewExpandBgHeight = (scrollHeight - overViewExpandBgDef) * overViewExpandPercent + overViewExpandBgDef;
                    var overViewExpandBgRadius = overViewExpandBgDef * (1 - overViewExpandPercent);
                    if(overViewExpandBgWidth > scrollWidth) overViewExpandBgWidth = scrollWidth;
                    if(overViewExpandBgHeight > scrollHeight) overViewExpandBgHeight = scrollHeight;
                    else if(overViewExpandBgHeight < scrollHeight / 2) overViewExpandBgHeight = scrollHeight / 2;
                    overViewExpandBg.css({ width:overViewExpandBgWidth, height:overViewExpandBgHeight, borderRadius:overViewExpandBgRadius + "px " + overViewExpandBgRadius + "px 0 0" });

                    overViewPhoneTitle.removeClass("on");
                    overViewPhoneTitlem.removeClass("on");
                    overViewPhoneTitle2.removeClass("on");
                    overViewPhoneTitle2m.removeClass("on");
                    overViewPhoneTitle3.removeClass("on");
                    overViewPhoneTitle3m.removeClass("on");
                }
                if(scrollBot >= overViewTopHeight + overViewExpandHeight) {
                    overViewExpand.addClass("end");
                }

                //phone
                overViewPhone.removeClass("end active phone_1 phone_2 phone_3 phone_1_end phone_2_end phone_3_end");
                if(scrollTop >= overViewTopHeight + overViewExpandHeight && scrollTop < overViewTopHeight + overViewExpandHeight + overViewPhoneHeight) {
                    // console.log("cc");
                    overViewPhone.addClass("active phone_1");
                    var scrollTopNext = scrollTop - (overViewTopHeight + overViewExpandHeight);
                    var overViewPhoneRatio = overViewPhoneTitleLength / overViewPhoneHeight * 2.5;
                    var overViewPhoneWord = parseInt(scrollTopNext * overViewPhoneRatio, 10);
                    overViewPhoneTitle.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                    overViewPhoneTitlem.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                }
                if(scrollBot > overViewTopHeight + overViewExpandHeight + overViewPhoneHeight) {
                    overViewPhone.addClass("active phone_1_end");
                }
                if(scrollTop >= overViewTopHeight + overViewExpandHeight + overViewPhoneHeight && scrollTop < overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight) {
                    // console.log("dd");
                    overViewPhone.addClass("active phone_2");
                    var scrollTopNext = scrollTop - (overViewTopHeight + overViewExpandHeight + overViewPhoneHeight);
                    var overViewPhoneRatio = overViewPhoneTitle2Length / overViewPhoneHeight * 2.5;
                    var overViewPhoneWord = parseInt(scrollTopNext * overViewPhoneRatio, 10);
                    overViewPhoneTitle2.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                    overViewPhoneTitle2m.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                }
                if(scrollBot > overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight) {
                    overViewPhone.addClass("active phone_2_end");
                }
                if(scrollTop >= overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight && scrollTop < overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight + overViewPhoneHeight) {
                    // console.log("ee");
                    overViewPhone.addClass("active phone_3");
                    var scrollTopNext = scrollTop - (overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight);
                    var overViewPhoneRatio = overViewPhoneTitle3Length / overViewPhoneHeight * 2.5;
                    var overViewPhoneWord = parseInt(scrollTopNext * overViewPhoneRatio, 10);
                    overViewPhoneTitle3.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                    overViewPhoneTitle3m.removeClass("on").slice(0,overViewPhoneWord).addClass("on");
                }
                if(scrollBot > overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight + overViewPhoneHeight) {
                    overViewPhone.addClass("active phone_3_end");
                }

                //slide
                overViewSlide.removeClass("end active");
                overViewSlideCommunityBack.css("left", "0%");
                overViewSlideCommunityFront.css("left", "100%");
                var scrollSlideTop = overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight + overViewPhoneHeight;
                if(scrollTop >= scrollSlideTop && scrollTop < scrollSlideTop + overViewPhoneHeight) {
                    // console.log("ff");
                    overViewPhone.addClass("end");
                    overViewSlide.addClass("active");
                    var scrollTopNext = scrollTop - scrollSlideTop;
                    var overViewSlidePercent = scrollTopNext / (overViewSlideHeight - scrollHeight) * 100;
                    if(overViewSlidePercent > 100) overViewSlidePercent = 100;
                    var overViewSlideCommunityBackScroll = -overViewSlidePercent / 2;
                    var overViewSlideCommunityFrontScroll = 100 - overViewSlidePercent;
                    var overViewSlideCommunityTitleScroll = (overViewSlidePercent / 2) - 50;
                    overViewSlideCommunityBack.css("left", overViewSlideCommunityBackScroll + "%");
                    overViewSlideCommunityFront.css("left", overViewSlideCommunityFrontScroll + "%");
                    overViewSlideCommunityFrontTitle.css("left", overViewSlideCommunityTitleScroll + "%");
                }
                if(scrollBot > scrollSlideTop + overViewSlideHeight) {
                    overViewSlide.addClass("end");
                }

                //go
                overViewGo.removeClass("end");
                if(scrollTop >= scrollSlideTop + overViewSlideHeight - (scrollHeight / 2) && scrollTop < scrollSlideTop + overViewSlideHeight + overViewGoHeight) {
                    // console.log("gg");
                    var scrollTopNext = scrollTop - (scrollSlideTop + overViewSlideHeight - (scrollHeight / 2));
                    var overViewGoPercent = scrollTopNext / overViewGoHeight;
                    overViewGoObj.css({ opacity:overViewGoPercent * 2.5});
                }

                //magazine
                overViewSlideMagazine.removeClass("end active");
                overViewSlideMagazineBack.css("left", "0%");
                overViewSlideMagazineFront.css("left", "100%");
                if(scrollTop >= scrollSlideTop + overViewSlideHeight + overViewGoHeight && scrollTop < scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight) {
                    // console.log("hh");
                    overViewGo.addClass("end");
                    overViewSlideMagazine.addClass("active");
                    var scrollTopNext = scrollTop - (scrollSlideTop + overViewSlideHeight + overViewGoHeight);
                    var overViewSlideMagazinePercent = scrollTopNext / (overViewSlideMagazineHeight - scrollHeight) * 100;
                    if(overViewSlideMagazinePercent > 100) overViewSlideMagazinePercent = 100;
                    var overViewSlideMagazineBackScroll = -overViewSlideMagazinePercent / 2;
                    var overViewSlideMagazineFrontScroll = 100 - overViewSlideMagazinePercent;
                    var overViewSlideMagazineTitleScroll = (overViewSlideMagazinePercent / 2) - 50;
                    overViewSlideMagazineBack.css("left", overViewSlideMagazineBackScroll + "%");
                    overViewSlideMagazineFront.css("left", overViewSlideMagazineFrontScroll + "%");
                    overViewSlideMagazineFrontTitle.css("left", overViewSlideMagazineTitleScroll + "%");
                }
                if(scrollBot > scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight) {
                    overViewSlideMagazine.addClass("end");
                }

                //go
                overViewGoMagazineObj.css({ opacity:0 });
                if(scrollTop >= scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight - (scrollHeight / 2) && scrollTop < overViewTopHeight + overViewExpandHeight + overViewPhoneHeight + overViewPhoneHeight + overViewPhoneHeight + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight + overViewGoMagazineHeight) {
                    // console.log("ii");
                    var scrollTopNext = scrollTop - (scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight - (scrollHeight / 2));
                    var overViewGoMagazinePercent = scrollTopNext / overViewGoMagazineHeight;
                    overViewGoMagazineObj.css({ opacity:overViewGoMagazinePercent * 2.5});
                }

                //bottom
                if(scrollTop >= scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight + (overViewGoMagazineHeight / 2)) {
                    // console.log("jj");
                    var scrollTopNext = scrollTop - (scrollSlideTop + overViewSlideHeight + overViewGoHeight + overViewSlideMagazineHeight + (overViewGoMagazineHeight / 2));
                    var overViewBotPercent = scrollTopNext / overViewBotHeight * 0.2 * 100;
                    if(overViewBotPercent > 40) overViewBotPercent = 40;
                    overViewBotChar.css({ left:overViewBotPercent + "%" });
                }
            });

            function scrollAnimate(time) {
                scroll.raf(time);
                requestAnimationFrame(scrollAnimate);
            }
            requestAnimationFrame(scrollAnimate);
        }
    },
    community: {
        calendar: {
            init: function() {
                var calendarId = "c_eb35ee96f47a13d9df3aff85fa55a820123c6818b294a5405468d4b82756f826@group.calendar.google.com";    //캘린더 id
                var apiKey = "AIzaSyBiqse2n55BMQnjD8IN3sDn-MTKrt4Otu0";    //api key
                $.ajax({
                    url: "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events?orderBy=startTime&singleEvents=true&key=" + apiKey,
                    dataType: "json",
                    success: function(data) {
                        if(data && data.items != undefined) {
                            var calendarData = {};
                            $.each(data.items, function(key, value) {
                                if(calendarData[value.description] == undefined) {
                                    calendarData[value.description] = [];
                                }
                                var endDate = value.end.date;
                                if(moment(endDate).format("DD") == "01") {
                                    endDate = moment(endDate).add(-1, "days").format("YYYY-MM-DD");
                                }
                                calendarData[value.description].push({
                                    name: value.summary,
                                    start: value.start.date,
                                    end: endDate
                                });
                            });
                            page.community.calendar.create(calendarData);
                        }
                    }
                });
            },
            create: function(data) {
                // console.log(data);

                var calendarColor = {
                    "모집일정": ["#1A1A1A","#FFFFFF"],
                    "당첨자 추후 일정": ["#E85546","#FFFFFF"],
                    "커뮤니티 활동 일정": ["#FFA945","#000000"],
                    "커뮤니티 기록 기간": ["#8B3FEC","#FFFFFF"]
                }

                var calendarDate = ["",""];
                $.each(data, function(key, value) {
                    $.each(value, function(keys, values) {
                        if(calendarDate[0] == "" || calendarDate[0] > values.start) {
                            calendarDate[0] = values.start;
                        }
                        if(calendarDate[1] == "" || calendarDate[1] < values.end) {
                            calendarDate[1] = values.end;
                        }
                    });
                });
                var calendarStart = calendarDate[0];
                var calendarEnd = moment(calendarDate[1]).format("YYYY-MM");
                var calendarMonth = [];
                var tfoot = [];
                var idx = 0;
                while(true) {
                    var month = moment(calendarStart).format("MM");
                    calendarMonth.push(month);
                    tfoot.push('<td data-month="' + month + '"><p>' + month + moment(calendarStart).format(" MMMM") + '</p></td>');
                    calendarStart = moment(calendarStart).add(1, "months").format("YYYY-MM-DD");
                    var nextMonth = moment(calendarStart).format("YYYY-MM");
                    idx += 1;
                    if(nextMonth > calendarEnd || idx > 24) break;
                }

                var calendarTbody = $("#calendar_table tbody");
                var calendartFoot = $("#calendar_table tfoot tr");
                $.each(data, function(key, value) {
                    var tr = $('<tr></tr>');
                    var th = $('<th class="label"><p>' + key + '</p></th>');
                    $.each(value, function(keys, values) {
                        values.idx = key;
                    });
                    th.data("calendar", value);
                    tr.append(th);
                    $.each(tfoot, function(keys, values) {
                        tr.append('<td data-month="' + calendarMonth[keys] + '"></td>');
                    });
                    calendarTbody.append(tr);
                });
                $.each(tfoot, function(key, value) {
                    calendartFoot.append(value);
                });

                $("#calendar_table tbody th").each(function() {
                    var getCalendar = $(this).data("calendar");
                    var getTr = $(this).parent();
                    $.each(getCalendar, function(key, value) {
                        var getMonth = moment(value.start).format("MM");
                        var getLength = Math.round(moment(value.end).diff(moment(value.start), "months", true));
                        var getTd = getTr.find("td[data-month='" + getMonth + "']");
                        if(getTd.length > 0) {
                            var getCss = "";
                            var getDate = moment(value.end).format("MM.DD");
                            if(getLength > 0) {
                                var getCss = "range";
                                getDate = moment(value.start).format("MM.DD") + " ~ " + moment(value.end).format("MM.DD");
                            }

                            var getBgColor = calendarColor[value.idx] != undefined ? calendarColor[value.idx][0] : "#000000";
                            var getColor = calendarColor[value.idx] != undefined ? calendarColor[value.idx][1] : "#FFFFFF";
                            getTd.append('<div style="width:calc(' + ((getLength + 1) * 100) + '% - 12px);background-color:' + getBgColor + '" class="calendar ' + getCss + '"><p style="color:' + getColor + '" class="name">' + value.name + '</p><p style="color:' + getColor + '" class="date">' + getDate + '</p></div>');
                        }
                    });
                });
            }
        },
        slide: function() {
            if($("#community_join_slide").length > 0) {
                var joinSlide = new Swiper($("#community_join_slide").get(0), {
                    autoplay: {
                        disableOnInteraction: false
                    },
                    loop: false,
                    delay: 4000,
                    speed: 1300,
                    direction: "vertical",
                    slidesPerView: 1,
                    on: {
                        slideChange: function() {
                            joinList.removeClass("active");
                            $(".community_join .join_list li").eq(this.activeIndex).addClass("active");
                        }
                    }
                });
                var joinList = $(".community_join .join_list li").on("click", function() {
                    // joinList.removeClass("active");
                    // var getIdx = $(this).addClass("active").index();
                    var getIdx = $(this).index();
                    joinSlide.slideTo(getIdx);
                });
            }
        },
        scroll: function() {
            if($("#content.content_community").length == 0) return;

            var communityLeader = $(".community_leader");
            var communityLeaderTop = communityLeader.offset().top;
            var communityLeaderHeight = communityLeader.height();
            var communityLeadeMargin = $.browser.mobile ? 180 : 100;

            $(window).on("resize", function() {
                communityLeaderTop = communityLeader.offset().top;
                communityLeaderHeight = communityLeader.height();
                communityLeadeMargin = $.browser.mobile ? 180 : 100;
            }).trigger("resize");

            const scroll = new Lenis();
            scroll.on("scroll", function(e) {
                var scrollWidth = $(window).width();
                var scrollHeight =$(window).height();
                var scrollTop = e.animatedScroll;
                var scrollBot = scrollTop + scrollHeight;

                communityLeader.removeClass("active");
                if(scrollTop >= communityLeaderTop - communityLeadeMargin && scrollTop < communityLeaderTop + communityLeaderHeight) {
                    communityLeader.addClass("active");
                }
                if(scrollBot >= communityLeaderTop + communityLeaderHeight) {
                    communityLeader.addClass("end");
                }

            });

            function scrollAnimate(time) {
                scroll.raf(time);
                requestAnimationFrame(scrollAnimate);
            }
            requestAnimationFrame(scrollAnimate);
        }
    },
    magazine: {
        article: function() {
            if($("#article_list").length == 0) return;

            var articleData = [];
            $.ajax({
                url: "https://better-api.lifeplatform.co.kr/v1/pub/posts?visionId=564&pageSize=100",
                dataType: "json",
                async: false,
                success: function(data) {
                    if(data && data.data != undefined) {
                        $(".article_top .btn_filter.interview .badge").html(data.totalCount);
                        $.each(data.data, function(key, value) {
                            articleData.push({
                                type:"interview",
                                postid: value.postId,
                                thumb: value.thumbContentUrl,
                                title: value.title,
                                content: value.contents,
                                category: value.visionTitle,
                                date: value.createAt
                            });
                        });
                    }
                }
            });

            $.ajax({
                url: "https://better-api.lifeplatform.co.kr/v1/pub/posts?visionId=5158&pageSize=100",
                dataType: "json",
                async: false,
                success: function(data) {
                    if(data && data.data != undefined) {
                        $(".article_top .btn_filter.better .badge").html(data.totalCount);
                        $.each(data.data, function(key, value) {
                            // console.log(value);
                            articleData.push({
                                type:"better",
                                postid: value.postId,
                                thumb: value.thumbContentUrl,
                                title: value.title,
                                content: value.contents,
                                category: value.visionTitle,
                                date: value.createAt
                            });
                        });
                    }
                }
            });

            $(".article_top .btn_filter.all .badge").html(articleData.length);

            moment.locale("ko", {
                weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
                weekdaysShort: ["일","월","화","수","목","금","토"],
            });
            var articleList = $("#article_list .article_list").empty();
            $.each(articleData, function(key, value) {
                articleList.append('<div class="swiper-slide ' + value.type + '"><a href="https://better.lifeplatform.co.kr/feed/' + value.postid + '" target="_blank" class="btn_article"><div class="img_box"><img src="' + value.thumb + '" alt="" class="img"></div><div class="text_box"><p class="title">' + value.category + '</p><p class="desc">' + value.content + '</p><p class="date">' + moment(value.date).format("MM월 DD일 dddd") + '</p></div></a></div>');
            });
            $("#article_list .swiper-slide").slice(9).addClass("scroll");

            var articleList = null;
            var interval = null;
            $(window).on("resize", function() {
                clearTimeout(interval);
                interval = setTimeout(function() {
                    var getWidth = $(window).width();
                    if(getWidth <= 600) {
                        if(articleList == null) {
                            articleList = new Swiper($("#article_list").get(0), {
                                loop: false,
                                delay: 4000,
                                spaceBetween: 24,
                                slidesPerView: 1.5
                            });
                        }
                    }
                    else {
                        if(articleList != null) {
                            articleList.destroy();
                            articleList = null;
                        }
                    }
                }, 100);
            }).trigger("resize");

            var btnFilter = $(".article_top .btn_filter").on("click", function() {
                btnFilter.removeClass("active");
                var getFilter = $(this).addClass("active").data("filter");
                $("#article_list .swiper-slide").removeClass("hide");
                if(getFilter != "") {
                    $("#article_list .swiper-slide:not(." + getFilter + ")").addClass("hide");
                }
                if(articleList != null) {
                    articleList.slideTo(0, 0);
                }
                return false;
            });
        },
        scroll: function() {
            if($("#content.content_magazine").length == 0) return;

            var magazineMotion = $(".magazine_motion");
            var magazineMotionTop = magazineMotion.offset().top;
            var magazineMotionHeight = magazineMotion.height();
            var magazineMotionText = $(".magazine_motion .text_wrap .text");
            var magazineMotionText2 = $(".magazine_motion .text_wrap .text_2");
            var magazineMotionText3 = $(".magazine_motion .text_wrap .text_3");
            var magazineArticle = $(".magazine_article");
            var magazineArticleHeight = magazineArticle.height();
            var magazineActicleTop = magazineArticle.offset().top;
            var magazineFooter = $("#footer");

            $(window).on("resize", function() {
                magazineMotionTop = magazineMotion.offset().top;
                magazineMotionHeight = magazineMotion.height();
                magazineArticleHeight = magazineArticle.height();
            }).trigger("resize");

            const scroll = new Lenis();
            scroll.on("scroll", function(e) {
                var scrollWidth = $(window).width();
                var scrollHeight =$(window).height();
                var scrollTop = e.animatedScroll;
                var scrollBot = scrollTop + scrollHeight;

                magazineMotion.removeClass("active end");
                if(scrollTop >= magazineMotionTop && scrollBot < magazineMotionTop + magazineMotionHeight) {
                    //console.log("aa");
                    magazineMotion.addClass("active");
                    var scrollTopNext = scrollTop - magazineMotionTop;
                    var magazineMotionPercent = scrollTopNext / magazineMotionHeight;
                    var magazineMotionTextTop = 100 - ((magazineMotionPercent * 100) * 3);
                    var magazineMotionText2Top = 150 - ((magazineMotionPercent * 100) * 3);
                    var magazineMotionText3Top = 200 - ((magazineMotionPercent * 100) * 3);
                    magazineMotionText.css({ top:magazineMotionTextTop + "%" });
                    magazineMotionText2.css({ top:magazineMotionText2Top + "%" });
                    magazineMotionText3.css({ top:magazineMotionText3Top + "%" });
                }
                if(scrollBot >= magazineMotionTop + magazineMotionHeight) {
                    magazineMotion.addClass("end");
                }

                var magazineFooterTop = magazineFooter.offset().top;
                if(scrollBot >= magazineFooterTop) {
                    $("#article_list").addClass("scroll");
                }

            });

            function scrollAnimate(time) {
                scroll.raf(time);
                requestAnimationFrame(scrollAnimate);
            }
            requestAnimationFrame(scrollAnimate);
        }
    }
}
