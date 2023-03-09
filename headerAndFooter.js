{
    let headerRender = `
    <!-- * header-heading -->
    <section class="header-heading">
        <p>CodeWithDW.pvt</p>
    </section>
    <!-- * Nav -->
    <nav>
        <!-- logo -->
        <div class="logo">
            <div class="logo-img"><img src="./OnlyDW-MetalPNG.png" alt=""></div>
            <div class="logo-name">
                <p><span>C</span>ode<span>W</span>ith<span class="logo-name-greaterthan"><i class="fa-sharp fa-solid fa-greater-than"></i></span>DW</p>
            </div>
        </div>
        <!-- navigation -->
        <div class="navigation-mobile" id="navigationIcon">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="navigation-detail" id="navigationDetail">
            <ul>
                <li><a href="#"><span class="navigation-icon"><i class="fa-solid fa-house"></i></span><span>Home</span></a></li>
                <li><a href=""><span class="navigation-icon"><i class="fa-solid fa-code"></i></span><span>Basic Starting</span></a></li>
                <li><a href="#footer"><span class="navigation-icon"><i class="fa-solid fa-circle-info"></i></span><span>About</span></a></li>
            </ul>
        </div>
    </nav>
    <!-- * leng-detail -->
    <section class="leng-detail">
        <!-- language -->
        <div class="code-detail hover">
            <p>HTML</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#html">Basic HTML</a></li>
                </ul>
            </div>
        </div>
        <!-- language -->
        <div class="code-detail hover">
            <p>CSS</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#css">Basic CSS</a></li>
                </ul>
            </div>
        </div>
        <!-- language -->
        <div class="code-detail hover">
            <p>JavaScript</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#javaScript">Basic JavaScript</a></li>
                </ul>
            </div>
        </div>
    </section>
    `
    document.getElementById("header").innerHTML = headerRender;

    // Android-navigation
    let navigationIcon = document.getElementById("navigationIcon");
    let navigationDetail = document.getElementById("navigationDetail");
    navigationIcon.addEventListener("click", function () {
        if (navigationDetail.className === "navigation-detail") {
            navigationDetail.className += " navigation-response";
        } else {
            navigationDetail.className = "navigation-detail";
        }
    })
}