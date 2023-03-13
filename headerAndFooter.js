//! Header For index 
{
    document.getElementById("indexHeader").innerHTML = `
    <section class="header-heading">
        <p>CodeWithDW.pvt</p>
    </section>

    <nav>

        <div class="logo">
            <div class="logo-img"><img src="./OnlyDW-MetalPNG.png" alt=""></div>
            <div class="logo-name">
                <p><span>C</span>ode<span>W</span>ith<span class="logo-name-greaterthan"><i
                            class="fa-sharp fa-solid fa-greater-than"></i></span>DW</p>
            </div>
        </div>

        <div class="navigation-mobile" id="navigationIcon">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="navigation-detail" id="navigationDetail">
            <ul>
                <li><a href="#"><span class="navigation-icon"><i
                                class="fa-solid fa-house"></i></span><span>Home</span></a></li>
                <li><a href="./HTML-01.html"><span class="navigation-icon"><i
                                class="fa-solid fa-code"></i></span><span>Basic Starting</span></a></li>
                <li><a href="#footer"><span class="navigation-icon"><i
                                class="fa-solid fa-circle-info"></i></span><span>About</span></a></li>
            </ul>
        </div>
    </nav>

    <section class="leng-detail">
    
        <div class="code-detail hover">
            <p>HTML</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#html">Basic HTML</a></li>
                </ul>
            </div>
        </div>
    
        <div class="code-detail hover">
            <p>CSS</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#css">Basic CSS</a></li>
                </ul>
            </div>
        </div>
        
        <div class="code-detail hover">
            <p>JavaScript</p>
            <div class="code-page down">
                <ul>
                    <li><a href="#javaScript">Basic JavaScript</a></li>
                </ul>
            </div>
        </div>
    </section>
    `;

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

//! Footer for general 
{
    document.getElementById("footer").innerHTML = `
    <div class="footer-bg">
        <section class="footer-container">
            <div class="footer-leng-about">
                <p>Which language learn for create website ?</p>
                <h3>Visit here!</h3>
                <div class="leng-with-footer"><a href="./HTML-01.html">HTML</a><a href="">CSS</a><a
                        href="">JavaScript</a><a href="">React</a><a href="">NodeJs</a>
                </div>
                <p>Available language's HTML, CSS, JavaScript-Basic.</p>
            </div>
            <div class="link-container">
                <div class="footer-contact">
                    <h3>Contact info</h3>
                    <ul>
                        <li class="instagram"><a href="https://www.instagram.com/mr.dev_dave/" target="_blank"><img
                                    src="./footer-insta.png" alt="contact in instagram"></a></li>
                        <li class="email"><a href="mailto:devendhagat0@gmail.com" target="_blank"><img
                                    src="./footer-email.png" alt="send email"></a></li>
                    </ul>
                </div>
                <div class="footer-link-project">
                    <h3>More Project's</h3>
                    <a href="https://badshah5464.github.io/GymProjectBadshah/" class="a-btn"
                        target="_blank">Badshah's
                        fitness</a>
                    <a href="https://badshah5464.github.io/DW-OnlineShop/" class="a-btn"
                        target="_blank">DWOnlineShop</a>
                </div>
            </div>
        </section>
    </div>
    <div class="footer-title">
        <h3>About this WebSite</h3>
        <p>This WebSite is learning purpose for Fullstack web-Development. Basic to advance trick's end method's
            step by step detail. Dally update end change this website. Developer dally work in this site. Ask any
            suggestion about webDeveloping regarding to contact developer. Under Working this site & just now
            learning about Fullstack webDeveloping. </p>
    </div>
    <div class="footer-in-footer">This side develop by DSD.pvt</div>
    `;
}